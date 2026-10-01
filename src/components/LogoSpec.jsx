import { motion, useReducedMotion } from 'motion/react'
import { logoDeliverables } from '../data/services'
import AmbientGlow from './AmbientGlow'

export default function LogoSpec() {
  const reduce = useReducedMotion()

  return (
    <div
      className="relative mx-4 grid grid-cols-1 gap-12 overflow-hidden rounded-[28px] px-6 py-14 sm:mx-10 sm:px-12 md:grid-cols-2"
      style={{ background: 'var(--surface)' }}
    >
      <AmbientGlow corner="bottom-left" />
      <motion.div
        className="relative"
        initial={reduce ? false : { opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-[length:var(--step-3)]">Every logo ships as a full identity kit.</h2>
        <p className="mt-3.5 max-w-[46ch] text-base" style={{ color: 'var(--muted)' }}>
          Not a single isolated graphic — a system that shows up the same way on your website,
          your profile, your trucks, and your invoices.
        </p>
        <div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-2.5 text-sm sm:grid-cols-2" style={{ color: 'var(--body)' }}>
          {logoDeliverables.map((d) => (
            <div key={d}>&mdash; {d}</div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative self-start rounded-2xl border p-7"
        style={{ borderColor: 'var(--line)', background: 'var(--bg)' }}
      >
        <div className="mb-4 flex items-center gap-3">
          <div className="h-10 w-10 rounded-[10px]" style={{ background: 'var(--accent)' }} />
          <div className="font-[var(--font-display)] text-lg font-semibold">Ridgeline Electric</div>
        </div>
        <div className="mb-4 flex gap-2">
          <div className="h-7 w-7 rounded-md" style={{ background: 'var(--accent)' }} />
          <div className="h-7 w-7 rounded-md" style={{ background: 'var(--ink)' }} />
          <div className="h-7 w-7 rounded-md border" style={{ background: 'var(--surface-2)', borderColor: 'var(--line)' }} />
        </div>
        <div className="text-xs" style={{ color: 'var(--muted)' }}>
          sample brand kit preview
        </div>
      </motion.div>
    </div>
  )
}
