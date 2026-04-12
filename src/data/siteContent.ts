import headerPhoto from "../assets/headerPhoto.jpeg";
import uoftPhoto from "../assets/uoftSign.jpg";
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
  tag: "About me",
  title: "I Love Building Software.",
  image: headerPhoto,
  imageAlt: "Portrait of Raihan Carder",
  portraitKicker: "Raihan Carder",
  portraitTitle: "Aspiring Software Engineer",
  portraitBody:
    "I enjoy taking ideas from rough concept to something people can actually use. That usually means working across interface, logic, and systems until the product feels coherent end to end.",
  story: [
    "I am a Computer Science student at the University of Toronto specializing in Software Engineering. I care about software that looks refined on the surface and stays thoughtful under the hood.",
    "My interests sit at the intersection of full-stack development, AI and machine learning, and mobile experiences. I like learning fast, building ambitiously, and working on products that make complexity feel simple.",
  ],
  valuesLabel: "What drives me",
  focusAreas: [
    "Full-stack product design",
    "AI and machine learning",
    "Mobile app development",
    "Hackathons and fast iteration",
  ],
  valuesNote:
    "Outside of tech, you will usually find me at the gym, reading, listening to music, or thinking about the next thing worth building.",
};

export const educationSectionContent: EducationSectionContent = {
  tag: "Education",
  title: "My Journey in Computer Science",
  image: uoftPhoto,
  imageAlt: "University of Toronto Scarborough campus",
  school: "University of Toronto Scarborough",
  degree: "HBSc Computer Science (Co-op)",
  specialization: "Specialization: Software Engineering",
  graduation: "Expected graduation: 2028",
  courseworkLabel: "Relevant Coursework",
  coursework: [
    "Software Design",
    "Software Tools and Systems",
    "Data Structures and Algorithms",
  ],
  timeline: [
    {
      year: "2024",
      title: "Started the foundation",
      body: "Began the HBSc Computer Science journey at UofT Scarborough, building systems thinking through software design, data structures, and coursework while shipping real projects outside the classroom.",
    },
    {
      year: "2028",
      title: "Expected graduation",
      body: "Working toward a co-op-driven path into software engineering roles, turning hackathon ideas and side projects into polished web, AI, and mobile experiences along the way.",
    },
  ],
};

export const projectsSectionContent: ProjectsSectionContent = {
  tag: "Projects",
  title: "My Favourites",
  description:
    "I have built projects across community support, health, gov tech, and more personal spaces like music, with a mix of practical products, hackathon builds, and things made for enjoyment.",
  projects: [
    {
      title: "Beacon",
      category: "Community Support",
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
      summary:
        "Full-stack social music platform focused on rating, discovery, and connecting people through shared listening taste.",
      image: music4YouPhoto,
      imageWidth: 1024,
      imageHeight: 559,
      timeline: "Dec 2025 - Present",
      status: "In progress",
      skills: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL"],
      links: [
        { label: "Live Demo", href: "https://ratemusic.vercel.app" },
      ],
    },
    {
      title: "Ez Form",
      category: "Accessibility",
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
