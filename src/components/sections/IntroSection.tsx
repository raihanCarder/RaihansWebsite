import type { RefObject } from "react";
import type { IntroSectionContent } from "../../types/site";
import SocialLinks from "../shared/SocialLinks";

type IntroSectionProps = {
  content: IntroSectionContent;
  heroRef: RefObject<HTMLElement | null>;
};

export default function IntroSection({
  content,
  heroRef,
}: IntroSectionProps) {
  return (
    <section className="hero-panel" id="top" ref={heroRef}>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content hero-content-intro">
        <SocialLinks
          ariaLabel="Social links"
          className="hero-socials"
          linkClassName="hero-social-link"
          links={content.links}
        />
        <div className="hero-copy hero-copy-intro">
          <p className="eyebrow hero-kicker">{content.kicker}</p>
          <h1 className="hero-name">{content.name}</h1>
          <p className="hero-summary">{content.summary}</p>
        </div>
        <a
          className="scroll-cue scroll-cue-intro"
          href="#about"
          aria-label="Scroll down to the about section"
        >
          <span className="scroll-cue-device" aria-hidden="true">
            <span className="scroll-cue-wheel" />
          </span>
          <span className="scroll-cue-copy">
            <span className="scroll-cue-label">{content.scrollLabel}</span>
            <span className="scroll-cue-text">{content.scrollText}</span>
          </span>
        </a>
      </div>
    </section>
  );
}
