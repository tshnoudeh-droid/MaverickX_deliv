/** Sheet 7: three cards. Each opens a slide-in panel with the evidence. */

import { details, panels } from "../content";
import { el, linkTo } from "./rich";

export function renderCtaCards(): HTMLElement {
  const cards = panels.map((p) =>
    el("a", { class: "cta reveal", ...linkTo(p.id) }, [
      el("p", { class: "label cta__label", text: p.label }),
      el("h3", { class: "serif cta__title", text: p.title }),
      el("p", { class: "cta__teaser", text: p.teaser }),
      el("span", { class: "cta__open" }, [p.open, el("span", { "aria-hidden": "true", text: " →" })]),
    ]),
  );

  return el("section", { class: "sheet sheet--details", id: "details", "aria-labelledby": "details-title" }, [
    el("header", { class: "sec-head sec-head--small" }, [
      el("p", { class: "label reveal", text: details.label }),
      el("h2", { class: "serif sec-head__title reveal", id: "details-title", text: details.title }),
    ]),
    el("div", { class: "ctas" }, cards),
  ]);
}
