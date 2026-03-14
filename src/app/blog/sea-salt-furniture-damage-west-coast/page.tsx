import { Metadata } from 'next';
import SeaSaltDamageClient from '@/components/SeaSaltDamageClient';

export const metadata: Metadata = {
  title: 'How Sea Salt Damages Your Furniture: A West Coast Problem | Prevention Guide | Blooming Furniture',
  description: 'Understand how sea salt air damages furniture on the West Coast. Learn prevention strategies, early warning signs, and professional repair solutions for coastal furniture protection.',
  keywords: 'sea salt furniture damage, coastal furniture problems, salt air furniture corrosion, west coast furniture protection, marine environment furniture care',
  openGraph: {
    title: 'How Sea Salt Damages Your Furniture: A West Coast Problem',
    description: 'Expert guide to understanding and preventing sea salt damage to furniture in coastal West Coast environments.',
    url: 'https://bloomingfurniture.co.za/blog/sea-salt-furniture-damage-west-coast',
    type: 'article',
    locale: 'en_ZA',
    images: [
      {
        url: '/blooming-furniture.png',
        width: 1200,
        height: 630,
        alt: 'Sea Salt Furniture Damage West Coast Prevention Guide',
      },
    ],
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/blog/sea-salt-furniture-damage-west-coast',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://bloomingfurniture.co.za/blog/sea-salt-furniture-damage-west-coast",
  "headline": "How Sea Salt Damages Your Furniture: A West Coast Problem",
  "description": "Understand how sea salt air damages furniture on the West Coast. Learn prevention strategies, early warning signs, and professional repair solutions.",
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
      "url": "https://bloomingfurniture.co.za/blooming-furniture.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://bloomingfurniture.co.za/blog/sea-salt-furniture-damage-west-coast"
  },
  "articleSection": "Furniture Care Guides",
  "keywords": ["sea salt damage", "coastal furniture", "salt air damage", "furniture protection", "west coast"],
  "wordCount": 2000,
  "inLanguage": "en-ZA"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How far inland does salt air affect furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Salt air can affect furniture up to 5 kilometers inland from the coast, with the most severe damage occurring within 1-2 kilometers of the ocean."
      }
    },
    {
      "@type": "Question",
      "name": "What are the first signs of salt damage on furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Early signs include white crystalline deposits on surfaces, rust spots on metal hardware, sticky or rough texture on wood, and musty odors from upholstery."
      }
    },
    {
      "@type": "Question",
      "name": "How can I protect my furniture from salt air damage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Regular cleaning with fresh water, applying protective finishes, using dehumidifiers, positioning furniture away from windows, and annual professional maintenance are key protection strategies."
      }
    },
    {
      "@type": "Question",
      "name": "Is salt damage to furniture reversible?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Early-stage salt damage can often be reversed with proper cleaning and refinishing. However, severe structural damage may require professional restoration or replacement."
      }
    }
  ]
};

export default function SeaSaltDamageGuide() {
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
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a href="/" className="text-forest-green hover:text-dark-wood">Home</a>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-forest-green">/</span>
                  <a href="/blog" className="text-forest-green hover:text-dark-wood">Blog</a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2 text-forest-green">/</span>
                  <span className="text-dark-wood">Salt Damage Guide</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <a
                href="/blog"
                className="inline-flex items-center text-forest-green hover:text-dark-wood transition-colors duration-300"
              >
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </a>
            </div>
            
            <div className="mb-6">
              <span className="px-3 py-1 bg-golden-center text-dark-wood text-sm font-semibold rounded-full">
                Problem Solving
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-dark-wood mb-6">
              How Sea Salt Damages Your Furniture: A West Coast Problem
            </h1>
            
            <p className="text-xl text-forest-green mb-6">
              Living on the beautiful West Coast comes with hidden costs for your furniture. Understanding how sea salt affects 
              wood, metal, and upholstery helps you protect your investments and maintain your home's beauty despite coastal challenges.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-forest-green">
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>January 6, 2025</span>
              </div>
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>8 min read</span>
              </div>
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Coastal Furniture Experts</span>
              </div>
            </div>
          </div>
        </header>

        <SeaSaltDamageClient />
      </article>
    </>
  );
}