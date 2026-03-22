'use client'

import Link from 'next/link'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-daisy-cream flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-dark-wood mb-4">
          Something went wrong
        </h2>
        <p className="text-dark-wood/70 mb-8">
          We apologise for the inconvenience. Please try again or contact us directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-forest-green text-white-daisy rounded-lg font-semibold hover:bg-dark-wood transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-golden-center/20 text-dark-wood rounded-lg font-semibold hover:bg-golden-center/30 transition-colors"
          >
            Go Home
          </Link>
        </div>
        <p className="mt-8 text-sm text-dark-wood/50">
          Need help? Call us at{' '}
          <a href="tel:+27793752588" className="text-forest-green hover:underline">
            (079) 375 2588
          </a>
        </p>
      </div>
    </div>
  )
}
