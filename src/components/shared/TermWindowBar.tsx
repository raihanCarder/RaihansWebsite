type TermWindowBarProps = {
  title: string;
};

export default function TermWindowBar({ title }: TermWindowBarProps) {
  return (
    <header className="term-bar">
      <div className="term-controls" aria-hidden="true">
        <span className="term-dot term-dot--close" />
        <span className="term-dot term-dot--min" />
        <span className="term-dot term-dot--max" />
      </div>
      <p className="term-title">{title}</p>
      <span className="term-bar-spacer" aria-hidden="true" />
    </header>
  );
}
