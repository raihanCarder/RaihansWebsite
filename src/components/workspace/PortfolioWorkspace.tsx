import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import {
  Download,
  GitBranch,
  ContactRound,
  Menu,
  PanelLeftClose,
} from "lucide-react";
import headerPhoto from "../../assets/headerPhoto.jpeg";
import { PAGE_CONFIG } from "../../data/pageRoutes";
import { introSectionContent } from "../../data/siteContent";

const findLink = (label: string) =>
  introSectionContent.links.find((link) => link.label === label)!;

const resumeLink = findLink("Download Resume");
const githubLink = findLink("GitHub");
const linkedinLink = findLink("LinkedIn");

export default function PortfolioWorkspace() {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const contentRef = useRef<HTMLElement>(null);
  const activeConfig = PAGE_CONFIG.find((page) => page.path === pathname)!;

  useEffect(() => {
    document.title = `${activeConfig.label} | Raihan Carder`;
    contentRef.current?.scrollTo({ top: 0, behavior: "instant" });

    const focusTimer = window.setTimeout(() => {
      setIsMenuOpen(false);
      contentRef.current
        ?.querySelector<HTMLElement>("h1")
        ?.focus({ preventScroll: true });
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

  const navigateTo = (event: MouseEvent<HTMLAnchorElement>, path: string) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    if (path === pathname) {
      event.preventDefault();
      contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
      contentRef.current
        ?.querySelector<HTMLElement>("h1")
        ?.focus({ preventScroll: true });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="workspace">
      <aside className={`workspace-sidebar${isMenuOpen ? " is-open" : ""}`}>
        <div className="sidebar-header">
          <Link
            className="workspace-identity"
            to="/"
            onClick={(event) => navigateTo(event, "/")}
          >
            <img src={headerPhoto} alt="" />
            <span>
              <strong>Raihan Carder</strong>
              <small>Portfolio workspace</small>
            </span>
          </Link>
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
          {PAGE_CONFIG.map(({ id, path, label, icon: Icon }) => (
            <NavLink
              className={({ isActive }) =>
                `sidebar-link${isActive ? " is-active" : ""}`
              }
              to={path}
              end
              key={id}
              onClick={(event) => navigateTo(event, path)}
            >
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </NavLink>
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
          <Outlet />
        </main>
      </div>
    </div>
  );
}
