import { motion, useReducedMotion } from 'motion/react'

function BrowserMock() {
  return (
    <div className="w-full max-w-[420px] overflow-hidden rounded-2xl border shadow-sm" style={{ borderColor: 'var(--line)' }}>
      <div className="flex items-center gap-1.5 border-b px-4 py-3" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'var(--line)' }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'var(--line)' }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'var(--line)' }} />
        <div className="ml-3 h-5 flex-1 rounded-full" style={{ background: 'var(--bg)' }} />
      </div>
      <div className="flex flex-col gap-3 p-5" style={{ background: 'var(--bg)' }}>
        <div className="h-20 rounded-lg" style={{ background: 'var(--accent)' }} />
        <div className="h-3 w-3/4 rounded-full" style={{ background: 'var(--surface-2)' }} />
        <div className="h-3 w-1/2 rounded-full" style={{ background: 'var(--surface-2)' }} />
        <div className="mt-1 h-8 w-28 rounded-full" style={{ background: 'var(--ink)' }} />
      </div>
    </div>
  )
}

function PostStackMock() {
  const posts = [0, 1, 2]
  return (
    <div className="relative h-[280px] w-full max-w-[420px]">
      {posts.map((i) => (
        <div
          key={i}
          className="absolute w-[220px] rounded-2xl border p-4 shadow-sm"
          style={{
            borderColor: 'var(--line)',
            background: 'var(--bg)',
            top: i * 26,
            left: i * 36,
            transform: `rotate(${(i - 1) * 3}deg)`,
          }}
        >
          <div className="mb-3 flex items-center gap-2">
            <div className="h-7 w-7 rounded-full" style={{ background: 'var(--accent)' }} />
            <div className="h-2.5 w-16 rounded-full" style={{ background: 'var(--surface-2)' }} />
          </div>
          <div className="h-24 rounded-lg" style={{ background: 'var(--accent-soft)' }} />
          <div className="mt-3 h-2.5 w-3/4 rounded-full" style={{ background: 'var(--surface-2)' }} />
        </div>
      ))}
    </div>
  )
}

function ChatMock() {
  return (
    <div className="w-full max-w-[380px] overflow-hidden rounded-2xl border shadow-sm" style={{ borderColor: 'var(--line)' }}>
      <div className="flex items-center gap-2.5 border-b px-4 py-3" style={{ borderColor: 'var(--line)', background: 'var(--ink)' }}>
        <span className="h-2 w-2 rounded-full" style={{ background: '#5fd4e8' }} />
        <div className="h-2.5 w-24 rounded-full bg-white/70" />
      </div>
      <div className="flex flex-col gap-3 p-5" style={{ background: 'var(--bg)' }}>
        <div className="max-w-[72%] rounded-2xl rounded-bl-sm px-3.5 py-2.5" style={{ background: 'var(--surface)' }}>
          <div className="h-2.5 w-32 rounded-full" style={{ background: 'var(--surface-2)' }} />
        </div>
        <div className="ml-auto max-w-[78%] rounded-2xl rounded-br-sm px-3.5 py-2.5" style={{ background: 'var(--accent)' }}>
          <div className="h-2.5 w-36 rounded-full bg-white/60" />
          <div className="mt-1.5 h-2.5 w-20 rounded-full bg-white/60" />
        </div>
        <div className="max-w-[60%] rounded-2xl rounded-bl-sm px-3.5 py-2.5" style={{ background: 'var(--surface)' }}>
          <div className="h-2.5 w-20 rounded-full" style={{ background: 'var(--surface-2)' }} />
        </div>
        <div className="mt-2 flex items-center gap-2 rounded-full border px-3.5 py-2.5" style={{ borderColor: 'var(--line)' }}>
          <div className="h-2.5 w-24 rounded-full" style={{ background: 'var(--surface-2)' }} />
          <div className="ml-auto h-6 w-6 rounded-full" style={{ background: 'var(--ink)' }} />
        </div>
      </div>
    </div>
  )
}

function DashboardMock() {
  const bars = [0.4, 0.7, 0.5, 0.9, 0.65, 0.8]
  return (
    <div className="w-full max-w-[420px] overflow-hidden rounded-2xl border p-5 shadow-sm" style={{ borderColor: 'var(--line)', background: 'var(--bg)' }}>
      <div className="mb-5 flex items-center justify-between">
        <div className="h-2.5 w-28 rounded-full" style={{ background: 'var(--surface-2)' }} />
        <div className="h-5 w-16 rounded-full" style={{ background: 'var(--accent-soft)' }} />
      </div>
      <div className="flex h-28 items-end gap-2.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-md"
            style={{ height: `${h * 100}%`, background: i === 3 ? 'var(--accent)' : 'var(--surface-2)' }}
          />
        ))}
      </div>
      <div className="mt-4 flex items-center gap-4 text-[13px]" style={{ color: 'var(--muted)' }}>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full" style={{ background: 'var(--accent)' }} /> This month
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full" style={{ background: 'var(--surface-2)' }} /> Last month
        </span>
      </div>
    </div>
  )
}

export const SECTIONS = [
  {
    tag: '01 — Social & design',
    title: 'Content that looks like it belongs to one brand.',
    desc: 'A content strategy, calendar, and a steady publishing rhythm — built around a brand identity designed to hold up everywhere it shows up.',
    items: ['Content strategy & calendar', 'Short-form video, posts & graphics', 'Logo, colour palette, type system', 'Monthly performance review'],
    price: 'Social from $650/mo · Logo $500',
    Visual: PostStackMock,
  },
  {
    tag: '02 — Website & Google',
    title: 'A site and a search presence that work together.',
    desc: 'Built to turn visitors into calls and quote requests, with your Google Business Profile optimized so you show up — and look right — the moment someone searches.',
    items: ['Custom website, mobile-optimized', 'Google Business Profile & local SEO', 'Contact & quote forms, analytics', 'Ongoing updates & profile management'],
    price: 'Website from $1,000 + $100/mo',
    Visual: BrowserMock,
  },
  {
    tag: '03 — AI solutions',
    title: 'Something answers, even when you can’t.',
    desc: 'A chatbot that qualifies leads at midnight, a voice agent that picks up the phone, a booking flow that puts the job straight on your calendar — scoped to how your business actually runs.',
    items: ['AI chatbot — answers questions, captures leads 24/7', 'AI voice agent — picks up when you can’t', 'AI appointment booking — books straight into your calendar'],
    price: 'Scoped per business — let’s talk',
    Visual: ChatMock,
  },
  {
    tag: '04 — Other tech',
    title: 'The infrastructure behind the growth.',
    desc: 'Once the basics are working, this is what scales it — paid traffic, automation that removes busywork, and dashboards that show what’s actually happening instead of a gut feeling.',
    items: ['Meta & Google Ads management', 'Workflow automation', 'BI dashboards', 'Campaign analytics'],
    price: 'Scoped per business — let’s talk',
    Visual: DashboardMock,
  },
]

export default function ServiceSections({ items = SECTIONS }) {
  const reduce = useReducedMotion()

  return (
    <div className="flex flex-col gap-24 px-6 pb-8 sm:px-16 md:gap-32">
      {items.map((s, i) => (
        <div
          key={s.tag}
          className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16 ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <div className="eyebrow">{s.tag}</div>
            <h2 className="text-[length:var(--step-3)]">{s.title}</h2>
            <p className="max-w-[48ch] text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
              {s.desc}
            </p>
            <ul className="mt-2 flex flex-col gap-2 text-[15px]" style={{ color: 'var(--body)' }}>
              {s.items.map((it) => (
                <li key={it} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'var(--accent)' }} />
                  {it}
                </li>
              ))}
            </ul>
            <div className="mt-2 font-semibold" style={{ color: 'var(--accent-dark)' }}>
              {s.price}
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <s.Visual />
          </motion.div>
        </div>
      ))}
    </div>
  )
}
