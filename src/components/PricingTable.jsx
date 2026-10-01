const ROWS = [
  { name: 'Logo & Brand Identity', setup: 'From $500', monthly: '—' },
  { name: 'Google Business Profile', setup: 'From $500', monthly: 'From $100/mo' },
  { name: 'Website', setup: 'From $1,000', monthly: 'From $100/mo' },
  { name: 'Social Media Ecosystem Builder', setup: '—', monthly: 'From $650/mo · 6-month program' },
  { name: 'Digital Infrastructure Setup', setup: 'From $2,000', monthly: 'From $200/mo', outlined: true },
]

const BUNDLE = { name: 'The Locus System', desc: 'Digital Infrastructure + Social Media, together', setup: '$2,000', monthly: '$800/mo' }

export default function PricingTable() {
  return (
    <div className="px-6 pb-8 sm:px-16">
      <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: 'var(--line)' }}>
        <table className="w-full min-w-[520px] border-collapse text-left">
          <thead>
            <tr style={{ background: 'var(--surface)' }}>
              <th className="px-5 py-4 text-sm font-semibold" style={{ color: 'var(--ink)' }}>
                Service
              </th>
              <th className="px-5 py-4 text-sm font-semibold" style={{ color: 'var(--ink)' }}>
                Setup
              </th>
              <th className="px-5 py-4 text-sm font-semibold" style={{ color: 'var(--ink)' }}>
                Monthly
              </th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.name} className="border-t" style={{ borderColor: 'var(--line)', background: r.outlined ? 'var(--accent-soft)' : undefined }}>
                <td className="px-5 py-4 font-medium" style={{ color: 'var(--ink)' }}>
                  {r.name}
                </td>
                <td className="px-5 py-4 font-[var(--font-display)] font-semibold tabular-nums" style={{ color: 'var(--accent-dark)' }}>
                  {r.setup}
                </td>
                <td className="px-5 py-4 text-[15px] tabular-nums" style={{ color: 'var(--body)' }}>
                  {r.monthly}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className="mt-6 flex flex-col gap-3 rounded-2xl px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between"
        style={{ background: 'var(--ink)' }}
      >
        <div>
          <div className="font-[var(--font-display)] text-lg font-semibold">{BUNDLE.name}</div>
          <div className="text-sm text-white/70">{BUNDLE.desc}</div>
        </div>
        <div className="font-[var(--font-display)] text-xl font-bold tabular-nums">
          From {BUNDLE.setup} + {BUNDLE.monthly}
        </div>
      </div>

      <p className="mt-6 text-sm" style={{ color: 'var(--muted)' }}>
        Prices shown are starting points — final scope and quote depend on your business. AI solutions and other tech (ads, automation, dashboards, analytics) are scoped per business and not on a fixed price list yet.
      </p>
    </div>
  )
}
