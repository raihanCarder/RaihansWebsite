export type LinkItem = {
  label: string;
  href: string;
  downloadFileName?: string;
};

export type TimelineEntry = {
  year: string;
  title: string;
  body: string;
};

export type Project = {
  title: string;
  category: string;
  summary: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageFit?: "cover" | "contain";
  timeline: string;
  status: string;
  skills: string[];
  links: LinkItem[];
  award?: string;
};

export type IntroSectionContent = {
  kicker: string;
  name: string;
  summary: string;
  links: LinkItem[];
  scrollLabel: string;
  scrollText: string;
};

export type AboutSectionContent = {
  tag: string;
  title: string;
  image: string;
  imageAlt: string;
  portraitKicker: string;
  portraitTitle: string;
  portraitBody: string;
  story: string[];
  valuesLabel: string;
  focusAreas: string[];
  valuesNote: string;
};

export type EducationSectionContent = {
  tag: string;
  title: string;
  image: string;
  imageAlt: string;
  school: string;
  degree: string;
  specialization: string;
  graduation: string;
  courseworkLabel: string;
  coursework: string[];
  timeline: TimelineEntry[];
};

export type ProjectsSectionContent = {
  tag: string;
  title: string;
  description: string;
  projects: Project[];
};

export type FooterSectionContent = {
  socials: LinkItem[];
  email: string;
  brand: string;
  nav: LinkItem[];
  note: string;
  marquee: string;
  marqueeHref: string;
  availability: string;
};
