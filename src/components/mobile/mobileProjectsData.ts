import Argus from "../../assets/argus_dashboard.jpg";
import EzFormPhoto from "../../assets/ezFormPhoto.jpeg";
import Music4YouPhoto from "../../assets/Music4YouLogo.png";
import PortfolioSitePhoto from "../../assets/portfolioSite.jpg";
import Senicare from "../../assets/Senicare.png";
import SmartAirPhoto from "../../assets/smartAirPhoto.jpg";

export type MobileProjectLink = {
  href: string;
  label: string;
};

export type MobileProject = {
  title: string;
  summary: string;
  image: string;
  timeline: string;
  completed: boolean;
  skills: string[];
  links?: MobileProjectLink[];
  award?: string;
};

export const mobileProjects: MobileProject[] = [
  {
    title: "Smart Air",
    summary:
      "Kid-friendly Android app for asthma education, inhaler practice, symptom tracking, and safe parent-approved sharing with clinicians.",
    image: SmartAirPhoto,
    timeline: "Sept 2025 - Dec 2025",
    completed: true,
    skills: [
      "Java",
      "Android SDK",
      "Firebase",
      "Collaboration",
      "Teamwork",
      "Agile Methodologies",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/raihanCarder/Smart-Air-App",
      },
    ],
  },
  {
    title: "Argus",
    summary:
      "GovTech intelligence platform that surfaces pre-RFP opportunities and ranks the best startup matches using live signals.",
    image: Argus,
    timeline: "February 2026",
    completed: true,
    skills: [
      "FastAPI",
      "Next.js",
      "React",
      "Google Gemini API",
      "Python",
      "TypeScript",
      "Firebase",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/raihanCarder/Argus",
      },
      {
        label: "Live Demo",
        href: "https://argus-macathon.vercel.app/",
      },
      {
        label: "Devpost",
        href: "https://devpost.com/software/argus-uipa2c",
      },
    ],
  },
  {
    title: "SeniCare",
    summary:
      "Senior-focused daily check-in flow with conversational screening and camera-based biomarker signals for clinician-ready triage.",
    image: Senicare,
    timeline: "February 2026",
    completed: true,
    skills: [
      "FastAPI",
      "React",
      "Google Gemini API",
      "Python",
      "TypeScript",
      "MongoDB",
      "Tailwind",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/raihanCarder/senicare",
      },
      {
        label: "Devpost",
        href: "https://devpost.com/software/senicare",
      },
    ],
    award: "Best Use of Google Gemini API · CtrlHackDel 2026",
  },
  {
    title: "Music4You",
    summary:
      "Full-stack social music platform for rating tracks, discovering shared taste, and connecting with friends.",
    image: Music4YouPhoto,
    timeline: "Dec 2025 - Present",
    completed: false,
    skills: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/raihanCarder/ratemusic",
      },
    ],
  },
  {
    title: "Ez Form",
    summary:
      "Voice-first PDF form filling: extract fields, ask questions out loud, capture answers, and output a completed downloadable PDF.",
    image: EzFormPhoto,
    timeline: "January 2026",
    completed: true,
    skills: ["FastAPI", "React", "TypeScript", "Python", "Google Gemini API"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/raihanCarder/Ez-Form",
      },
      {
        label: "Devpost",
        href: "https://devpost.com/software/ez-form?ref_content=my-projects-tab&ref_feature=my_projects",
      },
    ],
  },
  {
    title: "My Website",
    summary:
      "Portfolio website designed and built to showcase projects and experience.",
    image: PortfolioSitePhoto,
    timeline: "Dec 2025 - Present",
    completed: true,
    skills: ["TypeScript", "React"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/raihanCarder/raihanCarder.github.io",
      },
    ],
  },
];
