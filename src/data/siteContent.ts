import ecoHomePhoto from "../assets/echohome.jpg";
import headerPhoto from "../assets/headerPhoto.jpeg";
import argusPhoto from "../assets/argus_dashboard.jpg";
import beaconPhoto from "../assets/beacon.png";
import resumePdf from "../assets/Raihan_Carder_Resume.pdf";
import smartAirPhoto from "../assets/smartAirPhoto.jpg";
import seniCarePhoto from "../assets/senicare.png";
import music4YouPhoto from "../assets/music4you.png";
import ezFormPhoto from "../assets/ezFormPhoto.jpeg";
import type {
  AboutSectionContent,
  EducationSectionContent,
  FooterSectionContent,
  IntroSectionContent,
  ProjectsSectionContent,
} from "../types/site";

export const introSectionContent: IntroSectionContent = {
  kicker: "Software Engineering Portfolio",
  name: "Raihan Carder",
  summary:
    "Computer Science student at UofT specializing in software engineering, building clean full-stack, AI, and mobile experiences.",
  links: [
    {
      label: "Download Resume",
      href: resumePdf,
      downloadFileName: "Raihan_Carder_Resume.pdf",
    },
    { label: "GitHub", href: "https://github.com/raihanCarder" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/raihan-carder/" },
    { label: "Email", href: "mailto:raihancarder@gmail.com" },
  ],
  scrollLabel: "Scroll",
  scrollText: "Down to explore",
};

export const aboutSectionContent: AboutSectionContent = {
  tag: "About me 🧑🏻‍💻",
  title: "",
  image: headerPhoto,
  imageAlt: "Portrait of Raihan Carder",
  name: "Raihan Carder",
  role: "Student",
  basedAt: "Toronto, Ontario",
  school: "University of Toronto",
  program: "Computer Science, Specializing in Software Engineering",
  status: "Open to Fall and Winter 2026 Internships",
  now: "Building and shipping side projects",
  focusAreas: [
    "full-stack development",
    "software engineering",
    "hackathons",
    "creating software that inspires me and can be used by others",
  ],
  offHours:
    "Outside of tech you will usually find me at the gym, reading, listening to music, or thinking about the next thing worth building.",
};

export const educationSectionContent: EducationSectionContent = {
  tag: "Education 📚",
  school: "University of Toronto Scarborough",
  degree: "HBSc Computer Science (Co-op)",
  specialization: "Software Engineering",
  year: "3rd",
  graduation: "Expected April 2028",
  coursework: [
    "software design",
    "software tools and systems",
    "data structures and algorithms",
  ],
  location: {
    label: "UofT Scarborough",
    lat: 43.7831,
    lon: -79.1869,
  },
};

export const projectsSectionContent: ProjectsSectionContent = {
  tag: "Projects",
  title: "My Favourites",
  projects: [
    {
      title: "EcoHome Studio",
      category: "AI Design",
      projectType: ["hackathon"],
      summary:
        "Home design tool that takes a brief and generates a full concept with a sustainability score, interactive 3D model, and floor plan. Includes a Studio Mode to keep tweaking materials, roof type, and eco features after generation.",
      image: ecoHomePhoto,
      imageWidth: 1200,
      imageHeight: 649,
      timeline: "May 2026",
      status: "Hackathon build",
      skills: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind",
        "Three.js",
        "Langchain",
        "Supabase",
      ],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/kasimsuh/ecohome-studio",
        },
        {
          label: "Devpost",
          href: "https://devpost.com/software/ecohome-studio",
        },
      ],
    },
    {
      title: "Beacon",
      category: "Community Support",
      projectType: ["hackathon"],
      summary:
        "Location-aware support platform that helps people find trusted nearby services like food support, shelters, clinics, social services, and legal help, then builds longer-term stability plans with grounded AI workflows.",
      image: beaconPhoto,
      imageWidth: 900,
      imageHeight: 486,
      timeline: "March 2026",
      status: "Completed",
      skills: [
        "Next.js",
        "TypeScript",
        "Python",
        "Supabase",
        "Gemini API",
        "Google Maps API",
        "Brave Search API",
        "Langchain",
        "PostgreSQL",
      ],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/raihanCarder/genaigenesis2026",
        },
        {
          label: "Devpost",
          href: "https://devpost.com/software/beacon-k4pstn",
        },
      ],
    },
    {
      title: "Argus",
      category: "GovTech",
      projectType: ["hackathon"],
      summary:
        "GovTech intelligence platform that surfaces government opportunities before they become RFPs, then ranks the strongest startup matches with live signals and clear actions.",
      image: argusPhoto,
      imageWidth: 1100,
      imageHeight: 621,
      timeline: "February 2026",
      status: "Live product",
      skills: [
        "FastAPI",
        "Next.js",
        "React",
        "TypeScript",
        "Python",
        "Firebase",
        "Gemini API",
      ],
      links: [
        { label: "GitHub", href: "https://github.com/raihanCarder/Argus" },
        { label: "Live Demo", href: "https://argus-macathon.vercel.app/" },
        {
          label: "Devpost",
          href: "https://devpost.com/software/argus-uipa2c",
        },
      ],
    },
    {
      title: "SeniCare",
      category: "Healthcare",
      projectType: ["hackathon", "award"],
      summary:
        "Senior-friendly remote check-in flow that combines conversational screening with camera-based biomarker signals to produce clinician-ready triage summaries.",
      image: seniCarePhoto,
      imageWidth: 768,
      imageHeight: 413,
      timeline: "February 2026",
      status: "Award winner",
      skills: [
        "React",
        "FastAPI",
        "TypeScript",
        "Python",
        "MongoDB",
        "Tailwind",
        "Gemini API",
      ],
      links: [
        { label: "GitHub", href: "https://github.com/raihanCarder/senicare" },
        { label: "Devpost", href: "https://devpost.com/software/senicare" },
      ],
      award: "Best Use of Google Gemini API at CtrlHackDel 2026",
    },
    {
      title: "Smart Air",
      category: "Healthcare",
      projectType: ["coursework"],
      summary:
        "Kid-friendly Android app for asthma education, inhaler practice, symptom logging, and parent-approved sharing with clinicians.",
      image: smartAirPhoto,
      imageWidth: 1200,
      imageHeight: 800,
      timeline: "Sept 2025 - Dec 2025",
      status: "Completed",
      skills: ["Java", "Android SDK", "Firebase", "Agile", "Accessibility"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/raihanCarder/Smart-Air-App",
        },
      ],
    },
    {
      title: "Music4You",
      category: "Music Platform",
      projectType: ["personal"],
      summary:
        "Full-stack social music platform focused on rating, discovery, and connecting people through shared listening taste.",
      image: music4YouPhoto,
      imageWidth: 1024,
      imageHeight: 559,
      timeline: "Dec 2025 - Present",
      status: "In progress",
      skills: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL"],
      links: [{ label: "Live Demo", href: "https://ratemusic.vercel.app" }],
    },
    {
      title: "Ez Form",
      category: "Accessibility",
      projectType: ["hackathon"],
      summary:
        "Voice-first PDF form filling system that extracts fields, asks questions aloud, captures spoken responses, and generates a completed form.",
      image: ezFormPhoto,
      imageWidth: 1200,
      imageHeight: 685,
      timeline: "January 2026",
      status: "Hackathon build",
      skills: ["React", "TypeScript", "FastAPI", "Python", "Gemini API"],
      links: [
        { label: "GitHub", href: "https://github.com/raihanCarder/Ez-Form" },
        {
          label: "Devpost",
          href: "https://devpost.com/software/ez-form?ref_content=my-projects-tab&ref_feature=my_projects",
        },
      ],
    },
  ],
};

export const footerSectionContent: FooterSectionContent = {
  socials: [
    { label: "GitHub", href: "https://github.com/raihanCarder" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/raihan-carder/" },
    { label: "Email", href: "mailto:raihancarder@gmail.com" },
  ],
  email: "raihancarder@gmail.com",
  brand: "Raihan Carder",
  nav: [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
  ],
  note: "Toronto-based computer science student designing polished software experiences across full-stack, AI, and mobile.",
  marquee: "Get in Touch",
  marqueeHref: "https://www.linkedin.com/in/raihan-carder/",
  availability: "Open to internships, co-op, and ambitious product teams.",
};
