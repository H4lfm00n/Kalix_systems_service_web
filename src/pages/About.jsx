import { Link } from 'react-router-dom'
import { ArrowRight, Mail } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { FOUNDERS } from '../data/content'

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="KĀLIX Systems is built by two engineers on one mission: building the infrastructure layer that critical systems depend on. Meet the founders."
      />

      <section className="relative pt-40 pb-20 px-6 md:px-8 bg-white">
        <div className="max-w-content mx-auto">
          <Reveal>
            <div className="text-xs tracking-[0.3em] uppercase text-black/40 mb-6 font-light">
              About KĀLIX
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-light tracking-tight max-w-3xl mb-8">
              Built from conviction, not compromise.
            </h1>
            <p className="text-lg text-black/60 leading-relaxed font-light max-w-2xl">
              Two engineers. One mission. Building the infrastructure layer that critical systems
              depend on — cybersecurity, AI and machine learning, software development, and cloud
              infrastructure, built for extreme reliability.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16 px-6 md:px-8 bg-white">
        <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: 'Our approach',
              desc: 'High-friction environments, uptime guarantees, edge cases as standard.',
            },
            {
              title: 'Our stack',
              desc: 'AI, infrastructure, security, and data — built for extreme reliability.',
            },
            {
              title: 'Our standard',
              desc: 'The order is not built. It is restored.',
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="w-12 h-px bg-black/20 mb-6" />
              <h3 className="text-xl font-light tracking-tight mb-3">{item.title}</h3>
              <p className="text-sm text-black/60 leading-relaxed font-light tracking-wide">
                {item.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative py-24 md:py-32 px-6 md:px-8 bg-black text-white">
        <div className="max-w-content mx-auto">
          <Reveal className="mb-16">
            <div className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4 font-light">
              The founders
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight max-w-2xl">
              The people behind the work.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {FOUNDERS.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.08} className="bg-black">
                <div className="bg-black p-10 md:p-14 h-full">
                  <span className="text-xs tracking-[0.4em] text-white/20 font-light mb-8 block">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-light tracking-tight mb-3">
                    {f.name}
                  </h3>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-8 h-px bg-white/30" />
                    <span className="text-xs tracking-[0.3em] uppercase text-white/50 font-light">
                      {f.role}
                    </span>
                  </div>
                  <p className="text-sm text-white/55 leading-relaxed font-light tracking-wide mb-10 max-w-md italic">
                    &ldquo;{f.quote}&rdquo;
                  </p>
                  <a
                    href={`mailto:${f.email}`}
                    className="inline-flex items-center gap-2 text-sm font-light tracking-wide text-white/80 hover:text-white transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    {f.email}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 px-6 md:px-8 bg-white text-black border-t border-black/10">
        <div className="max-w-content mx-auto text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight mb-6">
              Want to work with us?
            </h2>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white text-sm tracking-wide font-light hover:bg-black/85 transition-all duration-300"
            >
              Get in touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
