import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-start justify-center gap-5 px-6 py-24 sm:px-16">
      <div className="eyebrow">404</div>
      <h1 className="text-[length:var(--step-5)]">This page got lost online.</h1>
      <p className="max-w-[50ch] text-lg" style={{ color: 'var(--muted)' }}>
        Which is, admittedly, a little embarrassing for a company that helps people get found.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to home
      </Link>
    </div>
  )
}
