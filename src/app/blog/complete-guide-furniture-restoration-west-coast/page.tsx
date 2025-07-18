import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import BlogArticleClient from '@/components/BlogArticleClient';

export const metadata: Metadata = {
  title: 'The Complete Guide to Furniture Restoration on the West Coast South Africa | Blooming Furniture',
  description: 'Master furniture restoration in West Coast conditions. Learn about coastal weather effects, local wood types, salt air protection, and professional restoration techniques for lasting results.',
  keywords: 'furniture restoration west coast, coastal furniture restoration, west coast furniture repair, salt air furniture damage, coastal climate furniture care, furniture restoration south africa',
  openGraph: {
    title: 'Complete Guide to Furniture Restoration on the West Coast',
    description: 'Everything you need to know about restoring furniture in coastal South Africa. Expert techniques for weather protection and lasting restoration.',
    url: 'https://bloomingfurniture.co.za/blog/complete-guide-furniture-restoration-west-coast',
    type: 'article',
    locale: 'en_ZA',
    images: [
      {
        url: '/blog/coastal-restoration-guide.jpg',
        width: 1200,
        height: 630,
        alt: 'West Coast Furniture Restoration Guide',
      },
    ],
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/blog/complete-guide-furniture-restoration-west-coast',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://bloomingfurniture.co.za/blog/complete-guide-furniture-restoration-west-coast",
  "headline": "The Complete Guide to Furniture Restoration on the West Coast South Africa",
  "description": "Master furniture restoration in West Coast conditions. Learn about coastal weather effects, local wood types, salt air protection, and professional restoration techniques.",
  "image": "https://bloomingfurniture.co.za/blog/coastal-restoration-guide.jpg",
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
    "@id": "https://bloomingfurniture.co.za/blog/complete-guide-furniture-restoration-west-coast"
  },
  "articleSection": "Furniture Restoration Guides",
  "keywords": ["furniture restoration", "west coast", "coastal furniture", "salt air damage", "wood restoration"],
  "wordCount": 2500,
  "inLanguage": "en-ZA"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does salt air affect furniture on the West Coast?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Salt air accelerates corrosion of metal hardware, causes wood to expand and contract more rapidly, and can lead to finish deterioration. Regular cleaning and protective treatments are essential."
      }
    },
    {
      "@type": "Question", 
      "name": "What wood types are commonly found in West Coast furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common local woods include Yellowwood, Stinkwood, Oregon Pine, and imported hardwoods like Mahogany and Teak. Each requires specific restoration techniques."
      }
    },
    {
      "@type": "Question",
      "name": "When should I hire a professional for furniture restoration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For valuable antiques, structural damage, complex finishes, or when dealing with water damage, professional restoration ensures proper techniques and materials are used."
      }
    }
  ]
};

export default function CompleteGuideWestCoastRestoration() {
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
            <span className="text-dark-wood">Complete Guide to West Coast Restoration</span>
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
                Pillar Guide
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-dark-wood mb-6">
              The Complete Guide to Furniture Restoration on the West Coast
            </h1>
            
            <p className="text-xl text-forest-green mb-6">
              Master the art of furniture restoration in coastal South Africa. From understanding the unique challenges of salt air to working with local wood types, this comprehensive guide covers everything you need for successful West Coast restoration projects.
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
                <span>Blooming Furniture Experts</span>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <BlogArticleClient />
      </article>
    </>
  );
}