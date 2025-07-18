import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Leather Furniture Care & Repair in Coastal Climates | West Coast Guide | Blooming Furniture',
  description: 'Protect your leather furniture from salt air and humidity. Expert tips for maintaining and repairing leather in West Coast conditions. Prevent cracking, fading, and salt damage.',
  keywords: 'leather furniture care, coastal climate leather protection, salt air leather damage, leather furniture repair, leather restoration west coast, humid climate leather maintenance',
  openGraph: {
    title: 'Leather Furniture Care & Repair in Coastal Climates',
    description: 'Expert guide to protecting leather furniture from salt air and humidity. Professional tips for coastal climate leather care and restoration.',
    url: 'https://bloomingfurniture.co.za/blog/leather-furniture-care-coastal-climates',
    type: 'article',
    locale: 'en_ZA',
    images: [
      {
        url: '/blog/leather-care-guide.jpg',
        width: 1200,
        height: 630,
        alt: 'Leather Furniture Care in Coastal Climates Guide',
      },
    ],
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/blog/leather-furniture-care-coastal-climates',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://bloomingfurniture.co.za/blog/leather-furniture-care-coastal-climates",
  "headline": "Leather Furniture Care and Repair in Coastal Climates",
  "description": "Comprehensive guide to protecting and maintaining leather furniture in coastal environments with high humidity and salt air exposure.",
  "image": "https://bloomingfurniture.co.za/blog/leather-care-guide.jpg",
  "datePublished": "2025-01-06",
  "dateModified": "2025-01-06",
  "author": {
    "@type": "Organization",
    "name": "Blooming Furniture - Restoration & Refurbishment"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Blooming Furniture",
    "logo": {
      "@type": "ImageObject",
      "url": "https://bloomingfurniture.co.za/blooming-furniture.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://bloomingfurniture.co.za/blog/leather-furniture-care-coastal-climates"
  },
  "articleSection": "Furniture Care Guides",
  "keywords": ["leather care", "coastal climate", "furniture maintenance", "salt air protection", "humidity control"],
  "wordCount": 2600,
  "inLanguage": "en-ZA"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How often should I clean leather furniture in coastal areas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In coastal environments, clean leather furniture monthly with a damp cloth to remove salt particles, and condition every 3-6 months depending on exposure levels. High-exposure areas may need weekly cleaning."
      }
    },
    {
      "@type": "Question",
      "name": "What are the signs of salt air damage to leather furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Salt air damage appears as white residue on the surface, accelerated drying and cracking, stiffening of the leather, color fading, and deterioration of stitching. Early intervention prevents permanent damage."
      }
    },
    {
      "@type": "Question",
      "name": "Can leather furniture be repaired after coastal climate damage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most coastal damage can be repaired through professional restoration including reconditioning treatments, color restoration, crack repair, and protective coating application. Severe cases may require reupholstery."
      }
    }
  ]
};

import LeatherCareClient from '@/components/LeatherCareClient';

export default function LeatherFurnitureCareCoastal() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      
      <article className="min-h-screen bg-daisy-cream pt-24 pb-12">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav className="flex items-center space-x-2 text-sm text-forest-green">
            <Link href="/" className="hover:text-dark-wood">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-dark-wood">Blog</Link>
            <span>/</span>
            <span className="text-dark-wood">Leather Furniture Care Coastal Climates</span>
          </nav>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <Link
                href="/blog"
                className="inline-flex items-center text-forest-green hover:text-dark-wood transition-colors duration-300"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </div>
            
            <div className="mb-6">
              <span className="px-3 py-1 bg-golden-center text-dark-wood text-sm font-semibold rounded-full">
                Care Guide
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-dark-wood mb-6">
              Leather Furniture Care and Repair in Coastal Climates
            </h1>
            
            <p className="text-xl text-forest-green mb-6">
              Protect your leather furniture from salt air and humidity with expert coastal climate care strategies. 
              Learn professional techniques for maintenance, protection, and restoration that keep your leather looking 
              beautiful despite challenging coastal conditions.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-forest-green">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>January 6, 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>12 min read</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>Leather Care Specialists</span>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <LeatherCareClient />
      </article>
    </>
  );
}