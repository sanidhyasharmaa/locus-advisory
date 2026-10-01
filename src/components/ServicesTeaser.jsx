import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

const TEASERS = [
  { name: 'Social media & design', desc: 'A content system and a brand that looks like it belongs together.', from: 'From $500' },
  { name: 'Website solutions', desc: 'A site, a Google profile, or both as one connected system.', from: 'From $500' },
  { name: 'AI solutions', desc: 'Chatbots, voice agents, and booking — so no lead goes cold.', from: 'Let’s talk' },
  { name: 'Other tech', desc: 'Ads, automation, dashboards, and analytics.', from: 'Let’s talk' },
]

export default function ServicesTeaser() {
  const reduce = useReducedMotion()
  return (
    <section id="services" className="px-6 py-20 sm:px-16 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[560px]">
          <h2 className="text-[length:var(--step-4)]">One partner for your whole digital presence.</h2>
          <p className="mt-3.5 text-lg" style={{ color: 'var(--muted)' }}>
            From content and creative to the website and the AI behind it.
          </p>
        </div>
        <Link to="/services" className="btn btn-secondary">
          Explore services
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TEASERS.map((t, i) => (
          <motion.div
            key={t.name}
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3 rounded-2xl p-6"
            style={{ background: i < 2 ? 'var(--accent-soft)' : 'var(--surface)' }}
          >
            <h3 className="text-lg font-semibold" style={{ color: 'var(--ink)' }}>
              {t.name}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--body)' }}>
              {t.desc}
            </p>
            <div className="mt-auto pt-2 text-sm font-semibold" style={{ color: 'var(--accent-dark)' }}>
              {t.from}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
