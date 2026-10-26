/** Sheet 6: one giant stat over a looping video. */

import { bigStat, site } from "../content";
import { el, linkTo, renderRich } from "./rich";
import { video } from "./media";

export function renderBigStat(): HTMLElement {
  return el("section", { class: "sheet sheet--stat on-dark", id: "stat", "aria-labelledby": "stat-title" }, [
    video(bigStat.video, "stat__media"),
    el("div", { class: "stat__shade", "aria-hidden": "true" }),
    el("div", { class: "stat__inner" }, [
      el("h2", { class: "serif stat__big reveal", id: "stat-title" }, [
        el("a", { class: "num stat__num", ...linkTo(bigStat.stat.src) }, [bigStat.stat.t]),
        el("span", { class: "stat__suffix", text: ` ${bigStat.statSuffix}` }),
      ]),
      bigStat.stat.estimate ? el("p", { class: "label stat__est reveal", text: site.estimateTag }) : null,
      el("p", { class: "stat__line reveal" }, [renderRich(bigStat.line)]),
    ]),
  ]);
}
