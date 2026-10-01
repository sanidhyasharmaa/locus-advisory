import Hero from '../components/Hero'
import Industries from '../components/Industries'
import ServicesTeaser from '../components/ServicesTeaser'
import WorkTeaser from '../components/WorkTeaser'
import WhyTeaser from '../components/WhyTeaser'
import FAQ from '../components/FAQ'
import CTABand from '../components/CTABand'

export default function Home() {
  return (
    <>
      <Hero />
      <Industries />
      <ServicesTeaser />
      <WorkTeaser />
      <WhyTeaser />
      <FAQ />
      <div className="pb-14">
        <CTABand />
      </div>
    </>
  )
}
