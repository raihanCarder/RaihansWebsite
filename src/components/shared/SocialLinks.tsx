import type { LinkItem } from "../../types/site";

type SocialLinksProps = {
  links: LinkItem[];
  className: string;
  linkClassName?: string;
  ariaLabel: string;
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

export default function SocialLinks({
  links,
  className,
  linkClassName,
  ariaLabel,
}: SocialLinksProps) {
  const resolvedLinkClassName = linkClassName || undefined;

  return (
    <div className={className} aria-label={ariaLabel}>
      {links.map((link) => (
        <a
          className={resolvedLinkClassName}
          href={link.href}
          key={link.label}
          download={link.downloadFileName}
          {...getExternalProps(link.href)}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
