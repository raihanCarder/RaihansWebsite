import { useState } from "react";
import type { ProjectType, ProjectsSectionContent } from "../../types/site";
import ProjectCard from "../shared/ProjectCard";

type ProjectsSectionProps = {
  content: ProjectsSectionContent;
};

type FilterKey = "all" | ProjectType;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "hackathon", label: "Hackathons" },
  { key: "personal", label: "Personal" },
  { key: "coursework", label: "Coursework" },
  { key: "award", label: "Awards" },
];

export default function ProjectsSection({ content }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const visible =
    activeFilter === "all"
      ? content.projects
      : content.projects.filter((p) => p.projectType.includes(activeFilter));

  return (
    <section className="content-section deferred-section projects-section" id="projects">
      <div className="section-heading section-heading-wide">
        <div>
          <p className="section-tag">{content.tag}</p>
          <h2>{content.title}</h2>
        </div>
        <p className="section-description">{content.description}</p>
      </div>

      <div className="projects-filter-bar">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`filter-pill${activeFilter === f.key ? " active" : ""}`}
            onClick={() => setActiveFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {visible.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
