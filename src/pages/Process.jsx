import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { PROCESS_STEPS } from '../data/content'

const FAQ = [
  {
    q: 'How long does a typical engagement take?',
    a: 'It depends on scope — a focused integration can ship in 4-6 weeks, while a full platform build typically runs 3-6 months. We scope timelines during Discovery, not before.',
  },
  {
    q: 'Do you work with in-house engineering teams?',
    a: 'Yes. We regularly embed alongside existing teams as an extension of your engineering org, not a black-box vendor.',
  },
  {
    q: 'What does the Discovery phase actually involve?',
    a: 'Technical stakeholder interviews, a review of your current architecture (if any), and a written scope with milestones before any code is written.',
  },
  {
    q: 'How do you handle ongoing support after handover?',
    a: 'Every project includes a defined handover period with documentation and knowledge transfer. Ongoing support and retainer arrangements are available for teams that want it.',
  },
]

export default function Process() {
  return (
    <>
      <Seo
        title="Process"
        description="How KĀLIX Systems delivers engineering engagements: Discovery & Architecture, Iterative Engineering, Security & QA Stress Testing, and Deployment & Handover."
      />

      <section className="relative pt-40 pb-20 px-6 md:px-8 bg-white">
        <div className="max-w-content mx-auto">
          <Reveal>
            <div className="text-xs tracking-[0.3em] uppercase text-black/40 mb-6 font-light">
              Partnership Model
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-light tracking-tight max-w-2xl mb-6">
              How we deliver the impossible.
            </h1>
            <p className="text-lg text-black/60 leading-relaxed font-light max-w-2xl">
              A consistent process, applied to every engagement regardless of size — because
              reliability starts with how the work gets done, not just what gets shipped.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16 px-6 md:px-8 bg-white">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.06} className="bg-white">
                <div className="bg-white p-10 md:p-14 h-full group hover:bg-[#fafafa] transition-colors">
                  <span className="text-xs tracking-[0.3em] text-black/20 font-light">
                    {step.number}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-light tracking-tight mt-4 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-base text-black/60 leading-relaxed font-light max-w-md">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 px-6 md:px-8 bg-[#0a0a0a] text-white">
        <div className="max-w-content mx-auto">
          <Reveal className="mb-16 max-w-2xl">
            <div className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4 font-light">
              Common Questions
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight">
              Before you reach out.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 max-w-5xl">
            {FAQ.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.06} className="bg-[#0a0a0a]">
                <div className="bg-[#0a0a0a] p-8 md:p-10 h-full border border-white/5">
                  <h3 className="text-lg font-light tracking-wide mb-3">{item.q}</h3>
                  <p className="text-sm text-white/55 leading-relaxed font-light">{item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 px-6 md:px-8 bg-white text-black border-t border-black/10">
        <div className="max-w-content mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight max-w-xl">
              Ready to start Discovery?
            </h2>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white text-sm tracking-wide font-light hover:bg-black/85 transition-all duration-300 whitespace-nowrap w-fit"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}
