import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowSquareOut,
  ChartLineUp,
  Compass,
  Cpu,
  DotsNine,
  FolderOpen,
  List,
  MagnifyingGlass,
  PaintBrush,
  Shapes,
  Sparkle,
  Stack,
  TreeStructure,
  X,
} from "@phosphor-icons/react";
import BlueprintScene from "./components/BlueprintScene.jsx";
import {
  archetypes,
  profile,
  projectCaseStudies,
  tableOfContents,
} from "./data/portfolioData.js";

const iconMap = {
  chart: ChartLineUp,
  compass: Compass,
  cpu: Cpu,
  dots: DotsNine,
  folder: FolderOpen,
  network: TreeStructure,
  paint: PaintBrush,
  search: MagnifyingGlass,
  shapes: Shapes,
  sparkle: Sparkle,
  stack: Stack,
};

const projectById = new Map(projectCaseStudies.map((project) => [project.id, project]));
const renderRevision = "mockup-fix-2026-06-11-browser-chrome";

function getRecommendedProjects(active) {
  const recommendedIds = active.projectIds?.length
    ? active.projectIds
    : projectCaseStudies.map((project) => project.id);

  return recommendedIds
    .map((projectId) => projectById.get(projectId))
    .filter(Boolean);
}

function getInitialArchetypeId() {
  if (typeof window === "undefined") {
    return archetypes[0].id;
  }

  const idFromHash = window.location.hash.replace("#", "");
  return isArchetypeId(idFromHash) ? idFromHash : archetypes[0].id;
}

function isArchetypeId(id) {
  return archetypes.some((archetype) => archetype.id === id);
}

function scrollToSectionHash(id) {
  if (!id || isArchetypeId(id)) {
    return;
  }

  window.requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({ block: "start" });
  });
}

function Icon({ name, size = 28 }) {
  const IconComponent = iconMap[name] ?? Sparkle;
  return <IconComponent size={size} weight="regular" aria-hidden="true" />;
}

function TopBar({ menuOpen, setMenuOpen }) {
  return (
    <header className="topbar">
      <a className="brand" href="#overview" aria-label="Go to overview">
        {profile.initials}
      </a>
      <div className="deck-meta" aria-label="Portfolio metadata">
        <span>{profile.deckLabel}</span>
        <span>{profile.version}</span>
      </div>
      <nav className="topnav" aria-label="Primary navigation">
        <a href="#case-studies">Case Studies</a>
        <a href="#evidence">Evidence</a>
        <a href="#contact">Contact</a>
      </nav>
      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((current) => !current)}
      >
        {menuOpen ? <X size={24} /> : <List size={26} />}
      </button>
    </header>
  );
}

function MobileMenu({ open, onClose }) {
  return (
    <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <a href="#overview" onClick={onClose}>
        Overview
      </a>
      <a href="#lenses" onClick={onClose}>
        Lenses
      </a>
      <a href="#case-studies" onClick={onClose}>
        Case Studies
      </a>
      <a href="#evidence" onClick={onClose}>
        Evidence
      </a>
      <a href="#contact" onClick={onClose}>
        Contact
      </a>
    </div>
  );
}

function TableOfContents({ activeId }) {
  return (
    <aside className="toc-panel" aria-label="Table of contents">
      <div className="measurement-rail" aria-hidden="true">
        <span>120</span>
        <span>240</span>
        <span>360</span>
        <span>480</span>
        <span>720</span>
      </div>
      <div className="toc-card">
        <div className="toc-title">
          <span className="square-mark" aria-hidden="true" />
          Table of Contents
        </div>
        <ol className="toc-list">
          {tableOfContents.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="toc-link">
                <span>{section.number}</span>
                {section.label}
              </a>
              <ol>
                {section.items.map((item, index) => (
                  <li key={item}>
                    <span>{section.number[1]}.{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </div>
      <div className="field-guide-card">
        <span>Field Guide</span>
        <strong>K. Mgoqi</strong>
        <p>{profile.locationLabel}</p>
        <p>Current source of truth: editable portfolio data.</p>
        <div className="target-mark" aria-hidden="true" />
      </div>
      <p className="archive-note">Active hash: #{activeId}</p>
    </aside>
  );
}

function ActiveLensPanel({ activeId, onSelect }) {
  return (
    <section className="active-lens-panel" id="lenses" aria-labelledby="active-lens-heading">
      <div className="panel-title" id="active-lens-heading">
        Active Lens
        <Sparkle size={18} weight="regular" aria-hidden="true" />
      </div>
      <div className="lens-list" role="list">
        {archetypes.map((archetype) => {
          const selected = archetype.id === activeId;

          return (
            <button
              className={`lens-row ${selected ? "is-selected" : ""}`}
              key={archetype.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onSelect(archetype.id)}
            >
              <span className="lens-icon">
                <Icon name={archetype.icon} size={38} />
              </span>
              <span className="lens-label">{archetype.label}</span>
              <span className="lens-number">{archetype.number}</span>
              <ArrowRight size={20} weight="regular" aria-hidden="true" />
            </button>
          );
        })}
      </div>
      <p className="lens-footnote">
        Switch lenses to see how the same editable profile can emphasize different
        audiences, skills, and proof.
      </p>
    </section>
  );
}

function Hero({ active, activeId, onSelect }) {
  return (
    <section className="hero-grid" id="overview" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="section-index">01 - Overview</p>
        <h1 id="hero-heading">
          <span>Khangelani</span>
          <span>Mgoqi</span>
        </h1>
        <h2>{profile.introTitle}</h2>
        <p className="lead">{profile.introduction}</p>
        <p>{profile.usage}</p>
        <div className="data-status" role="note">
          {profile.dataStatus}
        </div>
      </div>

      <figure className="hero-figure">
        <BlueprintScene
          active={active}
          activeId={activeId}
          archetypes={archetypes}
          onSelect={onSelect}
        />
        <figcaption>Fig. 01 - editable role model</figcaption>
      </figure>

      <ActiveLensPanel activeId={activeId} onSelect={onSelect} />
    </section>
  );
}

function LensNarrative({ active }) {
  return (
    <section className="lens-narrative" aria-labelledby="lens-narrative-heading">
      <div>
        <p className="section-index">02 - Lens Profile</p>
        <h2 id="lens-narrative-heading">{active.label}</h2>
        <p className="lens-headline">{active.headline}</p>
      </div>
      <div>
        <p>{active.narrative}</p>
        <ul className="focus-list" aria-label={`${active.label} focus areas`}>
          {active.focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PhoneMockup({ src, alt = "", featured = false }) {
  return (
    <div className={`phone-mockup ${featured ? "is-featured" : ""}`}>
      <span className="phone-notch" aria-hidden="true" />
      <span className="phone-speaker" aria-hidden="true" />
      <img src={src} alt={alt} />
    </div>
  );
}

function BrowserMockup({ src, alt, url }) {
  return (
    <div className="browser-mockup">
      <div className="browser-toolbar" aria-hidden="true">
        <span className="browser-lights">
          <span />
          <span />
          <span />
        </span>
        <span className="browser-url">
          <span className="browser-secure-dot" />
          <span>{url}</span>
        </span>
        <span className="browser-actions">
          <span />
          <span />
        </span>
      </div>
      <div className="browser-viewport">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

function TabletMockup({ src, alt }) {
  return (
    <div className="tablet-pair">
      <div className="tablet-mockup">
        <span className="tablet-camera" aria-hidden="true" />
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

function CaseBoardMockup({ src, alt }) {
  return (
    <div className="case-board-mockup">
      <img src={src} alt={alt} />
    </div>
  );
}

function ProjectMockup({ project }) {
  if (project.id === "idiyprop") {
    return <CaseBoardMockup src={project.image} alt={project.imageAlt} />;
  }

  if (project.mockup?.type === "phone-cluster") {
    return (
      <div className="phone-cluster-mockup">
        {project.mockup.screens.map((screen, index) => (
          <PhoneMockup
            key={`${project.id}-${screen}`}
            src={screen}
            alt={index === 0 ? project.imageAlt : ""}
            featured={index === 0}
          />
        ))}
      </div>
    );
  }

  if (project.mockup?.type === "browser") {
    return (
      <BrowserMockup
        src={project.image}
        alt={project.imageAlt}
        url={project.mockup.url}
      />
    );
  }

  if (project.mockup?.type === "tablet") {
    return <TabletMockup src={project.image} alt={project.imageAlt} />;
  }

  if (project.mockup?.type === "case-board") {
    return <CaseBoardMockup src={project.image} alt={project.imageAlt} />;
  }

  return <img src={project.image} alt={project.imageAlt} />;
}

function CaseStudies({ active }) {
  const recommendedProjects = useMemo(() => getRecommendedProjects(active), [active]);
  const [selectedProjectId, setSelectedProjectId] = useState(
    recommendedProjects[0]?.id ?? projectCaseStudies[0].id,
  );

  useEffect(() => {
    setSelectedProjectId(recommendedProjects[0]?.id ?? projectCaseStudies[0].id);
  }, [active.id, recommendedProjects]);

  const selectedProject =
    recommendedProjects.find((project) => project.id === selectedProjectId) ??
    recommendedProjects[0] ??
    projectCaseStudies[0];
  const selectedFit = active.projectFit?.[selectedProject.id] ?? selectedProject.impact;

  return (
    <section className="case-studies" id="case-studies" aria-labelledby="case-studies-heading">
      <div className="section-heading">
        <div>
          <p className="section-index">03 - {active.shortLabel} Project Proof</p>
          <h2 id="case-studies-heading">Recommended Case Studies</h2>
        </div>
        <p>
          {active.projectRecommendation ??
            "Project recommendations adapt to the selected archetype."}
        </p>
        <a
          href={selectedProject.sourceUrl}
          className="text-link"
          target="_blank"
          rel="noreferrer"
        >
          Open source frame <ArrowSquareOut size={18} aria-hidden="true" />
        </a>
      </div>

      <div className="project-showcase">
        <article className="project-feature" key={selectedProject.id}>
          <div className="project-media" data-project={selectedProject.id}>
            <ProjectMockup project={selectedProject} />
          </div>
          <div className="project-feature-copy">
            <div className="project-kicker">
              <span>{selectedProject.number}</span>
              <span>{selectedProject.platform}</span>
            </div>
            <h3>{selectedProject.title}</h3>
            <p className="project-summary">{selectedProject.summary}</p>
            <dl className="project-facts">
              <div>
                <dt>Status</dt>
                <dd>{selectedProject.status}</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>{selectedProject.role}</dd>
              </div>
              <div>
                <dt>Organisation</dt>
                <dd>{selectedProject.organization}</dd>
              </div>
            </dl>
            <div className="project-fit-note">
              <span>Why this fits {active.label}</span>
              <p>{selectedFit}</p>
            </div>
            <ul className="project-tags" aria-label={`${selectedProject.title} tags`}>
              {selectedProject.tags.map((tag) => (
                <li key={`${selectedProject.id}-${tag}`}>{tag}</li>
              ))}
            </ul>
          </div>
        </article>

        <div
          className="project-index"
          role="list"
          aria-label={`Select a project recommended for ${active.label}`}
        >
          {recommendedProjects.map((project) => {
            const selected = project.id === selectedProject.id;

            return (
              <button
                className={`project-index-row ${selected ? "is-selected" : ""}`}
                key={project.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setSelectedProjectId(project.id)}
              >
                <span>{project.number}</span>
                <strong>{project.title}</strong>
                <small>{active.projectFit?.[project.id] ?? project.status}</small>
              </button>
            );
          })}
        </div>
      </div>

      <div className="project-mini-grid" aria-label="Full project archive">
        {projectCaseStudies.map((project) => (
          <article className="project-mini-card" key={`${project.id}-mini`}>
            <img src={project.image} alt="" aria-hidden="true" />
            <div>
              <span>{project.number}</span>
              <h3>{project.title}</h3>
              <p>{project.platform}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function EvidenceTimeline({ active }) {
  return (
    <section className="timeline-section" id="evidence" aria-labelledby="evidence-heading">
      <div className="section-heading compact">
        <div>
          <p className="section-index">04 - Evidence</p>
          <h2 id="evidence-heading">Evidence Timeline</h2>
        </div>
        <p>A reusable path for documenting learning, projects, achievements, and proof.</p>
      </div>
      <ol className="timeline">
        {active.timeline.map((item) => (
          <li key={`${active.id}-${item.step}`}>
            <span className="timeline-dot" aria-hidden="true" />
            <small>{item.step}</small>
            <strong>{item.title}</strong>
            <p>{item.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function SkillsSection({ active }) {
  return (
    <section className="skills-section" aria-labelledby="skills-heading">
      <div>
        <p className="section-index">04.1 - Skills</p>
        <h2 id="skills-heading">Lens Emphasis</h2>
        <p>
          The source data can stay shared while each archetype changes what is
          emphasized for recruiters, clients, collaborators, or reviewers.
        </p>
      </div>
      <div className="skill-columns">
        <div>
          <span>Skill Signals</span>
          <ul>
            {active.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <span>Tool Slots</span>
          <ul>
            {active.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ active }) {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="contact-copy">
        <p className="section-index">05 - Contact</p>
        <h2 id="contact-heading">Get in touch</h2>
        <p>{active.contact}</p>
        <p className="contact-placeholder">{profile.contactLabel}</p>
        <div className="contact-actions">
          <a href="mailto:replace-with-current-email@example.com" className="primary-action">
            Draft email <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a href="#overview" className="secondary-action">
            Back to overview
          </a>
        </div>
      </div>
      <figure className="archive-figure">
        <ArchiveDiagram active={active} />
        <figcaption>Fig. 02 - evidence archive</figcaption>
      </figure>
    </section>
  );
}

function ArchiveDiagram({ active }) {
  return (
    <svg
      className="archive-diagram"
      viewBox="0 0 420 320"
      role="img"
      aria-labelledby="archive-title archive-desc"
    >
      <title id="archive-title">Evidence archive diagram</title>
      <desc id="archive-desc">
        A vector archive box containing evidence files for the selected {active.label} lens.
      </desc>
      <defs>
        <pattern id="archive-dots-pattern" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect className="archive-dots" x="0" y="0" width="420" height="320" />
      <g className="archive-guides">
        <path d="M38 42h342M38 278h342M64 28v264M356 28v264" />
        <circle cx="64" cy="42" r="7" />
        <circle cx="356" cy="278" r="7" />
        <path d="M120 52h64M120 68h44M286 236h54M286 252h38" />
      </g>
      <g className="archive-box">
        <path d="M82 144l198-78 78 58-196 86z" />
        <path d="M82 144v82l80 54v-70z" />
        <path d="M162 210v70l196-86v-70z" />
        <path d="M110 132l52 36 166-72-50-36z" />
      </g>
      <g className="archive-files" style={{ "--archive-step": Number(active.number) }}>
        <path d="M152 88l130-50 42 32-130 54z" />
        <path d="M136 110l146-56 48 36-146 60z" />
        <path d="M124 134l152-58 52 38-152 64z" />
        <path d="M174 104l64-24M184 120l80-30M195 136l54-20" />
        <path d="M222 166l74-32M230 182l60-26" />
      </g>
      <g className="archive-state">
        <path d="M280 208l34-14 34 14-34 14zM280 228l34-14 34 14-34 14z" />
        <circle cx="118" cy="214" r="19" />
        <path d="M109 214h18M118 205v18" />
      </g>
      <text className="archive-label" x="42" y="306">
        ACTIVE EVIDENCE LENS: {active.shortLabel.toUpperCase()}
      </text>
    </svg>
  );
}

export default function App() {
  const [activeId, setActiveId] = useState(getInitialArchetypeId);
  const [menuOpen, setMenuOpen] = useState(false);

  const active = useMemo(
    () => archetypes.find((archetype) => archetype.id === activeId) ?? archetypes[0],
    [activeId],
  );

  useEffect(() => {
    document.title = `${profile.name} | ${active.label}`;
  }, [active.label]);

  useEffect(() => {
    const handleHashChange = () => {
      const idFromHash = window.location.hash.replace("#", "");
      if (isArchetypeId(idFromHash)) {
        setActiveId(idFromHash);
      } else {
        scrollToSectionHash(idFromHash);
      }
    };

    scrollToSectionHash(window.location.hash.replace("#", ""));
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleSelectArchetype = (id) => {
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <>
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="page-shell" data-render-revision={renderRevision}>
        <TableOfContents activeId={activeId} />
        <main className="content-shell">
          <Hero active={active} activeId={activeId} onSelect={handleSelectArchetype} />
          <LensNarrative active={active} />
          <CaseStudies active={active} />
          <EvidenceTimeline active={active} />
          <SkillsSection active={active} />
          <ContactSection active={active} />
        </main>
      </div>
    </>
  );
}
