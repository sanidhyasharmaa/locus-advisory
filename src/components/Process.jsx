import { motion, useReducedMotion } from 'motion/react'
import { process } from '../data/content'

export default function Process() {
  const reduce = useReducedMotion()
  return (
    <section className="px-6 py-20 sm:px-16 md:py-24">
      <div className="max-w-[640px]">
        <h2 className="text-[length:var(--step-4)]">How we work</h2>
        <p className="mt-3.5 text-lg" style={{ color: 'var(--muted)' }}>
          Four steps, start to finish — no guesswork about what happens next.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((p, i) => (
          <motion.div
            key={p.step}
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3 border-t pt-5"
            style={{ borderColor: 'var(--line)' }}
          >
            <div className="font-[var(--font-display)] text-sm font-semibold" style={{ color: 'var(--accent-dark)' }}>
              {p.step}
            </div>
            <h3 className="text-xl">{p.title}</h3>
            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
