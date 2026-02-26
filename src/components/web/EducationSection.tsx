import UoftPhoto from "../../assets/uoftSign.jpg";
import EducationTimeline from "./EducationTimeline";
import EducationHeader from "./EducationHeader";

export default function EducationSection() {
  return (
    <section className="section alt" id="education">
      <div className="section-inner split">
        <h2>Education</h2>
        <div className="education-grid">
          <div className="education-card">
            <EducationHeader />
            <p className="education-coursework">
              Relevant Coursework: Software Design (CSCB07), Software Tools and
              Systems Programming (CSCB09), Data Structures and Algorithms
              (CSCB63)
            </p>
            <EducationTimeline />
          </div>
          <div className="education-image">
            <img
              src={UoftPhoto}
              alt="UofT Scarborough campus"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
