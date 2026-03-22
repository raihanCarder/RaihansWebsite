type SectionHeadingProps = {
  tag: string;
  title: string;
  align?: "start" | "end";
};

export default function SectionHeading({
  tag,
  title,
  align = "start",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading${align === "end" ? " section-heading-end" : ""}`}>
      <p className="section-tag">{tag}</p>
      <h2>{title}</h2>
    </div>
  );
}
