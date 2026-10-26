/** Sheet 3: possible partners, as a dark grid of tall image cards. */

import { partners } from "../content";
import type { Partner } from "../content";
import { el, renderRich, secHead } from "./rich";
import { image } from "./media";

function card(p: Partner): HTMLElement {
  return el("article", { class: "pcard reveal" }, [
    image(p.image, "pcard__media"),
    el("div", { class: "pcard__text" }, [
      el("h3", { class: "pcard__name", text: p.name }),
      el("p", { class: "pcard__role", text: p.role }),
      el("p", { class: "pcard__line" }, [renderRich(p.line)]),
    ]),
  ]);
}

export function renderPartners(): HTMLElement {
  return el(
    "section",
    { class: "sheet sheet--partners on-dark", id: "partners", "aria-labelledby": "partners-title" },
    [
      secHead("partners-title", partners.title, partners.oneLiner),
      el("div", { class: "pgrid" }, partners.people.map(card)),
    ],
  );
}
