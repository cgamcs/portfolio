"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Animates every `[data-reveal]` element into view on scroll.
 * The value of the attribute is an optional delay in seconds, used to stagger
 * blocks that share the same trigger point.
 *
 * Nothing is hidden in CSS: the start state is set here inside useGSAP (a
 * layout effect), so it lands before paint and readers without JavaScript
 * still get the full page.
 */
export default function Reveal() {
  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLElement>("[data-reveal]");

    // The CSS above hid these; reveal them outright rather than animating.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    for (const el of items) {
      gsap.set(el, { opacity: 0, y: 30 });
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: Number(el.dataset.reveal) || 0,
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      });
    }
  });

  return null;
}
