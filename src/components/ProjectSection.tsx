import Project from "./Project";
import SmartAirPhoto from "../assets/smartAirPhoto.png";
import Music4YouPhoto from "../assets/Music4YouLogo.png";
import EzFormPhoto from "../assets/ezFormPhoto.jpeg";
import PortfolioSitePhoto from "../assets/portfolioSite.png";
import Argus from "../assets/argus_dashboard.png";

export default function ProjectSection() {
  return (
    <section className="section" id="projects">
      <div className="section-inner wide">
        <h2>Projects</h2>
        <div className="cards">
          <Project
            title="Smart Air"
            description="SMART AIR is a kid-friendly Android app designed to help children (ages 6–16) understand asthma, practice correct inhaler technique, log symptoms and medication use, and share parent-approved health information with healthcare providers through a secure, controlled interface."
            image={SmartAirPhoto}
            skills={[
              "Java",
              "Android SDK",
              "Firebase",
              "Collaboration",
              "Teamwork",
              "Agile Methodologies",
            ]}
            timeline="Sept 2025 - Dec 2025"
            links={{
              github: "https://github.com/raihanCarder/Smart-Air-App",
            }}
            completed
          />
          <Project
            title="Argus"
            description="Argus is a GovTech intelligence platform that helps startups surface government opportunities before they hit the RFP stage. A user describes their startup, the backend collects live signals with caching and fallback, and the UI ranks the best matches on a globe with clear, actionable details."
            image={Argus}
            skills={[
              "FastAPI",
              "Next.js",
              "React",
              "Collaboration",
              "Hackathon",
              "Google Gemini API",
              "Python",
              "TypeScript",
              "Firebase",
            ]}
            timeline="February 2026"
            links={{
              github: "https://github.com/raihanCarder",
              live: "https://argus-macathon.vercel.app/",
              other: "https://devpost.com/software/argus-uipa2c",
            }}
            completed
          />
          <Project
            title="Music4You"
            description="Music4You is a personal full-stack web project inspired by my love for music, rating media, and platforms like IMDb and Letterboxd. The goal is to create a space where people can rate music, discover shared tastes, and connect with friends through their listening preferences."
            image={Music4YouPhoto}
            skills={[
              "Next.js",
              "React",
              "TypeScript",
              "Supabase",
              "PostgreSQL",
            ]}
            timeline="Dec 2025 - Present"
            links={{ github: "", live: "", other: "" }}
            completed={false}
          />
          <Project
            title="Ez Form"
            description="Ez Form lets users upload a PDF form, then have a voice conversation to fill it out. The app extracts form fields, asks questions aloud, listens to spoken responses, tracks completion, and generates a filled PDF for download. The result is a completed form without ever touching a keyboard."
            image={EzFormPhoto}
            skills={[
              "FastAPI",
              "React",
              "TypeScript",
              "Python",
              "Google Gemini API",
              "Hackathon",
              "Accessibility",
            ]}
            timeline="January 2026"
            links={{
              github: "https://github.com/raihanCarder/Ez-Form",
              other:
                "https://devpost.com/software/ez-form?ref_content=my-projects-tab&ref_feature=my_projects",
            }}
            completed
          />

          <Project
            title="My Website"
            description="Raihan Carder's Portfolio Website (This site)"
            image={PortfolioSitePhoto}
            skills={["TypeScript", "React", "Portfolio"]}
            timeline="Dec 2025 - Present"
            links={{
              github: "https://github.com/raihanCarder/raihanCarder.github.io",
            }}
            completed
          />
        </div>
      </div>
    </section>
  );
}
