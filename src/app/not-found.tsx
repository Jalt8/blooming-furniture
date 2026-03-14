import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | Blooming Furniture',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-daisy-cream flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number */}
        <h1 className="text-8xl md:text-9xl font-bold text-forest-green/20 select-none leading-none mb-2">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-dark-wood mb-4">
          Page Not Found
        </h2>

        {/* Message */}
        <p className="text-lg text-dark-wood/70 mb-10 max-w-md mx-auto">
          Sorry, the page you are looking for does not exist or has been moved.
          Let us help you find what you need.
        </p>

        {/* Navigation Links */}
        <nav className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 max-w-lg mx-auto">
          <Link
            href="/"
            className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-sm border border-forest-green/10 hover:border-forest-green/30 hover:shadow-md transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-forest-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
            </svg>
            <span className="text-sm font-medium text-dark-wood">Home</span>
          </Link>

          <Link
            href="/services"
            className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-sm border border-forest-green/10 hover:border-forest-green/30 hover:shadow-md transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-forest-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            <span className="text-sm font-medium text-dark-wood">Services</span>
          </Link>

          <Link
            href="/portfolio"
            className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-sm border border-forest-green/10 hover:border-forest-green/30 hover:shadow-md transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-forest-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium text-dark-wood">Portfolio</span>
          </Link>

          <Link
            href="/contact"
            className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-sm border border-forest-green/10 hover:border-forest-green/30 hover:shadow-md transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-forest-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium text-dark-wood">Contact</span>
          </Link>
        </nav>

        {/* Free Consultation CTA */}
        <div className="bg-forest-green rounded-2xl p-8 text-white-daisy">
          <h3 className="text-xl font-bold mb-2">Need Help With Furniture Restoration?</h3>
          <p className="text-white-daisy/80 mb-6">
            Get a free consultation from our expert craftsmen on the West Coast.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-golden-center text-dark-wood font-semibold px-8 py-3 rounded-lg hover:bg-white-daisy hover:text-dark-wood transition-colors duration-300"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}
