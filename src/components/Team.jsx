import { motion, useReducedMotion } from 'motion/react'
import { team } from '../data/team'

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="7" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11.5 16.5v-4a2 2 0 0 1 4 0v4" />
      <line x1="11.5" y1="10.5" x2="11.5" y2="16.5" />
    </svg>
  )
}

function Avatar({ name, photo, inverted }) {
  if (photo) {
    return <img src={photo} alt="" className="h-24 w-24 rounded-full object-cover sm:h-28 sm:w-28" />
  }
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
  return (
    <div
      aria-hidden="true"
      className="flex h-24 w-24 items-center justify-center rounded-full font-[var(--font-display)] text-2xl font-semibold sm:h-28 sm:w-28"
      style={
        inverted
          ? { background: 'var(--ink)', color: 'var(--bg)', border: '1px solid var(--ink)' }
          : { background: 'var(--accent-soft)', color: 'var(--accent-dark)', border: '1px solid var(--line)' }
      }
    >
      {initials}
    </div>
  )
}

export default function Team() {
  const reduce = useReducedMotion()
  return (
    <section className="px-6 py-14 sm:px-16">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {team.map((person, i) => (
          <motion.div
            key={person.name}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
            className="flex flex-col items-start gap-4 rounded-2xl border p-8"
            style={{ borderColor: 'var(--line)' }}
          >
            <Avatar name={person.name} photo={person.photo} inverted={i % 2 === 1} />
            <div>
              <h3 className="font-[var(--font-display)] text-xl font-semibold" style={{ color: 'var(--ink)' }}>
                {person.name}
              </h3>
              <p className="mt-1 text-sm font-medium" style={{ color: 'var(--muted)' }}>
                {person.role}
              </p>
            </div>
            {person.bio && (
              <p className="text-sm leading-relaxed" style={{ color: 'var(--body)' }}>
                {person.bio}
              </p>
            )}
            <a
              href={person.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${person.name} on LinkedIn`}
              className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:text-[var(--ink)]"
              style={{ border: '1px solid var(--line)', color: 'var(--muted)' }}
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
