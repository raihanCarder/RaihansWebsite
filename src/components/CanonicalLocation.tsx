import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";
import { PAGE_CONFIG } from "../data/pageRoutes";

export default function CanonicalLocation({ children }: { children: ReactNode }) {
  const { pathname, search, hash } = useLocation();
  const legacyPage =
    pathname === "/"
      ? PAGE_CONFIG.find((page) => `#${page.id}` === hash)
      : undefined;
  const page = legacyPage ?? PAGE_CONFIG.find((page) => page.path === pathname);
  const canonicalPath = page?.path ?? "/";

  if (pathname !== canonicalPath || hash) {
    return (
      <Navigate
        replace
        to={{ pathname: canonicalPath, search, hash: "" }}
      />
    );
  }

  return children;
}
