/**
 * Dev-only content checks. Warn in the console; never block the page.
 *  - every visible block stays at or under ~25 words
 *  - every Num and chip points at a real source or panel
 */

import {
  SOURCES,
  bigStat,
  hero,
  howItWorks,
  panels,
  partners,
  problem,
  solution,
  validation,
} from "./content";
import type { Block, Chip, Num, Rich } from "./content";
import { isPanel, richText } from "./components/rich";

const MAX_WORDS = 25;

const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

function checkWords(where: string, text: string): void {
  const n = words(text);
  if (n > MAX_WORDS) {
    console.warn(`[content] ${where}: ${n} visible words (max ~${MAX_WORDS}). Move detail into a panel.`);
  }
}

function checkSrc(where: string, label: string, src: string): void {
  if (!isPanel(src) && !(src in SOURCES)) {
    console.warn(`[content] ${where}: "${label}" links to unknown source "${src}".`);
  }
}

const checkNum = (where: string, n: Num) => checkSrc(where, n.t, n.src);
const checkChips = (where: string, chips: Chip[]) => chips.forEach((c) => c.src && checkSrc(where, c.label, c.src));

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
  // Big statements (titles) and the sentences under them are separate blocks.
  checkWords("hero headline", hero.headline);
  checkWords("hero sub", richText(hero.sub));
  checkWords("problem title", problem.title);
  checkWords("problem sub", richText(problem.sub));
  checkWords("solution one-liner", solution.oneLiner);
  for (const s of solution.steps) checkWords(`solution ${s.id}`, `${s.title} ${richText(s.body)}`);
  checkWords("partners one-liner", partners.oneLiner);
  for (const p of partners.people) checkWords(`partner ${p.name}`, `${p.name} ${p.role} ${richText(p.line)}`);
  checkWords("how one-liner", howItWorks.oneLiner);
  for (const r of howItWorks.roles) checkWords(`role ${r.who}`, r.does);
  checkWords("validation sub", richText(validation.sub));
  for (const x of validation.people) checkWords(`expert ${x.id}`, `${x.context ?? ""} ${x.words ?? ""}`);
  checkWords("big stat", `${bigStat.stat.t} ${bigStat.statSuffix} ${richText(bigStat.line)}`);
  for (const p of panels) checkWords(`card ${p.id}`, `${p.title} ${p.teaser}`);

  // Every number and chip resolves.
  checkRich("hero", hero.sub);
  checkRich("problem", problem.sub);
  checkChips("problem", problem.chips);
  for (const s of solution.steps) {
    checkRich(`solution ${s.id}`, s.body);
    checkChips(`solution ${s.id}`, s.chips);
  }
  for (const p of partners.people) checkRich(`partner ${p.name}`, p.line);
  checkRich("validation", validation.sub);
  checkNum("big stat", bigStat.stat);
  checkRich("big stat", bigStat.line);
  for (const p of panels) for (const b of p.blocks) for (const r of blockRich(b)) checkRich(`panel ${p.id}`, r);
}
