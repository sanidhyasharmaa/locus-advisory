import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

const LINKS = [
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/why-us', label: 'Why us' },
  { to: '/about', label: 'About' },
]

export default function Nav() {
  const [condensed, setCondensed] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="sticky top-0 z-30 flex justify-center px-4 pt-5 sm:px-8">
      <nav
        className="flex w-full max-w-[1120px] items-center justify-between rounded-full border transition-[padding,background-color] duration-300"
        style={{
          background: condensed ? 'color-mix(in oklch, var(--bg) 85%, transparent)' : 'transparent',
          borderColor: condensed ? 'var(--line)' : 'transparent',
          backdropFilter: 'blur(14px)',
          padding: condensed ? '8px 8px 8px 22px' : '14px 8px 14px 22px',
        }}
      >
        <Link to="/" className="font-[var(--font-display)] text-xl font-bold whitespace-nowrap" style={{ color: 'var(--ink)' }}>
          Locus Advisory
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex" style={{ color: 'var(--body)' }}>
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `transition-colors hover:text-[var(--ink)] ${isActive ? 'font-semibold' : ''}`}
              style={({ isActive }) => ({ color: isActive ? 'var(--ink)' : undefined })}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <Link to="/contact" className="btn btn-primary hidden !px-5 !py-2.5 !text-sm md:inline-flex">
          Book an appointment
        </Link>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-10 w-10 items-center justify-center rounded-full md:hidden"
        >
          <span
            className="absolute block h-[1.5px] w-5 bg-[var(--ink)] transition-transform"
            style={{ transform: open ? 'rotate(45deg)' : 'translateY(-4px)' }}
          />
          <span
            className="absolute block h-[1.5px] w-5 bg-[var(--ink)] transition-transform"
            style={{ transform: open ? 'rotate(-45deg)' : 'translateY(4px)' }}
          />
        </button>
      </nav>

      {open && (
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-20 flex flex-col items-center justify-center gap-8 backdrop-blur-2xl md:hidden"
          style={{ background: 'color-mix(in oklch, var(--bg) 92%, transparent)' }}
        >
          {LINKS.map((l, i) => (
            <motion.div
              key={l.to}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
            >
              <Link to={l.to} onClick={() => setOpen(false)} className="text-2xl font-medium" style={{ color: 'var(--ink)' }}>
                {l.label}
              </Link>
            </motion.div>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-primary mt-4">
            Book an appointment
          </Link>
        </motion.div>
      )}
    </div>
  )
}
