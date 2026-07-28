import { Link } from 'react-router-dom'

const COLUMNS = [
  {
    heading: 'Services',
    links: [
      { label: 'Custom Software', to: '/services#software' },
      { label: 'AI & Machine Learning', to: '/services#ai' },
      { label: 'Cloud Infrastructure', to: '/services#cloud' },
      { label: 'Cybersecurity', to: '/services#security' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Case Studies', to: '/case-studies' },
      { label: 'Process', to: '/process' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Get in touch',
    links: [
      { label: 'atharva@kalixsystems.com', to: 'mailto:atharva@kalixsystems.com', external: true },
      { label: 'devyansh@kalixsystems.com', to: 'mailto:devyansh@kalixsystems.com', external: true },
      { label: 'kalixsystems.com', to: 'https://kalixsystems.com', external: true },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative py-16 md:py-24 px-6 md:px-8 bg-black text-white">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <span className="font-display text-sm tracking-[0.2em] uppercase font-light block mb-4">
              KĀLIX <span className="text-white/40">services</span>
            </span>
            <p className="text-xs text-white/40 font-light leading-relaxed max-w-[220px]">
              Building the future of defense and intelligence.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.heading} className="text-xs font-light">
              <div className="text-white/40 mb-3 tracking-wide uppercase">{col.heading}</div>
              <div className="space-y-2 tracking-wide">
                {col.links.map((link) =>
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.to}
                      className="block hover:text-white/80 text-white/60 transition-colors"
                      target={link.to.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="block hover:text-white/80 text-white/60 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <span className="text-xs text-white/40 font-light">
            &copy; {new Date().getFullYear()} KĀLIX Systems. All rights reserved.
          </span>
          <span className="text-xs text-white/40 font-light">
            A KĀLIX Systems property &mdash;{' '}
            <a
              href="https://kalixsystems.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors underline underline-offset-4"
            >
              kalixsystems.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
