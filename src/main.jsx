import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Grid3X3,
  Instagram,
  Mail,
  Monitor,
  MousePointer2,
  Palette,
  PenTool,
  PlayCircle,
  Sparkle,
  UserRound,
  Wand2,
  Wrench,
  Zap
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    id: "poster",
    number: "01",
    title: "Poster Series",
    label: "Poster",
    subtitle: "Powerful Words",
    date: "Feb 2020",
    discipline: "Typography, Print Design",
    tools: "Illustrator, Photoshop, InDesign",
    skills: ["Typography", "Layout", "Composition", "Print", "Concept Development", "Visual Communication"],
    description:
      "Typographic poster explorations that play with scale, composition and texture to communicate impactful messages.",
    image: "/portfolio-assets/intro/ar.png",
    heroImage: "/portfolio-assets/projects/poster-final.jpg",
    accent: "#ff6d61",
    preview: "A bold print system shaped around expressive type and message-led visual rhythm."
  },
  {
    id: "ar",
    number: "02",
    title: "AR Study",
    label: "AR",
    subtitle: "Layered Reality",
    date: "Mar 2020",
    discipline: "Spatial Interaction, AR",
    tools: "Adobe Aero, Photoshop, Prototyping",
    skills: ["Storyboarding", "Interaction", "Spatial Thinking", "Prototype Testing"],
    description:
      "An augmented reality concept built around image targets, animated reveals and a playful bridge between print and screen.",
    image: "/portfolio-assets/intro/poster.png",
    heroImage: "/portfolio-assets/projects/ar.png",
    accent: "#72c7c4",
    preview: "A compact spatial prototype that turns a flat school brief into an exploratory digital layer."
  },
  {
    id: "motion",
    number: "03",
    title: "Motion Reel",
    label: "Motion",
    subtitle: "Visual Rhythm",
    date: "Apr 2020",
    discipline: "Motion Graphics",
    tools: "After Effects, Illustrator",
    skills: ["Timing", "Transitions", "Story Beats", "Composition"],
    description:
      "A motion graphics exercise focused on pacing, shape movement and composition choices that make static marks feel alive.",
    image: "/portfolio-assets/intro/web.png",
    heroImage: "/portfolio-assets/intro/motion.png",
    accent: "#f29a21",
    preview: "Shape, timing and energy studies translated into a clean digital motion system."
  },
  {
    id: "web",
    number: "04",
    title: "Web Archive",
    label: "Web",
    subtitle: "Interactive Build",
    date: "May 2020",
    discipline: "Web Design, Front-End",
    tools: "HTML, CSS, JavaScript",
    skills: ["Responsive Layout", "Interaction", "Content Structure", "Code"],
    description:
      "The original portfolio structure rebuilt with stronger navigation, clearer case-study framing and a more resilient front-end system.",
    image: "/portfolio-assets/intro/ui.png",
    heroImage: "/portfolio-assets/projects/web-planning.jpg",
    accent: "#29aaf2",
    preview: "A web design project that connects the old carousel idea to a modern project browser."
  },
  {
    id: "ui",
    number: "05",
    title: "Doggo UI",
    label: "UI",
    subtitle: "Companion App",
    date: "Jun 2020",
    discipline: "Mobile UI/UX",
    tools: "XD, Illustrator, Photoshop",
    skills: ["Flows", "Wireframes", "Mobile UI", "Design Systems"],
    description:
      "A mobile companion app concept with onboarding, profile, notification and settings screens for pet care routines.",
    image: "/portfolio-assets/intro/motion.png",
    heroImage: "/portfolio-assets/projects/ui-mock1.png",
    secondaryImage: "/portfolio-assets/projects/ui-mock2.png",
    accent: "#8ab8a8",
    preview: "A school-era app concept reframed as a product case study with clearer system thinking."
  },
  {
    id: "animation",
    number: "06",
    title: "2D Animation",
    label: "2D Animation",
    subtitle: "Character World",
    date: "Jul 2020",
    discipline: "Character, Story, Animation",
    tools: "Photoshop, Animate, Storyboards",
    skills: ["Character Design", "Environment", "Storyboarding", "Timing"],
    description:
      "A character-led animation study that explores a small world, movement studies and storytelling through environment design.",
    image: "/portfolio-assets/intro/animation.png",
    heroImage: "/portfolio-assets/projects/animation-environment.jpg",
    accent: "#c56930",
    preview: "Character, setting and motion studies gathered into a polished animation case-study view."
  }
];

const navItems = [
  { label: "Projects", icon: Grid3X3 },
  { label: "About", icon: UserRound },
  { label: "Skills", icon: Sparkle },
  { label: "Experiments", icon: Zap },
  { label: "Contact", icon: Mail }
];

function Sidebar({ activeProject, setMode, mode }) {
  return (
    <aside className="sidebar" aria-label="Portfolio navigation">
      <div className="brand">
        <h1>Khangelani Mgoqi</h1>
        <p>Portfolio</p>
      </div>

      <p className="intro-copy">
        Designer & Creative Technologist crafting meaningful digital experiences across design,
        motion and code.
      </p>

      <nav className="side-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          const itemMode = item.label.toLowerCase();
          const active = mode === itemMode || (mode === "projects" && item.label === "Projects");
          return (
            <button
              className={active ? "nav-button active" : "nav-button"}
              key={item.label}
              type="button"
              onClick={() => setMode(itemMode)}
            >
              <Icon size={19} strokeWidth={2} />
              <span>{item.label}</span>
              {active ? <i aria-hidden="true" /> : null}
            </button>
          );
        })}
      </nav>

      <div className="connect">
        <p>Let's connect</p>
        <div className="socials" aria-label="Social links">
          <a href="https://www.instagram.com/khancreate_2020/" aria-label="Instagram">
            <Instagram size={22} />
          </a>
          <a href="https://khangcreate.wordpress.com/" aria-label="WordPress">
            <img src="/portfolio-assets/icons/wordpress.svg" alt="" />
          </a>
        </div>
      </div>

      <div className="sidebar-footer">
        <img src={activeProject.image} alt="" />
        <span>© 2024 K. Mgoqi<br />All rights reserved.</span>
      </div>
    </aside>
  );
}

function ProjectStage({ project }) {
  return (
    <section className="stage-card" aria-labelledby="project-title">
      <div className="art-panel">
        <img className="main-bloom" src={project.image} alt={`${project.label} project artwork`} />
      </div>

      <article className="project-info">
        <div className="project-number">
          <span>{project.number}</span>
          <i />
        </div>
        <h2 id="project-title">{project.title}</h2>
        <p className="subtitle">{project.subtitle}</p>
        <p className="description">{project.description}</p>

        <dl className="meta-grid">
          <div>
            <PenTool size={17} />
            <dt>Date</dt>
            <dd>{project.date}</dd>
          </div>
          <div>
            <Palette size={17} />
            <dt>Discipline</dt>
            <dd>{project.discipline}</dd>
          </div>
          <div className="wide">
            <Wrench size={17} />
            <dt>Tools</dt>
            <dd>{project.tools}</dd>
          </div>
        </dl>

        <div className="skill-list">
          <span>Skills</span>
          <p>{project.skills.join("  •  ")}</p>
        </div>

        <div className="actions">
          <a className="primary-action" href={project.heroImage} target="_blank" rel="noreferrer">
            View case study <ExternalLink size={18} />
          </a>
          <a className="secondary-action" href="#projects">
            View all projects <Grid3X3 size={18} />
          </a>
        </div>
      </article>
    </section>
  );
}

function ProjectRail({ selectedId, onSelect }) {
  return (
    <section className="project-rail" id="projects" aria-label="Project browser">
      <div className="drag-label">
        <i />
        <span>Drag<br />to<br />explore</span>
      </div>
      {projects.map((project) => (
        <button
          className={selectedId === project.id ? "rail-card selected" : "rail-card"}
          type="button"
          key={project.id}
          onClick={() => onSelect(project.id)}
          style={{ "--accent": project.accent }}
        >
          <span className="rail-number">{project.number}</span>
          <img src={project.image} alt="" />
          <strong>{project.label}</strong>
        </button>
      ))}
      <ArrowRight className="rail-arrow" size={32} aria-hidden="true" />
    </section>
  );
}

function DetailStrip({ project }) {
  return (
    <section className="detail-strip" aria-label="Portfolio summary">
      <div>
        <h3>About me</h3>
        <p>
          Hi, I'm Khangelani — a multidisciplinary designer and developer focused on visual
          storytelling and building experiences that connect. I blend design thinking with code to
          create work that is both beautiful and functional.
        </p>
      </div>
      <div>
        <h3>What I do</h3>
        <ul>
          <li><Monitor size={15} />Digital & Web Design</li>
          <li><PlayCircle size={15} />Motion & Animation</li>
          <li><MousePointer2 size={15} />UI/UX Design</li>
          <li><Wand2 size={15} />Creative Front-End Development</li>
        </ul>
      </div>
      <div className="work-together">
        <h3>Let's work together</h3>
        <p>Open to freelance, collaborations and interesting projects.</p>
        <a href="mailto:191411@stellenboschacademy.co.za">
          Send me an email <ArrowRight size={18} />
        </a>
        <img src={project.image} alt="" />
      </div>
    </section>
  );
}

function ModePanel({ mode, project }) {
  if (mode === "projects") return null;

  const content = {
    about: {
      title: "About",
      body:
        "This React rebuild keeps the original 2020 portfolio identity while reframing the work with clearer structure, project metadata and a modern creative technologist voice."
    },
    skills: {
      title: "Skills",
      body:
        "Brand systems, interface design, motion, front-end builds, typographic composition and digital storytelling."
    },
    experiments: {
      title: "Experiments",
      body:
        "The archive includes AR, motion, interactive web and character-world studies from an early design-school period."
    },
    contact: {
      title: "Contact",
      body:
        "Use the project links, Instagram, WordPress or email to browse the archive and start a collaboration."
    }
  }[mode];

  return (
    <div className="mode-panel" role="status">
      <span>{project.number}</span>
      <h2>{content.title}</h2>
      <p>{content.body}</p>
    </div>
  );
}

function App() {
  const [selectedId, setSelectedId] = useState("poster");
  const [mode, setMode] = useState("projects");

  const selectedIndex = projects.findIndex((project) => project.id === selectedId);
  const selectedProject = projects[selectedIndex] ?? projects[0];

  const browse = (direction) => {
    const nextIndex = (selectedIndex + direction + projects.length) % projects.length;
    setSelectedId(projects[nextIndex].id);
    setMode("projects");
  };

  const browserValue = useMemo(
    () => String(((selectedIndex + 1) / projects.length) * 100),
    [selectedIndex]
  );

  return (
    <main className="portfolio-shell">
      <Sidebar activeProject={selectedProject} setMode={setMode} mode={mode} />

      <div className="workspace">
        <header className="topbar">
          <p>Select a project to explore</p>
          <div className="browse-controls" aria-label="Browse projects">
            <label htmlFor="project-range">Drag to browse</label>
            <input
              id="project-range"
              type="range"
              min="0"
              max="5"
              value={selectedIndex}
              onChange={(event) => {
                setSelectedId(projects[Number(event.target.value)].id);
                setMode("projects");
              }}
              style={{ "--progress": `${browserValue}%` }}
            />
            <button type="button" onClick={() => browse(-1)} aria-label="Previous project">
              <ArrowLeft size={21} />
            </button>
            <button type="button" onClick={() => browse(1)} aria-label="Next project" className="filled">
              <ArrowRight size={21} />
            </button>
          </div>
        </header>

        <ProjectStage project={selectedProject} />
        <ModePanel mode={mode} project={selectedProject} />
        <ProjectRail selectedId={selectedProject.id} onSelect={setSelectedId} />
        <DetailStrip project={selectedProject} />
      </div>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
