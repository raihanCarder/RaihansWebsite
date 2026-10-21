import {
  BriefcaseBusiness,
  FolderKanban,
  GraduationCap,
  Info,
  Mail,
} from "lucide-react";

export const PAGE_CONFIG = [
  { id: "info", path: "/", label: "Info", icon: Info },
  {
    id: "experience",
    path: "/experience",
    label: "Experience",
    icon: BriefcaseBusiness,
  },
  { id: "school", path: "/education", label: "School", icon: GraduationCap },
  { id: "projects", path: "/projects", label: "Projects", icon: FolderKanban },
  { id: "contact", path: "/contact", label: "Contact", icon: Mail },
] as const;

export type PageId = (typeof PAGE_CONFIG)[number]["id"];
