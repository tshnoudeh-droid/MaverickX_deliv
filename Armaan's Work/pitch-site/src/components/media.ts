/**
 * Images and videos from content.ts. If a file isn't in /public yet, the slot
 * turns into a neutral placeholder that names the file and what belongs there,
 * so the layout stays final and swapping media is just dropping in files.
 */

import { site } from "../content";
import type { Media } from "../content";
import { el } from "./rich";

export const reducedMotion = (): boolean =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function placeholder(wrap: HTMLElement, m: Media, path = m.src): void {
  wrap.classList.add("media--missing");
  wrap.replaceChildren(
    el("span", { class: "media__tag" }, [
      el("span", { class: "media__kind", text: site.placeholderTag }),
      el("strong", { text: `public${path}` }),
      el("span", { text: m.note }),
    ]),
  );
}

export function image(m: Media, className: string, opts: { lazy?: boolean } = {}): HTMLElement {
  const wrap = el("div", { class: `media ${className}` });
  const img = el("img", { alt: m.alt, decoding: "async", loading: opts.lazy === false ? "eager" : "lazy" });
  img.addEventListener("error", () => placeholder(wrap, m), { once: true });
  img.src = m.src;
  wrap.append(img);
  return wrap;
}

/** A transparent cutout. Missing → a dashed outline showing where it peeks. */
export function cutout(m: Media, className: string): HTMLElement {
  const wrap = el("div", { class: `cutout ${className}`, "aria-hidden": "true" });
  const img = el("img", { alt: "", decoding: "async", loading: "lazy" });
  img.addEventListener("error", () => placeholder(wrap, m), { once: true });
  img.src = m.src;
  wrap.append(img);
  return wrap;
}

/** Muted looping video. Reduced motion → the poster as a still image. */
export function video(m: Media, className: string): HTMLElement {
  if (reducedMotion() && m.poster) {
    const still = image({ ...m, src: m.poster }, className, { lazy: false });
    still.classList.add("media--still");
    return still;
  }

  const wrap = el("div", { class: `media ${className}` });
  const v = el("video", {
    "aria-label": m.alt,
    poster: m.poster,
    preload: "auto",
  });
  v.muted = true;
  v.defaultMuted = true;
  v.loop = true;
  v.autoplay = true;
  v.playsInline = true;
  v.setAttribute("muted", "");
  v.setAttribute("playsinline", "");
  v.setAttribute("webkit-playsinline", "");
  v.addEventListener("error", () => placeholder(wrap, m), { once: true });
  v.src = m.src;
  wrap.append(v);

  // Safari sometimes ignores autoplay until the element is in the DOM.
  queueMicrotask(() => void v.play().catch(() => undefined));
  return wrap;
}
