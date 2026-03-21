import type { AboutSectionContent } from "../../types/site";
import SectionHeading from "../shared/SectionHeading";

type AboutSectionProps = {
  content: AboutSectionContent;
};

export default function AboutSection({ content }: AboutSectionProps) {
  return (
    <section className="content-section" id="about">
      <div className="content-section-shell content-section-shell-about">
        <SectionHeading tag={content.tag} title={content.title} />

        <div className="about-layout">
          <article className="glass-panel portrait-card">
            <img
              src={content.image}
              alt={content.imageAlt}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
            <div className="portrait-copy">
              <p className="portrait-kicker">{content.portraitKicker}</p>
              <h3>{content.portraitTitle}</h3>
              <p>{content.portraitBody}</p>
            </div>
          </article>

          <div className="about-story">
            <article className="glass-panel story-card">
              {content.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>

            <article className="glass-panel values-card">
              <p className="card-label">{content.valuesLabel}</p>
              <div className="pill-grid">
                {content.focusAreas.map((area) => (
                  <span className="soft-pill" key={area}>
                    {area}
                  </span>
                ))}
              </div>
              <p className="values-note">{content.valuesNote}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
