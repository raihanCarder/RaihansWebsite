type SectionHeadingProps = {
  tag: string;
  title: string;
};

export default function SectionHeading({ tag, title }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-tag">{tag}</p>
      <h2>{title}</h2>
    </div>
  );
}
