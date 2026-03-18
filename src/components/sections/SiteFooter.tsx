import type { FooterSectionContent } from "../../types/site";
import SocialLinks from "../shared/SocialLinks";

type SiteFooterProps = {
  content: FooterSectionContent;
};

export default function SiteFooter({ content }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer-shell">
        <div className="footer-topline">
          <SocialLinks
            ariaLabel="Footer social links"
            className="footer-socials"
            links={content.socials}
          />
          <a className="footer-email" href={`mailto:${content.email}`}>
            {content.email}
          </a>
        </div>

        <div className="footer-midline">
          <p className="footer-brand">{content.brand}</p>
          <nav className="footer-nav" aria-label="Footer navigation">
            {content.nav.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </nav>
          <p className="footer-note">{content.note}</p>
        </div>

        <a
          className="footer-marquee"
          href={content.marqueeHref}
          target="_blank"
          rel="noreferrer"
        >
          {content.marquee}
        </a>

        <div className="footer-bottomline">
          <p>{content.brand} © 2026</p>
          <p>{content.availability}</p>
        </div>
      </div>
    </footer>
  );
}
