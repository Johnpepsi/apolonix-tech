export default function BlueprintMark() {
  return (
    <svg
      viewBox="0 0 560 640"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full max-w-md"
      role="img"
      aria-label="Annotated blueprint diagram of a website layout: header, hero, three-column services grid, and footer, dimensioned like an architectural drawing."
    >
      {/* width dimension line */}
      <line x1="60" y1="26" x2="460" y2="26" stroke="#E8A33D" strokeWidth="1" />
      <line x1="60" y1="20" x2="60" y2="32" stroke="#E8A33D" strokeWidth="1" />
      <line x1="460" y1="20" x2="460" y2="32" stroke="#E8A33D" strokeWidth="1" />
      <text x="260" y="18" fill="#E8A33D" fontFamily="var(--font-mono)" fontSize="11" textAnchor="middle">
        1 SITE — 400PX GRID
      </text>

      {/* height dimension line */}
      <line x1="26" y1="46" x2="26" y2="590" stroke="#E8A33D" strokeWidth="1" />
      <line x1="20" y1="46" x2="32" y2="46" stroke="#E8A33D" strokeWidth="1" />
      <line x1="20" y1="590" x2="32" y2="590" stroke="#E8A33D" strokeWidth="1" />
      <text
        x="14"
        y="320"
        fill="#E8A33D"
        fontFamily="var(--font-mono)"
        fontSize="11"
        textAnchor="middle"
        transform="rotate(-90 14 320)"
      >
        SCOPE — FIXED
      </text>

      {/* outer viewport */}
      <rect
        x="60"
        y="46"
        width="400"
        height="544"
        fill="none"
        stroke="#3D6D8C"
        strokeWidth="1.25"
        strokeDasharray="5 4"
      />

      {/* header bar */}
      <rect x="60" y="46" width="400" height="44" fill="none" stroke="#3D6D8C" strokeWidth="1.25" />
      <line x1="80" y1="68" x2="150" y2="68" stroke="#F5F3EC" strokeWidth="2" />
      <circle cx="410" cy="68" r="3" fill="#F5F3EC" />
      <circle cx="425" cy="68" r="3" fill="#F5F3EC" />
      <circle cx="440" cy="68" r="3" fill="#F5F3EC" />

      {/* hero block */}
      <rect x="60" y="90" width="400" height="176" fill="none" stroke="#3D6D8C" strokeWidth="1.25" />
      <line x1="90" y1="140" x2="320" y2="140" stroke="#F5F3EC" strokeWidth="3" />
      <line x1="90" y1="160" x2="380" y2="160" stroke="#8B9BAA" strokeWidth="1.5" />
      <line x1="90" y1="176" x2="340" y2="176" stroke="#8B9BAA" strokeWidth="1.5" />
      <rect x="90" y="200" width="120" height="30" fill="none" stroke="#E8A33D" strokeWidth="1.5" />
      <line x1="112" y1="215" x2="188" y2="215" stroke="#E8A33D" strokeWidth="1.5" />

      {/* three service columns */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x={60 + i * 134}
            y="286"
            width="118"
            height="150"
            fill="none"
            stroke="#3D6D8C"
            strokeWidth="1.25"
          />
          <rect x={78 + i * 134} y="306" width="26" height="26" fill="none" stroke="#F5F3EC" strokeWidth="1.5" />
          <line x1={78 + i * 134} y1="352" x2={162 + i * 134} y2="352" stroke="#F5F3EC" strokeWidth="1.5" />
          <line x1={78 + i * 134} y1="368" x2={150 + i * 134} y2="368" stroke="#8B9BAA" strokeWidth="1" />
          <line x1={78 + i * 134} y1="380" x2={140 + i * 134} y2="380" stroke="#8B9BAA" strokeWidth="1" />
        </g>
      ))}
      <text x="60" y="278" fill="#8B9BAA" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="1">
        03 MODULES — SWAPPABLE
      </text>

      {/* footer strip */}
      <rect x="60" y="460" width="400" height="130" fill="none" stroke="#3D6D8C" strokeWidth="1.25" />
      <line x1="90" y1="500" x2="200" y2="500" stroke="#F5F3EC" strokeWidth="1.5" />
      <line x1="90" y1="520" x2="260" y2="520" stroke="#8B9BAA" strokeWidth="1" />
      <line x1="90" y1="536" x2="220" y2="536" stroke="#8B9BAA" strokeWidth="1" />
      <rect x="330" y="500" width="100" height="26" fill="none" stroke="#E8A33D" strokeWidth="1.5" />

      {/* leader annotations */}
      <line x1="460" y1="68" x2="500" y2="68" stroke="#8B9BAA" strokeWidth="1" />
      <text x="503" y="71" fill="#8B9BAA" fontFamily="var(--font-mono)" fontSize="9">
        NAV
      </text>
      <line x1="460" y1="178" x2="500" y2="178" stroke="#8B9BAA" strokeWidth="1" />
      <text x="503" y="181" fill="#8B9BAA" fontFamily="var(--font-mono)" fontSize="9">
        HERO
      </text>
      <line x1="460" y1="361" x2="500" y2="361" stroke="#8B9BAA" strokeWidth="1" />
      <text x="503" y="364" fill="#8B9BAA" fontFamily="var(--font-mono)" fontSize="9">
        SERVICES
      </text>
      <line x1="460" y1="525" x2="500" y2="525" stroke="#8B9BAA" strokeWidth="1" />
      <text x="503" y="528" fill="#8B9BAA" fontFamily="var(--font-mono)" fontSize="9">
        CONTACT
      </text>

      <text x="60" y="616" fill="#3D6D8C" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="2">
        NOTHING MORE — NOTHING LESS
      </text>
    </svg>
  );
}
