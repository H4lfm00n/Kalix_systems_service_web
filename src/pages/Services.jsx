import { Link } from 'react-router-dom'
import { ArrowRight, Code2, BrainCircuit, Cloud, ShieldCheck, Check } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { SERVICES } from '../data/content'

const ICONS = { Code2, BrainCircuit, Cloud, ShieldCheck }

const DETAILS = {
  software: {
    engagementModels: ['Fixed-scope build', 'Dedicated team / staff augmentation', 'Ongoing retainer'],
    goodFor: 'Startups shipping v1, enterprises modernizing legacy systems, and teams that need senior engineering capacity without a full-time hire.',
  },
  ai: {
    engagementModels: ['Proof of concept sprint', 'Full integration build', 'Ongoing model & pipeline support'],
    goodFor: 'Teams with real workflows to automate or real data to model — not exploratory research.',
  },
  cloud: {
    engagementModels: ['Infrastructure audit', 'Migration project', 'Managed infrastructure retainer'],
    goodFor: 'Businesses outgrowing ad hoc infrastructure or preparing for a scale event.',
  },
  security: {
    engagementModels: ['Point-in-time security audit', 'Compliance implementation project', 'Ongoing threat monitoring'],
    goodFor: 'Organizations handling sensitive data, regulated industries, and teams preparing for a compliance deadline.',
  },
}

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Custom software development, AI & machine learning integrations, enterprise cloud infrastructure, and cybersecurity — explore KĀLIX Systems' core service offerings."
      />

      <section className="relative pt-40 pb-16 px-6 md:px-8 bg-white">
        <div className="max-w-content mx-auto">
          <Reveal>
            <div className="text-xs tracking-[0.3em] uppercase text-black/40 mb-6 font-light">
              Core Offerings
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-light tracking-tight max-w-2xl mb-6">
              Specialized solutions for complex business challenges.
            </h1>
            <p className="text-lg text-black/60 leading-relaxed font-light max-w-2xl">
              Every engagement starts with your operational reality, not a generic template. Below
              is what we build, who it&rsquo;s for, and how engagements are typically structured.
            </p>
          </Reveal>
        </div>
      </section>

      {SERVICES.map((service, i) => {
        const Icon = ICONS[service.icon]
        const detail = DETAILS[service.id]
        const dark = i % 2 === 1
        return (
          <section
            key={service.id}
            id={service.id}
            className={`relative py-20 md:py-28 px-6 md:px-8 scroll-mt-24 ${
              dark ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            <div className="max-w-content mx-auto">
              <Reveal>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                  <div className="lg:col-span-5">
                    <div
                      className={`w-14 h-14 border flex items-center justify-center mb-8 ${
                        dark ? 'border-white/20' : 'border-black/10'
                      }`}
                    >
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <span
                      className={`text-xs tracking-[0.3em] font-light ${
                        dark ? 'text-white/30' : 'text-black/20'
                      }`}
                    >
                      {service.number}
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight mt-4 mb-6">
                      {service.title}
                    </h2>
                    <p
                      className={`text-base leading-relaxed font-light mb-8 ${
                        dark ? 'text-white/60' : 'text-black/60'
                      }`}
                    >
                      {service.summary}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {service.bullets.map((b) => (
                        <span
                          key={b}
                          className={`px-4 py-2 border text-sm font-light tracking-wide ${
                            dark
                              ? 'border-white/15 hover:border-white/30'
                              : 'border-black/10 hover:border-black/20'
                          } transition-all`}
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-7 lg:pl-8">
                    <div
                      className={`p-8 md:p-10 border ${
                        dark ? 'border-white/10' : 'border-black/10'
                      }`}
                    >
                      <div
                        className={`text-xs tracking-[0.2em] uppercase font-light mb-4 ${
                          dark ? 'text-white/40' : 'text-black/40'
                        }`}
                      >
                        Engagement Models
                      </div>
                      <ul className="space-y-3 mb-8">
                        {detail.engagementModels.map((m) => (
                          <li key={m} className="flex items-start gap-3 text-sm font-light">
                            <Check className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-50" />
                            {m}
                          </li>
                        ))}
                      </ul>
                      <div
                        className={`text-xs tracking-[0.2em] uppercase font-light mb-3 ${
                          dark ? 'text-white/40' : 'text-black/40'
                        }`}
                      >
                        Good fit for
                      </div>
                      <p className={`text-sm leading-relaxed font-light ${dark ? 'text-white/60' : 'text-black/60'}`}>
                        {detail.goodFor}
                      </p>
                    </div>
                    <Link
                      to="/contact"
                      className={`group mt-8 inline-flex items-center gap-2 text-sm tracking-wide font-light hover:gap-3 transition-all ${
                        dark ? 'text-white' : 'text-black'
                      }`}
                    >
                      Discuss a {service.title.toLowerCase()} project
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        )
      })}

      <section className="relative py-24 md:py-32 px-6 md:px-8 bg-white text-black border-t border-black/10">
        <div className="max-w-content mx-auto text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight mb-6">
              Not sure which service fits?
            </h2>
            <p className="text-lg text-black/60 font-light tracking-wide mb-10 max-w-xl mx-auto">
              Tell us what you&rsquo;re trying to build. We&rsquo;ll help you figure out the right
              scope.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white text-sm tracking-wide font-light hover:bg-black/85 transition-all duration-300"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
