import React from "react";

const nodePositions = [
  { id: "technical-generalist", x: 22, y: 65 },
  { id: "researcher", x: 37, y: 48 },
  { id: "engineer", x: 52, y: 35 },
  { id: "designer", x: 67, y: 48 },
  { id: "systems-analyst", x: 82, y: 65 },
];

const nodeShapes = {
  "technical-generalist": "M20 13l4 8 9 4-9 4-4 8-4-8-9-4 9-4z",
  researcher: "M18 8a10 10 0 1 1-7.4 16.8L4 31.5",
  engineer: "M10 10h20v20H10zM15 4v6m10-6v6M15 30v6m10-6v6M4 15h6m-6 10h6m20-10h6m-6 10h6",
  designer: "M10 10h7v7h-7zM23 10h7v7h-7zM10 23h7v7h-7zM23 23h7v7h-7z",
  "systems-analyst": "M18 7v22M7 18h22M18 7l-9 11 9 11 9-11z",
};

function getActiveIndex(activeId) {
  return Math.max(
    0,
    nodePositions.findIndex((node) => node.id === activeId),
  );
}

export default function BlueprintScene({ active, activeId, archetypes, onSelect }) {
  const activeIndex = getActiveIndex(activeId);
  const activeNode = nodePositions[activeIndex];

  return (
    <div
      className="blueprint-stage"
      style={{ "--active-node": activeIndex }}
      aria-label={`Interactive blueprint model. Current lens: ${active.label}.`}
    >
      <svg
        className="blueprint-svg"
        viewBox="72 84 616 396"
        role="img"
        aria-labelledby="blueprint-title blueprint-desc"
      >
        <title id="blueprint-title">Role-adaptive portfolio blueprint</title>
        <desc id="blueprint-desc">
          A responsive blueprint system map showing five selectable career lenses
          connected to one shared portfolio source.
        </desc>
        <defs>
          <pattern id="blueprint-dots" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
          </pattern>
          <filter id="blueprint-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect className="blueprint-dot-field" x="0" y="0" width="760" height="520" />

        <g className="blueprint-guides">
          <path d="M58 78h218M58 390h650M116 58v376M660 64v356" />
          <path d="M88 436h560M88 452h560M88 468h560" />
          <path d="M520 92h120M520 108h120M520 124h80" />
          <circle cx="116" cy="58" r="8" />
          <circle cx="660" cy="64" r="8" />
          <circle cx="88" cy="452" r="8" />
          <circle cx="648" cy="452" r="8" />
        </g>

        <g className="blueprint-stack" style={{ "--drift": activeIndex }}>
          <path className="plate bottom" d="M178 338l280 84 185-86-280-84z" />
          <path className="plate side-left" d="M178 338v30l280 84v-30z" />
          <path className="plate side-right" d="M458 422v30l185-86v-30z" />
          <path className="module module-a" d="M302 214l117 36-79 36-116-36z" />
          <path className="module module-a-side" d="M224 250v72l116 36v-72z" />
          <path className="module module-a-face" d="M340 286v72l79-36v-72z" />
          <path className="module module-b" d="M430 188l96 29-69 32-95-29z" />
          <path className="module module-b-side" d="M362 220v88l95 29v-88z" />
          <path className="module module-b-face" d="M457 249v88l69-32v-88z" />
          <path className="module module-c" d="M390 118l90 28-58 27-90-28z" />
          <path className="module module-c-side" d="M332 145v74l90 28v-74z" />
          <path className="module module-c-face" d="M422 173v74l58-27v-74z" />
        </g>

        <g className="blueprint-panels">
          <path d="M180 170l118-50v106l-118 50z" />
          <path d="M530 128l96 36v118l-96-36z" />
          <path d="M205 184l66-28M205 206l66-28M205 228l42-18" />
          <circle cx="575" cy="196" r="28" />
          <path d="M558 196h34M575 178v36" />
        </g>

        <g className="blueprint-connectors">
          {nodePositions.map((node) => (
            <path
              key={`line-${node.id}`}
              className={node.id === activeId ? "is-active" : ""}
              d={`M${node.x * 7.6} ${node.y * 5.2} L382 260`}
            />
          ))}
        </g>

        <g className="blueprint-active-beam" filter="url(#blueprint-glow)">
          <path d={`M${activeNode.x * 7.6} ${activeNode.y * 5.2} L382 260`} />
          <circle cx={activeNode.x * 7.6} cy={activeNode.y * 5.2} r="7" />
        </g>

        <g className="blueprint-nodes">
          {nodePositions.map((node, index) => {
            const archetype = archetypes[index];
            const selected = node.id === activeId;

            return (
              <g
                className={`blueprint-node ${selected ? "is-active" : ""}`}
                key={node.id}
                transform={`translate(${node.x * 7.6 - 24} ${node.y * 5.2 - 24})`}
              >
                <rect width="48" height="48" rx="6" />
                <path d={nodeShapes[node.id]} transform="translate(6 6)" />
                <text x="24" y="66">
                  {archetype.shortLabel}
                </text>
              </g>
            );
          })}
        </g>

        <g className="blueprint-labels">
          <text x="110" y="462">FIG. 01 - RESPONSIVE VECTOR ROLE MODEL</text>
          <text x="540" y="462">STATE: {active.number} / {active.shortLabel.toUpperCase()}</text>
        </g>
      </svg>

      <div className="blueprint-hotspots" aria-label="Blueprint lens shortcuts">
        {nodePositions.map((node, index) => {
          const archetype = archetypes[index];
          return (
            <button
              className="blueprint-hotspot"
              key={node.id}
              type="button"
              aria-label={`Select ${archetype.label} lens from blueprint`}
              aria-pressed={node.id === activeId}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onClick={() => onSelect(node.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
