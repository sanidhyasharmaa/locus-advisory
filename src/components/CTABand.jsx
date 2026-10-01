import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import AmbientGlow from './AmbientGlow'

export default function CTABand({
  title = "Ready to get started?",
  subtitle = "Book a free 20-minute appointment — no obligation.",
  label = 'Book an appointment',
  to = '/contact',
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-4 flex flex-col items-start gap-6 overflow-hidden rounded-[28px] px-6 py-14 text-white sm:mx-10 sm:flex-row sm:items-center sm:justify-between sm:px-14"
      style={{ background: 'var(--ink)' }}
    >
      <AmbientGlow corner="bottom-right" dark />
      <div className="relative">
        <h2 className="text-[length:var(--step-3)] text-white">{title}</h2>
        <p className="mt-2 text-white/70">{subtitle}</p>
      </div>
      <Link to={to} className="btn relative bg-white text-[var(--ink)]">
        {label}
      </Link>
    </motion.div>
  )
}
