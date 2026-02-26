import resumePdf from "/Raihan_Carder_Resume.pdf";
import headerPhoto from "../../assets/headerPhoto.jpeg";

export default function MobileHero() {
  return (
    <section className="mobile-hero" id="top">
      <p className="mobile-eyebrow">Portfolio</p>
      <div className="mobile-hero-header">
        <h1>Raihan Carder</h1>
        <img
          src={headerPhoto}
          alt="Portrait of Raihan Carder"
          className="mobile-hero-image"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>
      <p className="mobile-hero-subtitle">
        Computer Science student at UofT specializing in Software Engineering.
      </p>
      <div className="mobile-hero-actions">
        <a className="mobile-btn primary" href={resumePdf} download>
          Download Resume
        </a>
      </div>
    </section>
  );
}
