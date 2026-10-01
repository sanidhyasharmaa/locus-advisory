import PageHeader from '../components/PageHeader'
import ServiceSections, { SECTIONS } from '../components/ServiceSections'
import Process from '../components/Process'
import LogoSpec from '../components/LogoSpec'
import CTABand from '../components/CTABand'

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What we actually do for your business."
        subtitle="Four ways we help local businesses get found, trusted, and chosen — take one piece, or the whole system."
      />
      <ServiceSections items={SECTIONS} />
      <Process />
      <div className="py-10 sm:py-14">
        <LogoSpec />
      </div>
      <div className="pb-14">
        <CTABand
          title="Want to see exact pricing?"
          subtitle="Every service above is on a straightforward price list."
          label="See pricing"
          to="/pricing"
        />
      </div>
    </>
  )
}
