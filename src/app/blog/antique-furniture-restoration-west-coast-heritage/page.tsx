import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Antique Furniture Restoration: Preserving West Coast Heritage | Expert Guide | Blooming Furniture',
  description: 'Discover the rich heritage of West Coast antique furniture. Expert restoration techniques for Victorian, Colonial, and indigenous pieces. Preserve historical value with professional methods.',
  keywords: 'antique furniture restoration, west coast heritage furniture, victorian furniture restoration, colonial furniture repair, antique restoration south africa, historical furniture preservation',
  openGraph: {
    title: 'Antique Furniture Restoration: Preserving West Coast Heritage',
    description: 'Expert guide to restoring antique furniture while preserving historical value. Learn about West Coast furniture heritage and professional restoration techniques.',
    url: 'https://bloomingfurniture.co.za/blog/antique-furniture-restoration-west-coast-heritage',
    type: 'article',
    locale: 'en_ZA',
    images: [
      {
        url: '/blooming-furniture.png',
        width: 1200,
        height: 630,
        alt: 'West Coast Antique Furniture Restoration Heritage Guide',
      },
    ],
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/blog/antique-furniture-restoration-west-coast-heritage',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://bloomingfurniture.co.za/blog/antique-furniture-restoration-west-coast-heritage",
  "headline": "Antique Furniture Restoration: Preserving West Coast Heritage",
  "description": "Expert guide to restoring antique furniture while preserving historical value and West Coast heritage.",
  "image": "https://bloomingfurniture.co.za/blooming-furniture.png",
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
      "url": "https://bloomingfurniture.co.za/blog/antique-heritage-guide.jpg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://bloomingfurniture.co.za/blog/antique-furniture-restoration-west-coast-heritage"
  },
  "articleSection": "Antique Furniture Restoration",
  "keywords": ["antique restoration", "west coast heritage", "victorian furniture", "colonial furniture", "furniture history"],
  "wordCount": 2800,
  "inLanguage": "en-ZA"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I identify authentic West Coast antique furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Look for construction methods like hand-cut dovetails, indigenous wood species like Yellowwood or Stinkwood, and period-appropriate hardware. Documentation, provenance, and maker's marks also help verify authenticity."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between restoration and conservation of antiques?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Conservation preserves original materials and finishes, maintaining historical integrity. Restoration may involve replacing components or refinishing to return functionality, potentially affecting historical value."
      }
    },
    {
      "@type": "Question",
      "name": "How much does professional antique furniture restoration cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Costs vary from R2,000-R15,000+ depending on piece complexity, required work, and historical significance. Simple repairs start around R2,000, while museum-quality restoration of important pieces can exceed R15,000."
      }
    }
  ]
};

import AntiqueRestorationClient from '@/components/AntiqueRestorationClient';

export default function AntiqueRestorationHeritage() {
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
            <span className="text-dark-wood">Antique Furniture Restoration Heritage</span>
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
                Heritage Guide
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-dark-wood mb-6">
              Antique Furniture Restoration: Preserving West Coast Heritage
            </h1>
            
            <p className="text-xl text-forest-green mb-6">
              Discover the rich tapestry of West Coast furniture heritage and learn how to properly restore antique pieces 
              that tell the story of our region. From Victorian elegance to colonial practicality, preserve history while 
              restoring functionality.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-forest-green">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>January 6, 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>15 min read</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>Heritage Restoration Experts</span>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <AntiqueRestorationClient />
      </article>
    </>
  );
}