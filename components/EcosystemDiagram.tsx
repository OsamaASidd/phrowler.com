import Logo from "./Logo";

type Node = {
  name: string;
  logo: string;
};

const nodes: Node[] = [
  { name: "ERPNext", logo: "erpnext.png" },
  { name: "Microsoft Dynamics 365", logo: "dynamics-365.png" },
  { name: "Oracle", logo: "oracle.png" },
  { name: "Sage", logo: "sage.png" },
  { name: "Odoo", logo: "odoo.png" },
  { name: "QuickBooks", logo: "quickbooks.png" },
  { name: "Zoho Books", logo: "zoho-books.png" },
];

const CX = 350;
const CY = 232;
const R_NODE = 168;
const R_NODE_CIRCLE = 58;
const R_CENTER_CIRCLE = 92;
const R_DOT = 14;
const LOGO_W = 84;
const LOGO_H = 48;

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
    <div className="relative mx-auto w-full max-w-2xl">
      <svg
        viewBox="0 0 700 464"
        className="h-auto w-full"
        role="img"
        aria-label="Phrowler at the center, connected to ERPNext, Microsoft Dynamics 365, Oracle, Sage, Odoo, QuickBooks, and Zoho Books"
      >
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
            <image
              href={`/assets/logos/${n.logo}`}
              x={n.pos.x - LOGO_W / 2}
              y={n.pos.y - LOGO_H / 2}
              width={LOGO_W}
              height={LOGO_H}
              preserveAspectRatio="xMidYMid meet"
            >
              <title>{n.name}</title>
            </image>
          </g>
        ))}

        <circle
          cx={CX}
          cy={CY}
          r={R_CENTER_CIRCLE}
          className="fill-background stroke-brand"
          strokeWidth={2}
        />
      </svg>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="pointer-events-auto scale-125">
          <Logo />
        </div>
      </div>
    </div>
  );
}
