export const profile = {
  initials: "KM",
  name: "Khangelani Mgoqi",
  deckLabel: "PORTFOLIO - FIELD GUIDE",
  version: "v1.0.0",
  introTitle: "Role-adaptive portfolio",
  introduction:
    "This portfolio adapts to the lens you choose. Each mode reframes the same editable source of truth around the work, thinking, and evidence that matters to a specific audience.",
  usage:
    "Use the Active Lens panel to explore different perspectives. The project archive below now pulls from the Figma portfolio case studies.",
  dataStatus:
    "Project details are drafted from the Figma portfolio archive. Contact details and any sensitive project links still need final review.",
  locationLabel: "[Add current location]",
  contactLabel: "[Add current email or booking link]",
};

export const tableOfContents = [
  {
    id: "overview",
    number: "01",
    label: "Overview",
    items: ["Introduction", "How to use"],
  },
  {
    id: "lenses",
    number: "02",
    label: "Lenses",
    items: [
      "Technical Generalist",
      "Researcher",
      "Engineer",
      "Designer",
      "Systems Analyst",
    ],
  },
  {
    id: "case-studies",
    number: "03",
    label: "Case Studies",
    items: ["Project Atlas", "Detailed Studies"],
  },
  {
    id: "evidence",
    number: "04",
    label: "Evidence",
    items: ["Skills", "Tools", "Education", "Certificates"],
  },
  {
    id: "contact",
    number: "05",
    label: "Contact",
    items: ["Get in touch", "Links"],
  },
];

export const projectCaseStudies = [
  {
    id: "idiyprop",
    number: "01",
    title: "Idiyprop",
    platform: "Rental management MVP",
    status: "Prototype phase",
    role: "Product design and prototyping",
    organization: "Personal development project",
    image: "/projects/idiyprop-overview.webp",
    imageAlt:
      "Idiyprop case-study frame showing rental-management mobile screens and project notes.",
    summary:
      "A minimum usable product for homeowners managing the admin workflow of leasing residential properties.",
    impact:
      "The development cycle ended in prototype phase and now serves as a personal product-development project.",
    tags: ["Mobile app", "Property tech", "Prototype"],
    sourceUrl:
      "https://www.figma.com/design/R0bnSUyLlAXdjL4LohcMhC/Khangelani-Overview-Portfolio?node-id=1173-3002",
  },
  {
    id: "forcelink-mobile",
    number: "02",
    title: "Forcelink Mobile",
    platform: "Field service mobile app",
    status: "Live",
    role: "UX/UI Design",
    organization: "Forcelink",
    image: "/projects/forcelink-mobile-home.webp",
    imageAlt: "Forcelink mobile home screen with field-service modules.",
    summary:
      "A field-service management mobile experience used to support configurable workflows across multiple industries.",
    impact:
      "Designed mobile workflows for teams coordinating work orders, assets, support calls, resources, and field operations.",
    tags: ["Mobile app", "Field service", "UX/UI"],
    sourceUrl:
      "https://www.figma.com/design/R0bnSUyLlAXdjL4LohcMhC/Khangelani-Overview-Portfolio?node-id=1210-3172",
  },
  {
    id: "forcelink-web",
    number: "03",
    title: "Forcelink Web",
    platform: "Field service web platform",
    status: "Live",
    role: "Lead UX/UI Designer, Junior Developer",
    organization: "www.forcelink.net",
    image: "/projects/forcelink-web-board.webp",
    imageAlt: "Forcelink web application screen displayed inside a browser frame.",
    summary:
      "A web platform for configurable field-service operations, work orders, resources, assets, and operational reporting.",
    impact:
      "Combined product design and junior development support while working full time on live Forcelink product surfaces.",
    tags: ["Web app", "Enterprise workflows", "Design systems"],
    sourceUrl:
      "https://www.figma.com/design/R0bnSUyLlAXdjL4LohcMhC/Khangelani-Overview-Portfolio?node-id=1210-4164",
  },
  {
    id: "mysmartcity",
    number: "04",
    title: "MySmartCity",
    platform: "Citizen services platform",
    status: "Live",
    role: "SEO and conversion contribution",
    organization: "www.mysmart.city",
    image: "/projects/mysmartcity-home.webp",
    imageAlt: "MySmartCity landing page with city service reporting and booking actions.",
    summary:
      "SEO optimization and user-conversion work for a citizen platform connecting residents with city services.",
    impact:
      "Contributed to the product for a short period, with partial ongoing involvement while another designer owns the portfolio lead.",
    tags: ["Web platform", "Conversion", "Civic tech"],
    sourceUrl:
      "https://www.figma.com/design/R0bnSUyLlAXdjL4LohcMhC/Khangelani-Overview-Portfolio?node-id=1223-3594",
  },
  {
    id: "planter-app",
    number: "05",
    title: "Planter App",
    platform: "Variable-rate planting app",
    status: "Live",
    role: "UX/UI Design",
    organization: "www.perfectprecision.co.za",
    image: "/projects/planter-main.webp",
    secondaryImage: "/projects/planter-phone.webp",
    imageAlt:
      "Planter App tablet interface showing skips, population, seed count, target population, alerts, and row mapping.",
    summary:
      "A software solution replacing counter-intuitive variable-rate planting application workflows.",
    impact:
      "Designed a clearer operational interface for scalable, current software practices in precision agriculture.",
    tags: ["Tablet app", "Agritech", "Operational UI"],
    sourceUrl:
      "https://www.figma.com/design/R0bnSUyLlAXdjL4LohcMhC/Khangelani-Overview-Portfolio?node-id=1227-3985",
  },
];

const sharedTimeline = [
  {
    step: "Context",
    title: "Map the terrain",
    detail: "Clarify the audience, constraints, unanswered questions, and decision pressure.",
  },
  {
    step: "Insight",
    title: "Find the signal",
    detail: "Turn research, systems notes, and user needs into an actionable direction.",
  },
  {
    step: "Build",
    title: "Make the idea tangible",
    detail: "Prototype, test, document, and iterate until the work can be evaluated.",
  },
  {
    step: "Synthesis",
    title: "Connect the pieces",
    detail: "Explain tradeoffs, dependencies, and what should happen next.",
  },
  {
    step: "Share",
    title: "Package the proof",
    detail: "Create a clear handoff with artifacts, rationale, and learning captured.",
  },
];

export const archetypes = [
  {
    id: "technical-generalist",
    number: "01",
    label: "Technical Generalist",
    shortLabel: "Generalist",
    icon: "sparkle",
    headline: "A cross-functional portfolio lens for connecting ideas, tools, and outcomes.",
    narrative:
      "Draft positioning: I bridge research, design, engineering, and systems thinking so ambiguous work can become understandable, buildable, and useful.",
    focus: ["Problem framing", "Tool fluency", "Systems translation", "Rapid learning"],
    evidence: [
      {
        number: "01",
        title: "Problem Framing",
        detail: "Placeholder for a project where unclear requirements became a useful direction.",
        icon: "compass",
      },
      {
        number: "02",
        title: "Research and Insight",
        detail: "Placeholder for discovery work, synthesis, or a documented learning process.",
        icon: "search",
      },
      {
        number: "03",
        title: "Solution Design",
        detail: "Placeholder for a flow, prototype, architecture, or strategy artifact.",
        icon: "shapes",
      },
      {
        number: "04",
        title: "Build and Iterate",
        detail: "Placeholder for implementation proof, experiments, or shipped work.",
        icon: "stack",
      },
      {
        number: "05",
        title: "Impact and Learning",
        detail: "Placeholder for measurable outcomes, lessons, or decisions improved.",
        icon: "chart",
      },
    ],
    skills: ["Research synthesis", "Frontend prototyping", "Systems mapping", "Technical writing"],
    tools: ["React", "Design systems", "Documentation", "AI-assisted workflows"],
    contact:
      "Use this lens when you need someone who can learn quickly, connect domains, and make messy problems easier to act on.",
    timeline: sharedTimeline,
  },
  {
    id: "researcher",
    number: "02",
    label: "Researcher",
    shortLabel: "Researcher",
    icon: "search",
    headline: "A discovery-first lens for questions, evidence, and decision clarity.",
    narrative:
      "Draft positioning: I turn loose questions into structured inquiry, useful signals, and artifacts that help teams choose what to do next.",
    focus: ["Desk research", "Interview synthesis", "Pattern finding", "Decision memos"],
    evidence: [
      {
        number: "01",
        title: "Research Question",
        detail: "Placeholder for a study, investigation, or decision that needed evidence.",
        icon: "search",
      },
      {
        number: "02",
        title: "Source Map",
        detail: "Placeholder for references, interviews, audits, or source-backed notes.",
        icon: "stack",
      },
      {
        number: "03",
        title: "Synthesis",
        detail: "Placeholder for themes, insights, and the reasoning path from data to answer.",
        icon: "shapes",
      },
      {
        number: "04",
        title: "Recommendation",
        detail: "Placeholder for a concrete decision, next step, or opportunity statement.",
        icon: "compass",
      },
      {
        number: "05",
        title: "Learning Loop",
        detail: "Placeholder for what changed after the research was used.",
        icon: "chart",
      },
    ],
    skills: ["Research planning", "Evidence review", "Synthesis", "Narrative reporting"],
    tools: ["Search workflows", "Notes systems", "Spreadsheets", "Presentation artifacts"],
    contact:
      "Use this lens when the audience needs clear thinking, source-backed judgment, and research that leads to action.",
    timeline: sharedTimeline,
  },
  {
    id: "engineer",
    number: "03",
    label: "Engineer",
    shortLabel: "Engineer",
    icon: "cpu",
    headline: "A build-focused lens for implementation, interfaces, and technical proof.",
    narrative:
      "Draft positioning: I translate requirements into working software, document tradeoffs, and keep the implementation understandable.",
    focus: ["Frontend engineering", "Stateful UI", "Data modeling", "Quality checks"],
    evidence: [
      {
        number: "01",
        title: "Requirements",
        detail: "Placeholder for the problem, constraints, and acceptance criteria.",
        icon: "compass",
      },
      {
        number: "02",
        title: "Architecture",
        detail: "Placeholder for component boundaries, data flow, or integration notes.",
        icon: "stack",
      },
      {
        number: "03",
        title: "Implementation",
        detail: "Placeholder for code, prototype, repository, or shipped feature evidence.",
        icon: "cpu",
      },
      {
        number: "04",
        title: "Validation",
        detail: "Placeholder for tests, build output, browser checks, or review notes.",
        icon: "chart",
      },
      {
        number: "05",
        title: "Maintainability",
        detail: "Placeholder for refactors, docs, or decisions that made work easier to extend.",
        icon: "shapes",
      },
    ],
    skills: ["React", "JavaScript", "Component systems", "Browser QA"],
    tools: ["Vite", "Git", "Playwright", "API documentation"],
    contact:
      "Use this lens when the audience needs a builder who can explain technical decisions and produce working artifacts.",
    timeline: sharedTimeline,
  },
  {
    id: "designer",
    number: "04",
    label: "Designer",
    shortLabel: "Designer",
    icon: "dots",
    headline: "A product-design lens for structure, interaction, and visual communication.",
    narrative:
      "Draft positioning: I shape experiences by clarifying hierarchy, mapping flows, prototyping interactions, and making information easier to read.",
    focus: ["Interaction design", "Information architecture", "Visual systems", "Prototyping"],
    evidence: [
      {
        number: "01",
        title: "User Need",
        detail: "Placeholder for audience, journey, and problem framing.",
        icon: "compass",
      },
      {
        number: "02",
        title: "Flow",
        detail: "Placeholder for a user flow, wireframe, service map, or IA decision.",
        icon: "shapes",
      },
      {
        number: "03",
        title: "Interface",
        detail: "Placeholder for UI explorations, components, or design-system choices.",
        icon: "dots",
      },
      {
        number: "04",
        title: "Prototype",
        detail: "Placeholder for interactive behavior, testing notes, or iteration evidence.",
        icon: "stack",
      },
      {
        number: "05",
        title: "Outcome",
        detail: "Placeholder for what improved for users, stakeholders, or the project.",
        icon: "chart",
      },
    ],
    skills: ["UX framing", "Visual design", "Interaction states", "Design QA"],
    tools: ["Figma", "Prototyping", "Design tokens", "Accessibility checks"],
    contact:
      "Use this lens when the audience needs design thinking, clean communication, and prototypes that make product choices visible.",
    timeline: sharedTimeline,
  },
  {
    id: "systems-analyst",
    number: "05",
    label: "Systems Analyst",
    shortLabel: "Systems",
    icon: "network",
    headline: "A systems lens for dependencies, workflows, and operational clarity.",
    narrative:
      "Draft positioning: I map how parts connect, expose assumptions, and turn complex workflows into practical models and next steps.",
    focus: ["Systems mapping", "Process analysis", "Dependencies", "Decision support"],
    evidence: [
      {
        number: "01",
        title: "System Boundary",
        detail: "Placeholder for the people, tools, rules, or constraints being mapped.",
        icon: "network",
      },
      {
        number: "02",
        title: "Dependency Map",
        detail: "Placeholder for inputs, outputs, workflows, or integration points.",
        icon: "shapes",
      },
      {
        number: "03",
        title: "Failure Modes",
        detail: "Placeholder for risks, bottlenecks, ambiguity, or operational friction.",
        icon: "search",
      },
      {
        number: "04",
        title: "Model",
        detail: "Placeholder for a diagram, specification, or working conceptual model.",
        icon: "stack",
      },
      {
        number: "05",
        title: "Action Plan",
        detail: "Placeholder for the decision path, rollout, or handoff recommendation.",
        icon: "chart",
      },
    ],
    skills: ["Workflow mapping", "Requirements analysis", "Documentation", "Risk framing"],
    tools: ["Diagrams", "Spreadsheets", "Technical specs", "Process notes"],
    contact:
      "Use this lens when the audience needs structure around complex systems, dependencies, and decisions.",
    timeline: sharedTimeline,
  },
];
