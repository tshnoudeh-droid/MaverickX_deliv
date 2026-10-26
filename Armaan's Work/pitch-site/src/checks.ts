/**
 * Dev-only content checks. Warn in the console; never block the page.
 *  - every visible block stays at or under ~25 words
 *  - every Num points at a real source or panel
 */

import { SOURCES, bigStat, easy, experts, hero, panels, statement } from "./content";
import type { Block, Num, Rich } from "./content";
import { isPanel, richText } from "./components/rich";

const MAX_WORDS = 25;

const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

function checkWords(where: string, text: string): void {
  const n = words(text);
  if (n > MAX_WORDS) {
    console.warn(`[content] ${where}: ${n} visible words (max ~${MAX_WORDS}). Move detail into a panel.`);
  }
}

function checkNum(where: string, n: Num): void {
  if (!isPanel(n.src) && !(n.src in SOURCES)) {
    console.warn(`[content] ${where}: "${n.t}" links to unknown source "${n.src}".`);
  }
}

function checkRich(where: string, rich: Rich): void {
  for (const part of rich) if (typeof part !== "string") checkNum(where, part);
}

function blockRich(b: Block): Rich[] {
  switch (b.kind) {
    case "p":
      return [b.text];
    case "list":
      return b.items;
    case "table":
      return [...b.rows.flat(), ...(b.note ? [b.note] : [])];
    default:
      return [];
  }
}

export function runContentChecks(): void {
  // Visible blocks on the main page
  // Big statements (titles) and the sentences under them are separate blocks.
  checkWords("hero headline", hero.headline);
  checkWords("hero sub", richText(hero.sub));
  checkWords("statement", richText(statement.line));
  checkWords("easy title", easy.title);
  checkWords("easy sub", easy.sub);
  for (const c of easy.cards) checkWords(`card ${c.id}`, `${c.title} ${richText(c.line)}`);
  checkWords("experts title", experts.title);
  checkWords("experts sub", richText(experts.sub));
  for (const p of experts.people) checkWords(`expert ${p.id}`, `${p.context ?? ""} ${p.words ?? ""}`);
  checkWords("big stat", `${bigStat.stat.t} ${bigStat.statSuffix} ${richText(bigStat.line)}`);
  for (const p of panels) checkWords(`cta ${p.id}`, `${p.title} ${p.teaser}`);

  // Every number resolves
  checkRich("hero", hero.sub);
  checkRich("statement", statement.line);
  for (const c of easy.cards) checkRich(`card ${c.id}`, c.line);
  checkRich("experts", experts.sub);
  checkNum("big stat", bigStat.stat);
  checkRich("big stat", bigStat.line);
  for (const p of panels) for (const b of p.blocks) for (const r of blockRich(b)) checkRich(`panel ${p.id}`, r);
}
