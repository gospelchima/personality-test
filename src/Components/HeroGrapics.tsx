export default function HeroGraphic() {
  return (
    <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--ink)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="var(--ink)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background glow */}
        <circle cx="200" cy="200" r="160" fill="url(#core-glow)" />

        {/* Orbit guides */}
        <circle cx="200" cy="200" r="170" fill="none" stroke="var(--ink)" strokeWidth="0.5" opacity="0.12" />
        <circle cx="200" cy="200" r="130" fill="none" stroke="var(--ink)" strokeWidth="0.5" opacity="0.15" />

        {/* Connecting lines */}
        <g stroke="var(--ink)" strokeWidth="0.5" opacity="0.2">
          <line x1="200" y1="200" x2="345" y2="105" />
          <line x1="200" y1="200" x2="74" y2="150" />
          <line x1="200" y1="200" x2="260" y2="335" />
          <line x1="200" y1="200" x2="108" y2="300" />
        </g>

        {/* CENTER: Origami dragon */}
        <g className="animate-origami-breathe" style={{ transformOrigin: "200px 200px" }}>
          {/* Body */}
          <path
            d="M120 220 L200 140 L300 160 L340 120 L320 180 L260 220 L280 280 L200 320 L140 280 Z"
            fill="var(--card)"
            stroke="var(--ink)"
            strokeWidth="0.5"
          />
          {/* Neck / head fold */}
          <path
            d="M300 160 L340 120 L360 90 L330 140 Z"
            fill="var(--c-focus, #e07a5f)"
            stroke="var(--ink)"
            strokeWidth="0.5"
            opacity="0.85"
          />
          {/* Tail fold */}
          <path
            d="M120 220 L60 240 L80 200 L140 280 Z"
            fill="var(--c-energy, #8a5fc2)"
            stroke="var(--ink)"
            strokeWidth="0.5"
            opacity="0.85"
          />
          {/* Wing/back fold */}
          <path
            d="M200 140 L260 220 L200 320 Z"
            fill="var(--c-clarity, #2f8f86)"
            stroke="var(--ink)"
            strokeWidth="0.5"
            opacity="0.35"
          />
          {/* Crease lines */}
          <g stroke="var(--ink)" strokeWidth="0.5" opacity="0.3">
            <line x1="200" y1="140" x2="260" y2="220" />
            <line x1="260" y1="220" x2="200" y2="320" />
            <line x1="120" y1="220" x2="200" y2="140" />
            <line x1="140" y1="280" x2="260" y2="220" />
            <line x1="300" y1="160" x2="260" y2="220" />
          </g>
          {/* Eye */}
          <circle cx="335" cy="115" r="3" fill="var(--ink)" />
        </g>

        {/* Orbiting folding fragments */}
        <g className="animate-spin-slow" style={{ transformOrigin: "200px 200px" }}>
          <path
            d="M325 90 L348 115 L308 122 Z"
            fill="var(--c-clarity, #2f8f86)"
            stroke="var(--ink)"
            strokeWidth="0.5"
            className="origami-fold"
            style={{ transformOrigin: "327px 109px", animationDelay: "0s" }}
          />
          <path
            d="M74 138 L92 150 L74 164 L56 150 Z"
            fill="var(--c-focus, #e07a5f)"
            stroke="var(--ink)"
            strokeWidth="0.5"
            className="origami-fold"
            style={{ transformOrigin: "74px 150px", animationDelay: "0.6s" }}
          />
          <path
            d="M260 320 L280 333 L272 353 L248 353 L242 333 Z"
            fill="var(--c-energy, #8a5fc2)"
            stroke="var(--ink)"
            strokeWidth="0.5"
            className="origami-fold"
            style={{ transformOrigin: "260px 335px", animationDelay: "1.2s" }}
          />
          <path
            d="M108 300 L122 310 L108 322 L96 310 Z"
            fill="var(--card)"
            stroke="var(--ink)"
            strokeWidth="0.5"
            opacity="0.8"
            className="origami-fold"
            style={{ transformOrigin: "108px 310px", animationDelay: "1.8s" }}
          />
        </g>
      </svg>
    </div>
  );
}