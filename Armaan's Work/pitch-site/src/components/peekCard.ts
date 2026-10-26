/**
 * Sheet 2: "Our solution". Alternating rows: a photo card with a cutout that
 * peeks above its top edge, beside a wide-tracked title, one line and chips.
 */

import { solution } from "../content";
import type { SolutionStep } from "../content";
import { chip, el, renderRich, secHead } from "./rich";
import { cutout, image } from "./media";

function renderStep(step: SolutionStep, i: number): HTMLElement {
  const visual = el("div", { class: "peek reveal" }, [
    el("div", { class: "peek__card" }, [image(step.image, "peek__bg")]),
    cutout(step.cutout, "peek__cutout"),
  ]);

  const text = el("div", { class: "step__text reveal" }, [
    el("h3", { class: "step__title", text: step.title }),
    el("p", { class: "step__body" }, [renderRich(step.body)]),
    el("hr", { class: "rule" }),
    el("p", { class: "label step__chips-label", text: step.chipsLabel }),
    el("ul", { class: "chips" }, step.chips.map(chip)),
  ]);

  return el("article", { class: `step${i % 2 ? " step--flip" : ""}`, id: `solution-${step.id}` }, [
    visual,
    text,
  ]);
}

export function renderSolution(): HTMLElement {
  return el("section", { class: "sheet sheet--solution", id: "solution", "aria-labelledby": "solution-title" }, [
    secHead("solution-title", solution.title, solution.oneLiner),
    el("div", { class: "steps" }, solution.steps.map(renderStep)),
  ]);
}
