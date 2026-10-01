import { motion, useReducedMotion } from 'motion/react'
import AmbientGlow from './AmbientGlow'

export default function PageHeader({ eyebrow, title, subtitle }) {
  const reduce = useReducedMotion()
  return (
    <div className="relative overflow-hidden px-6 pt-16 pb-14 sm:px-16 md:pt-20 md:pb-20">
      <AmbientGlow corner="top-right" />
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-[720px]"
      >
        {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
        <h1 className="text-[length:var(--step-5)]">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-[55ch] text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  )
}
