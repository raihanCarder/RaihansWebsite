import type { Project } from "../../types/site";

type ProjectCardProps = {
  project: Project;
};

type SkillTone = "core" | "data" | "ai" | "mobile" | "product" | "api" | "neutral";

const getLinkColor = (label: string): string => {
  switch (label.toLowerCase()) {
    case "live demo":
      return "live-demo";
    case "github":
      return "github";
    case "devpost":
      return "devpost";
    default:
      return "default";
  }
};

const getLinkIcon = (label: string): React.ReactNode => {
  switch (label.toLowerCase()) {
    case "live demo":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      );
    case "github":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case "devpost":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="12" y1="19" x2="12" y2="11" />
          <polyline points="9 14 12 11 15 14" />
        </svg>
      );
    default:
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        </svg>
      );
  }
};

type SkillBadge = {
  label: string;
  color: string;
  logo: string;
  logoColor: string;
};

const skillBadges: Record<string, SkillBadge> = {
  "TypeScript": { label: "typescript", color: "3178C6", logo: "typescript", logoColor: "white" },
  "Next.js": { label: "next.js", color: "000000", logo: "nextdotjs", logoColor: "white" },
  "React": { label: "react", color: "20232a", logo: "react", logoColor: "61DAFB" },
  "JavaScript": { label: "javascript", color: "323330", logo: "javascript", logoColor: "F7DF1E" },
  "Python": { label: "python", color: "3670A0", logo: "python", logoColor: "ffdd54" },
  "Java": { label: "java", color: "ED8B00", logo: "openjdk", logoColor: "white" },
  "C#": { label: "c%23", color: "239120", logo: "csharp", logoColor: "white" },
  "C": { label: "c", color: "00599C", logo: "c", logoColor: "white" },
  "HTML5": { label: "html5", color: "E34F26", logo: "html5", logoColor: "white" },
  "CSS3": { label: "css3", color: "1572B6", logo: "css3", logoColor: "white" },
  "FastAPI": { label: "fastapi", color: "009688", logo: "fastapi", logoColor: "white" },
  "Node.js": { label: "node.js", color: "339933", logo: "nodedotjs", logoColor: "white" },
  "SQL": { label: "sql", color: "00748F", logo: "sqlite", logoColor: "white" },
  "PostgreSQL": { label: "postgres", color: "316192", logo: "postgresql", logoColor: "white" },
  "Firebase": { label: "firebase", color: "FFCA28", logo: "firebase", logoColor: "black" },
  "Supabase": { label: "supabase", color: "3ECF8E", logo: "supabase", logoColor: "white" },
  "Vercel": { label: "vercel", color: "000000", logo: "vercel", logoColor: "white" },
  "Android": { label: "android", color: "3DDC84", logo: "android", logoColor: "white" },
  "Android SDK": { label: "android", color: "3DDC84", logo: "android", logoColor: "white" },
  "Linux": { label: "linux", color: "FCC624", logo: "linux", logoColor: "black" },
  "MongoDB": { label: "mongodb", color: "13AA52", logo: "mongodb", logoColor: "white" },
  "Tailwind": { label: "tailwind", color: "06B6D4", logo: "tailwindcss", logoColor: "white" },
  "Gemini API": { label: "gemini%20api", color: "8F7EE7", logo: "google", logoColor: "white" },
  "Langchain": { label: "langchain", color: "1C3C3C", logo: "langchain", logoColor: "white" },
  "Agile": { label: "agile", color: "4285F4", logo: "agile", logoColor: "white" },
  "Accessibility": { label: "accessibility", color: "4B8BBE", logo: "accessibility", logoColor: "white" },
  "Google Maps API": { label: "google%20maps", color: "4285F4", logo: "googlemaps", logoColor: "white" },
  "Brave Search API": { label: "brave", color: "FB542B", logo: "bravebrwoser", logoColor: "white" },
  "Three.js": { label: "three.js", color: "000000", logo: "threedotjs", logoColor: "white" },
};

const getSkillBadgeUrl = (skill: string): string | null => {
  const badge = skillBadges[skill];
  if (!badge) return null;
  return `https://img.shields.io/badge/${badge.label}-${badge.color}?style=for-the-badge&logo=${badge.logo}&logoColor=${badge.logoColor}`;
};

const getSkillTone = (skill: string): SkillTone => {
  const normalized = skill.toLowerCase();

  if (
    normalized.includes("react") ||
    normalized.includes("next.js") ||
    normalized.includes("typescript") ||
    normalized.includes("javascript")
  ) {
    return "core";
  }

  if (
    normalized.includes("fastapi") ||
    normalized.includes("supabase") ||
    normalized.includes("firebase") ||
    normalized.includes("mongodb") ||
    normalized.includes("postgresql") ||
    normalized.includes("python")
  ) {
    return "data";
  }

  if (normalized.includes("gemini") || normalized.includes("langchain")) {
    return "ai";
  }

  if (normalized.includes("android") || normalized.includes("java")) {
    return "mobile";
  }

  if (
    normalized.includes("tailwind") ||
    normalized.includes("agile") ||
    normalized.includes("accessibility")
  ) {
    return "product";
  }

  if (normalized.includes("api")) {
    return "api";
  }

  return "neutral";
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="glass-panel project-card">
      <div
        className={`project-image-wrap${
          project.imageFit === "contain" ? " project-image-wrap-contain" : ""
        }`}
      >
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          width={project.imageWidth}
          height={project.imageHeight}
        />
      </div>
      <div className="project-content">
        <div className="project-meta-row">
          <span className="project-timeline">{project.timeline}</span>
          <div className="project-badges" aria-label="Project metadata">
            <span className="project-badge project-category">
              {project.category}
            </span>
            <span className="project-badge project-status">{project.status}</span>
          </div>
        </div>
        <div className="project-copy-group">
          <h3>{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
        </div>
        <div className="project-sections">
          {project.award ? (
            <div className="project-awards-group">
              <p className="project-awards-label">Awards</p>
              <div className="project-awards">
                <div className="award-badge">
                  <span className="award-icon">🏆</span>
                  <span className="award-text">{project.award}</span>
                </div>
              </div>
            </div>
          ) : null}
          <div className="project-skills-group">
            <p className="project-skills-label">Built with</p>
            <div className="project-tags">
              {project.skills.map((skill) => {
                const badgeUrl = getSkillBadgeUrl(skill);
                return badgeUrl ? (
                  <img
                    key={skill}
                    src={badgeUrl}
                    alt={skill}
                    className="skill-badge"
                    loading="lazy"
                  />
                ) : (
                  <span
                    className={`soft-pill project-skill project-skill--${getSkillTone(skill)}`}
                    key={skill}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
          {project.links.length ? (
            <div className="project-links-group">
              <p className="project-links-label">Links</p>
              <div className="project-links">
                {project.links.map((link) => (
                  <a
                    className={`inline-link inline-link--${getLinkColor(link.label)}`}
                    href={link.href}
                    key={link.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="link-label">{link.label}</span>
                    <span className="link-icon">{getLinkIcon(link.label)}</span>
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
