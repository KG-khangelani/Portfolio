**Comparison Target**
- source visual truth: Figma project frames for Idiyprop, Forcelink Mobile, Forcelink Web, MySmartCity, and Planter App.
- local source assets: `public/projects/idiyprop-overview.webp`, `public/projects/forcelink-mobile-home.webp`, `public/projects/forcelink-mobile-workorder.webp`, `public/projects/forcelink-mobile-assets.webp`, `public/projects/forcelink-mobile-tree.webp`, `public/projects/forcelink-web-board.webp`, `public/projects/mysmartcity-home.webp`, `public/projects/planter-main.webp`
- implementation screenshots: `C:\Users\user\AppData\Local\Temp\portfolio-archetype-mockup-qa\desktop-engineer-projects.png`, `C:\Users\user\AppData\Local\Temp\portfolio-archetype-mockup-qa\desktop-engineer-planter-project.png`, `C:\Users\user\AppData\Local\Temp\portfolio-archetype-mockup-qa\desktop-engineer-mobile-project.png`, `C:\Users\user\AppData\Local\Temp\portfolio-archetype-mockup-qa\mobile-designer-projects-viewport.png`, `C:\Users\user\AppData\Local\Temp\portfolio-planter-mockup-fix\researcher-planter-tablet-fixed.png`, `C:\Users\user\AppData\Local\Temp\portfolio-planter-mockup-fix\designer-mobile-planter-tablet-fixed.png`, `C:\Users\user\AppData\Local\Temp\portfolio-idiyprop-mockup-fix\researcher-idiyprop-case-board-fixed.png`, `C:\Users\user\AppData\Local\Temp\portfolio-browser-mockup-fix\researcher-mysmartcity-browser-mockup.png`
- viewport checks: desktop `1536x1024`; mobile `390x844`
- browser method: Playwright Chromium fallback. Browser/IAB tools were not available in this session.

**Branch**
- current branch: `codex/review-figma-file`
- base: `professional` / `origin/professional` at `83f46e9`
- current branch head before the latest polish changes: `b9190de` (`Refine project archetype mapping and use mockup screenshots`)

**Project Placement**
- Technical Generalist: Forcelink Web, Idiyprop, MySmartCity
- Researcher: MySmartCity, Idiyprop, Planter App
- Engineer: Forcelink Web, Planter App, Forcelink Mobile
- Designer: Planter App, Forcelink Mobile, Idiyprop
- Systems Analyst: Forcelink Web, Forcelink Mobile, Planter App

**Checks**
- Build: passed with `npm run build`.
- Console health: passed. No page errors or notable console messages in Playwright.
- Interaction: passed. Selecting Planter App and Forcelink Mobile updates the featured case-study content and swaps the mockup type.
- Mockups: passed. Forcelink Web and MySmartCity render polished browser mockups with structured chrome, address bar, viewport wrapper, and loaded screenshots; Planter renders as a single landscape tablet mockup with no phone overlay; Idiyprop renders as a composed case-study board; Forcelink Mobile renders a phone cluster.
- Archetype routing: passed for `#technical-generalist`, `#researcher`, `#engineer`, `#designer`, and `#systems-analyst`.
- Responsive: passed. Desktop and mobile case-study layouts have no horizontal overflow.
- Text fit: passed. Long featured project titles no longer clip in the case-study metadata column.
- Image loading: passed. All rendered project mockup images completed with non-zero natural dimensions.

**Inspected Comparison Points**
- Project content: all five Figma projects are represented with title, platform, status, role, organisation, summary, project tags, source frame link, and archetype-specific rationale.
- Use-case fit: each archetype now leads with the projects that best prove that audience's needs, instead of showing the same generic ordering everywhere.
- Image treatment: project visuals are stored locally as optimized WebP assets and shown inside browser, tablet, phone-cluster, or case-board treatments based on the project type.
- Layout system: the section keeps the existing blue field-guide grid, mono labels, serif body copy, and responsive page shell.
- Mobile behavior: project content stacks in a readable order with functional selector buttons and no clipped horizontal content.

final result: passed
