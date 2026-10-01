import PageHeader from '../components/PageHeader'
import Team from '../components/Team'
import CTABand from '../components/CTABand'

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Two people, one point of contact."
        subtitle="Locus Advisory is run by a small, hands-on team — no account managers, no handoffs. You work directly with the people doing the work."
      />
      <Team />
      <div className="pb-14">
        <CTABand />
      </div>
    </>
  )
}
