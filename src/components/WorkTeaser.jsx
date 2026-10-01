import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { caseStudies } from '../data/work'

export default function WorkTeaser() {
  const reduce = useReducedMotion()
  const items = caseStudies.slice(0, 3)

  return (
    <section className="px-6 py-20 sm:px-16 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[560px]">
          <h2 className="text-[length:var(--step-4)]">Work we’ve done.</h2>
          <p className="mt-3.5 text-lg" style={{ color: 'var(--muted)' }}>
            A few recent projects across social, web, and brand.
          </p>
        </div>
        <Link to="/why-us" className="btn btn-secondary">
          See our work
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {items.map((c, i) => (
          <motion.div
            key={`${c.client}-${c.service}`}
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3 rounded-2xl border p-6"
            style={{ borderColor: 'var(--line)' }}
          >
            <span
              className="w-fit rounded-full px-2.5 py-1 text-xs font-semibold"
              style={{ background: 'var(--accent-soft)', color: 'var(--accent-dark)' }}
            >
              {c.service}
            </span>
            <div className="font-[var(--font-display)] text-lg font-semibold" style={{ color: 'var(--ink)' }}>
              {c.url ? (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline decoration-[var(--line)] underline-offset-4 transition-colors hover:text-[var(--accent-dark)]"
                >
                  {c.client}
                </a>
              ) : (
                c.client
              )}
            </div>
            <div className="text-xs font-medium uppercase tracking-wide" style={{ color: 'var(--muted)' }}>
              {c.industry}
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--body)' }}>
              {c.summary}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
