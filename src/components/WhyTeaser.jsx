import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

export default function WhyTeaser() {
  const reduce = useReducedMotion()
  return (
    <section className="grid grid-cols-1 gap-8 px-6 py-20 sm:px-16 md:grid-cols-2 md:py-24">
      <motion.h2
        initial={reduce ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-[length:var(--step-4)]"
      >
        No vanity metrics. No five vendors.
      </motion.h2>
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-4"
      >
        <p className="text-lg leading-relaxed" style={{ color: 'var(--body)' }}>
          You shouldn’t need five different companies to manage your online presence. Locus
          brings it together, under one roof.
        </p>
        <Link to="/why-us" className="w-fit font-semibold" style={{ color: 'var(--accent-dark)' }}>
          Why Locus + our work &rarr;
        </Link>
      </motion.div>
    </section>
  )
}
