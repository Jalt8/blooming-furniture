import { Metadata } from 'next';
import Link from 'next/link';
import { ReactNode } from 'react';
import { ChevronDown, Phone, Mail, MessageCircle } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'FAQ - Furniture Restoration Questions Answered',
  description: 'Get answers to common furniture restoration questions. Learn about pricing, timelines, services, and our process. Expert woodwork restoration on the West Coast, South Africa.',
  keywords: 'furniture restoration FAQ, furniture repair questions, restoration cost, how long does restoration take, furniture restoration process, West Coast furniture FAQ, furniture care tips, French polishing, water damaged furniture',
  openGraph: {
    title: 'Furniture Restoration FAQ | Blooming Furniture',
    description: 'Get answers to your furniture restoration questions. Learn about our services, pricing, and process.',
    url: 'https://bloomingfurniture.co.za/faq',
    type: 'website',
    locale: 'en_ZA',
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/faq',
  },
};

/* ---------------------------------------------------------------------------
   FAQ Schema (JSON-LD) — must include EVERY question shown on the page.
   Plain-text only (no HTML) per Google's FAQ structured data spec.
   --------------------------------------------------------------------------- */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    // ── Cost & Pricing ─────────────────────────────────────────────────
    {
      "@type": "Question",
      "name": "How much does furniture restoration cost in South Africa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Costs range from R500 for basic repairs to R15,000+ for complex antique restoration. Factors include size, condition, wood type, and desired finish. We offer free assessments — read our complete pricing guide on the blog, or contact us for a personalised quote."
      }
    },
    {
      "@type": "Question",
      "name": "What factors affect furniture restoration pricing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The main factors are: furniture size and type, current condition (minor scratches vs structural damage), wood species (stinkwood and yellowwood require specialist knowledge), desired finish (natural polish vs chalk paint vs lacquer), and whether collection/delivery is needed."
      }
    },
    {
      "@type": "Question",
      "name": "Is furniture restoration cheaper than buying new?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most cases, yes — restoration typically costs 40-60% less than purchasing equivalent quality new furniture. This is especially true for solid wood pieces, antiques, and designer furniture. Plus, restored furniture often has superior build quality compared to modern mass-produced alternatives."
      }
    },
    // ── Process & Timeline ─────────────────────────────────────────────
    {
      "@type": "Question",
      "name": "How long does furniture restoration take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Basic repairs take 1-3 days. Full refinishing takes 3-7 days. Antique restoration can take 1-4 weeks depending on complexity. We'll give you a specific timeline during your free assessment."
      }
    },
    {
      "@type": "Question",
      "name": "What is the furniture restoration process from start to finish?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our process: 1) Free assessment and quote, 2) Collection from your home, 3) Careful stripping and preparation, 4) Repair of any structural damage, 5) Application of chosen finish, 6) Quality inspection, 7) Delivery back to you. We keep you updated with photos throughout."
      }
    },
    {
      "@type": "Question",
      "name": "What is your restoration process?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our comprehensive restoration process includes: 1. Free assessment and detailed quote, 2. Furniture collection (if needed), 3. Stripping and cleaning, 4. Repairs and structural reinforcement, 5. Sanding and preparation, 6. Staining or painting, 7. Finishing with protective coats, 8. Quality inspection, 9. Delivery or pickup."
      }
    },
    {
      "@type": "Question",
      "name": "Can I see my furniture during restoration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We welcome you to visit our workshop and check on your furniture's progress. We'll also send photos at key stages so you can see the transformation. Just give us a call before visiting."
      }
    },
    // ── Services & Capabilities ────────────────────────────────────────
    {
      "@type": "Question",
      "name": "What types of wood can you restore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We restore all types of wood including local SA woods (Yellowwood, Stinkwood, Kiaat, Imbuia), popular hardwoods (Oak, Teak, Mahogany, Walnut, Cherry), softwoods (Pine, Cedar, Fir), and exotic woods (Rosewood, Ebony, Bamboo). If you're unsure what type of wood your furniture is, we can identify it during our assessment."
      }
    },
    {
      "@type": "Question",
      "name": "Can you repair broken or damaged furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We repair virtually any damage including broken legs, arms, or frames, loose or broken joints, missing pieces or hardware, water damage and warping, deep scratches, gouges, dents, sun damage and fading, and pest damage (woodworm, etc.)."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with antique furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Antique restoration is one of our specialties. We use traditional techniques and materials to preserve the authenticity and value of heirloom pieces. We understand the importance of maintaining historical integrity while making antiques functional for modern use."
      }
    },
    {
      "@type": "Question",
      "name": "Can I choose custom colors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer unlimited custom color options including natural wood stains (light to dark), chalk paint in any color, distressed and antique finishes, two-tone and ombre effects, and sheen levels from matte to high-gloss. Bring a color swatch or photo and we'll match it perfectly!"
      }
    },
    {
      "@type": "Question",
      "name": "Do you do upholstery work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We specialize in wood restoration and re-riempie (leather strip weaving) for traditional seating. For fabric upholstery, we can recommend trusted local partners who work with us regularly."
      }
    },
    {
      "@type": "Question",
      "name": "What is French polishing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "French polishing is a traditional wood finishing technique using shellac dissolved in alcohol, applied in many thin layers with a rubbing pad. It produces a high-gloss, deep finish prized on antique furniture. It's labour-intensive but produces an unmatched depth of colour and clarity."
      }
    },
    {
      "@type": "Question",
      "name": "Can you repair water-damaged furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — we specialise in water damage repair. This includes removing water stains, treating warping, replacing swollen joints, and refinishing affected surfaces. The sooner you act after water damage, the better the outcome."
      }
    },
    {
      "@type": "Question",
      "name": "Do you restore outdoor furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Outdoor furniture on the West Coast takes a beating from sun, salt, and wind. We strip, repair, and refinish outdoor pieces with UV-resistant and weather-proof coatings designed for the coastal climate."
      }
    },
    {
      "@type": "Question",
      "name": "Can you match existing wood stains and finishes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we custom-mix stains and finishes to match your existing furniture. Whether you need to match a Victorian mahogany dining set or a modern oak sideboard, we can achieve a seamless colour match."
      }
    },
    // ── Care & Maintenance ─────────────────────────────────────────────
    {
      "@type": "Question",
      "name": "How do I care for newly restored furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dust regularly with a soft cloth, avoid placing hot items directly on surfaces, keep away from direct sunlight, use coasters and placemats, and apply furniture oil or wax every 3-6 months depending on the finish. For coastal homes, we recommend more frequent maintenance due to salt air."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I oil wooden furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For indoor furniture, every 3-6 months with a quality furniture oil. For pieces in coastal areas like Langebaan or Saldanha Bay, every 2-3 months is recommended due to the drying effect of salt air. We can advise on the best products for your specific wood type."
      }
    },
    {
      "@type": "Question",
      "name": "How do I protect furniture from the coastal climate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use marine-grade sealants, keep furniture away from open windows facing the sea, apply UV-resistant finishes, maintain regular oiling schedules, and consider dehumidifiers in very humid rooms. Visit our coastal furniture protection guide for more details."
      }
    },
    {
      "@type": "Question",
      "name": "What cleaning products should I avoid on wood furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Avoid silicone-based polishes (they build up over time), harsh chemical cleaners, bleach, ammonia-based products, and excessive water. Instead, use a slightly damp soft cloth for cleaning and a quality beeswax or oil-based polish."
      }
    },
    // ── Collection & Delivery ──────────────────────────────────────────
    {
      "@type": "Question",
      "name": "Do you collect and deliver furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer collection and delivery across the West Coast, from Langebaan to Elands Bay. There's a nominal fee based on distance — typically R200-R800."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer collection and delivery services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer convenient collection and delivery throughout the West Coast region including Langebaan, Saldanha Bay, Vredenburg, Paternoster, Velddrif, Hopefield, Yzerfontein, and surrounding areas. Collection and delivery fees vary by location and size of furniture."
      }
    },
    {
      "@type": "Question",
      "name": "Can I drop off and pick up my furniture myself?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Of course! You're welcome to drop off and collect your furniture from our workshop in Langebaan. We'll coordinate convenient times and help you load/unload. This saves on collection/delivery fees."
      }
    },
    {
      "@type": "Question",
      "name": "How is my furniture transported safely?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We take great care transporting your furniture with blankets, straps, and protective padding. We have experience moving delicate antiques and large pieces safely. Your furniture is insured during transport."
      }
    },
    // ── Service Areas & Availability ───────────────────────────────────
    {
      "@type": "Question",
      "name": "What areas do you service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We proudly service the entire West Coast of South Africa including Langebaan (our home base), Saldanha Bay, Vredenburg, Paternoster, Velddrif, Hopefield, Yzerfontein, Elands Bay, St Helena Bay, and surrounding areas. Outside these areas? Contact us - we may be able to help or arrange shipping."
      }
    },
    {
      "@type": "Question",
      "name": "Do you have a showroom I can visit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! You can visit our workshop in Langebaan to see current projects and discuss your restoration needs. We recommend calling ahead to schedule a visit at (079) 375 2588 so we can give you our full attention."
      }
    },
    {
      "@type": "Question",
      "name": "What are your business hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our regular hours are Monday-Friday 9:00 AM - 6:00 PM and Saturday 10:00 AM - 4:00 PM. We're closed Sundays. For urgent matters, you can always reach us via WhatsApp."
      }
    },
    // ── Coastal Climate Concerns ───────────────────────────────────────
    {
      "@type": "Question",
      "name": "How do you protect furniture from West Coast salt air?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Living on the coast presents unique challenges! We use specialized techniques including marine-grade sealants and finishes, multiple protective clear coats, moisture-resistant treatments, rust-proof hardware, and advice on placement and ongoing care. Regular maintenance every 2-3 years helps coastal furniture last decades!"
      }
    },
    {
      "@type": "Question",
      "name": "Can you restore sun-faded outdoor furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Outdoor and garden furniture takes a beating from sun, salt, and wind. We restore outdoor pieces using weather-resistant finishes designed for South African coastal conditions. We work with teak, pine, and other outdoor wood types."
      }
    },
    // ── Getting Started ────────────────────────────────────────────────
    {
      "@type": "Question",
      "name": "How do I get a quote?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Getting started is easy! Call or WhatsApp (079) 375 2588 for the fastest response, email wendydanie@gmail.com with photos, fill out our online contact form, or book a free in-home assessment for larger projects. Send 3-4 photos showing the overall piece and any damage for the most accurate quote."
      }
    },
    {
      "@type": "Question",
      "name": "What information do you need for a quote?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To provide an accurate quote, we need: photos of the furniture (overall and close-ups of issues), type of furniture (chair, table, cabinet, etc.), approximate size/dimensions, description of problems or desired services, your location for collection/delivery estimate, and timeline preferences (if urgent)."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer free consultations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer free consultations and quotes. For complex projects or multiple pieces, we can arrange a free in-person assessment at your home to better understand the scope and provide accurate pricing."
      }
    },
    // ── Quality & Guarantees ───────────────────────────────────────────
    {
      "@type": "Question",
      "name": "Do you offer a warranty or guarantee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We stand behind our craftsmanship with a 100% satisfaction guarantee. If there are any issues with our work within the first year, we'll make it right at no additional cost. We use premium materials designed to last for decades."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Blooming Furniture different?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "What sets us apart: 10+ years of expert craftsmanship, specialised in coastal climate furniture care, unlimited custom colour options, local to West Coast so we understand your needs, eco-friendly products and practices, satisfaction guaranteed, excellent communication throughout, and a passion for bringing furniture back to life."
      }
    },
    {
      "@type": "Question",
      "name": "Can I see examples of your work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Check out our portfolio page to see detailed before-and-after photos of completed projects. You can also visit our workshop to see current projects in progress and speak with our craftsmen."
      }
    }
  ]
};

/* ---------------------------------------------------------------------------
   FAQ data — organised by category. Supports:
     q        – question text (string)
     a        – short plain-text answer (string)
     aJsx     – rich answer with inline links (ReactNode, rendered instead of `a`)
     details  – optional bullet list (string[])
     note     – optional highlighted note (string)
   --------------------------------------------------------------------------- */
interface FaqItem {
  q: string;
  a?: string;
  aJsx?: ReactNode;
  details?: string[];
  note?: string;
}

interface FaqCategory {
  category: string;
  questions: FaqItem[];
}

const faqs: FaqCategory[] = [
  {
    category: "Cost & Pricing",
    questions: [
      {
        q: "How much does furniture restoration cost in South Africa?",
        aJsx: (
          <>
            Costs range from R500 for basic repairs to R15,000+ for complex antique restoration.
            Factors include size, condition, wood type, and desired finish. We offer free
            assessments — read our{' '}
            <Link href="/blog/furniture-restoration-cost-south-africa" className="text-golden-center underline hover:text-dark-wood transition">
              complete pricing guide
            </Link>
            , or{' '}
            <Link href="/contact" className="text-golden-center underline hover:text-dark-wood transition">
              contact us
            </Link>{' '}
            for a personalised quote.
          </>
        ),
      },
      {
        q: "What factors affect furniture restoration pricing?",
        a: "The main factors are:",
        details: [
          "Furniture size and type",
          "Current condition (minor scratches vs structural damage)",
          "Wood species (stinkwood and yellowwood require specialist knowledge)",
          "Desired finish (natural polish vs chalk paint vs lacquer)",
          "Whether collection/delivery is needed"
        ],
      },
      {
        q: "Is furniture restoration cheaper than buying new?",
        a: "In most cases, yes — restoration typically costs 40-60% less than purchasing equivalent quality new furniture. This is especially true for solid wood pieces, antiques, and designer furniture. Plus, restored furniture often has superior build quality compared to modern mass-produced alternatives.",
      },
    ]
  },
  {
    category: "Process & Timeline",
    questions: [
      {
        q: "How long does furniture restoration take?",
        a: "Timelines depend on the scope of work:",
        details: [
          "Basic repairs: 1-3 days",
          "Full refinishing: 3-7 days",
          "Antique restoration: 1-4 weeks depending on complexity",
        ],
        note: "We'll give you a specific timeline during your free assessment."
      },
      {
        q: "What is the furniture restoration process from start to finish?",
        a: "Our process covers every stage:",
        details: [
          "1. Free assessment and quote",
          "2. Collection from your home",
          "3. Careful stripping and preparation",
          "4. Repair of any structural damage",
          "5. Application of chosen finish",
          "6. Quality inspection",
          "7. Delivery back to you"
        ],
        note: "We keep you updated with photos throughout."
      },
      {
        q: "What is your restoration process?",
        a: "Our comprehensive restoration process includes:",
        details: [
          "1. Free assessment and detailed quote",
          "2. Furniture collection (if needed)",
          "3. Stripping and cleaning",
          "4. Repairs and structural reinforcement",
          "5. Sanding and preparation",
          "6. Staining or painting",
          "7. Finishing with protective coats",
          "8. Quality inspection",
          "9. Delivery or pickup"
        ]
      },
      {
        q: "Can I see my furniture during restoration?",
        a: "Absolutely! We welcome you to visit our workshop and check on your furniture's progress. We'll also send photos at key stages so you can see the transformation. Just give us a call before visiting."
      }
    ]
  },
  {
    category: "Services & Capabilities",
    questions: [
      {
        q: "What types of wood can you restore?",
        a: "We work with all types of wood including:",
        details: [
          "Local SA woods: Yellowwood, Stinkwood, Kiaat, Imbuia",
          "Popular hardwoods: Oak, Teak, Mahogany, Walnut, Cherry",
          "Softwoods: Pine, Cedar, Fir",
          "Exotic woods: Rosewood, Ebony, Bamboo"
        ],
        note: "If you're unsure what type of wood your furniture is, we can identify it during our assessment."
      },
      {
        q: "Can you repair broken or damaged furniture?",
        a: "Yes! We repair virtually any damage including:",
        details: [
          "Broken legs, arms, or frames",
          "Loose or broken joints",
          "Missing pieces or hardware",
          "Water damage and warping",
          "Deep scratches, gouges, dents",
          "Sun damage and fading",
          "Pest damage (woodworm, etc.)"
        ]
      },
      {
        q: "Do you work with antique furniture?",
        a: "Absolutely! Antique restoration is one of our specialties. We use traditional techniques and materials to preserve the authenticity and value of heirloom pieces. We understand the importance of maintaining historical integrity while making antiques functional for modern use."
      },
      {
        q: "Can I choose custom colors?",
        a: "Yes! We offer unlimited custom color options including:",
        details: [
          "Natural wood stains (light to dark)",
          "Chalk paint in any color",
          "Distressed and antique finishes",
          "Two-tone and ombre effects",
          "Sheen levels: Matte, Satin, Semi-gloss, High-gloss"
        ],
        note: "Bring a color swatch or photo and we'll match it perfectly!"
      },
      {
        q: "Do you do upholstery work?",
        a: "We specialize in wood restoration and re-riempie (leather strip weaving) for traditional seating. For fabric upholstery, we can recommend trusted local partners who work with us regularly."
      },
      {
        q: "What is French polishing?",
        a: "French polishing is a traditional wood finishing technique using shellac dissolved in alcohol, applied in many thin layers with a rubbing pad. It produces a high-gloss, deep finish prized on antique furniture. It's labour-intensive but produces an unmatched depth of colour and clarity."
      },
      {
        q: "Can you repair water-damaged furniture?",
        aJsx: (
          <>
            Yes — we specialise in water damage repair. This includes removing water stains,
            treating warping, replacing swollen joints, and refinishing affected surfaces. The
            sooner you act after water damage, the better the outcome. Visit our{' '}
            <Link href="/water-damaged-furniture-repair" className="text-golden-center underline hover:text-dark-wood transition">
              water damage repair page
            </Link>{' '}
            for more information.
          </>
        ),
      },
      {
        q: "Do you restore outdoor furniture?",
        a: "Absolutely. Outdoor furniture on the West Coast takes a beating from sun, salt, and wind. We strip, repair, and refinish outdoor pieces with UV-resistant and weather-proof coatings designed for the coastal climate."
      },
      {
        q: "Can you match existing wood stains and finishes?",
        a: "Yes, we custom-mix stains and finishes to match your existing furniture. Whether you need to match a Victorian mahogany dining set or a modern oak sideboard, we can achieve a seamless colour match."
      }
    ]
  },
  {
    category: "Care & Maintenance",
    questions: [
      {
        q: "How do I care for newly restored furniture?",
        a: "Dust regularly with a soft cloth, avoid placing hot items directly on surfaces, keep away from direct sunlight, use coasters and placemats, and apply furniture oil or wax every 3-6 months depending on the finish. For coastal homes, we recommend more frequent maintenance due to salt air."
      },
      {
        q: "How often should I oil wooden furniture?",
        a: "For indoor furniture, every 3-6 months with a quality furniture oil. For pieces in coastal areas like Langebaan or Saldanha Bay, every 2-3 months is recommended due to the drying effect of salt air. We can advise on the best products for your specific wood type."
      },
      {
        q: "How do I protect furniture from the coastal climate?",
        aJsx: (
          <>
            Use marine-grade sealants, keep furniture away from open windows facing the sea,
            apply UV-resistant finishes, maintain regular oiling schedules, and consider
            dehumidifiers in very humid rooms. Our{' '}
            <Link href="/coastal-furniture-protection" className="text-golden-center underline hover:text-dark-wood transition">
              coastal furniture protection guide
            </Link>{' '}
            has more details.
          </>
        ),
      },
      {
        q: "What cleaning products should I avoid on wood furniture?",
        a: "Avoid silicone-based polishes (they build up over time), harsh chemical cleaners, bleach, ammonia-based products, and excessive water. Instead, use a slightly damp soft cloth for cleaning and a quality beeswax or oil-based polish."
      }
    ]
  },
  {
    category: "Collection & Delivery",
    questions: [
      {
        q: "Do you collect and deliver furniture?",
        aJsx: (
          <>
            Yes! We offer collection and delivery across the West Coast, from Langebaan to
            Elands Bay. There&apos;s a nominal fee based on distance — typically R200-R800.
            See our{' '}
            <Link href="/service-areas" className="text-golden-center underline hover:text-dark-wood transition">
              service areas page
            </Link>{' '}
            for full coverage details.
          </>
        ),
      },
      {
        q: "Do you offer collection and delivery services?",
        a: "Yes! We offer convenient collection and delivery throughout the West Coast region including Langebaan, Saldanha Bay, Vredenburg, Paternoster, Velddrif, Hopefield, Yzerfontein, and surrounding areas. Collection and delivery fees vary by location and size of furniture.",
        note: "Contact us for a collection/delivery quote for your area. We take great care transporting your furniture safely."
      },
      {
        q: "Can I drop off and pick up my furniture myself?",
        a: "Of course! You're welcome to drop off and collect your furniture from our workshop in Langebaan. We'll coordinate convenient times and help you load/unload. This saves on collection/delivery fees."
      },
      {
        q: "How is my furniture transported safely?",
        a: "We take great care transporting your furniture with blankets, straps, and protective padding. We have experience moving delicate antiques and large pieces safely. Your furniture is insured during transport."
      }
    ]
  },
  {
    category: "Service Areas & Availability",
    questions: [
      {
        q: "What areas do you service?",
        a: "We proudly service the entire West Coast of South Africa including:",
        details: [
          "Langebaan (our home base)",
          "Saldanha Bay",
          "Vredenburg",
          "Paternoster",
          "Velddrif",
          "Hopefield",
          "Yzerfontein",
          "Elands Bay",
          "St Helena Bay",
          "And surrounding areas"
        ],
        note: "Outside these areas? Contact us - we may be able to help or arrange shipping."
      },
      {
        q: "Do you have a showroom I can visit?",
        a: "Yes! You can visit our workshop in Langebaan to see current projects and discuss your restoration needs. We recommend calling ahead to schedule a visit at (079) 375 2588 so we can give you our full attention."
      },
      {
        q: "What are your business hours?",
        a: "Our regular hours are Monday-Friday 9:00 AM - 6:00 PM and Saturday 10:00 AM - 4:00 PM. We're closed Sundays. For urgent matters, you can always reach us via WhatsApp."
      }
    ]
  },
  {
    category: "Coastal Climate Concerns",
    questions: [
      {
        q: "How do you protect furniture from West Coast salt air?",
        a: "Living on the coast presents unique challenges! We use specialized techniques including:",
        details: [
          "Marine-grade sealants and finishes",
          "Multiple protective clear coats",
          "Moisture-resistant treatments",
          "Rust-proof hardware",
          "Advice on placement and ongoing care"
        ],
        note: "Regular maintenance every 2-3 years helps coastal furniture last decades!"
      },
      {
        q: "Can you restore sun-faded outdoor furniture?",
        a: "Yes! Outdoor and garden furniture takes a beating from sun, salt, and wind. We restore outdoor pieces using weather-resistant finishes designed for South African coastal conditions. We work with teak, pine, and other outdoor wood types."
      }
    ]
  },
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I get a quote?",
        a: "Getting started is easy! Here are three ways to get your free quote:",
        details: [
          "Call or WhatsApp: (079) 375 2588 - fastest response!",
          "Email: wendydanie@gmail.com with photos",
          "Fill out our online contact form",
          "Book a free in-home assessment (for larger projects)"
        ],
        note: "Send 3-4 photos showing the overall piece and any damage/issues for the most accurate quote."
      },
      {
        q: "What information do you need for a quote?",
        a: "To provide an accurate quote, we need:",
        details: [
          "Photos of the furniture (overall and close-ups of issues)",
          "Type of furniture (chair, table, cabinet, etc.)",
          "Approximate size/dimensions",
          "Description of problems or desired services",
          "Your location for collection/delivery estimate",
          "Timeline preferences (if urgent)"
        ]
      },
      {
        q: "Do you offer free consultations?",
        a: "Yes! We offer free consultations and quotes. For complex projects or multiple pieces, we can arrange a free in-person assessment at your home to better understand the scope and provide accurate pricing."
      }
    ]
  },
  {
    category: "Quality & Guarantees",
    questions: [
      {
        q: "Do you offer a warranty or guarantee?",
        a: "Yes! We stand behind our craftsmanship with a 100% satisfaction guarantee. If there are any issues with our work within the first year, we'll make it right at no additional cost. We use premium materials designed to last for decades."
      },
      {
        q: "What makes Blooming Furniture different?",
        a: "What sets us apart:",
        details: [
          "10+ years of expert craftsmanship",
          "Specialized in coastal climate furniture care",
          "Unlimited custom color options",
          "Local to West Coast - we understand your needs",
          "Eco-friendly products and practices",
          "Satisfaction guaranteed",
          "Excellent communication throughout",
          "Passionate about bringing furniture back to life"
        ]
      },
      {
        q: "Can I see examples of your work?",
        a: "Absolutely! Check out our portfolio page to see detailed before-and-after photos of completed projects. You can also visit our workshop to see current projects in progress and speak with our craftsmen."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="min-h-screen bg-daisy-cream pt-24 pb-16">
        <Breadcrumbs
          items={[{ label: 'FAQ', href: '/faq' }]}
          className="max-w-7xl mx-auto"
        />
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Get answers to common questions about our furniture restoration services,
              pricing, process, and timeline. Can&apos;t find what you&apos;re looking for? Contact us!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+27793752588"
                className="bg-golden-center text-dark-wood px-6 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 inline-flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </a>
              <a
                href="https://wa.me/27793752588"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white-daisy text-forest-green px-6 py-3 rounded-lg font-semibold hover:bg-golden-center transition duration-300 inline-flex items-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
              <Link
                href="/contact"
                className="border-2 border-white-daisy text-white-daisy px-6 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 inline-flex items-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-8 bg-white-daisy border-b border-golden-center/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-forest-green mb-4 font-semibold">Jump to category:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {faqs.map((category, idx) => (
                <a
                  key={idx}
                  href={`#${category.category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                  className="text-sm px-4 py-2 bg-daisy-cream text-dark-wood rounded-full hover:bg-golden-center hover:text-white-daisy transition duration-300"
                >
                  {category.category}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {faqs.map((category, categoryIdx) => (
              <div
                key={categoryIdx}
                id={category.category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}
                className="mb-12 scroll-mt-24"
              >
                <h2 className="text-3xl font-bold text-dark-wood mb-6 pb-3 border-b-2 border-golden-center">
                  {category.category}
                </h2>

                <div className="space-y-4">
                  {category.questions.map((faq, faqIdx) => (
                    <details
                      key={faqIdx}
                      className="group bg-white-daisy rounded-lg shadow-md overflow-hidden"
                    >
                      <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-golden-center/10 transition duration-300">
                        <h3 className="text-lg font-semibold text-dark-wood pr-8">
                          {faq.q}
                        </h3>
                        <ChevronDown className="h-6 w-6 text-forest-green transform group-open:rotate-180 transition-transform duration-300 flex-shrink-0" />
                      </summary>

                      <div className="px-6 pb-6 text-forest-green">
                        {faq.aJsx ? (
                          <p className="mb-3">{faq.aJsx}</p>
                        ) : faq.a ? (
                          <p className="mb-3">{faq.a}</p>
                        ) : null}

                        {faq.details && (
                          <ul className="space-y-2 mb-3">
                            {faq.details.map((detail, detailIdx) => (
                              <li key={detailIdx} className="flex items-start">
                                <span className="text-golden-center mr-2 mt-1">&#8226;</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {faq.note && (
                          <p className="text-sm italic bg-golden-center/10 p-3 rounded-lg mt-3">
                            <strong>Note:</strong> {faq.note}
                          </p>
                        )}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-forest-green text-white-daisy py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl mb-8">
              We&apos;re here to help! Contact us today for personalized answers and your free consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+27793752588"
                className="bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300 inline-flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                (079) 375 2588
              </a>
              <Link
                href="/contact"
                className="border-2 border-white-daisy text-white-daisy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy hover:text-dark-wood transition duration-300"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12 bg-white-daisy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">
              Learn More About Our Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/services"
                className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300"
              >
                <h4 className="font-semibold text-forest-green mb-2">Our Services</h4>
                <p className="text-sm text-dark-wood">Explore all restoration services we offer</p>
              </Link>
              <Link
                href="/portfolio"
                className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300"
              >
                <h4 className="font-semibold text-forest-green mb-2">Portfolio</h4>
                <p className="text-sm text-dark-wood">See our before & after transformations</p>
              </Link>
              <Link
                href="/blog"
                className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300"
              >
                <h4 className="font-semibold text-forest-green mb-2">Blog & Tips</h4>
                <p className="text-sm text-dark-wood">Furniture care guides and expert advice</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
