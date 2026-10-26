/**
 * GSAP + ScrollTrigger, used for exactly two things: soft fade-ins and the
 * cutout parallax. Reduced motion skips both (CSS shows everything).
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { reducedMotion } from "./components/media";

export function initMotion(): void {
  if (reducedMotion()) return;
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.batch(".reveal", {
    start: "top 90%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, duration: 1.1, ease: "power3.out", stagger: 0.08, overwrite: true }),
  });

  // Cutouts drift up a little faster than their card as you scroll.
  for (const node of gsap.utils.toArray<HTMLElement>(".peek__cutout")) {
    gsap.fromTo(
      node,
      { yPercent: 10 },
      {
        yPercent: -10,
        ease: "none",
        scrollTrigger: { trigger: node.parentElement, start: "top bottom", end: "bottom top", scrub: true },
      },
    );
  }

  // Images load late; keep trigger positions honest.
  window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
}
