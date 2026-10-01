import { motion, useReducedMotion } from 'motion/react'

export default function Why() {
  const reduce = useReducedMotion()

  return (
    <section id="why" className="grid grid-cols-1 gap-12 px-6 py-24 sm:px-16 md:grid-cols-2 md:py-32">
      <motion.h2
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-[length:var(--step-4)]"
      >
        No vanity metrics. No five vendors.
      </motion.h2>
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-4 text-lg leading-relaxed"
        style={{ color: 'var(--body)' }}
      >
        <p className="m-0">
          We care about the things that actually move your business: more visibility, more calls,
          more booked jobs.
        </p>
        <p className="m-0">
          You shouldn&rsquo;t need five different companies to manage your online presence.
          Locus brings it together, under one roof, with one person to call.
        </p>
      </motion.div>
    </section>
  )
}
