'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  // Generate BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://bloomingfurniture.co.za"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `https://bloomingfurniture.co.za${item.href}`
      }))
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`py-4 px-4 sm:px-6 lg:px-8 ${className}`}
      >
        <ol className="flex items-center space-x-2 text-sm">
          <li className="flex items-center">
            <Link
              href="/"
              className="text-forest-green hover:text-dark-wood transition-colors flex items-center"
              aria-label="Home"
            >
              <Home className="h-4 w-4" />
            </Link>
          </li>

          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
              {index === items.length - 1 ? (
                <span className="text-dark-wood font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-forest-green hover:text-dark-wood transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
