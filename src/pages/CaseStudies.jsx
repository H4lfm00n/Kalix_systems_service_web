import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { CASE_STUDIES } from '../data/content'

export default function CaseStudies() {
  return (
    <>
      <Seo
        title="Case Studies"
        description="Real deployments: Project ARGUS autonomous navigation and Project PLATO operations infrastructure — see how KĀLIX Systems builds for high-friction environments."
      />

      <section className="relative pt-40 pb-16 px-6 md:px-8 bg-white">
        <div className="max-w-content mx-auto">
          <Reveal>
            <div className="text-xs tracking-[0.3em] uppercase text-black/40 mb-6 font-light">
              Proof of Work
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-light tracking-tight max-w-2xl mb-6">
              Deployed in the field, not just the pitch deck.
            </h1>
            <p className="text-lg text-black/60 leading-relaxed font-light max-w-2xl">
              A sample of systems we&rsquo;ve engineered for partners operating in demanding,
              high-friction environments.
            </p>
          </Reveal>
        </div>
      </section>

      {CASE_STUDIES.map((cs, i) => {
        const dark = i % 2 === 1
        return (
          <section
            key={cs.id}
            id={cs.id}
            className={`relative py-20 md:py-28 px-6 md:px-8 scroll-mt-24 ${
              dark ? 'bg-black text-white' : 'bg-[#fafafa] text-black'
            }`}
          >
            <div className="max-w-content mx-auto">
              <Reveal>
                <span
                  className={`text-xs tracking-[0.3em] uppercase font-light ${
                    dark ? 'text-white/40' : 'text-black/40'
                  }`}
                >
                  {cs.tag}
                </span>
                <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight mt-4 mb-2">
                  {cs.title}
                </h2>
                <p
                  className={`text-sm tracking-[0.2em] uppercase font-light mb-8 ${
                    dark ? 'text-white/40' : 'text-black/40'
                  }`}
                >
                  {cs.subtitle}
                </p>
                <p
                  className={`text-lg leading-relaxed font-light max-w-2xl mb-12 ${
                    dark ? 'text-white/70' : 'text-black/70'
                  }`}
                >
                  {cs.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {cs.points.map((p) => (
                    <div key={p.title}>
                      <div className={`w-8 h-px mb-4 ${dark ? 'bg-white/30' : 'bg-black/30'}`} />
                      <h3 className="text-base font-normal tracking-wide mb-2">{p.title}</h3>
                      <p
                        className={`text-sm leading-relaxed font-light ${
                          dark ? 'text-white/55' : 'text-black/60'
                        }`}
                      >
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  className={`text-xs tracking-[0.2em] uppercase font-light mb-4 ${
                    dark ? 'text-white/40' : 'text-black/40'
                  }`}
                >
                  Technology Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {cs.stack.map((t) => (
                    <span
                      key={t}
                      className={`px-4 py-2 border text-sm font-light tracking-wide ${
                        dark ? 'border-white/15' : 'border-black/10'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
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
              Have a project like this?
            </h2>
            <p className="text-lg text-black/60 font-light tracking-wide mb-10 max-w-xl mx-auto">
              Let&rsquo;s talk about what you&rsquo;re building and whether we&rsquo;re the right
              fit.
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
