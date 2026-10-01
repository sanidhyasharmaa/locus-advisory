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
  ['who-we-are', 'Who we are'],
  ['scope', 'Scope of this policy'],
  ['information-we-collect', 'Information we collect'],
  ['how-we-use-it', 'How we use your information'],
  ['legal-basis', 'Our legal basis for processing'],
  ['how-we-share-it', 'How we share your information'],
  ['international-transfers', 'International data transfers'],
  ['retention', 'How long we keep it'],
  ['security', 'Security'],
  ['cookies', 'Cookies and tracking'],
  ['childrens-privacy', "Children's privacy"],
  ['your-rights', 'Your privacy rights'],
  ['casl', "Consent to contact you (Canada's anti-spam law)"],
  ['third-party-links', 'Third-party links'],
  ['changes', 'Changes to this policy'],
  ['contact', 'Contact us'],
]

export default function Privacy() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" subtitle="Last updated October 2, 2026." />

      <div className="flex flex-col gap-10 px-6 pb-24 sm:px-16">
        <nav
          aria-label="Table of contents"
          className="rounded-xl border p-5"
          style={{ borderColor: 'var(--line)' }}
        >
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

        <Section id="who-we-are" num={1} title="Who we are">
          <p className="m-0">
            Locus Advisory (&ldquo;Locus Advisory,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) is a digital-presence agency for local service businesses. For the purposes
            of applicable privacy law, Locus Advisory is the controller of the personal information
            described in this policy &mdash; the party responsible for deciding why and how it&rsquo;s
            processed.
          </p>
          <p className="m-0">
            Registered business address: <em>[Street address, City, Province/State, Postal Code,
            Country]</em>. <span style={{ color: 'var(--muted)' }}>(Placeholder &mdash; add your registered
            address once the business entity is formed.)</span>
          </p>
        </Section>

        <Section id="scope" num={2} title="Scope of this policy">
          <p className="m-0">
            This policy covers personal information collected through locusadvisory.com (this website) and
            its contact form. It does not cover information we might collect through other channels &mdash;
            a phone call, an in-person meeting, or a separate signed service agreement &mdash; which, if
            applicable, would be addressed in that agreement or communicated to you directly.
          </p>
        </Section>

        <Section id="information-we-collect" num={3} title="Information we collect">
          <p className="m-0">
            <strong style={{ color: 'var(--ink)' }}>Information you provide directly.</strong> When you
            submit our contact form, we collect: first and last name, email address, mobile number
            (together with the country you selected), company name (optional), and the service area(s)
            you&rsquo;re interested in. If you email us directly instead, we receive whatever you include
            in that email.
          </p>
          <p className="m-0">
            <strong style={{ color: 'var(--ink)' }}>Information collected automatically.</strong> This site
            does not run its own analytics, advertising pixels, or tracking scripts. That said, our hosting
            provider necessarily processes basic technical request data (such as IP address, browser type,
            and request timestamps) to serve the site and for its own security and abuse-prevention
            purposes &mdash; this is standard for any website and happens below the level of our own code.
          </p>
          <p className="m-0">
            We do not currently collect payment information on this website; no online payments are
            processed here.
          </p>
        </Section>

        <Section id="how-we-use-it" num={4} title="How we use your information">
          <p className="m-0">We use the information above to:</p>
          <ul className="m-0 list-disc pl-5">
            <li>Respond to your inquiry and schedule a consultation or appointment;</li>
            <li>Understand which services you&rsquo;re interested in so we can prepare for that conversation;</li>
            <li>Keep an internal record of inquiries and client communications; and</li>
            <li>Meet legal, accounting, or regulatory obligations where applicable.</li>
          </ul>
          <p className="m-0">
            We do not use your information for automated decision-making or profiling that produces legal
            or similarly significant effects on you, and we do not sell, rent, or trade your personal
            information to third parties.
          </p>
        </Section>

        <Section id="legal-basis" num={5} title="Our legal basis for processing">
          <p className="m-0">
            Where the GDPR or a similar framework applies to you, we process your information on the
            following bases: your <strong style={{ color: 'var(--ink)' }}>consent</strong>, given by
            submitting the form; our <strong style={{ color: 'var(--ink)' }}>legitimate interest</strong>{' '}
            in responding to inquiries about our services and operating our business; and, where a service
            engagement follows, the steps necessary to enter into or perform a{' '}
            <strong style={{ color: 'var(--ink)' }}>contract</strong> with you. You can withdraw consent at
            any time &mdash; see Section 12.
          </p>
        </Section>

        <Section id="how-we-share-it" num={6} title="How we share your information">
          <p className="m-0">We share personal information only in these circumstances:</p>
          <ul className="m-0 list-disc pl-5">
            <li>
              <strong style={{ color: 'var(--ink)' }}>Service providers who process it on our behalf</strong>
              , currently Google (Google Sheets and Apps Script, used to store and route form submissions,
              and Gmail, if we reply by email). We don&rsquo;t control Google&rsquo;s own practices; see
              their{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer noopener"
                className="font-semibold underline"
                style={{ color: 'var(--accent-dark)' }}
              >
                Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong style={{ color: 'var(--ink)' }}>Legal reasons</strong> &mdash; if required to comply
              with a subpoena, court order, or similar legal process, or to protect the rights, property, or
              safety of Locus Advisory or others.
            </li>
            <li>
              <strong style={{ color: 'var(--ink)' }}>Business transfers</strong> &mdash; if Locus Advisory
              is involved in a merger, acquisition, or sale of assets, with notice to you where required by
              law.
            </li>
          </ul>
          <p className="m-0">We do not sell personal information, and we never have.</p>
        </Section>

        <Section id="international-transfers" num={7} title="International data transfers">
          <p className="m-0">
            Because we use Google&rsquo;s infrastructure, your information may be processed or stored on
            servers located outside your own country. Where this crosses a border that requires a specific
            safeguard (for example, out of the EEA), we rely on the receiving provider&rsquo;s own
            compliance mechanisms (such as Google&rsquo;s Standard Contractual Clauses) to protect it.
          </p>
        </Section>

        <Section id="retention" num={8} title="How long we keep it">
          <p className="m-0">
            We keep form submissions for as long as reasonably necessary to respond to your inquiry and
            maintain a record of client communications &mdash; generally no longer than{' '}
            <em>[24 months]</em> after your last contact with us, unless a longer period is required to
            comply with legal, tax, or accounting obligations, or unless you ask us to delete it sooner (see
            Section 12).
          </p>
        </Section>

        <Section id="security" num={9} title="Security">
          <p className="m-0">
            This site is served over HTTPS, so data submitted through the form is encrypted in transit.
            Submissions are stored in a Google Sheet that is not publicly accessible and is restricted to
            authorized Locus Advisory personnel. No method of transmission or storage is 100% secure, and we
            can&rsquo;t guarantee absolute security &mdash; but we don&rsquo;t ask for more information than
            we need, and we don&rsquo;t store it anywhere beyond that one restricted location.
          </p>
        </Section>

        <Section id="cookies" num={10} title="Cookies and tracking">
          <p className="m-0">
            This website does not set cookies, does not use analytics or advertising pixels, and does not
            use browser local storage to track you across visits. If that changes in the future (for
            example, if we add analytics to understand site traffic), we&rsquo;ll update this section and
            the &ldquo;last updated&rdquo; date above first.
          </p>
        </Section>

        <Section id="childrens-privacy" num={11} title="Children's privacy">
          <p className="m-0">
            This website and our services are directed at business owners and are not intended for
            individuals under 16. We do not knowingly collect personal information from children. If you
            believe a child has provided us with personal information, contact us and we&rsquo;ll delete it.
          </p>
        </Section>

        <Section id="your-rights" num={12} title="Your privacy rights">
          <p className="m-0">
            Depending on where you live, you may have the right to access, correct, delete, or receive a
            copy of your personal information, to withdraw consent, to object to or restrict certain
            processing, and to lodge a complaint with your local data protection authority (in Canada, the
            Office of the Privacy Commissioner; in the EU/UK, your national supervisory authority).
            California residents have similar rights under the CCPA, including the right to know what we
            collect and to request deletion &mdash; we don&rsquo;t sell personal information, so there is no
            sale to opt out of.
          </p>
          <p className="m-0">
            To exercise any of these rights, email{' '}
            <a href="mailto:locusadvisory@gmail.com" className="font-semibold underline" style={{ color: 'var(--accent-dark)' }}>
              locusadvisory@gmail.com
            </a>
            . We&rsquo;ll respond within 30 days.
          </p>
        </Section>

        <Section id="casl" num={13} title="Consent to contact you (Canada's anti-spam law)">
          <p className="m-0">
            By submitting the contact form, you expressly consent to Locus Advisory contacting you by
            email or phone about the inquiry you&rsquo;ve made, as required under Canada&rsquo;s{' '}
            <em>Anti-Spam Legislation</em> (CASL). Any ongoing marketing emails we send will include a clear
            way to unsubscribe, and we&rsquo;ll honour that request promptly.
          </p>
        </Section>

        <Section id="third-party-links" num={14} title="Third-party links">
          <p className="m-0">
            This site links to third-party services we don&rsquo;t control, including Instagram and Google.
            Their own privacy policies govern any information you provide directly to them.
          </p>
        </Section>

        <Section id="changes" num={15} title="Changes to this policy">
          <p className="m-0">
            We may update this policy as our services, tools, or legal obligations change. Material changes
            will be reflected in the &ldquo;last updated&rdquo; date above; we encourage you to check back
            periodically.
          </p>
        </Section>

        <Section id="contact" num={16} title="Contact us">
          <p className="m-0">
            Questions about this policy, or want to exercise a privacy right? Email{' '}
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
