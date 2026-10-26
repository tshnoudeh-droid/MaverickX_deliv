/**
 * Entry. Layout only — every word comes from content.ts.
 * Step 1: renders a token/asset preview. Real sections arrive in step 2.
 */

import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/sections.css";

import { easy, hero, site } from "./content";
import { el, renderRich } from "./components/rich";
import { runContentChecks } from "./checks";

document.documentElement.classList.add("js");
document.title = site.title;
if (import.meta.env.DEV) runContentChecks();

const app = document.getElementById("app")!;

const video = el("video", {
  src: hero.video.src,
  poster: hero.video.poster,
  "aria-label": hero.video.alt,
  autoplay: "",
  muted: "",
  loop: "",
  playsinline: "",
});
video.muted = true;

const cards = el(
  "div",
  { class: "preview__row" },
  easy.cards.map((c) =>
    el("div", { class: "preview__card", style: `background-image:url(${c.bg})` }, [
      el("img", { src: c.cutout, alt: c.alt }),
    ]),
  ),
);

const swatches = el(
  "div",
  { class: "preview__swatches", "aria-hidden": "true" },
  ["--bg", "--bg-deep", "--ink", "--ink-2", "--dark", "--ge", "--ge-ink"].map((v) =>
    el("span", { style: `background:var(${v})` }),
  ),
);

app.append(
  el("main", { class: "preview" }, [
    el("div", { class: "preview__video on-dark" }, [video, el("h1", { class: "serif", text: hero.headline })]),
    el("p", { class: "lead" }, [renderRich(hero.sub)]),
    el("p", { class: "label", text: easy.label }),
    el(
      "ul",
      { class: "chips" },
      easy.cards.flatMap((c) => c.chips).map((ch) => el("li", { class: "chip", text: ch.label })),
    ),
    cards,
    swatches,
  ]),
);
