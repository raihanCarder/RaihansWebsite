import type { IntroSectionContent } from "../../types/site";
import LiquidChrome from "../shared/LiquidChrome";
import SocialLinks from "../shared/SocialLinks";

type IntroSectionProps = {
  content: IntroSectionContent;
};

const HERO_BASE_COLOR: [number, number, number] = [0.72, 0.72, 0.72];

export default function IntroSection({ content }: IntroSectionProps) {
  return (
    <section className="hero-panel" id="top">
      <LiquidChrome
        amplitude={0.24}
        aria-hidden="true"
        baseColor={HERO_BASE_COLOR}
        className="hero-liquid-chrome"
        frequencyX={2.35}
        frequencyY={2}
        interactive={false}
        speed={0.2}
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content hero-content-intro">
        <SocialLinks
          ariaLabel="Social links"
          className="hero-socials"
          linkClassName="hero-social-link"
          links={content.links}
          showIcons
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
