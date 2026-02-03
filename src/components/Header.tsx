import { go } from "../utils/scrollTo";
import resumePdf from "/Raihan_Carder_Resume.pdf";
import headerPhoto from "../assets/headerPhoto.jpeg";

export default function Header() {
  return (
    <header className="hero" id="top">
      <div className="hero-inner split">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio</p>
          <h1 className="hero-title typewriter">Raihan Carder</h1>
          <p className="hero-subtitle">
            Computer Science student @ UofT specializing in Software
            Engineering. Currently in co-op, building toward a career in
            software engineering with a love for full-stack development, AI/ML,
            mobile apps, and transforming ideas into real products.
          </p>
          <div className="hero-cta">
            <a className="btn resume" href={resumePdf} download>
              Resume
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3a1 1 0 0 1 1 1v8.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.42l2.3 2.3V4a1 1 0 0 1 1-1zM5 19a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z" />
              </svg>
            </a>
            <a className="btn" href="#" onClick={go("projects")}>
              View Projects
            </a>
            <a className="btn ghost" href="#" onClick={go("about")}>
              About Me
            </a>
          </div>
        </div>
        <div className="hero-media">
          <img
            src={headerPhoto}
            alt="Portrait of Raihan Carder"
            className="hero-image"
            loading="eager"
          />
        </div>
      </div>
    </header>
  );
}
