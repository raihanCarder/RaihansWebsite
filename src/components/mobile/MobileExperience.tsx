import { useEffect, useState } from "react";
import { getPreferredTheme, goMobile } from "./helpers";
import MobileAbout from "./MobileAbout";
import MobileBottomNav from "./MobileBottomNav";
import MobileEducationSection from "./MobileEducationSection";
import MobileFooter from "./MobileFooter";
import MobileHero from "./MobileHero";
import MobileProjectsSection from "./MobileProjectsSection";
import MobileTopBar from "./MobileTopBar";
import type { ThemeMode } from "./types";

export default function MobileExperience() {
  const [theme, setTheme] = useState<ThemeMode>(getPreferredTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <MobileTopBar theme={theme} onToggleTheme={toggleTheme} onNavigate={goMobile} />

      <main className="mobile-main" aria-label="Mobile portfolio experience">
        <MobileHero />
        <MobileAbout />
        <MobileEducationSection />
        <MobileProjectsSection />
        <MobileFooter />
      </main>

      <MobileBottomNav onNavigate={goMobile} />
    </>
  );
}
