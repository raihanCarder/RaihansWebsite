import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import type { ReactNode } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import CanonicalLocation from "./components/CanonicalLocation";
import PortfolioWorkspace from "./components/workspace/PortfolioWorkspace";
import {
  ContactPage,
  ExperiencePage,
  InfoPage,
  ProjectsPage,
  SchoolPage,
} from "./components/workspace/WorkspacePages";
import { PAGE_CONFIG, type PageId } from "./data/pageRoutes";
import {
  aboutSectionContent,
  educationSectionContent,
  experienceSectionContent,
  footerSectionContent,
  introSectionContent,
  projectsSectionContent,
} from "./data/siteContent";

const PAGE_CONTENT = {
  info: <InfoPage intro={introSectionContent} about={aboutSectionContent} />,
  experience: <ExperiencePage content={experienceSectionContent} />,
  school: <SchoolPage content={educationSectionContent} />,
  projects: <ProjectsPage content={projectsSectionContent} />,
  contact: <ContactPage intro={introSectionContent} footer={footerSectionContent} />,
} satisfies Record<PageId, ReactNode>;

function App() {
  return (
    <>
      <CanonicalLocation>
        <Routes>
          <Route element={<PortfolioWorkspace />}>
            {PAGE_CONFIG.map(({ id, path }) => (
              <Route key={id} path={path} element={PAGE_CONTENT[id]} />
            ))}
          </Route>
        </Routes>
      </CanonicalLocation>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
