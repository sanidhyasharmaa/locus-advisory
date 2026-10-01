import PageHeader from '../components/PageHeader'
import PricingTable from '../components/PricingTable'
import CTABand from '../components/CTABand'

export default function Pricing() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Straightforward pricing, no surprise invoices."
        subtitle="Every service is priced à la carte — take one piece or bundle the whole system and save."
      />
      <PricingTable />
      <div className="pb-14 pt-10">
        <CTABand title="Not sure what you need?" subtitle="Book a free appointment and we’ll scope it out together." />
      </div>
    </>
  )
}
