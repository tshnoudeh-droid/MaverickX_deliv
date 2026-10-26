/**
 * Sheet 1: full-bleed hero video that fades into the problem statement,
 * all on one rounded sheet.
 */

import { hero, problem, site } from "../content";
import { chip, el, renderRich } from "./rich";
import { video } from "./media";

export function renderIntro(): HTMLElement {
  const heroEl = el("div", { class: "hero on-dark" }, [
    video(hero.video, "hero__media"),
    el("div", { class: "hero__shade", "aria-hidden": "true" }),
    el("a", { class: "logo", href: "#top", "aria-label": site.logoLabel }, [
      el("span", { class: "logo__mark", "aria-hidden": "true" }),
      el("span", { class: "logo__word", text: site.logo }),
    ]),
    el("div", { class: "hero__inner" }, [
      el("h1", { class: "serif hero__title", text: hero.headline }),
      el("p", { class: "hero__sub" }, [renderRich(hero.sub)]),
    ]),
  ]);

  const problemEl = el("div", { class: "problem", "aria-labelledby": "problem-title" }, [
    el("p", { class: "label reveal", text: problem.label }),
    el("h2", { class: "serif problem__title reveal", id: "problem-title", text: problem.title }),
    el("p", { class: "lead problem__sub reveal" }, [renderRich(problem.sub)]),
    el("p", { class: "label problem__chips-label reveal", text: problem.chipsLabel }),
    el("ul", { class: "chips chips--center reveal" }, problem.chips.map(chip)),
    el("span", { class: "atom reveal", "aria-hidden": "true" }),
  ]);

  return el("section", { class: "sheet sheet--intro", id: "top" }, [heroEl, problemEl]);
}
