import PageHeader from '../components/PageHeader'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Let’s build your digital presence."
        subtitle="Book a free 20-minute appointment — we’ll map out exactly what your business needs online."
      />
      <div className="pb-20">
        <Contact />
      </div>
    </>
  )
}
