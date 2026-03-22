import { Metadata } from 'next';
import BlogClient from '@/components/BlogClient';

export const metadata: Metadata = {
  title: 'Furniture Restoration Blog | Expert Tips & West Coast Guides',
  description: 'Expert furniture restoration tips, West Coast guides, and local insights. Learn about antique restoration, coastal climate care, and professional techniques from Blooming Furniture experts.',
  keywords: 'furniture restoration blog, West Coast furniture care, antique restoration tips, coastal furniture maintenance, furniture repair guides',
  openGraph: {
    title: 'Furniture Restoration Blog | Expert Guides & West Coast Tips',
    description: 'Expert furniture restoration insights, local West Coast guides, and professional restoration techniques from experienced craftsmen.',
    url: 'https://bloomingfurniture.co.za/blog',
    type: 'website',
    locale: 'en_ZA',
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/blog',
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://bloomingfurniture.co.za/blog",
  "name": "Blooming Furniture Restoration Blog",
  "description": "Expert furniture restoration tips, guides, and insights for West Coast South Africa. Professional advice on antique restoration, coastal climate care, and furniture maintenance.",
  "url": "https://bloomingfurniture.co.za/blog",
  "publisher": {
    "@type": "Organization",
    "name": "Blooming Furniture - Restoration & Refurbishment",
    "url": "https://bloomingfurniture.co.za",
    "logo": {
      "@type": "ImageObject",
      "url": "https://bloomingfurniture.co.za/blooming-furniture.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://bloomingfurniture.co.za/blog"
  }
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />
      
      <BlogClient />
    </>
  );
}