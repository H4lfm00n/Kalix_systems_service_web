import { Link } from 'react-router-dom'
import { ArrowRight, Code2, BrainCircuit, Cloud, ShieldCheck } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { SERVICES, PROCESS_STEPS, CASE_STUDIES } from '../data/content'

const ICONS = { Code2, BrainCircuit, Cloud, ShieldCheck }

export default function Home() {
  return (
    <>
      <Seo
        title="Services"
        description="Custom software, AI & machine learning, cloud infrastructure, and cybersecurity engineering for mission-critical operations. Start a project with KĀLIX Systems."
      />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-8 pt-24 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,0,0,0.04),transparent)] pointer-events-none z-0" />
        <div className="max-w-content mx-auto w-full relative z-10 text-center">
          <Reveal>
            <div className="text-xs tracking-[0.3em] uppercase text-black/40 mb-6 font-light">
              Capabilities &amp; Services
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
              Engineering the <span className="italic">impossible</span> for your business.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto font-light tracking-wide leading-relaxed mb-12">
              We build custom software, AI systems, cloud infrastructure, and security programs
              for organizations that can&rsquo;t tolerate downtime — designed for high-friction
              environments where edge cases are the norm.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white text-sm tracking-wide font-light hover:bg-black/85 transition-all duration-300"
              >
                Start a project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-black/20 text-sm tracking-wide font-light hover:bg-black hover:text-white transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Positioning strip */}
      <section className="py-16 md:py-20 px-6 md:px-8 bg-black text-white">
        <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: 'High-Friction Environments',
              desc: 'Systems engineered to perform under the most demanding conditions.',
            },
            {
              title: 'Uptime Matters',
              desc: 'Zero-tolerance architecture with reliability guarantees built in from day one.',
            },
            {
              title: 'Edge Cases as Standard',
              desc: 'Built to handle exceptions, not just happy paths.',
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="w-12 h-px bg-white/20 mb-6" />
              <h3 className="text-xl font-light tracking-tight mb-3">{item.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light tracking-wide">
                {item.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section className="relative py-24 md:py-32 px-6 md:px-8 bg-white">
        <div className="max-w-content mx-auto">
          <Reveal>
            <div className="text-xs tracking-[0.3em] uppercase text-black/40 mb-4 font-light">
              What we do
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight max-w-2xl mb-16">
              Four disciplines. One standard of reliability.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10">
            {SERVICES.map((service, i) => {
              const Icon = ICONS[service.icon]
              return (
                <Reveal key={service.id} delay={i * 0.06} className="bg-white">
                  <Link
                    to={`/services#${service.id}`}
                    className="block bg-white p-10 md:p-12 h-full group hover:bg-[#fafafa] transition-colors"
                  >
                    <div className="flex justify-between items-start mb-10">
                      <div className="w-12 h-12 border border-black/10 flex items-center justify-center bg-white group-hover:border-black/30 transition-colors">
                        <Icon className="w-5 h-5 text-black/60" strokeWidth={1.5} />
                      </div>
                      <span className="text-xs tracking-[0.3em] text-black/20 font-light">
                        {service.number}
                      </span>
                    </div>
                    <h3 className="text-2xl font-light tracking-tight mb-4 group-hover:translate-x-1 transition-transform duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-black/60 leading-relaxed font-light mb-6 max-w-md">
                      {service.summary}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm tracking-wide font-light group-hover:gap-3 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process teaser */}
      <section className="relative py-24 md:py-32 px-6 md:px-8 bg-[#fafafa]">
        <div className="max-w-content mx-auto">
          <Reveal className="mb-20 text-center max-w-3xl mx-auto">
            <div className="text-xs tracking-[0.3em] uppercase text-black/40 mb-4 font-light">
              Partnership Model
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight">
              How we deliver the impossible.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-black/10 z-0" />
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08} className="relative z-10">
                <div className="w-12 h-12 bg-white border border-black flex items-center justify-center text-sm font-display mb-6 mx-auto md:mx-0">
                  {step.number}
                </div>
                <h3 className="text-xl font-light tracking-tight mb-3 text-center md:text-left">
                  {step.title}
                </h3>
                <p className="text-sm text-black/60 leading-relaxed font-light text-center md:text-left">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 text-center">
            <Link
              to="/process"
              className="inline-flex items-center gap-2 text-sm tracking-wide font-light hover:gap-3 transition-all"
            >
              See our full process <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Case studies teaser */}
      <section className="relative py-24 md:py-32 px-6 md:px-8 bg-[#0a0a0a] text-white">
        <div className="max-w-content mx-auto">
          <Reveal className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4 font-light">
                Proof of Work
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight max-w-xl">
                Deployed in the field, not just the pitch deck.
              </h2>
            </div>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm tracking-wide font-light hover:gap-3 transition-all text-white/70 hover:text-white"
            >
              View all case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {CASE_STUDIES.map((cs, i) => (
              <Reveal key={cs.id} delay={i * 0.08} className="bg-[#0a0a0a]">
                <Link
                  to={`/case-studies#${cs.id}`}
                  className="block bg-[#0a0a0a] p-10 md:p-12 h-full border border-white/5 hover:border-white/20 transition-colors group"
                >
                  <span className="text-xs tracking-[0.3em] uppercase text-white/30 font-light">
                    {cs.tag}
                  </span>
                  <h3 className="text-2xl font-light tracking-tight mt-4 mb-4 group-hover:translate-x-1 transition-transform duration-300">
                    {cs.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed font-light tracking-wide">
                    {cs.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative py-24 md:py-32 px-6 md:px-8 bg-white text-black border-t border-black/10">
        <div className="max-w-content mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-black/40 mb-4 font-light">
              Get started
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight max-w-xl">
              Ready to build?
            </h2>
            <p className="text-sm text-black/60 mt-4 font-light tracking-wide max-w-md">
              Tell us about your infrastructure needs and we&rsquo;ll get back to you within one
              business day.
            </p>
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
