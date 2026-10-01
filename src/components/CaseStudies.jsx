import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { caseStudies, serviceFilters } from '../data/work'

export default function CaseStudies() {
  const reduce = useReducedMotion()
  const [filter, setFilter] = useState('All')
  const items = filter === 'All' ? caseStudies : caseStudies.filter((c) => c.service === filter)

  return (
    <section className="px-6 pt-10 pb-24 sm:px-16">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter work by service">
        {serviceFilters.map((f) => {
          const active = filter === f
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={active}
              className="rounded-full px-4 py-2 text-sm font-medium transition-colors"
              style={{
                background: active ? 'var(--ink)' : 'transparent',
                color: active ? 'var(--bg)' : 'var(--body)',
                border: `1px solid ${active ? 'var(--ink)' : 'var(--line)'}`,
              }}
            >
              {f}
            </button>
          )
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((c) => (
          <motion.div
            key={`${c.client}-${c.service}-${c.industry}`}
            layout
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
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

        {items.length === 0 && (
          <p className="col-span-full text-sm" style={{ color: 'var(--muted)' }}>
            No work filed under this service yet.
          </p>
        )}
      </div>
    </section>
  )
}
