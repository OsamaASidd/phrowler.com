type Node = {
  lines: string[];
};

const nodes: Node[] = [
  { lines: ["ERPNext"] },
  { lines: ["Microsoft", "Dynamics 365"] },
  { lines: ["Oracle"] },
  { lines: ["Sage"] },
  { lines: ["Odoo"] },
  { lines: ["QuickBooks"] },
  { lines: ["Zoho Books"] },
];

const CX = 350;
const CY = 232;
const R_NODE = 168;
const R_NODE_CIRCLE = 58;
const R_CENTER_CIRCLE = 92;
const R_DOT = 14;

function polar(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CX + radius * Math.sin(rad), y: CY - radius * Math.cos(rad) };
}

export default function EcosystemDiagram() {
  const angleStep = 360 / nodes.length;
  const positioned = nodes.map((node, i) => ({
    ...node,
    angle: i * angleStep,
    pos: polar(i * angleStep, R_NODE),
    dot: polar(i * angleStep, R_CENTER_CIRCLE + R_DOT),
  }));

  return (
    <div className="mx-auto w-full max-w-2xl">
      <svg viewBox="0 0 700 464" className="h-auto w-full" role="img" aria-label="Phrowler at the center, connected to ERPNext, Microsoft Dynamics 365, Oracle, Sage, Odoo, QuickBooks, and Zoho Books">
        {positioned.map((n, i) => (
          <line
            key={`line-${i}`}
            x1={CX}
            y1={CY}
            x2={n.pos.x}
            y2={n.pos.y}
            className="stroke-border"
            strokeWidth={1.5}
            strokeDasharray="3 6"
            strokeLinecap="round"
          />
        ))}

        {positioned.map((n, i) => (
          <circle
            key={`dot-${i}`}
            cx={n.dot.x}
            cy={n.dot.y}
            r={4.5}
            className="fill-background stroke-brand"
            strokeWidth={2}
          />
        ))}

        {positioned.map((n, i) => (
          <g key={`node-${i}`}>
            <circle
              cx={n.pos.x}
              cy={n.pos.y}
              r={R_NODE_CIRCLE}
              className="fill-background stroke-border"
              strokeWidth={1.5}
            />
            <text
              x={n.pos.x}
              y={n.pos.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-foreground"
              style={{ fontSize: 14.5, fontWeight: 600, fontFamily: "var(--font-geist-sans), Arial, sans-serif" }}
            >
              {n.lines.map((line, li) => (
                <tspan
                  key={li}
                  x={n.pos.x}
                  dy={li === 0 ? (n.lines.length > 1 ? -7 : 0) : 17}
                >
                  {line}
                </tspan>
              ))}
            </text>
          </g>
        ))}

        <circle
          cx={CX}
          cy={CY}
          r={R_CENTER_CIRCLE}
          className="fill-background stroke-brand"
          strokeWidth={2}
        />
        <rect
          x={CX - 16}
          y={CY - 38}
          width={32}
          height={32}
          rx={2.5}
          className="fill-[#14141c]"
        />
        <image
          href="/assets/phrowler-logo.png"
          x={CX - 16}
          y={CY - 38}
          width={32}
          height={32}
        />
        <text
          x={CX}
          y={CY + 16}
          textAnchor="middle"
          className="fill-foreground"
          style={{ fontSize: 17, fontWeight: 700, fontFamily: "var(--font-geist-sans), Arial, sans-serif" }}
        >
          Phrowler
        </text>
      </svg>
    </div>
  );
}
