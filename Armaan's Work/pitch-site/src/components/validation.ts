/**
 * Sheet 5: validation. Two slow-drifting rows of rounded tiles: an image tile
 * and a dark text tile per expert. "role-only" experts show role and org,
 * never their name.
 */

import { validation } from "../content";
import type { Expert } from "../content";
import { el, secHead } from "./rich";
import { image } from "./media";

function textTile(x: Expert): HTMLElement {
  const named = x.permission === "named";
  return el("figure", { class: "vtile vtile--text" }, [
    el("figcaption", { class: "vtile__who" }, [
      el("p", { class: "vtile__name", text: named ? x.name : x.role }),
      named ? el("p", { class: "vtile__role", text: x.role }) : null,
      el("p", { class: "vtile__role", text: x.org }),
    ]),
    el("blockquote", { class: "vtile__quote" }, [
      x.context ? el("span", { class: "vtile__context", text: `${x.context} ` }) : null,
      x.words ? el("q", { text: x.words }) : null,
    ]),
  ]);
}

function imageTile(x: Expert): HTMLElement {
  const t = image(x.image, "vtile vtile--image");
  t.setAttribute("aria-hidden", "true");
  return t;
}

function row(people: Expert[], startWithText: boolean, reverse: boolean): HTMLElement {
  const tiles = () =>
    people.flatMap((x) => (startWithText ? [textTile(x), imageTile(x)] : [imageTile(x), textTile(x)]));

  // A second copy makes the loop seamless; it's hidden from assistive tech.
  const track = el("div", { class: "marquee__track" }, tiles());
  const copy = el("div", { class: "marquee__track", "aria-hidden": "true" }, tiles());
  copy.querySelectorAll("img").forEach((img) => img.setAttribute("alt", ""));

  return el("div", { class: `marquee${reverse ? " marquee--reverse" : ""}` }, [
    el("div", { class: "marquee__rail" }, [track, copy]),
  ]);
}

export function renderValidation(): HTMLElement {
  const half = Math.ceil(validation.people.length / 2);
  return el("section", { class: "sheet sheet--validation", id: "validation", "aria-labelledby": "validation-title" }, [
    secHead("validation-title", validation.title, validation.sub),
    el("div", { class: "marquees reveal" }, [
      row(validation.people.slice(0, half), false, false),
      row(validation.people.slice(half), true, true),
    ]),
  ]);
}
