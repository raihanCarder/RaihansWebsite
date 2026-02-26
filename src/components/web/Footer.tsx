import { go } from "../../utils/scrollTo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-brand">
            <p className="footer-title">Raihan Carder</p>
            <p className="footer-tagline">
              A UofT Computer Science student and an aspiring Software Engineer
            </p>
          </div>
          <div className="footer-actions">
            <a className="footer-link" href="#" onClick={go("top")}>
              Back to top
            </a>
            <div className="footer-links">
              <a
                className="icon-link"
                href="mailto:raihancarder@gmail.com"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm0 2.2V18h16V7.2l-7.4 4.8a1 1 0 0 1-1.2 0L4 7.2zm1.7-.2L12 10.8 18.3 7H5.7z" />
                </svg>
              </a>
              <a
                className="icon-link"
                href="https://github.com/raihanCarder"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-3.16 19.48c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.18-3.35-1.18-.45-1.15-1.1-1.45-1.1-1.45-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.35-2.21-.25-4.54-1.1-4.54-4.9 0-1.08.39-1.96 1.03-2.65-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.69 1.03 1.57 1.03 2.65 0 3.81-2.33 4.64-4.55 4.88.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2z" />
                </svg>
              </a>
              <a
                className="icon-link"
                href="https://www.linkedin.com/in/raihan-carder/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.94 8.5V20H3.5V8.5h3.44zM5.22 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM20.5 13.3V20h-3.43v-6.2c0-1.6-.57-2.7-1.98-2.7-1.08 0-1.72.72-2 1.41-.1.26-.12.62-.12.99V20H9.53s.05-10.7 0-11.5h3.44v1.63c.46-.7 1.28-1.7 3.12-1.7 2.28 0 3.99 1.5 3.99 4.87z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <p className="footer-text">Created by Raihan Carder</p>
      </div>
    </footer>
  );
}
