import type { MobileNavItem, MobileSectionId } from "./types";

export const mobileSections: MobileSectionId[] = [
  "top",
  "about",
  "education",
  "projects",
  "contact",
];

export const mobileNavItems: MobileNavItem[] = [
  {
    id: "top",
    label: "Home",
    iconPath:
      "M12 3.4 3.5 10v10h5.6v-6.2h5.8V20h5.6V10L12 3.4zm0 2.3 6.7 5v7.1h-2.8v-6.2H8.1v6.2H5.3v-7.1L12 5.7z",
  },
  {
    id: "about",
    label: "About",
    iconPath:
      "M12 2.8a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2zm0 2a3.1 3.1 0 1 1 0 6.2 3.1 3.1 0 0 1 0-6.2zm0 9.7c-4.7 0-8.5 2.4-8.5 5.3 0 .6.4 1 1 1h15c.6 0 1-.4 1-1 0-2.9-3.8-5.3-8.5-5.3zm0 2c3.5 0 6 1.5 6.4 2.3H5.6c.4-.8 2.9-2.3 6.4-2.3z",
  },
  {
    id: "education",
    label: "Education",
    iconPath:
      "M12 3 2.5 8l9.5 5L21.5 8 12 3zm-7.3 7.2V14c0 2.4 4 4.3 7.3 4.3s7.3-1.9 7.3-4.3v-3.8l-7.3 3.8-7.3-3.8zm2 1.1 5.3 2.8 5.3-2.8V14c0 .9-2.1 2.3-5.3 2.3S6.7 14.9 6.7 14v-2.7z",
  },
  {
    id: "projects",
    label: "Projects",
    iconPath:
      "M4 5.2h5.2l1.2 1.5H20a1 1 0 0 1 1 1v10.1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6.2a1 1 0 0 1 1-1zm1 2v10.6h14V8.7h-9.1L8.7 7.2H5z",
  },
  {
    id: "contact",
    label: "Contact",
    iconPath:
      "M4.6 4.5h14.8a1.6 1.6 0 0 1 1.6 1.6v9.5a1.6 1.6 0 0 1-1.6 1.6H11l-4.8 3v-3H4.6A1.6 1.6 0 0 1 3 15.6V6.1a1.6 1.6 0 0 1 1.6-1.6zm.4 2v8.7h2.2c.6 0 1 .4 1 1v1.2l2.5-1.6a1 1 0 0 1 .5-.1H19V6.5H5z",
  },
];
