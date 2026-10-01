import PageHeader from '../components/PageHeader'
import Why from '../components/Why'
import CaseStudies from '../components/CaseStudies'
import CTABand from '../components/CTABand'

const VALUES = [
  { title: 'You own everything', desc: 'Every deliverable — source files, website, brand assets — is yours outright. Nothing licensed back to us.' },
  { title: 'One point of contact', desc: 'Not five vendors across logo, web, social, and ads. One team, one inbox, one person to call.' },
  { title: 'À la carte pricing', desc: 'Pay for exactly what you need. Bundles exist purely to save you money if you want more.' },
]

export default function OurWork() {
  return (
    <>
      <PageHeader
        eyebrow="Why Locus"
        title="One partner, real work, no vanity metrics."
        subtitle="A look at how we work, and the social, web, and brand work we’ve done for other local businesses."
      />
      <Why />

      <div className="grid grid-cols-1 gap-8 border-y px-6 py-12 sm:grid-cols-3 sm:px-16" style={{ borderColor: 'var(--line)' }}>
        {VALUES.map((v, i) => (
          <div key={v.title} className={`flex flex-col gap-2 ${i > 0 ? 'sm:border-l sm:pl-8' : ''}`} style={{ borderColor: 'var(--line)' }}>
            <h3 className="text-lg font-semibold" style={{ color: 'var(--ink)' }}>
              {v.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              {v.desc}
            </p>
          </div>
        ))}
      </div>

      <CaseStudies />
      <div className="pb-14">
        <CTABand title="Want to be the next one here?" />
      </div>
    </>
  )
}
