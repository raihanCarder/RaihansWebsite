import UoftPhoto from "../../assets/uoftSign.jpg";

export default function MobileEducationSection() {
  return (
    <section className="mobile-education" id="education">
      <p className="mobile-section-kicker">Education</p>
      <h2>Learning Journey</h2>

      <article className="mobile-education-card">
        <img
          src={UoftPhoto}
          alt="UofT Scarborough campus"
          className="mobile-education-image"
          loading="lazy"
          decoding="async"
        />

        <div className="mobile-education-body">
          <div className="mobile-education-header">
            <div>
              <h3>University of Toronto Scarborough</h3>
              <p>HBSc Computer Science (Co-op)</p>
              <p>Specialization: Software Engineering</p>
            </div>
            <span className="mobile-education-grad">Expected Grad: 2028</span>
          </div>

          <div
            className="mobile-education-timeline"
            aria-label="Timeline from 2024 to 2028"
          >
            <span>2024</span>
            <div className="mobile-education-track">
              <span className="mobile-education-dot start" />
              <span className="mobile-education-dot end" />
            </div>
            <span>2028</span>
          </div>
        </div>
      </article>
    </section>
  );
}
