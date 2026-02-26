import type { MobileProject } from "./mobileProjectsData";

type MobileProjectCardProps = {
  project: MobileProject;
};

const getLinkIcon = (label: string) => {
  if (label === "GitHub") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.16 19.48c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.18-3.35-1.18-.45-1.15-1.1-1.45-1.1-1.45-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.35-2.21-.25-4.54-1.1-4.54-4.9 0-1.08.39-1.96 1.03-2.65-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.69 1.03 1.57 1.03 2.65 0 3.81-2.33 4.64-4.55 4.88.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2z" />
      </svg>
    );
  }

  if (label === "Live Demo") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 3h7v7h-2V6.41l-8.3 8.3-1.4-1.42 8.3-8.3H14V3zM5 5h6v2H7v10h10v-4h2v6H5V5z" />
      </svg>
    );
  }

  if (label === "Devpost") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="17"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <text
          x="12"
          y="15"
          textAnchor="middle"
          fontSize="8.5"
          fontWeight="700"
          fontFamily="Outfit, system-ui, sans-serif"
          fill="currentColor"
        >
          DP
        </text>
      </svg>
    );
  }

  return null;
};

export default function MobileProjectCard({ project }: MobileProjectCardProps) {
  const statusText = project.completed ? "Completed" : "In Progress";

  return (
    <article className="mobile-project-card">
      <img
        src={project.image}
        alt={project.title}
        className="mobile-project-image"
        loading="lazy"
        decoding="async"
      />
      <div className="mobile-project-body">
        <div className="mobile-project-meta">
          <h3>{project.title}</h3>
          <span
            className={`mobile-project-status ${
              project.completed ? "done" : "in-progress"
            }`}
          >
            {statusText}
          </span>
        </div>

        <p className="mobile-project-timeline">{project.timeline}</p>
        <p className="mobile-project-summary">{project.summary}</p>

        {project.award ? (
          <p className="mobile-project-award" aria-label={`${project.title} award`}>
            <span aria-hidden="true">🏆</span>
            {project.award}
          </p>
        ) : null}

        {project.links?.length ? (
          <div className="mobile-project-links" aria-label={`${project.title} links`}>
            {project.links.map((link) => {
              const icon = getLinkIcon(link.label);

              return icon ? (
                <a
                  key={`${project.title}-${link.href}`}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mobile-project-link icon"
                  aria-label={`${project.title} ${link.label}`}
                  title={link.label}
                >
                  {icon}
                </a>
              ) : (
                <a
                  key={`${project.title}-${link.href}`}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mobile-project-link"
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        ) : null}

        <p className="mobile-project-stack" aria-label={`${project.title} technologies`}>
          <strong>Technologies used:</strong> {project.skills.join(", ")}
        </p>
      </div>
    </article>
  );
}
