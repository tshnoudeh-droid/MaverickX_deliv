/**
 * Small DOM helpers plus the renderer for Rich text. Every Num becomes a link:
 * to its source URL, or to the panel that holds our own math.
 */

import { SOURCES, site } from "../content";
import type { Num, PanelId, Rich, SourceId } from "../content";

const PANEL_IDS: readonly string[] = ["test", "math", "next"];

type Attrs = Record<string, string | undefined>;

export function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attrs: Attrs = {},
  children: (Node | string | null | undefined)[] = [],
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === undefined) continue;
    if (k === "class") node.className = v;
    else if (k === "text") node.textContent = v;
    else node.setAttribute(k, v);
  }
  for (const child of children) {
    if (child == null) continue;
    node.append(typeof child === "string" ? document.createTextNode(child) : child);
  }
  return node;
}

export function isPanel(src: string): src is PanelId {
  return PANEL_IDS.includes(src);
}

/** Link attributes for a source or panel id. */
export function linkTo(src: SourceId | PanelId): Attrs {
  if (isPanel(src)) {
    return { href: `#panel-${src}`, "data-panel": src };
  }
  const s = SOURCES[src];
  if (!s.url) {
    // Private correspondence: point at its entry in the footer source list.
    return { href: `#source-${src}`, title: `${site.sourceTag}: ${s.label}. ${site.noUrl}.` };
  }
  return {
    href: s.url,
    target: "_blank",
    rel: "noopener noreferrer",
    title: `${site.sourceTag}: ${s.label}`,
  };
}

export function renderNum(n: Num, className = "num"): DocumentFragment {
  const frag = document.createDocumentFragment();
  frag.append(el("a", { class: className, ...linkTo(n.src) }, [n.t]));
  if (n.estimate) {
    frag.append(el("span", { class: "num__est", text: site.estimateTag }));
  }
  return frag;
}

export function renderRich(rich: Rich): DocumentFragment {
  const frag = document.createDocumentFragment();
  for (const part of rich) {
    frag.append(typeof part === "string" ? document.createTextNode(part) : renderNum(part));
  }
  return frag;
}

export function richText(rich: Rich): string {
  return rich.map((p) => (typeof p === "string" ? p : p.t)).join("");
}
