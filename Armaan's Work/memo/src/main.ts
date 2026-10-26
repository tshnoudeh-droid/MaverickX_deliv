/**
 * Layout only. No copy lives in this file — everything comes from content.ts.
 */

import { MAX_VISIBLE_WORDS, meta, sections, tocLabel } from "./content";
import type { Section } from "./content";

/* ----------------------------------------------------------- dom helper */

type Attrs = Record<string, string>;

function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attrs: Attrs = {},
  children: (Node | string)[] = [],
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k === "text") node.textContent = v;
    else node.setAttribute(k, v);
  }
  for (const child of children) {
    node.append(typeof child === "string" ? document.createTextNode(child) : child);
  }
  return node;
}

/* ------------------------------------------------------------ dev check */

/** Max 40 visible words per section outside toggles. Warn in dev only. */
function checkVisibleWords(section: Section): void {
  if (!import.meta.env.DEV) return;
  const words = section.callout.trim().split(/\s+/).filter(Boolean).length;
  if (words > MAX_VISIBLE_WORDS) {
    console.warn(
      `[memo] Section ${section.n} "${section.headline}" has ${words} visible words ` +
        `(max ${MAX_VISIBLE_WORDS}). Trim section.callout in src/content.ts.`,
    );
  }
}

/* ----------------------------------------------------------------- toc */

function renderToc(): HTMLElement {
  const list = el("ul", { class: "toc__list" });

  for (const s of sections) {
    list.append(
      el("li", {}, [
        el("a", { class: "toc__link", href: `#${s.id}`, "data-toc": s.id }, [
          el("span", { class: "toc__num", text: String(s.n) }),
          el("span", { text: s.headline }),
        ]),
      ]),
    );
  }

  return el("nav", { class: "toc", "aria-label": tocLabel }, [
    el("p", { class: "toc__label", text: tocLabel }),
    list,
  ]);
}

function renderTocMobile(): HTMLElement {
  const select = el("select", { "aria-label": tocLabel });

  for (const s of sections) {
    select.append(el("option", { value: s.id, text: `${s.n}. ${s.headline}` }));
  }

  select.addEventListener("change", () => {
    document.getElementById(select.value)?.scrollIntoView({ block: "start" });
  });

  return el("div", { class: "toc-mobile" }, [select]);
}

/* -------------------------------------------------------------- header */

function renderHeader(): HTMLElement {
  return el("header", { class: "doc-header" }, [
    el("p", { class: "doc-header__eyebrow", text: meta.forReviewer }),
    el("h1", { text: meta.title }),
    el("p", { class: "doc-header__sub", text: meta.subtitle }),
    el("p", { class: "verdict", text: meta.verdict }),
    el("div", { class: "doc-header__meta" }, [el("span", { text: meta.byline })]),
  ]);
}

/* ------------------------------------------------------------- section */

function renderSection(s: Section): HTMLElement {
  checkVisibleWords(s);

  const header = el("div", { class: "section__header" }, [
    el("span", { class: "section__icon", "aria-hidden": "true", text: s.icon }),
    el("div", { class: "section__titles" }, [
      el("p", { class: "section__n", text: `Section ${s.n}` }),
      el("h2", { text: s.headline }),
      el("p", { class: "section__beat", text: s.beat }),
    ]),
  ]);

  const callout = el("aside", { class: "callout" }, [
    el("span", { class: "callout__mark", "aria-hidden": "true", text: s.icon }),
    el("p", { text: s.callout }),
  ]);

  return el("section", { class: "section", id: s.id }, [header, callout]);
}

/* ---------------------------------------------------------- scroll spy */

function wireScrollSpy(): void {
  const links = new Map<string, HTMLAnchorElement>();
  for (const link of document.querySelectorAll<HTMLAnchorElement>("[data-toc]")) {
    links.set(link.dataset.toc!, link);
  }

  const mobile = document.querySelector<HTMLSelectElement>(".toc-mobile select");

  let current = "";
  const setCurrent = (id: string) => {
    if (id === current) return;
    current = id;
    for (const [key, link] of links) {
      link.setAttribute("aria-current", String(key === id));
    }
    if (mobile) mobile.value = id;
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setCurrent(visible[0].target.id);
    },
    { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
  );

  for (const s of sections) {
    const node = document.getElementById(s.id);
    if (node) observer.observe(node);
  }

  setCurrent(sections[0].id);
}

/* ----------------------------------------------------------------- run */

function render(): void {
  const app = document.getElementById("app")!;

  const main = el("main", { class: "main" }, [renderHeader()]);
  for (const s of sections) main.append(renderSection(s));

  app.append(renderTocMobile());
  app.append(el("div", { class: "layout" }, [renderToc(), main]));

  wireScrollSpy();
}

render();
