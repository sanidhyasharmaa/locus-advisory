import { Link } from 'react-router-dom'

// TODO: confirm the real Instagram handle once the account exists.
const INSTAGRAM_URL = 'https://instagram.com/locusadvisory'

function EmailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3.5 6 7.47 6.07a1.6 1.6 0 0 0 2.06 0L20.5 6" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t px-6 py-10 text-sm sm:px-16" style={{ borderColor: 'var(--line)', color: 'var(--muted)' }}>
      <div className="flex flex-wrap items-center justify-between gap-6">
        <Link to="/" className="font-[var(--font-display)] text-base font-bold" style={{ color: 'var(--ink)' }}>
          Locus Advisory
        </Link>

        <div className="flex flex-wrap items-center gap-7">
          <Link to="/services" className="transition-colors hover:text-[var(--ink)]">
            Services
          </Link>
          <Link to="/pricing" className="transition-colors hover:text-[var(--ink)]">
            Pricing
          </Link>
          <Link to="/why-us" className="transition-colors hover:text-[var(--ink)]">
            Why us
          </Link>
          <Link to="/about" className="transition-colors hover:text-[var(--ink)]">
            About
          </Link>
          <Link to="/contact" className="transition-colors hover:text-[var(--ink)]">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:locusadvisory@gmail.com"
            aria-label="Email Locus Advisory"
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:text-[var(--ink)]"
            style={{ border: '1px solid var(--line)' }}
          >
            <EmailIcon className="h-4 w-4" />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Locus Advisory on Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:text-[var(--ink)]"
            style={{ border: '1px solid var(--line)' }}
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs opacity-70">
        <span>&copy; {new Date().getFullYear()} Locus Advisory. All rights reserved.</span>
        <div className="flex gap-5">
          <Link to="/privacy" className="transition-colors hover:text-[var(--ink)]">
            Privacy Policy
          </Link>
          <Link to="/terms" className="transition-colors hover:text-[var(--ink)]">
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  )
}
