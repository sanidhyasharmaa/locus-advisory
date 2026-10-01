import PageHeader from '../components/PageHeader'
import Team from '../components/Team'
import CTABand from '../components/CTABand'

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Small team, no wasted layers."
        subtitle="Locus Advisory is run by a small, skilled team — no account managers, no handoffs. You work directly with the people doing the work."
      />
      <Team />
      <div className="pb-14">
        <CTABand />
      </div>
    </>
  )
}
