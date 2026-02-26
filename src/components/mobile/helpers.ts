import type { MouseEvent } from "react";
import type { MobileSectionId, ThemeMode } from "./types";

export const getPreferredTheme = (): ThemeMode => {
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

export const scrollToMobileSection = (id: MobileSectionId) => {
  const target = document.getElementById(id);
  if (!target) {
    return;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const topbar = document.querySelector(".mobile-topbar");
  const topbarOffset = topbar ? topbar.getBoundingClientRect().height + 10 : 0;
  const top = target.getBoundingClientRect().top + window.scrollY - topbarOffset;

  window.scrollTo({ top, behavior: prefersReducedMotion ? "auto" : "smooth" });
};

export const goMobile =
  (id: MobileSectionId) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToMobileSection(id);
  };
