import MobileProjectCard from "./MobileProjectCard";
import { mobileProjects } from "./mobileProjectsData";

export default function MobileProjectsSection() {
  return (
    <section className="mobile-projects" id="projects">
      <p className="mobile-section-kicker">Projects</p>
      <h2>What I Have Built</h2>

      <div className="mobile-project-list">
        {mobileProjects.map((project) => (
          <MobileProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
