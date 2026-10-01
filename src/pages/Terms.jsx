import PageHeader from '../components/PageHeader'

function Section({ id, num, title, children }) {
  return (
    <div id={id} className="flex scroll-mt-28 flex-col gap-3">
      <h2 className="text-xl">
        <span className="mr-2 font-normal" style={{ color: 'var(--muted)' }}>
          {num}.
        </span>
        {title}
      </h2>
      <div className="flex flex-col gap-3 text-[15px] leading-relaxed" style={{ color: 'var(--body)' }}>
        {children}
      </div>
    </div>
  )
}

const SECTIONS = [
  ['acceptance', 'Acceptance of these terms'],
  ['changes', 'Changes to these terms'],
  ['eligibility', 'Eligibility'],
  ['the-website', 'What this website is (and isn’t)'],
  ['no-guarantees', 'No professional advice, no guaranteed results'],
  ['service-engagements', 'Service engagements'],
  ['acceptable-use', 'Acceptable use'],
  ['intellectual-property', 'Intellectual property'],
  ['submissions', 'Information you submit to us'],
  ['third-party', 'Third-party services and links'],
  ['warranty-disclaimer', 'Disclaimer of warranties'],
  ['liability', 'Limitation of liability'],
  ['indemnification', 'Indemnification'],
  ['termination', 'Termination of access'],
  ['governing-law', 'Governing law and disputes'],
  ['force-majeure', 'Force majeure'],
  ['general', 'Severability, entire agreement, waiver, assignment'],
  ['contact', 'Contact us'],
]

export default function Terms() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms & Conditions" subtitle="Last updated October 2, 2026." />

      <div className="flex flex-col gap-10 px-6 pb-24 sm:px-16">
        <nav aria-label="Table of contents" className="rounded-xl border p-5" style={{ borderColor: 'var(--line)' }}>
          <div className="mb-3 text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--muted)' }}>
            Contents
          </div>
          <ol className="grid grid-cols-1 gap-x-8 gap-y-1.5 text-sm sm:grid-cols-2" style={{ color: 'var(--body)' }}>
            {SECTIONS.map(([id, title], i) => (
              <li key={id}>
                <a href={`#${id}`} className="transition-colors hover:text-[var(--accent-dark)]">
                  {i + 1}. {title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <Section id="acceptance" num={1} title="Acceptance of these terms">
          <p className="m-0">
            By visiting or using locusadvisory.com (the &ldquo;Site&rdquo;), you agree to these Terms &amp;
            Conditions. If you don&rsquo;t agree, please don&rsquo;t use the Site. These terms govern your
            use of the Site itself &mdash; they are separate from, and don&rsquo;t replace, any signed
            service agreement you enter into with us (see Section 6).
          </p>
        </Section>

        <Section id="changes" num={2} title="Changes to these terms">
          <p className="m-0">
            We may update these terms from time to time; the &ldquo;last updated&rdquo; date above reflects
            the latest revision. Continuing to use the Site after a change means you accept the updated
            terms.
          </p>
        </Section>

        <Section id="eligibility" num={3} title="Eligibility">
          <p className="m-0">
            You must be at least 18 years old, and authorized to act on behalf of the business you
            represent, to submit the contact form or otherwise engage with us through this Site.
          </p>
        </Section>

        <Section id="the-website" num={4} title="What this website is (and isn't)">
          <p className="m-0">
            This Site is a marketing and lead-generation site. It does not have user accounts, logins, or
            any paid checkout &mdash; nothing you do here involves a payment. Submitting the contact form
            sends your information to us so we can follow up; it is an inquiry, not an order, and does not
            by itself create a contract between us.
          </p>
        </Section>

        <Section id="no-guarantees" num={5} title="No professional advice, no guaranteed results">
          <p className="m-0">
            Content on this Site (including pricing, service descriptions, and anything in our FAQ) is
            provided for general informational purposes and is not professional, legal, financial, or
            marketing advice. We work hard to help clients get found, trusted, and chosen online, but
            outcomes like search rankings, lead volume, ad performance, or revenue depend on many factors
            outside our control &mdash; we do not and cannot guarantee specific results.
          </p>
        </Section>

        <Section id="service-engagements" num={6} title="Service engagements">
          <p className="m-0">
            Prices shown on this Site are starting points for planning purposes only. The actual scope,
            deliverables, timeline, fees, payment terms, and cancellation terms for any engagement are set
            out in a separate, signed agreement or statement of work between you and Locus Advisory, agreed
            before any paid work begins. If anything in that signed agreement conflicts with this Site, the
            signed agreement controls.
          </p>
        </Section>

        <Section id="acceptable-use" num={7} title="Acceptable use">
          <p className="m-0">When using this Site, you agree not to:</p>
          <ul className="m-0 list-disc pl-5">
            <li>Scrape, data-mine, or use automated tools to extract content from the Site;</li>
            <li>Attempt to gain unauthorized access to the Site, its form backend, or related systems;</li>
            <li>Submit false, misleading, or fraudulent information through the contact form;</li>
            <li>Use the Site to transmit malware, spam, or unlawful content; or</li>
            <li>Interfere with the Site&rsquo;s normal operation or security.</li>
          </ul>
        </Section>

        <Section id="intellectual-property" num={8} title="Intellectual property">
          <p className="m-0">
            The text, graphics, layout, and brand identity of this Site &mdash; including the Locus Advisory
            name and logo &mdash; are owned by Locus Advisory and may not be copied, reproduced, or reused
            without our written permission. This has no bearing on who owns the deliverables we build for a
            client under a paid engagement; that&rsquo;s addressed in the signed agreement for that work,
            and our standard practice is that finished client deliverables belong to the client.
          </p>
        </Section>

        <Section id="submissions" num={9} title="Information you submit to us">
          <p className="m-0">
            By submitting the contact form, you confirm the information you provide is accurate and that
            you&rsquo;re authorized to provide it (for example, a phone number or company name that is
            actually yours or your employer&rsquo;s). See our{' '}
            <a href="/privacy" className="font-semibold underline" style={{ color: 'var(--accent-dark)' }}>
              Privacy Policy
            </a>{' '}
            for how we handle it.
          </p>
        </Section>

        <Section id="third-party" num={10} title="Third-party services and links">
          <p className="m-0">
            This Site links to or relies on third-party services (including Google, for form storage, and
            Instagram). We aren&rsquo;t responsible for the content, availability, or practices of those
            third parties, and linking to them isn&rsquo;t an endorsement.
          </p>
        </Section>

        <Section id="warranty-disclaimer" num={11} title="Disclaimer of warranties">
          <p className="m-0">
            This Site is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without warranties of
            any kind, express or implied, including merchantability, fitness for a particular purpose, and
            non-infringement. We don&rsquo;t warrant that the Site will be uninterrupted, error-free, or
            free of harmful components.
          </p>
        </Section>

        <Section id="liability" num={12} title="Limitation of liability">
          <p className="m-0">
            To the fullest extent permitted by law, Locus Advisory and its personnel are not liable for any
            indirect, incidental, special, consequential, or punitive damages, or any loss of profits,
            revenue, or data, arising from your use of this Site, even if advised of the possibility. Where
            liability can&rsquo;t be excluded, our total aggregate liability arising from your use of this
            Site is limited to <em>CAD $100</em>. This limitation does not apply to separate, signed service
            agreements, which may state their own liability terms.
          </p>
        </Section>

        <Section id="indemnification" num={13} title="Indemnification">
          <p className="m-0">
            You agree to indemnify and hold Locus Advisory harmless from any claims, damages, or expenses
            (including reasonable legal fees) arising from your misuse of this Site or your violation of
            these terms.
          </p>
        </Section>

        <Section id="termination" num={14} title="Termination of access">
          <p className="m-0">
            We may restrict or terminate your access to this Site at any time, without notice, if we
            reasonably believe you&rsquo;ve violated these terms.
          </p>
        </Section>

        <Section id="governing-law" num={15} title="Governing law and disputes">
          <p className="m-0">
            These terms are governed by the laws of <em>[Province/Territory], Canada</em>, without regard to
            conflict-of-law principles, and you agree to the exclusive jurisdiction of the courts located
            there for any dispute that isn&rsquo;t resolved informally first. We encourage reaching out to{' '}
            <a href="mailto:locusadvisory@gmail.com" className="font-semibold underline" style={{ color: 'var(--accent-dark)' }}>
              locusadvisory@gmail.com
            </a>{' '}
            to resolve any issue informally before pursuing anything further.
          </p>
        </Section>

        <Section id="force-majeure" num={16} title="Force majeure">
          <p className="m-0">
            We&rsquo;re not liable for any delay or failure to perform caused by events beyond our
            reasonable control, including natural disasters, internet or hosting-provider outages, or
            changes to third-party platforms we rely on (such as Google).
          </p>
        </Section>

        <Section id="general" num={17} title="Severability, entire agreement, waiver, assignment">
          <p className="m-0">
            If any part of these terms is found unenforceable, the rest remains in effect. These terms are
            the entire agreement between you and Locus Advisory regarding use of this Site (separate from
            any signed service agreement). Our failure to enforce a provision isn&rsquo;t a waiver of it. You
            may not assign your rights under these terms; we may assign ours in connection with a merger,
            acquisition, or sale of assets.
          </p>
        </Section>

        <Section id="contact" num={18} title="Contact us">
          <p className="m-0">
            Questions about these terms? Email{' '}
            <a href="mailto:locusadvisory@gmail.com" className="font-semibold underline" style={{ color: 'var(--accent-dark)' }}>
              locusadvisory@gmail.com
            </a>
            .
          </p>
        </Section>
      </div>
    </>
  )
}
