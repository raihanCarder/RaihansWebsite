import type { MouseEvent } from "react";

export type ThemeMode = "light" | "dark";

export type MobileSectionId =
  | "top"
  | "about"
  | "education"
  | "projects"
  | "contact";

export type MobileNavItem = {
  id: MobileSectionId;
  label: string;
  iconPath: string;
};

export type MobileNavigateHandler = (
  id: MobileSectionId,
) => (event: MouseEvent<HTMLAnchorElement>) => void;
