type SkillProps = {
  name: string;
};

function ProjectSkill({ name }: SkillProps) {
  const skillColors: Record<string, { background: string; text: string }> = {
    React: { background: "#d8f0ff", text: "#0b4d6b" },
    TypeScript: { background: "#e0e7ff", text: "#1e3a8a" },
    JavaScript: { background: "#fef3c7", text: "#92400e" },
    HTML: { background: "#ffe4e6", text: "#9f1239" },
    CSS: { background: "#e0f2fe", text: "#075985" },
    Java: { background: "#fee2e2", text: "#991b1b" },
    "Android SDK": { background: "#dcfce7", text: "#166534" },
    Firebase: { background: "#fff1c7", text: "#b45309" },
    "Agile Methodologies": { background: "#ffedd5", text: "#9a3412" },
    Collaboration: { background: "#f3e8ff", text: "#6b21a8" },
    Teamwork: { background: "#dbeafe", text: "#1d4ed8" },
    "Next.js": { background: "#111827", text: "#f9fafb" },
    Supabase: { background: "#ccfbf1", text: "#0f766e" },
    PostgreSQL: { background: "#e0f2fe", text: "#1e40af" },
    FastAPI: { background: "#ccfbf1", text: "#0f766e" },
    Python: { background: "#fde68a", text: "#92400e" },
    "Google Gemini API": { background: "#e0e7ff", text: "#3730a3" },
    Hackathon: { background: "#fae8ff", text: "#7e22ce" },
    "Hackathon Winner": { background: "#fef3c7", text: "#92400e" },
    Accessibility: { background: "#ecfccb", text: "#3f6212" },
    MongoDB: { background: "#dcfce7", text: "#166534" },
    Tailwind: { background: "#cffafe", text: "#0e7490" },
    "Visual Crossing API": { background: "#cffafe", text: "#0e7490" },
    Portfolio: { background: "#d1fae5", text: "#065f46" },
  };

  const color = skillColors[name];
  const style = color
    ? { background: color.background, color: color.text }
    : undefined;

  return (
    <span className="skill-pill" style={style}>
      {name}
    </span>
  );
}

export default ProjectSkill;
