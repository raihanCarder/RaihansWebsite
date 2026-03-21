import type { EducationSectionContent } from "../../types/site";
import SectionHeading from "../shared/SectionHeading";

type EducationSectionProps = {
  content: EducationSectionContent;
};

export default function EducationSection({
  content,
}: EducationSectionProps) {
  return (
    <section className="content-section content-section-edge content-section-edge-right deferred-section" id="education">
      <div className="content-section-shell content-section-shell-education">
        <SectionHeading tag={content.tag} title={content.title} />

        <div className="education-layout">
          <article className="glass-panel education-card">
            <img
              src={content.image}
              alt={content.imageAlt}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
            <div className="education-copy">
              <p className="card-label">{content.school}</p>
              <h3>{content.degree}</h3>
              <p className="education-meta">{content.specialization}</p>
              <p className="education-meta">{content.graduation}</p>
              <p className="coursework-label">{content.courseworkLabel}</p>
              <div className="coursework-list">
                {content.coursework.map((course) => (
                  <span className="soft-pill" key={course}>
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <div className="timeline-shell" aria-label="Education timeline">
            {content.timeline.map((item) => (
              <article className="glass-panel timeline-item" key={item.year}>
                <span className="timeline-year">{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
