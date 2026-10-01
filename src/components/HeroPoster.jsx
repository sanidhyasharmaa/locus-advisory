// Static fallback for no-WebGL / prefers-reduced-motion — same composition, frozen.
// Real <img> would be ideal, but an inline SVG keeps this dependency-free and still
// gives explicit intrinsic size (zero CLS) and a real "frozen frame" instead of a blank box.
export default function HeroPoster({ className = '' }) {
  return (
    <svg
      viewBox="0 0 800 640"
      width="800"
      height="640"
      role="img"
      aria-label="Locus brand mark: a faceted glass gem with a ring around it"
      className={className}
      style={{ width: '100%', height: '100%' }}
    >
      <defs>
        <radialGradient id="glow" cx="50%" cy="46%" r="55%">
          <stop offset="0%" stopColor="#0e7490" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0e7490" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="facetA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5fd4e8" />
          <stop offset="100%" stopColor="#0e7490" />
        </linearGradient>
        <linearGradient id="facetB" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#0b5b6e" />
          <stop offset="100%" stopColor="#0e7490" />
        </linearGradient>
        <linearGradient id="ring" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5fd4e8" stopOpacity="0" />
          <stop offset="20%" stopColor="#5fd4e8" stopOpacity="0.55" />
          <stop offset="50%" stopColor="#0e7490" stopOpacity="0.15" />
          <stop offset="80%" stopColor="#5fd4e8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#5fd4e8" stopOpacity="0" />
        </linearGradient>
      </defs>

      <circle cx="470" cy="300" r="190" fill="url(#glow)" />
      <ellipse cx="470" cy="300" rx="230" ry="62" fill="none" stroke="url(#ring)" strokeWidth="26" opacity="0.9" transform="rotate(-8 470 300)" />
      <ellipse cx="470" cy="470" rx="110" ry="20" fill="#15181a" opacity="0.12" />

      <g transform="translate(470,300)">
        <polygon points="0,-110 95,30 0,80 -95,30" fill="url(#facetA)" />
        <polygon points="0,-110 0,80 -95,30" fill="url(#facetB)" opacity="0.9" />
      </g>

      <circle cx="660" cy="190" r="10" fill="#5fd4e8" />
      <circle cx="700" cy="340" r="7" fill="#0e7490" />
      <circle cx="630" cy="420" r="12" fill="#5fd4e8" opacity="0.85" />
    </svg>
  )
}
