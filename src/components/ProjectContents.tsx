import Skill from "./ProjectSkill";

type ProjectContentProps = {
  title: string;
  description: string;
  image: string;
  skills: string[];
  completed: boolean;
  timeline?: string;
  links?: {
    github?: string;
    live?: string;
    other?: string;
  };
  awards?: string[];
};

export default function ProjectContent({
  title,
  description,
  image,
  skills,
  completed,
  timeline,
  links,
  awards,
}: ProjectContentProps) {
  const githubLink = links?.github;
  const liveLink = links?.live;
  const otherLink = links?.other;
  const awardList = awards ?? [];
  const hasLinks = Boolean(githubLink || liveLink || otherLink);
  const hasAwards = awardList.length > 0;

  return (
    <>
      <div className="project-image">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
      </div>
      <div className="project-body">
        <div className="project-meta">
          <div className="project-title">
            <h3>{title}</h3>
            {hasLinks ? (
              <div className="project-links">
                {githubLink ? (
                  <a
                    className="link-chip"
                    href={githubLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${title} GitHub`}
                    title="GitHub"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2a10 10 0 0 0-3.16 19.48c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.18-3.35-1.18-.45-1.15-1.1-1.45-1.1-1.45-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.35-2.21-.25-4.54-1.1-4.54-4.9 0-1.08.39-1.96 1.03-2.65-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.69 1.03 1.57 1.03 2.65 0 3.81-2.33 4.64-4.55 4.88.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2z" />
                    </svg>
                  </a>
                ) : null}
                {liveLink ? (
                  <a
                    className="link-chip"
                    href={liveLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${title} Live demo`}
                    title="Live demo"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M14 3h7v7h-2V6.41l-8.3 8.3-1.4-1.42 8.3-8.3H14V3zM5 5h6v2H7v10h10v-4h2v6H5V5z" />
                    </svg>
                  </a>
                ) : null}
                {otherLink ? (
                  <a
                    className="link-chip"
                    href={otherLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${title} Link`}
                    title="Link"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <rect
                        x="3.5"
                        y="3.5"
                        width="17"
                        height="17"
                        rx="4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                      <text
                        x="12"
                        y="15"
                        textAnchor="middle"
                        fontSize="8.5"
                        fontWeight="700"
                        fontFamily="Outfit, system-ui, sans-serif"
                        fill="currentColor"
                      >
                        DP
                      </text>
                    </svg>
                  </a>
                ) : null}
              </div>
            ) : null}
            {hasAwards ? (
              <div className="project-awards" aria-label={`${title} awards`}>
                {awardList.map((award) => (
                  <div key={award} className="project-award-item">
                    <span className="award-emoji" aria-hidden="true">
                      🏆
                    </span>
                    <span className="award-text">{award}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <div className="project-meta-right">
            <span
              className={`project-status ${completed ? "done" : "in-progress"}`}
            >
              {completed ? "Completed" : "In Progress"}
            </span>
            <div className="project-timeline">
              <span className="timeline-label">Timeline</span>
              <span className="timeline-value">
                {timeline ? timeline : "Add timeline"}
              </span>
            </div>
          </div>
        </div>
        <p>{description}</p>
        <div className="skills-row">
          {skills.map((skill) => (
            <Skill key={skill} name={skill} />
          ))}
        </div>
      </div>
    </>
  );
}
