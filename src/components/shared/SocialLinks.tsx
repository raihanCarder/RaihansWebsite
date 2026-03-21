import type { LinkItem } from "../../types/site";

type SocialLinksProps = {
  links: LinkItem[];
  className: string;
  linkClassName?: string;
  ariaLabel: string;
  showIcons?: boolean;
};

const getExternalProps = (href: string) => {
  if (!href.startsWith("http")) {
    return {};
  }

  return {
    target: "_blank",
    rel: "noreferrer",
  } as const;
};

type SocialLinkIconType = "download" | "code" | "linkedin" | "mail" | "link";

const getIconType = (link: LinkItem): SocialLinkIconType => {
  const label = link.label.toLowerCase();
  const href = link.href.toLowerCase();

  if (
    link.downloadFileName ||
    label.includes("resume") ||
    label.includes("download")
  ) {
    return "download";
  }

  if (href.includes("github.com")) {
    return "code";
  }

  if (href.includes("linkedin.com")) {
    return "linkedin";
  }

  if (href.startsWith("mailto:") || label.includes("email")) {
    return "mail";
  }

  return "link";
};

function SocialLinkIcon({ iconType }: { iconType: SocialLinkIconType }) {
  switch (iconType) {
    case "download":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3v10" />
          <path d="m8 9 4 4 4-4" />
          <path d="M5 18h14" />
        </svg>
      );
    case "code":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 7 4 12l5 5" />
          <path d="m15 7 5 5-5 5" />
          <path d="M14 5 10 19" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="8.5" r="3" />
          <path d="M5.5 19c1.7-3.1 4.2-4.7 6.5-4.7s4.8 1.6 6.5 4.7" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 6.5h16v11H4z" />
          <path d="m4.5 7 7.5 6 7.5-6" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 5h5v5" />
          <path d="m9 15 10-10" />
          <path d="M5 9v10h10" />
        </svg>
      );
  }
}

export default function SocialLinks({
  links,
  className,
  linkClassName,
  ariaLabel,
  showIcons = false,
}: SocialLinksProps) {
  return (
    <nav className={className} aria-label={ariaLabel}>
      {links.map((link) => (
        <a
          className={linkClassName}
          href={link.href}
          key={link.label}
          download={link.downloadFileName}
          {...getExternalProps(link.href)}
        >
          {showIcons ? (
            <span className="social-link-icon" aria-hidden="true">
              <SocialLinkIcon iconType={getIconType(link)} />
            </span>
          ) : null}
          {link.label}
        </a>
      ))}
    </nav>
  );
}
