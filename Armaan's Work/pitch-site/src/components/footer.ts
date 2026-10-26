/** Footer: the ask, every source, the team, and a full-width wordmark. */

import { SOURCES, footer } from "../content";
import type { SourceId } from "../content";
import { el } from "./rich";

const SVG = "http://www.w3.org/2000/svg";

/** Wordmark stretched to the exact width of the page. */
function wordmark(): SVGSVGElement {
  const svg = document.createElementNS(SVG, "svg");
  svg.setAttribute("class", "wordmark");
  svg.setAttribute("viewBox", "0 0 1000 214");
  svg.setAttribute("aria-hidden", "true");
  const text = document.createElementNS(SVG, "text");
  text.setAttribute("x", "0");
  text.setAttribute("y", "196");
  text.setAttribute("textLength", "1000");
  text.setAttribute("lengthAdjust", "spacingAndGlyphs");
  text.textContent = footer.wordmark;
  svg.append(text);
  return svg;
}

function mailto(): string {
  const q = new URLSearchParams({ subject: footer.cta.subject, body: footer.cta.body });
  // URLSearchParams writes spaces as "+", which mail apps show literally.
  return `mailto:${footer.cta.to}?${q.toString().replace(/\+/g, "%20")}`;
}

export function renderFooter(): HTMLElement {
  const sources = (Object.keys(SOURCES) as SourceId[]).map((id) => {
    const s = SOURCES[id];
    return el("li", { id: `source-${id}` }, [
      s.url ? el("a", { href: s.url, target: "_blank", rel: "noopener noreferrer", text: s.label }) : s.label,
    ]);
  });

  return el("footer", { class: "sheet sheet--footer on-dark", id: "footer" }, [
    el("div", { class: "foot__ask reveal" }, [
      el("p", { class: "serif foot__line", text: footer.ctaLine }),
      el("a", { class: "btn btn--light", href: mailto() }, [footer.cta.label, el("span", { "aria-hidden": "true", text: "→" })]),
    ]),
    el("div", { class: "foot__grid" }, [
      el("div", { class: "foot__sources" }, [
        el("p", { class: "label", text: footer.sourcesLabel }),
        el("ol", {}, sources),
      ]),
      el("div", { class: "foot__meta" }, [
        el("p", { class: "label", text: footer.teamLabel }),
        el("ul", { class: "foot__team" }, footer.team.map((n) => el("li", { text: n }))),
        el("ul", { class: "foot__credits" }, footer.credits.map((c) => el("li", { text: c }))),
      ]),
    ]),
    wordmark(),
  ]);
}
