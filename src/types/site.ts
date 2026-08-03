export type LinkItem = {
  label: string;
  href: string;
  downloadFileName?: string;
};

export type ProjectType = "hackathon" | "personal" | "coursework" | "award";

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
  projectType: ProjectType[];
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
  name: string;
  role: string;
  basedAt: string;
  school: string;
  program: string;
  status: string;
  now: string;
  focusAreas: string[];
  offHours: string;
};

export type EducationSectionContent = {
  tag: string;
  school: string;
  degree: string;
  specialization: string;
  year: string;
  graduation: string;
  coursework: string[];
  location: {
    label: string;
    lat: number;
    lon: number;
  };
};

export type ProjectsSectionContent = {
  tag: string;
  title: string;
  projects: Project[];
};

export type ExperienceStatus = "current" | "upcoming";

export type ExperienceItem = {
  company: string;
  role: string;
  focus?: string;
  period: string;
  status: ExperienceStatus;
  description: string;
  logo: string;
  logoAlt: string;
};

export type ExperienceSectionContent = {
  tag: string;
  title: string;
  summary: string;
  experiences: ExperienceItem[];
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
