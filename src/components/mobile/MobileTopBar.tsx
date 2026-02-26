import type { MobileNavigateHandler, ThemeMode } from "./types";

type MobileTopBarProps = {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onNavigate: MobileNavigateHandler;
};

export default function MobileTopBar({
  theme,
  onToggleTheme,
  onNavigate,
}: MobileTopBarProps) {
  return (
    <header className="mobile-topbar">
      <div className="mobile-topbar-inner">
        <a className="mobile-brand" href="#" onClick={onNavigate("top")}>
          <span className="mobile-brand-mark" aria-hidden="true">
            RC
          </span>
          <span className="mobile-brand-copy">
            <strong>Raihan Carder</strong>
            <small>Aspiring Software Engineer</small>
          </span>
        </a>
        <div className="mobile-top-actions">
          <a
            className="mobile-icon-button"
            href="https://github.com/raihanCarder"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2a10 10 0 0 0-3.16 19.48c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.18-3.35-1.18-.45-1.15-1.1-1.45-1.1-1.45-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.35-2.21-.25-4.54-1.1-4.54-4.9 0-1.08.39-1.96 1.03-2.65-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.69 1.03 1.57 1.03 2.65 0 3.81-2.33 4.64-4.55 4.88.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2z" />
            </svg>
          </a>
          <button
            type="button"
            className="mobile-icon-button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3.2a.8.8 0 0 1 .8.8v1.9a.8.8 0 1 1-1.6 0V4a.8.8 0 0 1 .8-.8zm0 13.9a4.1 4.1 0 1 0 0-8.2 4.1 4.1 0 0 0 0 8.2zm8-4.1a.8.8 0 0 1 .8-.8h1.9a.8.8 0 1 1 0 1.6H20.8a.8.8 0 0 1-.8-.8zM12 18.2a.8.8 0 0 1 .8.8v1.9a.8.8 0 1 1-1.6 0V19a.8.8 0 0 1 .8-.8zm-8-5a.8.8 0 0 1 .8-.8h1.9a.8.8 0 1 1 0 1.6H4.8a.8.8 0 0 1-.8-.8zm13.2-5.6a.8.8 0 0 1 1.1 0l1.3 1.3a.8.8 0 1 1-1.1 1.1l-1.3-1.3a.8.8 0 0 1 0-1.1zM5.7 17.2a.8.8 0 0 1 1.1 0l1.3 1.3a.8.8 0 0 1-1.1 1.1l-1.3-1.3a.8.8 0 0 1 0-1.1zm12.6 2.4a.8.8 0 0 1-1.1 0l-1.3-1.3a.8.8 0 1 1 1.1-1.1l1.3 1.3a.8.8 0 0 1 0 1.1zM5.7 6.5a.8.8 0 0 1 0 1.1L4.4 8.9a.8.8 0 1 1-1.1-1.1l1.3-1.3a.8.8 0 0 1 1.1 0z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.7 3.2a.8.8 0 0 1 .7.9 7.1 7.1 0 0 0 7.6 8 7.8 7.8 0 1 1-8.4-8.9.8.8 0 0 1 .1 1.6 6.2 6.2 0 1 0 6.3 7.1 8.7 8.7 0 0 1-8.5-8.7.8.8 0 0 1 .2-.7.8.8 0 0 1 .7-.3z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
