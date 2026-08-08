"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const revealSelector = [
  "main > section",
  ".service-block",
  ".team-directory-card",
  ".services-directory-row",
  ".publication-card",
  ".review-highlight-list article",
  ".business-model-grid article",
  ".contact-channel-grid a",
].join(",");

export function ExperienceLayer() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frame = 0;
    const onPointerMove = (event: PointerEvent) => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--pointer-x", `${event.clientX}px`);
        root.style.setProperty("--pointer-y", `${event.clientY}px`);
      });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("v5-reveal-in"));
      return () => {
        window.removeEventListener("pointermove", onPointerMove);
        if (frame) cancelAnimationFrame(frame);
      };
    }

    elements.forEach((element) => element.classList.add("v5-reveal-ready"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("v5-reveal-in");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -7% 0px", threshold: 0.08 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
