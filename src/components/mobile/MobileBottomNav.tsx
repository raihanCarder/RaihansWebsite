import { mobileNavItems } from "./constants";
import type { MobileNavigateHandler } from "./types";

type MobileBottomNavProps = {
  onNavigate: MobileNavigateHandler;
};

export default function MobileBottomNav({ onNavigate }: MobileBottomNavProps) {
  return (
    <nav className="mobile-bottom-nav" aria-label="Section navigation">
      {mobileNavItems.map((item) => (
        <a
          key={item.id}
          href="#"
          onClick={onNavigate(item.id)}
          className="mobile-bottom-link"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d={item.iconPath} />
          </svg>
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
