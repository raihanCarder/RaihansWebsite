import type { EducationSectionContent } from "../../types/site";
import LocationGlobe from "../shared/LocationGlobe";
import SectionHeading from "../shared/SectionHeading";
import TermWindowBar from "../shared/TermWindowBar";

type EducationSectionProps = {
  content: EducationSectionContent;
};

export default function EducationSection({ content }: EducationSectionProps) {
  return (
    <section
      className="content-section content-section-edge content-section-edge-right deferred-section"
      id="education"
    >
      <div className="content-section-shell content-section-shell-education edu-terminal">
        <SectionHeading tag={content.tag} title="" />

        <div className="term-grid term-grid--edu">
          <div className="term term--main" role="presentation">
            <TermWindowBar title="raihan@portfolio: ~/edu" />
            <div className="term-body">
              <pre className="term-lines" aria-label="Education information">
                <span className="term-host">visitor@raihan</span>
                <span className="term-path"> ~/edu</span>
                {"\n\n"}
                <span className="term-prompt">$</span> school{"\n"}
                <span className="term-out">{content.school.toLowerCase()}</span>
                {"\n\n"}
                <span className="term-prompt">$</span> degree{"\n"}
                <span className="term-out">{content.degree.toLowerCase()}</span>
                {"\n\n"}
                <span className="term-prompt">$</span> specialization{"\n"}
                <span className="term-out">{content.specialization.toLowerCase()}</span>
                {"\n\n"}
                <span className="term-prompt">$</span> year{"\n"}
                <span className="term-out">{content.year.toLowerCase()}</span>
                {"\n\n"}
                <span className="term-prompt">$</span> graduation{"\n"}
                <span className="term-out">{content.graduation.toLowerCase()}</span>
                {"\n\n"}
                <span className="term-prompt">$</span> ls relevant_coursework/{"\n"}
                {content.coursework.map((course, i) => (
                  <span className="term-li" key={course}>
                    <span className="term-li-index">
                      {String(i + 1).padStart(2, " ")}
                    </span>
                    {"  "}
                    <span className="term-li-text">{course}</span>
                    {"\n"}
                  </span>
                ))}
                {"\n"}
                <span className="term-prompt">$</span>{" "}
                <span className="term-cursor" aria-hidden="true" />
              </pre>
            </div>
          </div>

          <div className="term term--location" aria-label="Location on globe">
            <TermWindowBar title="raihan@portfolio: ~/location" />
            <div className="term-body term-body--media">
              <LocationGlobe
                lat={content.location.lat}
                lon={content.location.lon}
                label={content.location.label}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
