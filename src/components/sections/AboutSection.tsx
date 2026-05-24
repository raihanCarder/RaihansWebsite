import type { AboutSectionContent } from "../../types/site";
import SectionHeading from "../shared/SectionHeading";
import TermWindowBar from "../shared/TermWindowBar";

type AboutSectionProps = {
  content: AboutSectionContent;
};

const NAME_ASCII = String.raw`██████╗   █████╗  ██╗ ██╗  ██╗  █████╗  ███╗   ██╗
██╔══██╗ ██╔══██╗ ██║ ██║  ██║ ██╔══██╗ ████╗  ██║
██████╔╝ ███████║ ██║ ███████║ ███████║ ██╔██╗ ██║
██╔══██╗ ██╔══██║ ██║ ██╔══██║ ██╔══██║ ██║╚██╗██║
██║  ██║ ██║  ██║ ██║ ██║  ██║ ██║  ██║ ██║ ╚████║
╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═══╝
 ██████╗  █████╗  ██████╗  ██████╗  ███████╗ ██████╗
██╔════╝ ██╔══██╗ ██╔══██╗ ██╔══██╗ ██╔════╝ ██╔══██╗
██║      ███████║ ██████╔╝ ██║  ██║ █████╗   ██████╔╝
██║      ██╔══██║ ██╔══██╗ ██║  ██║ ██╔══╝   ██╔══██╗
╚██████╗ ██║  ██║ ██║  ██║ ██████╔╝ ███████╗ ██║  ██║
 ╚═════╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═════╝  ╚══════╝ ╚═╝  ╚═╝`;

export default function AboutSection({ content }: AboutSectionProps) {
  return (
    <section className="content-section content-section-edge content-section-edge-left" id="about">
      <div className="content-section-shell content-section-shell-about about-dossier">
        <SectionHeading tag={content.tag} title={content.title} />

        <div className="term-grid">
          <div className="term term--main" role="presentation">
            <TermWindowBar title="raihan@portfolio: ~/about" />
            <div className="term-body">
              <pre className="term-ascii" aria-hidden="true">{NAME_ASCII}</pre>

              <pre className="term-lines" aria-label="About Raihan Carder">
                <span className="term-host">visitor@raihan</span>
                <span className="term-path"> ~</span>
                {"\n"}
                <span className="term-prompt">$</span> whoami{"\n"}
                <span className="term-out">{content.name.toLowerCase()}</span>
                {"\n\n"}
                <span className="term-prompt">$</span> role{"\n"}
                <span className="term-out">{content.role.toLowerCase()}</span>
                {"\n\n"}
                <span className="term-prompt">$</span> based{"\n"}
                <span className="term-out">{content.basedAt.toLowerCase()}</span>
                {"\n\n"}
                <span className="term-prompt">$</span> school{"\n"}
                <span className="term-out">{content.school.toLowerCase()}</span>
                {"\n\n"}
                <span className="term-prompt">$</span> program{"\n"}
                <span className="term-out">{content.program.toLowerCase()}</span>
                {"\n\n"}
                <span className="term-prompt">$</span> status{"\n"}
                <span className="term-out">{content.status.toLowerCase()}</span>
                {"\n\n"}
                <span className="term-prompt">$</span> now{"\n"}
                <span className="term-out">
                  {content.now.toLowerCase()}
                  <span className="term-cursor" aria-hidden="true" />
                </span>
              </pre>
            </div>
          </div>

          <div className="term term--portrait" aria-label="Portrait of Raihan Carder">
            <TermWindowBar title="raihan@portfolio: ~/portrait" />
            <div className="term-body term-body--media">
              <figure className="term-portrait term-portrait--solo">
                <img
                  src={content.image}
                  alt={content.imageAlt}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              </figure>
            </div>
          </div>

          <div className="term term--side" aria-label="Focus areas and off-hours">
            <TermWindowBar title="raihan@portfolio: ~/focus" />
            <div className="term-body term-body--list">
              <pre className="term-lines">
                <span className="term-host">visitor@raihan</span>
                <span className="term-path"> ~/focus</span>
                {"\n"}
                <span className="term-prompt">$</span> ls{"\n"}
                {content.focusAreas.map((area, i) => (
                  <span className="term-li" key={area}>
                    <span className="term-li-index">
                      {String(i + 1).padStart(2, " ")}
                    </span>
                    {"  "}
                    <span className="term-li-text">{area}</span>
                    {"\n"}
                  </span>
                ))}
                {"\n"}
                <span className="term-prompt">$</span> off-hours{"\n"}
                <span className="term-out">{content.offHours.toLowerCase()}</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
