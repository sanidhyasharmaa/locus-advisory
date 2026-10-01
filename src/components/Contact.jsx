import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import AmbientGlow from './AmbientGlow'

const CONTACT_EMAIL = 'locusadvisory@gmail.com'

// Google Apps Script web app that appends each submission as a row in the
// Locus Leads Google Sheet (see ../../backend/google-sheets-apps-script.gs).
const SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbx2zXXYg-6m_ImnynfZFitqm7PV0X033ib3zckbqBKR-aMDqmvIZDyNhNynBqUBOzMU/exec'

// `digits: [min, max]` is the expected length of the national number — i.e.
// what you type here — NOT counting the country code itself. Most countries
// have one fixed mobile length; a few (DE, IT, BR) genuinely vary, hence a
// range. These are practical rules of thumb, not a full telecom spec.
const COUNTRY_CODES = [
  { code: '+1', country: 'United States / Canada', label: '+1 (US/CA)', digits: [10, 10] },
  { code: '+44', country: 'United Kingdom', label: '+44 (UK)', digits: [10, 10] },
  { code: '+91', country: 'India', label: '+91 (IN)', digits: [10, 10] },
  { code: '+61', country: 'Australia', label: '+61 (AU)', digits: [9, 9] },
  { code: '+64', country: 'New Zealand', label: '+64 (NZ)', digits: [8, 9] },
  { code: '+353', country: 'Ireland', label: '+353 (IE)', digits: [9, 9] },
  { code: '+971', country: 'United Arab Emirates', label: '+971 (AE)', digits: [9, 9] },
  { code: '+966', country: 'Saudi Arabia', label: '+966 (SA)', digits: [9, 9] },
  { code: '+49', country: 'Germany', label: '+49 (DE)', digits: [10, 11] },
  { code: '+33', country: 'France', label: '+33 (FR)', digits: [9, 9] },
  { code: '+34', country: 'Spain', label: '+34 (ES)', digits: [9, 9] },
  { code: '+39', country: 'Italy', label: '+39 (IT)', digits: [9, 10] },
  { code: '+31', country: 'Netherlands', label: '+31 (NL)', digits: [9, 9] },
  { code: '+65', country: 'Singapore', label: '+65 (SG)', digits: [8, 8] },
  { code: '+63', country: 'Philippines', label: '+63 (PH)', digits: [10, 10] },
  { code: '+92', country: 'Pakistan', label: '+92 (PK)', digits: [10, 10] },
  { code: '+234', country: 'Nigeria', label: '+234 (NG)', digits: [10, 10] },
  { code: '+27', country: 'South Africa', label: '+27 (ZA)', digits: [9, 9] },
  { code: '+52', country: 'Mexico', label: '+52 (MX)', digits: [10, 10] },
  { code: '+55', country: 'Brazil', label: '+55 (BR)', digits: [10, 11] },
]

const HELP_OPTIONS = [
  'Website',
  'Google Business Profile',
  'Social media',
  'Logo & brand identity',
  'AI solutions',
  'Ads & marketing',
  'Automation & dashboards',
  'Not sure yet',
]

const INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
  countryCode: '+1',
  mobile: '',
  company: '',
  services: [],
}

function validate(values) {
  const errors = {}
  if (!values.firstName.trim()) errors.firstName = 'Enter your first name.'
  if (!values.lastName.trim()) errors.lastName = 'Enter your last name.'
  if (!values.email.trim()) errors.email = 'Enter your email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Enter a valid email.'

  const mobileRaw = values.mobile.trim()
  if (!mobileRaw) {
    errors.mobile = 'Enter your mobile number.'
  } else if (!/^[0-9\s-]+$/.test(mobileRaw)) {
    errors.mobile = 'Numbers only, please.'
  } else {
    const digitCount = mobileRaw.replace(/[^0-9]/g, '').length
    const rule = COUNTRY_CODES.find((c) => c.code === values.countryCode)
    const [min, max] = rule?.digits || [6, 15]
    if (digitCount < min || digitCount > max) {
      errors.mobile =
        min === max
          ? `${rule.country} numbers are ${min} digits (excluding the ${rule.code}).`
          : `${rule.country} numbers are ${min}–${max} digits (excluding the ${rule.code}).`
    }
  }

  if (values.services.length === 0) errors.services = 'Pick at least one.'
  return errors
}

const fieldClass =
  'min-h-[48px] w-full rounded-[10px] border bg-white/[0.06] px-4 py-3 text-white outline-none transition-colors focus-visible:border-[var(--accent)]'

function HelpDropdown({ selected, onChange, error, touched, onBlur }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function onDocClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  function toggleOption(opt) {
    onChange(selected.includes(opt) ? selected.filter((o) => o !== opt) : [...selected, opt])
  }

  const summary = selected.length === 0 ? 'Select services' : selected.length <= 2 ? selected.join(', ') : `${selected.length} selected`

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onBlur={onBlur}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`${fieldClass} flex items-center justify-between text-left`}
        style={{ borderColor: touched && error ? '#f3a6a0' : 'rgba(255,255,255,0.15)' }}
      >
        <span className={selected.length === 0 ? 'text-white/50' : 'text-white'}>{summary}</span>
        <span aria-hidden="true" className="ml-2 text-white/60" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
          ▾
        </span>
      </button>

      {open && (
        <div
          role="listbox"
          aria-multiselectable="true"
          className="absolute z-20 mt-2 w-full rounded-[10px] border p-2 shadow-lg"
          style={{ background: 'var(--ink)', borderColor: 'rgba(255,255,255,0.15)' }}
        >
          {HELP_OPTIONS.map((opt) => (
            <label
              key={opt}
              className="flex cursor-pointer items-center gap-2.5 rounded-md px-2.5 py-2 text-sm text-white/90 hover:bg-white/[0.06]"
            >
              <input
                type="checkbox"
                checked={selected.includes(opt)}
                onChange={() => toggleOption(opt)}
                className="h-4 w-4 shrink-0 accent-[var(--accent)]"
              />
              {opt}
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Contact() {
  const reduce = useReducedMotion()
  const [values, setValues] = useState(INITIAL_VALUES)
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const [showToast, setShowToast] = useState(false)

  // Auto-dismiss the "sent" toast after a few seconds.
  useEffect(() => {
    if (!showToast) return undefined
    const t = window.setTimeout(() => setShowToast(false), 4000)
    return () => window.clearTimeout(t)
  }, [showToast])

  const errorsNow = validate(values)

  function handleBlur(field) {
    setTouched((t) => ({ ...t, [field]: true }))
  }

  function handleChange(field, v) {
    setValues((s) => ({ ...s, [field]: v }))
  }

  function markSent() {
    setStatus('sent')
    setShowToast(true)
    setValues(INITIAL_VALUES)
    setTouched({})
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setTouched({ firstName: true, lastName: true, email: true, mobile: true, services: true })
    if (Object.keys(errorsNow).length > 0) return

    setStatus('sending')
    const fullName = `${values.firstName} ${values.lastName}`.trim()
    const country = COUNTRY_CODES.find((c) => c.code === values.countryCode)?.country || ''

    if (!SHEET_ENDPOINT) {
      // Sheet isn't wired up yet (SHEET_ENDPOINT left blank) — fall back to
      // opening the user's email client so a lead still reaches someone.
      const subject = encodeURIComponent(`Appointment request — ${fullName}`)
      const bodyLines = [
        `Name: ${fullName}`,
        `Email: ${values.email}`,
        `Country: ${country}`,
        `Mobile: ${values.countryCode} ${values.mobile}`,
        `Company: ${values.company || '—'}`,
        `Needs help with: ${values.services.join(', ')}`,
      ]
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(bodyLines.join('\n'))}`
      window.setTimeout(markSent, 600)
      return
    }

    try {
      const formData = new FormData()
      formData.append('firstName', values.firstName)
      formData.append('lastName', values.lastName)
      formData.append('email', values.email)
      formData.append('country', country)
      formData.append('mobile', `${values.countryCode} ${values.mobile}`)
      formData.append('company', values.company)
      formData.append('services', values.services.join(', '))

      // Apps Script web apps don't return CORS headers for cross-origin
      // callers, so this uses "no-cors" (fire-and-forget: a successful
      // network round-trip resolves even though we can't read the response
      // body). A real network failure — offline, wrong URL — still rejects.
      await fetch(SHEET_ENDPOINT, { method: 'POST', mode: 'no-cors', body: formData })
      markSent()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="relative mx-4 grid grid-cols-1 gap-12 overflow-hidden rounded-[28px] px-6 py-16 text-white sm:mx-10 sm:px-14 sm:py-20 md:grid-cols-2"
      style={{ background: 'var(--ink)' }}
    >
      <AmbientGlow corner="top-left" dark />
      <motion.div
        className="relative"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-[length:var(--step-3)] text-white">What happens next</h2>
        <p className="mt-3.5 max-w-[40ch] text-white/70">
          Send a few details and we&rsquo;ll reply within one business day to find a time for your
          free appointment.
        </p>
        <p className="mt-6 text-sm text-white/60">
          Prefer email? Reach us directly at{' '}
          <a href="mailto:locusadvisory@gmail.com" className="underline">
            locusadvisory@gmail.com
          </a>
          .
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex flex-col gap-4"
        noValidate
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="firstName" className="text-sm font-medium text-white/80">
              First name
            </label>
            <input
              id="firstName"
              value={values.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              onBlur={() => handleBlur('firstName')}
              aria-describedby={touched.firstName && errorsNow.firstName ? 'firstName-err' : undefined}
              className={fieldClass}
              style={{ borderColor: touched.firstName && errorsNow.firstName ? '#f3a6a0' : 'rgba(255,255,255,0.15)' }}
            />
            {touched.firstName && errorsNow.firstName && (
              <p id="firstName-err" role="alert" className="text-sm text-[#f3a6a0]">
                {errorsNow.firstName}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="lastName" className="text-sm font-medium text-white/80">
              Last name
            </label>
            <input
              id="lastName"
              value={values.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              onBlur={() => handleBlur('lastName')}
              aria-describedby={touched.lastName && errorsNow.lastName ? 'lastName-err' : undefined}
              className={fieldClass}
              style={{ borderColor: touched.lastName && errorsNow.lastName ? '#f3a6a0' : 'rgba(255,255,255,0.15)' }}
            />
            {touched.lastName && errorsNow.lastName && (
              <p id="lastName-err" role="alert" className="text-sm text-[#f3a6a0]">
                {errorsNow.lastName}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-white/80">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            aria-describedby={touched.email && errorsNow.email ? 'email-err' : undefined}
            className={fieldClass}
            style={{ borderColor: touched.email && errorsNow.email ? '#f3a6a0' : 'rgba(255,255,255,0.15)' }}
          />
          {touched.email && errorsNow.email && (
            <p id="email-err" role="alert" className="text-sm text-[#f3a6a0]">
              {errorsNow.email}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="mobile" className="text-sm font-medium text-white/80">
            Mobile number
          </label>
          <div
            className="flex items-stretch overflow-hidden rounded-[10px] border bg-white/[0.06] transition-colors focus-within:border-[var(--accent)]"
            style={{ borderColor: touched.mobile && errorsNow.mobile ? '#f3a6a0' : 'rgba(255,255,255,0.15)' }}
          >
            <div className="relative shrink-0">
              <select
                aria-label="Country code"
                value={values.countryCode}
                onChange={(e) => handleChange('countryCode', e.target.value)}
                className="h-full w-[116px] cursor-pointer appearance-none overflow-hidden whitespace-nowrap bg-transparent py-3 pl-3.5 pr-6 text-sm font-medium text-white outline-none"
              >
                {/* Closed box shows just the code (truncated width); the native popup list still
                    shows the full "+44 (UK)" label so the country is easy to find when choosing. */}
                {COUNTRY_CODES.map((c) => (
                  <option key={c.code} value={c.code} style={{ color: 'black' }}>
                    {c.label}
                  </option>
                ))}
              </select>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-white/50"
              >
                ▾
              </span>
            </div>
            <div className="my-2.5 w-px shrink-0" style={{ background: 'rgba(255,255,255,0.15)' }} />
            <input
              id="mobile"
              type="text"
              inputMode="tel"
              placeholder="555 123 4567"
              value={values.mobile}
              onChange={(e) => handleChange('mobile', e.target.value)}
              onBlur={() => handleBlur('mobile')}
              aria-describedby={touched.mobile && errorsNow.mobile ? 'mobile-err' : undefined}
              className="min-h-[48px] min-w-0 flex-1 bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/35"
            />
          </div>
          {touched.mobile && errorsNow.mobile && (
            <p id="mobile-err" role="alert" className="text-sm text-[#f3a6a0]">
              {errorsNow.mobile}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-sm font-medium text-white/80">
            Company <span className="font-normal text-white/50">(optional)</span>
          </label>
          <input
            id="company"
            value={values.company}
            onChange={(e) => handleChange('company', e.target.value)}
            className={fieldClass}
            style={{ borderColor: 'rgba(255,255,255,0.15)' }}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <span id="services-label" className="text-sm font-medium text-white/80">
            What do you need help with?
          </span>
          <HelpDropdown
            selected={values.services}
            onChange={(v) => handleChange('services', v)}
            error={errorsNow.services}
            touched={touched.services}
            onBlur={() => handleBlur('services')}
          />
          {touched.services && errorsNow.services && (
            <p role="alert" className="text-sm text-[#f3a6a0]">
              {errorsNow.services}
            </p>
          )}
        </div>

        <button type="submit" disabled={status === 'sending'} className="btn mt-2 bg-white text-[var(--ink)] disabled:opacity-60">
          {status === 'sending' ? 'Sending…' : 'Book my appointment'}
        </button>

        {status === 'error' && (
          <p role="alert" className="text-sm text-[#f3a6a0]">
            Something went wrong sending that. Please email us directly at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        )}
      </motion.form>

      <div aria-live="polite" className="pointer-events-none fixed inset-x-0 top-6 z-50 flex justify-center px-4">
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              role="status"
              className="pointer-events-auto flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-medium text-white shadow-lg"
              style={{ background: 'var(--ink)' }}
            >
              <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: 'var(--accent)' }} />
              Appointment request sent — we&rsquo;ll be in touch soon.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
