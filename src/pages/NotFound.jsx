import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." />
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-8 bg-white text-center">
        <div>
          <div className="text-xs tracking-[0.3em] uppercase text-black/40 mb-6 font-light">
            404
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-light tracking-tight mb-6">
            This page doesn&rsquo;t exist.
          </h1>
          <p className="text-black/60 font-light mb-10">
            It may have been moved, or the link may be incorrect.
          </p>
          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white text-sm tracking-wide font-light hover:bg-black/85 transition-all duration-300"
          >
            Back to Home
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}
