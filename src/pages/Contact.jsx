import { useState } from 'react'
import { ArrowRight, Mail, CheckCircle2 } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'

// Replace with your real Formspree endpoint: https://formspree.io/forms -> create a form -> copy its ID
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqernwl'

const INTEREST_OPTIONS = [
  'Custom Software Development',
  'AI & Machine Learning',
  'Enterprise Cloud Infrastructure',
  'Cybersecurity & Threat Intelligence',
  'Other / General Inquiry',
]

const TIMELINE_OPTIONS = [
  'As soon as possible',
  '1-3 months',
  '3-6 months',
  'More than 6 months',
  'Just exploring',
]

const FIELD_CLASS =
  'w-full border border-black/20 focus:border-black/60 outline-none bg-white px-4 py-3 text-sm font-light placeholder:text-black/30 transition-colors'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Tell KĀLIX Systems about your infrastructure needs — custom software, AI, cloud, or security. We respond to every project inquiry within one business day."
      />

      <section className="relative pt-40 pb-24 px-6 md:px-8 bg-white min-h-screen">
        <div className="max-w-content mx-auto">
          <Reveal className="mb-16">
            <div className="text-xs tracking-[0.3em] uppercase text-black/40 mb-4 font-light">
              Get in touch
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 max-w-2xl">
              Tell us about your project.
            </h1>
            <p className="text-sm md:text-base text-black/60 leading-relaxed font-light tracking-wide max-w-xl">
              The more detail you give us, the faster we can scope your project accurately. We
              respond to every inquiry within one business day.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <Reveal>
                {status === 'success' ? (
                  <div className="p-8 border border-green-500/20 bg-green-50/50 rounded-sm flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-base font-normal text-green-800 mb-1">
                        Request received.
                      </p>
                      <p className="text-sm text-green-700 font-light">
                        Thanks for reaching out — we&rsquo;ll be in touch within one business day.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-1">
                      <label className="text-sm tracking-wide font-light block mb-2">
                        Name *
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        className={FIELD_CLASS}
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label className="text-sm tracking-wide font-light block mb-2">
                        Work Email *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        className={FIELD_CLASS}
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label className="text-sm tracking-wide font-light block mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Your organization"
                        className={FIELD_CLASS}
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label className="text-sm tracking-wide font-light block mb-2">
                        Role / Title
                      </label>
                      <input
                        type="text"
                        name="role"
                        placeholder="e.g. CTO, Operations Manager"
                        className={FIELD_CLASS}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-sm tracking-wide font-light block mb-2">
                        Expected Scale or Volume (users, locations)
                      </label>
                      <input
                        type="text"
                        name="scale"
                        placeholder="e.g. 10k daily users, 5 locations"
                        className={FIELD_CLASS}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-sm tracking-wide font-light block mb-2">
                        Current Infrastructure &amp; Tech Stack
                      </label>
                      <input
                        type="text"
                        name="current_stack"
                        placeholder="What does your current setup look like?"
                        className={FIELD_CLASS}
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label className="text-sm tracking-wide font-light block mb-2">
                        Primary Area of Interest
                      </label>
                      <select
                        name="area_of_interest"
                        defaultValue=""
                        className={`${FIELD_CLASS} font-light`}
                      >
                        <option value="" disabled>
                          Select an area
                        </option>
                        {INTEREST_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-1">
                      <label className="text-sm tracking-wide font-light block mb-2">
                        Expected Timeline
                      </label>
                      <select
                        name="timeline"
                        defaultValue=""
                        className={`${FIELD_CLASS} font-light`}
                      >
                        <option value="" disabled>
                          Select a timeline
                        </option>
                        {TIMELINE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-sm tracking-wide font-light block mb-2">
                        Project Details &amp; Specific Requirements *
                      </label>
                      <textarea
                        required
                        name="details"
                        rows={5}
                        placeholder="What are the main technical challenges you're trying to solve?"
                        className={`${FIELD_CLASS} resize-none`}
                      />
                    </div>

                    {status === 'error' && (
                      <p className="md:col-span-2 text-sm text-red-500 font-light">
                        Something went wrong while submitting the request. Please try again, or
                        email us directly at{' '}
                        <a href="mailto:atharva@kalixsystems.com" className="underline">
                          atharva@kalixsystems.com
                        </a>{' '}
                        or{' '}
                        <a href="mailto:devyansh@kalixsystems.com" className="underline">
                          devyansh@kalixsystems.com
                        </a>
                        .
                      </p>
                    )}

                    <div className="md:col-span-2">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full md:w-auto px-8 py-4 border border-black/20 hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-wide font-light disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                      >
                        {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
                        {status !== 'submitting' && <ArrowRight className="w-4 h-4" />}
                      </button>
                    </div>
                  </form>
                )}
              </Reveal>
            </div>

            <div className="lg:col-span-1">
              <Reveal delay={0.1}>
                <div className="border border-black/10 p-8">
                  <div className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4 font-light">
                    Direct contact
                  </div>
                  <div className="space-y-4 mb-8">
                    <a
                      href="mailto:atharva@kalixsystems.com"
                      className="flex items-center gap-3 text-sm font-light tracking-wide hover:text-black/70 transition-colors"
                    >
                      <Mail className="w-4 h-4 opacity-50" />
                      atharva@kalixsystems.com
                    </a>
                    <a
                      href="mailto:devyansh@kalixsystems.com"
                      className="flex items-center gap-3 text-sm font-light tracking-wide hover:text-black/70 transition-colors"
                    >
                      <Mail className="w-4 h-4 opacity-50" />
                      devyansh@kalixsystems.com
                    </a>
                  </div>
                  <div className="text-xs tracking-[0.2em] uppercase text-black/40 mb-3 font-light">
                    What happens next
                  </div>
                  <ul className="space-y-3 text-sm text-black/60 font-light leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-black/30">01</span>
                      We review your request within one business day.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-black/30">02</span>
                      We schedule a short scoping call.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-black/30">03</span>
                      You get a written proposal with timeline and cost.
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
