/** Sheet 4: how the 90-day test runs. Three phases, a gate after each. */

import { howItWorks, panels } from "../content";
import type { Phase } from "../content";
import { el, linkTo, secHead } from "./rich";

function phase(p: Phase, i: number): HTMLElement {
  return el("li", { class: "phase reveal" }, [
    el("span", { class: "phase__dot", "aria-hidden": "true" }),
    el("p", { class: "label phase__weeks", text: p.weeks }),
    el("h3", { class: "serif phase__name", text: p.name }),
    el("ul", { class: "phase__steps" }, p.steps.map((s) => el("li", { text: s }))),
    el("div", { class: "gate" }, [
      el("span", { class: "label gate__name", text: p.gate }),
      el("span", { class: "gate__pass", text: p.pass }),
    ]),
    el("span", { class: "phase__n", "aria-hidden": "true", text: String(i + 1) }),
  ]);
}

export function renderHowItWorks(): HTMLElement {
  const testPanel = panels.find((p) => p.id === "test")!;

  return el("section", { class: "sheet sheet--how", id: "how", "aria-labelledby": "how-title" }, [
    secHead("how-title", howItWorks.title, howItWorks.oneLiner),
    el("ol", { class: "phases" }, howItWorks.phases.map(phase)),
    el("div", { class: "roles reveal" }, [
      el("p", { class: "label roles__label", text: howItWorks.rolesLabel }),
      el(
        "ul",
        { class: "roles__list" },
        howItWorks.roles.map((r) =>
          el("li", {}, [el("p", { class: "roles__who", text: r.who }), el("p", { class: "roles__does", text: r.does })]),
        ),
      ),
    ]),
    el("p", { class: "how__more reveal" }, [
      el("a", { class: "btn btn--ghost", ...linkTo(testPanel.id) }, [howItWorks.more, el("span", { "aria-hidden": "true", text: "→" })]),
    ]),
  ]);
}
