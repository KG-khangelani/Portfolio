# Design QA

Reference: `design/concepts/option-2-studio-browser.png`
Prototype screenshot: `qa/studio-browser-desktop.png`
Mobile screenshot: `qa/studio-browser-mobile.png`
Viewport checked: `1536x1095`, matching the accepted concept dimensions; mobile checked at `390x844`.

## Fidelity Ledger

- Copy and IA: passed. The first viewport keeps the accepted "Select a project to explore", "Drag to browse", project title, subtitle, metadata, actions, rail labels, and bottom summary content.
- Layout and container model: passed. The implementation preserves the peach sticky sidebar, white top workspace, peach project stage, teal project rail, and bordered summary strip.
- Palette: passed. Peach, deep teal, coral, off-white, and muted teal dividers match the accepted direction closely.
- Typography: passed after fix. The first capture used the legacy italic display face too heavily; headings now use an upright condensed display stack closer to the concept.
- Asset treatment: passed after fix. The first capture used the old teal poster asset; the Poster selection now uses the coral bloom direction shown in the accepted concept.
- Interactions: passed. Rail buttons, next/previous controls, range browse control, side navigation modes, case-study link, social links, and email link are functional.
- Responsive behavior: passed. Mobile collapses the shell vertically, keeps controls readable, and preserves the project rail as horizontal browsing.

## Above-The-Fold Copy Diff

Result: passed. No unapproved hero eyebrow, badge, pill, or extra first-viewport marketing copy was added. Legacy/project copy was only refined where the confirmed brief allowed filling missing portfolio content.

## Remaining Intentional Deviations

- The concept image uses generated flower variants; the app uses the closest available original portfolio assets, remapped to match the visual order and color intent.
- WordPress uses the original portfolio SVG icon because it is a real legacy asset and fits the social link requirement.

Final result: passed
