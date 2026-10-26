/**
 * Entry. Layout only — every word comes from content.ts.
 * The page is a stack of rounded "sheets"; each later sheet tucks under the
 * rounded bottom of the one before it.
 */

import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/sections.css";

import { site } from "./content";
import { renderIntro } from "./components/hero";
import { renderSolution } from "./components/peekCard";
import { renderPartners } from "./components/partners";
import { renderHowItWorks } from "./components/howItWorks";
import { renderValidation } from "./components/validation";
import { renderBigStat } from "./components/bigStat";
import { renderCtaCards } from "./components/ctaCards";
import { openFromHash, renderPanel } from "./components/panel";
import { renderFooter } from "./components/footer";
import { el } from "./components/rich";
import { initMotion } from "./motion";
import { runContentChecks } from "./checks";

document.documentElement.classList.add("js");
document.title = site.title;
if (import.meta.env.DEV) runContentChecks();

const sheets = [
  renderIntro(),
  renderSolution(),
  renderPartners(),
  renderHowItWorks(),
  renderValidation(),
  renderBigStat(),
  renderCtaCards(),
  renderFooter(),
];

// Earlier sheets sit on top so their rounded bottoms overlap the next one.
sheets.forEach((s, i) => s.style.setProperty("--z", String(sheets.length - i)));

document.getElementById("app")!.append(el("main", { class: "stack" }, sheets), renderPanel());

initMotion();
openFromHash();
window.addEventListener("hashchange", openFromHash);
