import { useState } from 'react'
import { faqs } from '../data/content'

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b py-5" style={{ borderColor: 'var(--line)' }}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-lg font-medium" style={{ color: 'var(--ink)' }}>
          {item.q}
        </span>
        <span
          aria-hidden="true"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg font-medium transition-transform duration-300"
          style={{ border: '1px solid var(--line)', color: 'var(--ink)', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="mt-3 max-w-[65ch] text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>
            {item.a}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="px-6 py-20 sm:px-16 md:py-24">
      <div className="max-w-[640px]">
        <h2 className="text-[length:var(--step-4)]">Questions, answered</h2>
      </div>
      <div className="mt-10 max-w-[760px]">
        {faqs.map((item, i) => (
          <FAQItem
            key={item.q}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  )
}
