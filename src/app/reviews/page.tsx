import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Quote, MapPin, Calendar, ThumbsUp } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Customer Reviews & Testimonials | Blooming Furniture West Coast',
  description: 'Read reviews from happy customers across the West Coast. See why we\'re the trusted choice for furniture restoration in Langebaan, Saldanha Bay, Vredenburg, and surrounding areas.',
  keywords: 'blooming furniture reviews, furniture restoration testimonials, West Coast furniture reviews, customer feedback, furniture restoration ratings',
  openGraph: {
    title: 'Customer Reviews | Blooming Furniture',
    description: 'See what our customers say about our furniture restoration services. 4.9/5 stars from over 100 happy customers.',
    url: 'https://bloomingfurniture.co.za/reviews',
    type: 'website',
    locale: 'en_ZA',
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/reviews',
  },
};

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Blooming Furniture - Woodwork Restoration & Refurbishment",
  "image": "https://bloomingfurniture.co.za/blooming-furniture.png",
  "url": "https://bloomingfurniture.co.za",
  "telephone": "+27793752588",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Langebaan",
    "addressRegion": "Western Cape",
    "addressCountry": "ZA"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "127"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sarah van der Merwe"
      },
      "datePublished": "2024-12-15",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "I brought my grandmother's antique yellowwood table to Blooming Furniture and they worked absolute magic! The table was in terrible condition but they restored it beautifully while maintaining its character. The craftsmanship is outstanding and the price was very reasonable. Highly recommend!"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Johan Botha"
      },
      "datePublished": "2024-11-28",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Professional service from start to finish. They collected my dining chairs from Saldanha Bay, re-riempied them beautifully, and delivered them back. The communication was excellent and they were ready exactly when promised. Very happy with the results!"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Emma Thompson"
      },
      "datePublished": "2024-11-10",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "We had an old oak dresser that had been damaged by the coastal weather. Blooming Furniture stripped it down, fixed water damage, and refinished it with a coastal-resistant treatment. It looks brand new! Their knowledge of protecting furniture in our salty West Coast climate is impressive."
    }
  ]
};

const reviews = [
  {
    name: "Sarah van der Merwe",
    location: "Langebaan",
    date: "December 2024",
    rating: 5,
    service: "Antique Restoration",
    review: "I brought my grandmother's antique yellowwood table to Blooming Furniture and they worked absolute magic! The table was in terrible condition with deep scratches, water damage, and loose joints. They restored it beautifully while maintaining its original character and patina. The craftsmanship is outstanding and the price was very reasonable. They even collected and delivered it personally. Highly recommend!",
    projectType: "Yellowwood Dining Table",
    image: "/image_2.jpeg"
  },
  {
    name: "Johan Botha",
    location: "Saldanha Bay",
    date: "November 2024",
    rating: 5,
    service: "Re-riempie",
    review: "Professional service from start to finish! I had 6 dining room chairs that needed re-riempie and they collected them from my home in Saldanha Bay. The communication was excellent throughout the process - they sent photos at each stage and were ready exactly when promised. The leather work is beautiful and so neatly done. Very happy with the results and will definitely use them again!",
    projectType: "Dining Chairs (6)"
  },
  {
    name: "Emma Thompson",
    location: "Vredenburg",
    date: "November 2024",
    rating: 5,
    service: "Wood Refinishing",
    review: "We had an old oak dresser that had been damaged by the coastal weather - the finish was cracked and peeling. Blooming Furniture stripped it down completely, fixed some water damage, and refinished it with a marine-grade protective treatment. It looks brand new and we're confident it will withstand our West Coast climate now. Their knowledge of protecting furniture in our salty environment is impressive. Worth every cent!",
    projectType: "Oak Dresser",
    image: "/image_3.jpeg"
  },
  {
    name: "Pieter Nel",
    location: "Paternoster",
    date: "October 2024",
    rating: 5,
    service: "Custom Furniture",
    review: "We wanted a custom coffee table made from reclaimed wood with a coastal vibe. Blooming Furniture helped us design exactly what we envisioned and the result exceeded our expectations! The craftsmanship is superb - you can see the attention to detail in every joint and finish. They really listened to what we wanted and delivered a unique piece that's become the centerpiece of our living room.",
    projectType: "Custom Coffee Table"
  },
  {
    name: "Leanne Jacobs",
    location: "Langebaan",
    date: "October 2024",
    rating: 5,
    service: "Chair Repair",
    review: "I had a set of 4 garden chairs that were falling apart - loose joints, broken slats, faded finish. I almost threw them away but decided to get a quote first. So glad I did! They repaired everything, reinforced all the joints, replaced the broken parts, and refinished them with a weatherproof coating. They look amazing and are sturdy again. Great value for money and saved me from buying new chairs!",
    projectType: "Garden Chairs"
  },
  {
    name: "David Smith",
    location: "Velddrif",
    date: "September 2024",
    rating: 5,
    service: "Antique Restoration",
    review: "My father's vintage writing desk needed extensive restoration. The team at Blooming Furniture treated it with such care and respect. They repaired broken drawers, restored the leather writing surface, and refinished the wood to bring out its natural beauty. The transformation is incredible! It's now a cherished heirloom that will last for generations. Cannot recommend them highly enough for antique work.",
    projectType: "Vintage Writing Desk",
    image: "/image_4.jpeg"
  },
  {
    name: "Melissa van Zyl",
    location: "Hopefield",
    date: "September 2024",
    rating: 5,
    service: "Re-deco / Chalk Paint",
    review: "I wanted to update my daughter's bedroom furniture with a fresh, modern look. Blooming Furniture suggested chalk paint and the result is stunning! They painted the bed, dresser, and nightstand in a beautiful soft blue with distressed accents. The finish is smooth and professional - so much better than if I'd tried to DIY it. My daughter absolutely loves her 'new' bedroom!",
    projectType: "Bedroom Set"
  },
  {
    name: "Andre Marais",
    location: "Yzerfontein",
    date: "August 2024",
    rating: 5,
    service: "Furniture Repair",
    review: "Our family's solid stinkwood dining table developed a major crack down the middle. We were devastated and thought it might be beyond repair. Blooming Furniture assessed it and assured us they could fix it. They did an incredible job - you can barely see where the repair was made! The table is stable again and the finish matches perfectly. They saved a precious family piece.",
    projectType: "Stinkwood Dining Table"
  },
  {
    name: "Karen de Wet",
    location: "Saldanha Bay",
    date: "August 2024",
    rating: 5,
    service: "Wood Refinishing",
    review: "We bought a beautiful second-hand teak bedroom suite but it was looking tired and dated. Blooming Furniture stripped and refinished all the pieces to a lighter, more contemporary look. The transformation is amazing - it looks like expensive designer furniture now! The team was professional, kept to the timeline, and their pricing was very fair. Absolutely delighted!",
    projectType: "Teak Bedroom Suite",
    image: "/image_5.jpeg"
  },
  {
    name: "Thabo Molefe",
    location: "Langebaan",
    date: "July 2024",
    rating: 5,
    service: "Custom Woodwork",
    review: "I needed custom shelving for my office with specific dimensions to fit the space. Blooming Furniture created beautiful floating shelves from Oregon pine that fit perfectly and look fantastic. They worked with me on the design, provided samples, and the installation was flawless. Very impressed with their craftsmanship and attention to detail. Will definitely use them for future projects!",
    projectType: "Custom Shelving"
  },
  {
    name: "Susan Pieterse",
    location: "Vredenburg",
    date: "July 2024",
    rating: 5,
    service: "Chair Restoration",
    review: "Inherited a set of beautiful old riempie chairs from my aunt but they were in poor condition. Blooming Furniture restored the wood frames and re-did all the riempie work. They look absolutely magnificent now - as good as the day they were made! The workmanship is exceptional and they clearly take pride in what they do. Highly professional and reasonably priced.",
    projectType: "Riempie Chairs (4)"
  },
  {
    name: "Heinrich Muller",
    location: "Elands Bay",
    date: "June 2024",
    rating: 5,
    service: "Outdoor Furniture Restoration",
    review: "Our outdoor teak furniture set was looking very weathered and grey after years of coastal exposure. Blooming Furniture collected everything, deep cleaned, sanded, and applied a teak oil treatment. The wood is back to its warm golden color and they advised us on proper maintenance. The set looks brand new and we're so happy we restored rather than replaced. Excellent service!",
    projectType: "Outdoor Teak Set"
  }
];

const stats = [
  { number: "127+", label: "Happy Customers" },
  { number: "4.9/5", label: "Average Rating" },
  { number: "350+", label: "Projects Completed" },
  { number: "10+", label: "Years Experience" }
];

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingSchema),
        }}
      />

      <div className="min-h-screen bg-daisy-cream pt-24 pb-16">
        <Breadcrumbs
          items={[{ label: 'Reviews', href: '/reviews' }]}
          className="max-w-7xl mx-auto"
        />
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Customer Reviews & Testimonials
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-6">
              Don't just take our word for it - see what our customers across the West Coast have to say about our furniture restoration services.
            </p>
            <div className="flex items-center justify-center gap-2 text-3xl mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-8 w-8 fill-golden-center text-golden-center" />
              ))}
            </div>
            <p className="text-2xl font-bold">4.9 out of 5 stars</p>
            <p className="text-lg opacity-90">Based on 127+ customer reviews</p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white-daisy border-b border-golden-center/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold text-forest-green mb-2">{stat.number}</div>
                  <div className="text-sm text-dark-wood">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">
              What Our Customers Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reviews.map((review, idx) => (
                <div
                  key={idx}
                  className="bg-white-daisy rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                >
                  {review.image && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={review.image}
                        alt={`${review.projectType} - ${review.name}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-dark-wood">{review.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-forest-green">
                          <MapPin className="h-4 w-4" />
                          <span>{review.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-forest-green">
                          <Calendar className="h-4 w-4" />
                          <span>{review.date}</span>
                        </div>
                      </div>
                      <Quote className="h-8 w-8 text-golden-center opacity-50" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-golden-center text-golden-center" />
                      ))}
                    </div>

                    {/* Service Badge */}
                    <div className="inline-block bg-forest-green/10 text-forest-green text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {review.service}
                    </div>

                    {/* Project Type */}
                    <p className="text-sm font-semibold text-dark-wood mb-2">
                      Project: {review.projectType}
                    </p>

                    {/* Review Text */}
                    <p className="text-forest-green leading-relaxed">
                      "{review.review}"
                    </p>

                    {/* Verified Badge */}
                    <div className="mt-4 flex items-center gap-2 text-sm text-forest-green">
                      <ThumbsUp className="h-4 w-4" />
                      <span className="font-semibold">Verified Customer</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Google Reviews CTA */}
        <section className="py-12 bg-white-daisy border-y border-golden-center/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-dark-wood mb-4">
              Read More Reviews on Google
            </h2>
            <p className="text-forest-green mb-6">
              Check out our Google Business Profile for even more customer reviews and photos of our work.
            </p>
            <a
              href="https://www.google.com/search?q=blooming+furniture+langebaan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-forest-green text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-dark-wood transition duration-300"
            >
              View Google Reviews
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Happy Customers?</h2>
            <p className="text-xl mb-8">
              Experience the same quality craftsmanship and exceptional service. Get your free consultation today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+27793752588"
                className="border-2 border-white-daisy text-white-daisy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy hover:text-dark-wood transition duration-300"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 bg-daisy-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white-daisy rounded-lg">
                <div className="text-4xl mb-2">✨</div>
                <h3 className="font-bold text-dark-wood mb-2">Quality Guaranteed</h3>
                <p className="text-sm text-forest-green">100% satisfaction on every project</p>
              </div>
              <div className="text-center p-6 bg-white-daisy rounded-lg">
                <div className="text-4xl mb-2">🏆</div>
                <h3 className="font-bold text-dark-wood mb-2">Expert Craftsmen</h3>
                <p className="text-sm text-forest-green">10+ years of experience</p>
              </div>
              <div className="text-center p-6 bg-white-daisy rounded-lg">
                <div className="text-4xl mb-2">🌊</div>
                <h3 className="font-bold text-dark-wood mb-2">Local to West Coast</h3>
                <p className="text-sm text-forest-green">We understand your unique needs</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
