import { useMemo, useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CircleUserRound,
  Code2,
  ContactRound,
  Download,
  GitBranch,
  Globe2,
  GraduationCap,
  Grid3X3,
  Info,
  Mail,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import uoftSign from "../../assets/uoftSign.jpg";
import profilePhoto from "../../assets/profile-photo.jpg";
import type {
  AboutSectionContent,
  EducationSectionContent,
  ExperienceSectionContent,
  FooterSectionContent,
  IntroSectionContent,
  LinkItem,
  Project,
  ProjectsSectionContent,
  ProjectType,
} from "../../types/site";

type PageHeaderProps = {
  icon: LucideIcon;
  iconImage?: string;
  iconImageAlt?: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  cover?: string;
  coverAlt?: string;
  coverPosition?: string;
  wide?: boolean;
};

function PageHeader({
  icon: Icon,
  iconImage,
  iconImageAlt = "",
  eyebrow,
  title,
  subtitle,
  cover,
  coverAlt = "",
  coverPosition,
  wide = false,
}: PageHeaderProps) {
  return (
    <header className={`page-header${cover ? " has-cover" : ""}`}>
      {cover ? (
        <div className="page-cover">
          <img
            src={cover}
            alt={coverAlt}
            style={{ objectPosition: coverPosition }}
          />
          <span className="page-cover-shade" aria-hidden="true" />
        </div>
      ) : null}
      <div className={`page-header-inner${wide ? " page-width-wide" : ""}`}>
        <div className="page-icon">
          {iconImage ? (
            <img src={iconImage} alt={iconImageAlt} />
          ) : (
            <Icon aria-hidden="true" />
          )}
        </div>
        <p className="page-eyebrow">{eyebrow}</p>
        <h1 tabIndex={-1}>{title}</h1>
        <p className="page-subtitle">{subtitle}</p>
      </div>
    </header>
  );
}

function PropertyRow({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="property-row">
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

const externalProps = (href: string) =>
  href.startsWith("http")
    ? ({ target: "_blank", rel: "noreferrer" } as const)
    : {};

const renderLinkIcon = (link: LinkItem) => {
  const value = `${link.label} ${link.href}`.toLowerCase();
  if (link.downloadFileName) return <Download />;
  if (value.includes("github")) return <GitBranch />;
  if (value.includes("linkedin")) return <ContactRound />;
  if (value.includes("mail")) return <Mail />;
  return <ArrowUpRight />;
};

function LinkRow({ link, detail }: { link: LinkItem; detail?: string }) {
  return (
    <a
      className="notion-link-row"
      href={link.href}
      download={link.downloadFileName}
      {...externalProps(link.href)}
    >
      <span className="link-row-icon" aria-hidden="true">
        {renderLinkIcon(link)}
      </span>
      <span className="link-row-copy">
        <strong>{link.label}</strong>
        {detail ? <small>{detail}</small> : null}
      </span>
      <ArrowUpRight className="link-row-arrow" aria-hidden="true" />
    </a>
  );
}

type InfoPageProps = {
  intro: IntroSectionContent;
  about: AboutSectionContent;
};

export function InfoPage({ intro, about }: InfoPageProps) {
  return (
    <article className="workspace-page info-page">
      <PageHeader
        icon={CircleUserRound}
        iconImage={profilePhoto}
        iconImageAlt="Raihan Carder"
        eyebrow={intro.kicker}
        title={about.name}
        subtitle={intro.summary}
        cover={about.image}
        coverAlt={about.imageAlt}
        coverPosition="center center"
      />

      <div className="page-body">
        <section className="page-section" aria-labelledby="info-overview">
          <div className="section-title-row">
            <Info aria-hidden="true" />
            <h2 id="info-overview">At a glance</h2>
          </div>
          <dl className="property-list">
            <PropertyRow label="Role">{about.role}</PropertyRow>
            <PropertyRow label="Based in">
              <span className="property-with-icon">
                <MapPin aria-hidden="true" />
                {about.basedAt}
              </span>
            </PropertyRow>
            <PropertyRow label="School">{about.school}</PropertyRow>
            <PropertyRow label="Program">{about.program}</PropertyRow>
            <PropertyRow label="Status">
              <span className="status-tag">{about.status}</span>
            </PropertyRow>
            <PropertyRow label="Now">{about.now}</PropertyRow>
          </dl>
        </section>

        <div className="page-columns">
          <section className="page-section" aria-labelledby="info-focus">
            <div className="section-title-row">
              <Code2 aria-hidden="true" />
              <h2 id="info-focus">What I focus on</h2>
            </div>
            <ul className="check-list">
              {about.focusAreas.map((area) => (
                <li key={area}>
                  <Check aria-hidden="true" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="page-section" aria-labelledby="info-off-hours">
            <div className="section-title-row">
              <CircleUserRound aria-hidden="true" />
              <h2 id="info-off-hours">Away from the keyboard</h2>
            </div>
            <p className="section-copy">{about.offHours}</p>
          </section>
        </div>

        <section className="page-section" aria-labelledby="info-links">
          <div className="section-title-row">
            <Globe2 aria-hidden="true" />
            <h2 id="info-links">Find me online</h2>
          </div>
          <div className="notion-link-list">
            {intro.links.map((link) => (
              <LinkRow link={link} key={link.label} />
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}

export function ExperiencePage({
  content,
}: {
  content: ExperienceSectionContent;
}) {
  return (
    <article className="workspace-page experience-page">
      <PageHeader
        icon={BriefcaseBusiness}
        eyebrow={content.tag}
        title={content.title}
        subtitle={content.summary}
      />

      <div className="page-body">
        <section className="page-section" aria-labelledby="experience-timeline">
          <div className="section-title-row">
            <CalendarDays aria-hidden="true" />
            <h2 id="experience-timeline">Current and upcoming roles</h2>
          </div>

          <ol className="experience-timeline">
            {content.experiences.map((experience) => (
              <li
                className={`experience-item experience-item--${experience.status}`}
                key={`${experience.company}-${experience.role}`}
              >
                <div className="experience-period">
                  <span>{experience.period}</span>
                </div>
                <div className="experience-rail" aria-hidden="true">
                  <span />
                </div>
                <article className="experience-entry">
                  <div className="experience-logo">
                    <img src={experience.logo} alt={experience.logoAlt} />
                  </div>
                  <div className="experience-copy">
                    <div className="experience-heading">
                      <div>
                        <p className="experience-company">
                          {experience.company}
                        </p>
                        <h3>{experience.role}</h3>
                        {experience.focus ? (
                          <p className="experience-focus">{experience.focus}</p>
                        ) : null}
                      </div>
                      <span
                        className={`experience-status experience-status--${experience.status}`}
                      >
                        {experience.status === "current"
                          ? "Current"
                          : "Upcoming"}
                      </span>
                    </div>
                    <p className="experience-description">
                      {experience.description}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </article>
  );
}

export function SchoolPage({ content }: { content: EducationSectionContent }) {
  return (
    <article className="workspace-page">
      <PageHeader
        icon={GraduationCap}
        eyebrow="Education"
        title={content.school}
        subtitle={`${content.degree}, specializing in ${content.specialization}.`}
        cover={uoftSign}
        coverAlt="University of Toronto sign outside a campus building"
        coverPosition="center center"
      />

      <div className="page-body">
        <section className="page-section" aria-labelledby="school-details">
          <div className="section-title-row">
            <GraduationCap aria-hidden="true" />
            <h2 id="school-details">Program details</h2>
          </div>
          <dl className="property-list">
            <PropertyRow label="Institution">{content.school}</PropertyRow>
            <PropertyRow label="Degree">{content.degree}</PropertyRow>
            <PropertyRow label="Specialization">
              <span className="tag tag-blue">{content.specialization}</span>
            </PropertyRow>
            <PropertyRow label="Current year">{content.year}</PropertyRow>
            <PropertyRow label="Graduation">{content.graduation}</PropertyRow>
            <PropertyRow label="Campus">
              <span className="property-with-icon">
                <MapPin aria-hidden="true" />
                {content.location.label}
              </span>
            </PropertyRow>
          </dl>
        </section>

        <section className="page-section" aria-labelledby="school-coursework">
          <div className="section-title-row">
            <BookOpen aria-hidden="true" />
            <h2 id="school-coursework">Relevant coursework</h2>
          </div>
          <div className="course-list">
            {content.coursework.map((course, index) => (
              <div className="course-row" key={course}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{course}</strong>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}

type FilterKey = "all" | ProjectType;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "hackathon", label: "Hackathons" },
  { key: "personal", label: "Personal" },
  { key: "coursework", label: "Coursework" },
  { key: "award", label: "Awards" },
];

const renderProjectLinkIcon = (label: string) => {
  if (label.toLowerCase() === "github") return <GitBranch />;
  return <ArrowUpRight />;
};

function ProjectGalleryCard({ project }: { project: Project }) {
  return (
    <article className="project-gallery-card">
      <div className="project-cover">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          decoding="async"
          width={project.imageWidth}
          height={project.imageHeight}
        />
      </div>
      <div className="project-card-body">
        <div className="project-heading">
          <span className="project-page-icon" aria-hidden="true">
            <Code2 />
          </span>
          <div>
            <h2>{project.title}</h2>
            <p>{project.category}</p>
          </div>
        </div>

        <div className="project-properties">
          <span>{project.timeline}</span>
          <span className="tag tag-neutral">{project.status}</span>
        </div>
        <p className="project-description">{project.summary}</p>

        {project.award ? (
          <div className="project-award">
            <Award aria-hidden="true" />
            <span>{project.award}</span>
          </div>
        ) : null}

        <div className="project-skills" aria-label="Technologies used">
          {project.skills.map((skill) => (
            <span className="tag tag-skill" key={skill}>
              {skill}
            </span>
          ))}
        </div>

        {project.links.length ? (
          <div className="project-links">
            {project.links.map((link) => {
              return (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  key={link.label}
                >
                  <span aria-hidden="true">
                    {renderProjectLinkIcon(link.label)}
                  </span>
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function ProjectsPage({ content }: { content: ProjectsSectionContent }) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const visibleProjects = useMemo(
    () =>
      activeFilter === "all"
        ? content.projects
        : content.projects.filter((project) =>
            project.projectType.includes(activeFilter),
          ),
    [activeFilter, content.projects],
  );

  return (
    <article className="workspace-page">
      <PageHeader
        icon={Grid3X3}
        eyebrow={content.tag}
        title={content.title}
        subtitle="A gallery of the products, experiments, and team builds I'm most proud of."
        cover={content.projects[0]?.image}
        coverAlt={`${content.projects[0]?.title ?? "Project"} interface preview`}
        coverPosition="center center"
        wide
      />

      <div className="page-body page-width-wide">
        <div className="project-toolbar">
          <div className="section-title-row">
            <Grid3X3 aria-hidden="true" />
            <h2>Gallery</h2>
          </div>
          <div className="filter-control" aria-label="Filter projects">
            {FILTERS.map((filter) => (
              <button
                type="button"
                className={activeFilter === filter.key ? "is-active" : ""}
                aria-pressed={activeFilter === filter.key}
                onClick={() => setActiveFilter(filter.key)}
                key={filter.key}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="project-gallery" aria-live="polite">
          {visibleProjects.map((project) => (
            <ProjectGalleryCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </article>
  );
}

type ContactPageProps = {
  intro: IntroSectionContent;
  footer: FooterSectionContent;
};

export function ContactPage({ intro, footer }: ContactPageProps) {
  const resume = intro.links.find((link) => link.downloadFileName)!;
  const contactLinks: LinkItem[] = [
    { label: "Email", href: `mailto:${footer.email}` },
    ...footer.socials.filter((link) => link.label !== "Email"),
    resume,
  ];

  return (
    <article className="workspace-page contact-page">
      <PageHeader
        icon={Mail}
        eyebrow="Contact"
        title="Let's build something meaningful."
        subtitle={footer.availability}
      />

      <div className="page-body">
        <section className="page-section" aria-labelledby="contact-links">
          <div className="section-title-row">
            <Globe2 aria-hidden="true" />
            <h2 id="contact-links">Links</h2>
          </div>
          <div className="notion-link-list">
            {contactLinks.map((link) => (
              <LinkRow
                link={link}
                detail={link.label === "Email" ? footer.email : undefined}
                key={link.label}
              />
            ))}
          </div>
        </section>

        <section
          className="page-section contact-note"
          aria-labelledby="contact-note"
        >
          <div className="section-title-row">
            <Info aria-hidden="true" />
            <h2 id="contact-note">A little context</h2>
          </div>
          <p className="section-copy">{footer.note}</p>
          <span className="contact-location">
            <MapPin aria-hidden="true" />
            Toronto, Ontario
          </span>
        </section>

        <footer className="page-footer">
          <span>{footer.brand} © 2026</span>
          <span>Designed and built in Toronto.</span>
        </footer>
      </div>
    </article>
  );
}
