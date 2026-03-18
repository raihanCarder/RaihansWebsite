import type { Project } from "../../types/site";

type ProjectCardProps = {
  project: Project;
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
          {project.award ? (
            <div className="project-award-banner">
              <p className="project-award-label">Award winner</p>
              <p className="project-award">{project.award}</p>
            </div>
          ) : null}
          <p className="project-summary">{project.summary}</p>
        </div>
        <div className="project-skills-group">
          <p className="project-skills-label">Built with</p>
          <div className="project-tags">
            {project.skills.map((skill) => (
              <span className="soft-pill project-skill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="project-links">
          {project.links.map((link) => (
            <a
              className="inline-link"
              href={link.href}
              key={link.label}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
