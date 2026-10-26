/**
 * The slide-in panel. One drawer, filled on open from panels in content.ts.
 * Any link with data-panel="<id>" (CTA cards, estimate numbers, chips) opens
 * it. Esc, the close button or the backdrop close it; focus returns to the
 * link that opened it.
 */

import { panels, site } from "../content";
import type { Block, PanelId } from "../content";
import { el, renderRich } from "./rich";

let drawer: HTMLElement;
let body: HTMLElement;
let closeBtn: HTMLButtonElement;
let opener: HTMLElement | null = null;

function renderBlock(b: Block): HTMLElement {
  switch (b.kind) {
    case "h":
      return el("h3", { class: "pbody__h", text: b.text });
    case "p":
      return el("p", { class: "pbody__p" }, [renderRich(b.text)]);
    case "list":
      return el("ul", { class: "pbody__list" }, b.items.map((i) => el("li", {}, [renderRich(i)])));
    case "todo":
      return el(
        "ol",
        { class: "pbody__todo" },
        b.items.map((t) => el("li", {}, [el("span", { class: "pbody__box", "aria-hidden": "true" }), t])),
      );
    case "table":
      return el("figure", { class: "pbody__table" }, [
        el("div", { class: "pbody__scroll", tabindex: "0" }, [
          el("table", {}, [
            el("thead", {}, [el("tr", {}, b.head.map((h) => el("th", { scope: "col", text: h })))]),
            el(
              "tbody",
              {},
              b.rows.map((r) =>
                el(
                  "tr",
                  {},
                  r.map((c, i) => (i === 0 ? el("th", { scope: "row" }, [renderRich(c)]) : el("td", {}, [renderRich(c)]))),
                ),
              ),
            ),
          ]),
        ]),
        b.note ? el("figcaption", {}, [renderRich(b.note)]) : null,
      ]);
    case "gates":
      return el("figure", { class: "pgates" }, [
        el("figcaption", { class: "pgates__sub", text: b.subtitle }),
        el(
          "ol",
          { class: "pgates__list" },
          b.phases.map((p) =>
            el("li", {}, [
              el("p", { class: "label", text: p.weeks }),
              el("p", { class: "pgates__name", text: p.name }),
              el("ul", {}, p.steps.map((s) => el("li", { text: s }))),
              el("p", { class: "gate" }, [
                el("span", { class: "label gate__name", text: p.gate }),
                el("span", { class: "gate__pass", text: p.pass }),
              ]),
            ]),
          ),
        ),
        el("p", { class: "pgates__foot", text: b.footer }),
      ]);
  }
}

export function openPanel(id: PanelId, from?: HTMLElement): void {
  const p = panels.find((x) => x.id === id);
  if (!p) return;
  opener = from ?? (document.activeElement as HTMLElement | null);

  body.replaceChildren(
    el("p", { class: "label", text: p.label }),
    el("h2", { class: "serif pbody__title", id: "panel-title", text: p.title }),
    ...p.blocks.map(renderBlock),
  );
  body.scrollTop = 0;

  drawer.hidden = false;
  document.body.classList.add("is-locked");
  requestAnimationFrame(() => {
    drawer.classList.add("is-open");
    closeBtn.focus({ preventScroll: true });
  });
  history.replaceState(null, "", `#panel-${id}`);
}

export function closePanel(): void {
  if (drawer.hidden) return;
  drawer.classList.remove("is-open");
  document.body.classList.remove("is-locked");
  history.replaceState(null, "", location.pathname + location.search);
  const done = () => {
    drawer.hidden = true;
  };
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? done()
    : drawer.querySelector(".panel__sheet")!.addEventListener("transitionend", done, { once: true });
  opener?.focus({ preventScroll: true });
}

function trapFocus(e: KeyboardEvent): void {
  if (e.key === "Escape") return closePanel();
  if (e.key !== "Tab") return;
  const focusable = [...drawer.querySelectorAll<HTMLElement>("a[href], button, [tabindex='0']")].filter(
    (n) => n.offsetParent !== null,
  );
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

export function renderPanel(): HTMLElement {
  closeBtn = el("button", { class: "panel__close", type: "button", "aria-label": site.closePanel }, [
    el("span", { "aria-hidden": "true", text: "×" }),
  ]);
  body = el("div", { class: "panel__body pbody" });

  drawer = el("div", { class: "panel", hidden: "" }, [
    el("div", { class: "panel__backdrop", "data-close": "" }),
    el("aside", { class: "panel__sheet", role: "dialog", "aria-modal": "true", "aria-labelledby": "panel-title" }, [
      closeBtn,
      body,
    ]),
  ]);

  closeBtn.addEventListener("click", closePanel);
  drawer.querySelector("[data-close]")!.addEventListener("click", closePanel);
  drawer.addEventListener("keydown", trapFocus);

  // Any [data-panel] link anywhere on the page opens its panel.
  document.addEventListener("click", (e) => {
    const link = (e.target as HTMLElement).closest<HTMLElement>("[data-panel]");
    if (!link) return;
    e.preventDefault();
    openPanel(link.dataset.panel as PanelId, link);
  });

  return drawer;
}

/** Open from a shared link like /#panel-math. */
export function openFromHash(): void {
  const m = location.hash.match(/^#panel-(test|math|next)$/);
  if (m) openPanel(m[1] as PanelId);
}
