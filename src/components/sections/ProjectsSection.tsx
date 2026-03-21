import type { ProjectsSectionContent } from "../../types/site";
import ProjectCard from "../shared/ProjectCard";

type ProjectsSectionProps = {
  content: ProjectsSectionContent;
};

export default function ProjectsSection({ content }: ProjectsSectionProps) {
  return (
    <section className="content-section deferred-section projects-section" id="projects">
      <div className="section-heading section-heading-wide">
        <div>
          <p className="section-tag">{content.tag}</p>
          <h2>{content.title}</h2>
        </div>
        <p className="section-description">{content.description}</p>
      </div>

      <div className="projects-grid">
        {content.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
