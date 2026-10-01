import { industries } from '../data/services'

export default function Industries() {
  return (
    <div
      className="mx-6 mt-4 border-b px-0 pb-8 text-sm font-semibold tracking-wide sm:mx-16"
      style={{ borderColor: 'var(--line)', color: 'var(--muted)' }}
    >
      {industries.join('  •  ')}
    </div>
  )
}
