// Subtle, reusable background decoration — a soft radial glow plus a faint
// outline of the hero gem's silhouette, echoing the brand mark elsewhere on
// the site without repeating the 3D object itself. Opacity is intentionally
// very low (this is ambient texture, not a focal element) and it never
// carries meaning, so it's always aria-hidden and non-interactive.
export default function AmbientGlow({ corner = 'top-right', dark = false }) {
  const positions = {
    'top-right': { top: '-18%', right: '-10%' },
    'top-left': { top: '-18%', left: '-10%' },
    'bottom-right': { bottom: '-18%', right: '-10%' },
    'bottom-left': { bottom: '-18%', left: '-10%' },
  }

  const glow = dark ? 'rgba(95,212,232,0.16)' : 'color-mix(in oklch, var(--accent) 14%, transparent)'
  const stroke = dark ? 'rgba(255,255,255,0.08)' : 'var(--line)'

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute h-[440px] w-[440px] rounded-full"
        style={{ ...positions[corner], background: `radial-gradient(circle, ${glow}, transparent 70%)`, filter: 'blur(4px)' }}
      />
      <svg
        viewBox="0 0 200 200"
        className="absolute h-[260px] w-[260px]"
        style={{ ...positions[corner], opacity: dark ? 0.5 : 0.6 }}
      >
        <polygon
          points="100,15 178,70 148,185 52,185 22,70"
          fill="none"
          stroke={stroke}
          strokeWidth="1"
        />
      </svg>
    </div>
  )
}
