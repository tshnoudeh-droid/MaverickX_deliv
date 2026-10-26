"""Generate placeholder media so the layout is final before real assets exist.

Run from the project root:  npm run assets   (needs python3, numpy, Pillow, ffmpeg)

Outputs (swap any of these for the real file, same name, and you're done):
  public/video/{hero,statement,stat}.mp4      seamless loops, muted, < 1 MB
  public/img/posters/{hero,statement,stat}.jpg first frame of each video
  public/img/cards/{mica,molecule,flask}-bg.jpg
  public/img/cards/{mica,molecule,flask}-cutout.png  (transparent)
  public/img/experts/<id>.jpg                 abstract tiles, no faces
"""

import math
import subprocess
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
PUB = ROOT / "public"

NAVY = np.array([11, 18, 32], float)
NAVY_2 = np.array([24, 36, 58], float)
GLOW = np.array([176, 206, 230], float)  # silver-blue germanium glow


# ----------------------------------------------------------------- videos

def gauss(xx, yy, cx, cy, s):
    return np.exp(-((xx - cx) ** 2 + (yy - cy) ** 2) / (2 * s * s))


def frames(kind, w, h, n):
    yy, xx = np.mgrid[0:h, 0:w].astype(float)
    xx /= w
    yy /= h
    rng = np.random.default_rng(32)
    dots = rng.random((40, 3))

    for i in range(n):
        t = i / n  # 0..1, loops seamlessly
        a = 2 * math.pi * t
        base = NAVY + (NAVY_2 - NAVY) * (1 - yy)[..., None] * 0.9

        if kind == "hero":
            # grey strata (tailings -> mica sheets) drifting, glow breathing in the middle
            bands = 0.5 + 0.5 * np.sin((yy * 22 + xx * 3 + math.sin(a) * 0.8) * 1.0)
            strata = (bands ** 6)[..., None] * np.array([70, 78, 92]) * (0.35 + 0.65 * yy)[..., None]
            g = gauss(xx, yy, 0.5 + 0.02 * math.sin(a), 0.56 + 0.015 * math.cos(a), 0.06)
            pulse = 0.8 + 0.2 * math.sin(a)
            img = base + strata * 0.55 + g[..., None] * GLOW * pulse
            img += gauss(xx, yy, 0.5, 0.56, 0.012)[..., None] * 255 * pulse

        elif kind == "statement":
            img = base * 0.9
            g = gauss(xx, yy, 0.72 + 0.05 * math.cos(a), 0.4 + 0.05 * math.sin(a), 0.16)
            img += g[..., None] * GLOW * 0.45
            for dx, dy, ds in dots:
                px = (dx + 0.03 * math.sin(a + ds * 6)) % 1
                py = (dy + 0.03 * math.cos(a + ds * 6)) % 1
                img += gauss(xx, yy, px, py, 0.002 + ds * 0.003)[..., None] * GLOW * 0.6

        else:  # stat
            pulse = 0.75 + 0.25 * math.sin(a)
            g = gauss(xx, yy, 0.5, 0.5, 0.11 + 0.015 * math.sin(a))
            img = base * 0.85 + g[..., None] * GLOW * 0.55 * pulse
            ring = np.abs(np.hypot(xx - 0.5, (yy - 0.5) * h / w) - (0.18 + 0.04 * t)) < 0.0025
            img += ring[..., None] * GLOW * 0.25 * (1 - t)

        yield np.clip(img, 0, 255).astype(np.uint8)


def make_video(name, seconds, fps=24, w=480, h=270):
    out = PUB / "video" / f"{name}.mp4"
    proc = subprocess.Popen(
        [
            "ffmpeg", "-y", "-loglevel", "error",
            "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{w}x{h}", "-r", str(fps), "-i", "-",
            "-vf", "scale=1280:720:flags=bicubic,noise=alls=3:allf=t,format=yuv420p",
            "-c:v", "libx264", "-profile:v", "high", "-preset", "slow", "-crf", "27",
            "-movflags", "+faststart", "-an", str(out),
        ],
        stdin=subprocess.PIPE,
    )
    for f in frames(name, w, h, seconds * fps):
        proc.stdin.write(f.tobytes())
    proc.stdin.close()
    proc.wait()

    poster = PUB / "img" / "posters" / f"{name}.jpg"
    subprocess.run(
        ["ffmpeg", "-y", "-loglevel", "error", "-i", str(out), "-frames:v", "1", "-q:v", "4", str(poster)],
        check=True,
    )
    print(f"  {out.relative_to(ROOT)}  {out.stat().st_size / 1e6:.2f} MB")


# ------------------------------------------------------------------ cards

def gradient(w, h, top, bottom):
    t = np.linspace(0, 1, h)[:, None, None]
    arr = np.array(top, float) * (1 - t) + np.array(bottom, float) * t
    return Image.fromarray(np.repeat(arr, w, axis=1).astype(np.uint8))


def glow_layer(size, cx, cy, r, color, alpha=255):
    layer = Image.new("RGBA", size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(*color, alpha))
    return layer.filter(ImageFilter.GaussianBlur(r * 0.6))


def card_bg(name, top, bottom, accents):
    w, h = 1200, 900
    img = gradient(w, h, top, bottom).convert("RGBA")
    for cx, cy, r, col, a in accents:
        img.alpha_composite(glow_layer((w, h), cx, cy, r, col, a))
    img.convert("RGB").save(PUB / "img" / "cards" / f"{name}-bg.jpg", quality=78)


def finish_cutout(name, big):
    """Draw at 2x, then downsample for clean edges."""
    big.resize((900, 900), Image.LANCZOS).save(PUB / "img" / "cards" / f"{name}-cutout.png", optimize=True)


def cutout_mica():
    S = 1800
    im = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    for k in range(7):
        layer = Image.new("RGBA", (S, S), (0, 0, 0, 0))
        d = ImageDraw.Draw(layer)
        cx, cy = S / 2 + (k - 3) * 22, S / 2 + 160 - k * 70
        r = 600 - k * 18
        pts = [(cx + r * math.cos(math.radians(60 * j + 8 * k)),
                cy + r * 0.42 * math.sin(math.radians(60 * j + 8 * k))) for j in range(6)]
        shade = 150 + k * 12
        d.polygon(pts, fill=(shade, shade + 8, shade + 20, 120), outline=(235, 242, 250, 210), width=6)
        im.alpha_composite(layer)
    im.alpha_composite(glow_layer((S, S), S / 2, S / 2 - 70, 120, (190, 220, 245), 230))
    im.alpha_composite(glow_layer((S, S), S / 2, S / 2 - 70, 34, (255, 255, 255), 255))
    finish_cutout("mica", im)


def cutout_molecule():
    S = 1800
    im = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    c = (S / 2, S / 2 + 60)
    nodes = [(c[0] + 520 * math.cos(math.radians(a)), c[1] + 520 * math.sin(math.radians(a)) * 0.8)
             for a in range(-90, 270, 60)]
    for n in nodes:
        d.line([c, n], fill=(150, 175, 200, 255), width=26)
    for i, n in enumerate(nodes):
        d.line([n, nodes[(i + 1) % 6]], fill=(110, 130, 155, 200), width=14)
    for n in nodes:
        r = 110
        d.ellipse([n[0] - r, n[1] - r, n[0] + r, n[1] + r], fill=(205, 214, 224, 255), outline=(240, 245, 250, 255), width=8)
    im.alpha_composite(glow_layer((S, S), c[0], c[1], 260, (170, 210, 240), 240))
    d = ImageDraw.Draw(im)
    d.ellipse([c[0] - 150, c[1] - 150, c[0] + 150, c[1] + 150], fill=(220, 236, 250, 255))
    im.alpha_composite(glow_layer((S, S), c[0], c[1], 70, (255, 255, 255), 255))
    finish_cutout("molecule", im)


def cutout_flask():
    S = 1800
    im = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    neck_w, top, shoulder, base_y, base_w = 220, 120, 760, 1640, 1180
    body = [
        (S / 2 - neck_w / 2, top), (S / 2 + neck_w / 2, top),
        (S / 2 + neck_w / 2, shoulder), (S / 2 + base_w / 2, base_y - 60),
        (S / 2 + base_w / 2 - 60, base_y), (S / 2 - base_w / 2 + 60, base_y),
        (S / 2 - base_w / 2, base_y - 60), (S / 2 - neck_w / 2, shoulder),
    ]
    d.polygon(body, fill=(225, 232, 240, 70))
    # liquid: clip a rectangle to the flask body
    mask = Image.new("L", (S, S), 0)
    ImageDraw.Draw(mask).polygon(body, fill=255)
    liquid = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    ImageDraw.Draw(liquid).rectangle([0, 1080, S, S], fill=(120, 165, 205, 210))
    liquid.putalpha(Image.fromarray(np.minimum(np.array(liquid.split()[3]), np.array(mask))))
    im.alpha_composite(liquid)
    im.alpha_composite(glow_layer((S, S), S / 2, 1330, 170, (200, 230, 250), 230))
    d = ImageDraw.Draw(im)
    d.line(body + [body[0]], fill=(240, 245, 250, 255), width=18, joint="curve")
    d.rounded_rectangle([S / 2 - 160, top - 40, S / 2 + 160, top + 40], radius=30, fill=(240, 245, 250, 255))
    finish_cutout("flask", im)


# ---------------------------------------------------------------- experts

EXPERT_TONES = {
    "umicore": ((58, 70, 86), (150, 170, 190)),
    "tischler": ((44, 58, 66), (130, 168, 176)),
    "azimi": ((66, 60, 72), (170, 160, 186)),
    "nyabeze": ((54, 62, 52), (150, 170, 140)),
    "alvin": ((70, 62, 54), (190, 170, 150)),
    "kaksonen": ((48, 60, 74), (140, 176, 206)),
    "lange": ((62, 64, 70), (176, 180, 190)),
}


def expert_tiles():
    w, h = 600, 750
    for i, (name, (dark, light)) in enumerate(EXPERT_TONES.items()):
        img = gradient(w, h, light, dark).convert("RGBA")
        img.alpha_composite(glow_layer((w, h), w * (0.3 + 0.07 * i), h * 0.38, 170, (235, 240, 245), 150))
        img.alpha_composite(glow_layer((w, h), w * 0.7, h * 0.75, 220, dark, 200))
        img.convert("RGB").save(PUB / "img" / "experts" / f"{name}.jpg", quality=78)


# ------------------------------------------------------------------- main

if __name__ == "__main__":
    for sub in ("video", "img/posters", "img/cards", "img/experts"):
        (PUB / sub).mkdir(parents=True, exist_ok=True)

    print("videos")
    make_video("hero", 8)
    make_video("statement", 8)
    make_video("stat", 6)

    print("cards")
    card_bg("mica", (196, 190, 180), (122, 118, 112), [(820, 260, 300, (230, 226, 218), 160)])
    card_bg("molecule", (34, 52, 70), (14, 22, 34), [(380, 300, 260, (90, 140, 180), 150)])
    card_bg("flask", (214, 208, 198), (150, 146, 140), [(300, 640, 320, (236, 232, 224), 170)])
    cutout_mica()
    cutout_molecule()
    cutout_flask()

    print("experts")
    expert_tiles()
    print("done")
