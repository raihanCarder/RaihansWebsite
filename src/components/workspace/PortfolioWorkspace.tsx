import { useEffect, useRef, useState } from "react";
import {
  BriefcaseBusiness,
  Download,
  FolderKanban,
  GitBranch,
  GraduationCap,
  Info,
  ContactRound,
  Mail,
  Menu,
  PanelLeftClose,
  type LucideIcon,
} from "lucide-react";
import headerPhoto from "../../assets/headerPhoto.jpeg";
import {
  aboutSectionContent,
  educationSectionContent,
  experienceSectionContent,
  footerSectionContent,
  introSectionContent,
  projectsSectionContent,
} from "../../data/siteContent";
import {
  ContactPage,
  ExperiencePage,
  InfoPage,
  ProjectsPage,
  SchoolPage,
} from "./WorkspacePages";

export type PageId = "info" | "experience" | "school" | "projects" | "contact";

type PageConfig = {
  id: PageId;
  label: string;
  icon: LucideIcon;
};

const PAGE_CONFIG: PageConfig[] = [
  { id: "info", label: "Info", icon: Info },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness },
  { id: "school", label: "School", icon: GraduationCap },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "contact", label: "Contact", icon: Mail },
];

const PAGE_IDS = new Set<PageId>(PAGE_CONFIG.map((page) => page.id));

const getPageFromHash = (): PageId => {
  const hash = window.location.hash.slice(1) as PageId;
  return PAGE_IDS.has(hash) ? hash : "info";
};

const findLink = (label: string) =>
  introSectionContent.links.find((link) => link.label === label)!;

const resumeLink = findLink("Download Resume");
const githubLink = findLink("GitHub");
const linkedinLink = findLink("LinkedIn");

export default function PortfolioWorkspace() {
  const [activePage, setActivePage] = useState<PageId>(getPageFromHash);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const contentRef = useRef<HTMLElement>(null);
  const activeConfig = PAGE_CONFIG.find((page) => page.id === activePage)!;

  useEffect(() => {
    const syncPageFromHash = () => {
      const page = getPageFromHash();

      if (window.location.hash !== `#${page}`) {
        window.history.replaceState(null, "", `#${page}`);
      }

      setActivePage(page);
      setIsMenuOpen(false);
    };

    syncPageFromHash();
    window.addEventListener("hashchange", syncPageFromHash);
    return () => window.removeEventListener("hashchange", syncPageFromHash);
  }, []);

  useEffect(() => {
    document.title = `${activeConfig.label} | Raihan Carder`;
    contentRef.current?.scrollTo({ top: 0 });

    const focusTimer = window.setTimeout(() => {
      contentRef.current?.querySelector<HTMLElement>("h1")?.focus();
    }, 0);

    return () => window.clearTimeout(focusTimer);
  }, [activeConfig.label]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const navigateTo = (page: PageId) => {
    if (page === activePage) {
      contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
      contentRef.current?.querySelector<HTMLElement>("h1")?.focus();
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="workspace">
      <aside className={`workspace-sidebar${isMenuOpen ? " is-open" : ""}`}>
        <div className="sidebar-header">
          <a
            className="workspace-identity"
            href="#info"
            onClick={() => navigateTo("info")}
          >
            <img src={headerPhoto} alt="" />
            <span>
              <strong>Raihan Carder</strong>
              <small>Portfolio workspace</small>
            </span>
          </a>
          <button
            className="icon-button sidebar-close"
            type="button"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close navigation"
            title="Close navigation"
          >
            <PanelLeftClose aria-hidden="true" />
          </button>
        </div>

        <nav className="sidebar-nav" aria-label="Portfolio pages">
          <p className="sidebar-label">Pages</p>
          {PAGE_CONFIG.map(({ id, label, icon: Icon }) => (
            <a
              className={`sidebar-link${activePage === id ? " is-active" : ""}`}
              href={`#${id}`}
              aria-current={activePage === id ? "page" : undefined}
              key={id}
              onClick={() => navigateTo(id)}
            >
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </a>
          ))}

          <p className="sidebar-label sidebar-label-secondary">Shortcuts</p>
          <a
            className="sidebar-link"
            href={resumeLink.href}
            download={resumeLink.downloadFileName}
          >
            <Download aria-hidden="true" />
            <span>Resume</span>
          </a>
          <a
            className="sidebar-link"
            href={githubLink.href}
            target="_blank"
            rel="noreferrer"
          >
            <GitBranch aria-hidden="true" />
            <span>GitHub</span>
          </a>
          <a
            className="sidebar-link"
            href={linkedinLink.href}
            target="_blank"
            rel="noreferrer"
          >
            <ContactRound aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
        </nav>
      </aside>

      {isMenuOpen ? (
        <button
          className="sidebar-backdrop"
          type="button"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close navigation"
        />
      ) : null}

      <div className="workspace-main">
        <header className="workspace-topbar">
          <div className="topbar-page">
            <button
              className="icon-button mobile-menu-button"
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open navigation"
              aria-expanded={isMenuOpen}
              title="Open navigation"
            >
              <Menu aria-hidden="true" />
            </button>
            <activeConfig.icon aria-hidden="true" />
            <span>{activeConfig.label}</span>
          </div>
          <nav className="topbar-actions" aria-label="Quick links">
            <a
              className="icon-button"
              href={githubLink.href}
              target="_blank"
              rel="noreferrer"
              aria-label="Open GitHub"
              title="GitHub"
            >
              <GitBranch aria-hidden="true" />
            </a>
            <a
              className="icon-button"
              href={linkedinLink.href}
              target="_blank"
              rel="noreferrer"
              aria-label="Open LinkedIn"
              title="LinkedIn"
            >
              <ContactRound aria-hidden="true" />
            </a>
          </nav>
        </header>

        <main className="workspace-content" ref={contentRef}>
          {activePage === "info" ? (
            <InfoPage intro={introSectionContent} about={aboutSectionContent} />
          ) : null}
          {activePage === "experience" ? (
            <ExperiencePage content={experienceSectionContent} />
          ) : null}
          {activePage === "school" ? (
            <SchoolPage content={educationSectionContent} />
          ) : null}
          {activePage === "projects" ? (
            <ProjectsPage content={projectsSectionContent} />
          ) : null}
          {activePage === "contact" ? (
            <ContactPage
              intro={introSectionContent}
              footer={footerSectionContent}
            />
          ) : null}
        </main>
      </div>
    </div>
  );
}
