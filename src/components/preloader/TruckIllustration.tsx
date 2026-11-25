export interface TruckIllustrationProps {
  isDriving: boolean;
  className?: string;
}

const RED = "#C8102E";
const NAVY = "#073B75";
const INK = "#111111";

function Wheel({ cx }: { cx: number }) {
  return (
    <g className="preloader-wheel" style={{ transformOrigin: `${cx}px 128px` }}>
      <circle cx={cx} cy={128} r={20} fill={INK} />
      <circle cx={cx} cy={128} r={11} fill="#cfd3d8" />
      <circle cx={cx} cy={128} r={3.5} fill={INK} />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <line
          key={deg}
          x1={cx}
          y1={128}
          x2={cx + 9 * Math.cos((deg * Math.PI) / 180)}
          y2={128 + 9 * Math.sin((deg * Math.PI) / 180)}
          stroke={INK}
          strokeWidth={2}
        />
      ))}
    </g>
  );
}

export default function TruckIllustration({ isDriving, className }: TruckIllustrationProps) {
  return (
    <svg
      viewBox="0 0 320 160"
      className={`${className ?? ""} ${isDriving ? "is-driving" : ""}`}
      role="img"
      aria-label="Delivery truck"
    >
      <ellipse cx={160} cy={146} rx={140} ry={8} fill={INK} opacity={0.12} />

      {/* cargo box */}
      <rect x={96} y={38} width={206} height={76} rx={6} fill="#ffffff" stroke="#d8dadd" strokeWidth={2} />
      <rect x={96} y={38} width={206} height={6} rx={3} fill={RED} />
      <rect x={96} y={96} width={206} height={14} fill={NAVY} />
      <line x1={150} y1={44} x2={150} y2={110} stroke="#e4e6e9" strokeWidth={2} />
      <line x1={205} y1={44} x2={205} y2={110} stroke="#e4e6e9" strokeWidth={2} />
      <line x1={258} y1={44} x2={258} y2={110} stroke="#e4e6e9" strokeWidth={2} />
      <text x={199} y={78} textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight={800} fontSize={22} fill={NAVY}>
        SB
      </text>

      {/* cab */}
      <rect x={14} y={72} width={92} height={42} rx={6} fill="#ffffff" stroke="#d8dadd" strokeWidth={2} />
      <path d="M 40 72 L 58 40 L 100 40 L 106 72 Z" fill="#ffffff" stroke="#d8dadd" strokeWidth={2} />
      <path d="M 46 68 L 61 46 L 97 46 L 101 68 Z" fill={NAVY} opacity={0.85} />
      <rect x={97} y={48} width={6} height={10} rx={2} fill={INK} />

      {/* bumper + grille + headlight */}
      <rect x={0} y={96} width={16} height={18} rx={3} fill={INK} />
      <circle cx={10} cy={88} r={4} fill="#ffd35c" />
      <rect x={14} y={92} width={16} height={6} fill="#e4e6e9" />

      <Wheel cx={56} />
      <Wheel cx={246} />
    </svg>
  );
}
