# Ge-32 pitch site

One-page storytelling pitch for MaverickX (TKS Triple Ignition). Vite + vanilla TypeScript + plain CSS, with GSAP/ScrollTrigger for parallax and fade-ins only.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + static build to dist/
```

## Change words

Every word, number, quote and source is in `src/content.ts`. Layout files contain no copy.

- Every number is a `Num` that links to a source in `SOURCES`, or to the panel holding our own math. Estimates set `estimate: true` and render "our estimate".
- Expert quotes have `permission: "named" | "role-only"`. All are `"role-only"` until each person confirms. Flip one to `"named"` to show their name.
- In dev, the console warns if a visible block goes over ~25 words or a number points at an unknown source.

## Swap in real media

Replace the file, keep the name:

| File | What it is |
| --- | --- |
| `public/video/hero.mp4` | Hero loop: tailings pond, then mica, then one glowing atom (6–8 s) |
| `public/video/statement.mp4` | Second full-bleed loop |
| `public/video/stat.mp4` | Loop behind the big stat |
| `public/img/posters/{hero,statement,stat}.jpg` | First frame of each video. Shown before playback and for reduced motion |
| `public/img/cards/{mica,molecule,flask}-bg.jpg` | Card background photo, clipped to the card |
| `public/img/cards/{mica,molecule,flask}-cutout.png` | Transparent cutout that peeks above the card |
| `public/img/experts/<id>.jpg` | Expert card image |

Keep each video under ~4 MB, muted, H.264 with `+faststart`. To regenerate the placeholders: `npm run assets` (needs python3, numpy, Pillow and ffmpeg).
