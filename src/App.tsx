import "./App.css";
import AboutSection from "./components/sections/AboutSection";
import EducationSection from "./components/sections/EducationSection";
import IntroSection from "./components/sections/IntroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SiteFooter from "./components/sections/SiteFooter";
import {
  aboutSectionContent,
  educationSectionContent,
  footerSectionContent,
  introSectionContent,
  projectsSectionContent,
} from "./data/siteContent";
import { useIntroFog } from "./hooks/useIntroFog";

function App() {
  const heroRef = useIntroFog();

  return (
    <div className="portfolio-shell">
      <main>
        <IntroSection content={introSectionContent} heroRef={heroRef} />
        <AboutSection content={aboutSectionContent} />
        <EducationSection content={educationSectionContent} />
        <ProjectsSection content={projectsSectionContent} />
      </main>
      <SiteFooter content={footerSectionContent} />
    </div>
  );
}

export default App;
