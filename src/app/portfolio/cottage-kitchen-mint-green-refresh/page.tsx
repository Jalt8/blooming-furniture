import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cottage Kitchen Mint Green Refresh | Rustic Cabinet Refinishing | Blooming Furniture',
  description: 'Professional cottage kitchen transformation with soft mint-green cabinets, polished wood countertops, and custom open shelving. Vintage rustic charm meets modern functionality in this cozy kitchen renovation.',
  keywords: 'cottage kitchen renovation, mint green cabinets, rustic kitchen refinishing, wood countertop restoration, cottage style kitchen, vintage kitchen cabinets, open shelving, farmhouse kitchen, painted kitchen cabinets',
  openGraph: {
    title: 'Cottage Kitchen Mint Green Refresh - Rustic Charm with Modern Functionality',
    description: 'Professional transformation creating cozy cottage kitchen with soft mint-green cabinets, polished wood countertops, and thoughtful rustic details.',
    images: ['/images/portfolio/image_31.jpeg'],
    type: 'article',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cottage Kitchen Mint Green Refresh - Rustic Cabinet Refinishing & Renovation",
  "description": "Professional cottage kitchen transformation with soft mint-green cabinet refinishing, wood countertop restoration, and custom open shelving creating perfect blend of rustic charm and modern functionality.",
  "image": [
    "https://bloomingfurniture.co.za/images/portfolio/image_31.jpeg",
    "https://bloomingfurniture.co.za/images/portfolio/image_32.jpeg",
    "https://bloomingfurniture.co.za/images/portfolio/image_33.jpeg"
  ],
  "author": {
    "@type": "Organization",
    "name": "Blooming Furniture"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Blooming Furniture",
    "logo": {
      "@type": "ImageObject",
      "url": "https://bloomingfurniture.co.za/logo.png"
    }
  }
};

const renovationSteps = [
  {
    title: "Kitchen Assessment & Planning",
    description: "Evaluated existing kitchen layout, cabinet condition, and countertop surfaces to plan comprehensive cottage-style transformation preserving rustic character while updating functionality."
  },
  {
    title: "Cabinet Surface Preparation",
    description: "Thoroughly cleaned and sanded all cabinet surfaces including doors, drawer fronts, and frames ensuring optimal paint adhesion for long-lasting cottage kitchen results."
  },
  {
    title: "Wood Conditioning",
    description: "Applied wood conditioner to cabinet surfaces ensuring even absorption of mint-green paint and preventing blotchiness across the entire kitchen installation."
  },
  {
    title: "Soft Mint-Green Paint Application",
    description: "Applied beautiful soft mint-green paint creating that signature cottage aesthetic - fresh, calming, and perfectly balanced between vintage charm and modern style."
  },
  {
    title: "Multiple Protective Coats",
    description: "Built up multiple coats of premium mint-green paint with durable protective clear coating ensuring cabinets withstand daily kitchen use while maintaining beautiful color."
  },
  {
    title: "Classic Hardware Installation",
    description: "Updated cabinet hardware with classic knobs that complement the cottage aesthetic while providing functional, comfortable grip for daily use."
  },
  {
    title: "Wood Countertop Restoration",
    description: "Professionally restored and polished wood countertops revealing natural beauty and character while preparing surfaces for protective sealing."
  },
  {
    title: "Countertop Sealing for Durability",
    description: "Applied professional-grade sealer to wood countertops providing essential protection against moisture, staining, and daily kitchen activities ensuring lasting beauty."
  },
  {
    title: "Custom Open Shelving Installation",
    description: "Designed and installed custom open shelving that complements the cottage aesthetic, providing display space for dishes, cookware, and decorative accessories."
  },
  {
    title: "Thoughtful Detail Finishing",
    description: "Added thoughtful cottage-style details throughout creating cohesive rustic charm while ensuring every element balances vintage character with modern functionality."
  }
];

export default function CottageKitchenMintGreenRefresh() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-white-daisy">
        {/* Header */}
        <header className="bg-gradient-to-b from-daisy-cream to-white-daisy py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Link
              href="/portfolio"
              className="text-forest-green hover:text-dark-wood mb-6 inline-block"
            >
              ← Back to Portfolio
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif text-dark-wood mb-6">
              Charming Cottage Kitchen Refresh
            </h1>
            <p className="text-xl text-forest-green leading-relaxed">
              Professional cottage kitchen transformation creating cozy mint-green haven. Comprehensive renovation with painted cabinets, polished wood countertops, custom open shelving, and thoughtful details creating perfect blend of rustic charm and modern functionality.
            </p>
          </div>
        </header>

        {/* Completed Kitchen Images */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-serif text-dark-wood mb-8 text-center">
              Cozy Cottage Kitchen Transformation
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <img
                  src="/images/portfolio/image_31.jpeg"
                  alt="Cottage kitchen with soft mint-green cabinets and wood countertops"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center text-forest-green mt-3 italic">
                  Mint-green cabinets with polished wood countertops
                </p>
              </div>
              <div>
                <img
                  src="/images/portfolio/image_32.jpeg"
                  alt="Charming cottage kitchen showing custom open shelving and rustic details"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center text-forest-green mt-3 italic">
                  Custom open shelving and cottage charm
                </p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto">
              <img
                src="/images/portfolio/image_33.jpeg"
                alt="Complete cottage kitchen view with mint cabinets and wood details"
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-center text-forest-green mt-3 italic">
                Warm, inviting cottage kitchen transformation
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-daisy-cream">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-serif text-dark-wood mb-12 text-center">
              Kitchen Features & Details
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Soft Mint-Green Cabinets</h3>
                <p className="text-forest-green">
                  Beautiful soft mint-green paint creating signature cottage aesthetic - fresh, calming, and perfectly balanced between vintage charm and contemporary style.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Polished Wood Countertops</h3>
                <p className="text-forest-green">
                  Professionally restored and sealed wood countertops showcasing natural grain beauty while providing durable, functional work surfaces.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Custom Open Shelving</h3>
                <p className="text-forest-green">
                  Thoughtfully designed open shelving providing display space for dishes, cookware, and cottage-style decorative accessories.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Classic Hardware</h3>
                <p className="text-forest-green">
                  Updated cabinet knobs complementing cottage aesthetic with classic styling that feels timeless and comfortable for daily use.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Rustic Character Preservation</h3>
                <p className="text-forest-green">
                  Transformation maintains home's authentic rustic character while updating functionality and creating fresh, modern livability.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Durable Protective Coating</h3>
                <p className="text-forest-green">
                  Professional protective coating on cabinets and countertops ensuring beautiful appearance withstands daily cooking, cleaning, and kitchen activities.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Warm & Inviting Atmosphere</h3>
                <p className="text-forest-green">
                  Color palette and thoughtful details create welcoming kitchen environment perfect for family gatherings, cooking, and everyday living.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Vintage-Modern Balance</h3>
                <p className="text-forest-green">
                  Perfect blend of cottage charm aesthetics with modern functionality and durability meeting contemporary lifestyle needs.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Thoughtful Design Details</h3>
                <p className="text-forest-green">
                  Careful attention to cottage-style details throughout creating cohesive, charming environment that feels authentic and intentional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Renovation Process */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-serif text-dark-wood mb-12 text-center">
              Professional Renovation Process
            </h2>
            <div className="space-y-8">
              {renovationSteps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-forest-green text-white-daisy rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark-wood mb-2">
                      {step.title}
                    </h3>
                    <p className="text-forest-green leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Result Description */}
        <section className="py-16 px-4 bg-golden-center">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-serif text-dark-wood mb-6 text-center">
              A Cozy Cottage Kitchen Haven
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-forest-green leading-relaxed mb-4">
                This cottage kitchen transformation showcases how thoughtful renovation can breathe new life into dated spaces while preserving authentic rustic character. The soft mint-green cabinet finish creates that signature cottage aesthetic - fresh, calming, and perfectly balanced between vintage charm and modern style.
              </p>
              <p className="text-forest-green leading-relaxed mb-4">
                The color choice proves particularly successful in cottage kitchens, evoking feelings of vintage farmhouses and country homes while maintaining enough contemporary appeal to feel current and livable. This mint-green tone brings warmth without darkness, creating an inviting atmosphere that makes the kitchen feel larger and brighter.
              </p>
              <p className="text-forest-green leading-relaxed mb-4">
                Wood countertop restoration adds essential natural warmth and texture contrasting beautifully with the painted cabinets. The professional polishing and sealing process reveals the wood's natural grain patterns and character while providing practical durability for food preparation, cooking activities, and daily kitchen use.
              </p>
              <p className="text-forest-green leading-relaxed mb-4">
                Custom open shelving installation complements the cottage aesthetic perfectly, providing functional display space for everyday dishes, vintage cookware, and charming decorative accessories. This design choice adds visual interest while maintaining that authentic cottage-style character where functional items become part of the decor.
              </p>
              <p className="text-forest-green leading-relaxed mb-4">
                Classic hardware updates complete the transformation with knobs that feel timeless and appropriate to the cottage style. These thoughtful details demonstrate how small elements contribute to overall cohesive design creating space that feels intentional rather than assembled.
              </p>
              <p className="text-forest-green leading-relaxed">
                The completed kitchen achieves that perfect balance cottage renovations strive for - preserving rustic character and vintage charm while updating functionality and durability for modern living. The result is a warm, inviting kitchen that serves as the heart of the home, perfect for family gatherings, daily cooking, and creating memories in a space that beautifully blends the best of vintage cottage aesthetics with contemporary practicality.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Excellence */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-serif text-dark-wood mb-8 text-center">
              Technical Excellence in Cottage Kitchen Renovation
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-dark-wood mb-4">
                  Color Selection Expertise
                </h3>
                <p className="text-forest-green leading-relaxed mb-6">
                  Selecting the perfect mint-green tone requires understanding undertones, lighting conditions, and how color interacts with existing wood elements and cottage architecture. This soft mint-green achieves that ideal cottage aesthetic - fresh and calming without appearing too bold or overpowering the rustic character.
                </p>
                <h3 className="text-xl font-semibold text-dark-wood mb-4">
                  Wood Countertop Restoration
                </h3>
                <p className="text-forest-green leading-relaxed">
                  Restoring and sealing wood countertops requires specialized knowledge of wood species, grain patterns, and appropriate sealing products that provide protection without altering natural beauty. Professional restoration reveals the wood's character while ensuring practical durability for kitchen work surfaces.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark-wood mb-4">
                  Cabinet Finish Durability
                </h3>
                <p className="text-forest-green leading-relaxed mb-6">
                  Kitchen cabinets experience constant handling, potential moisture exposure, cooking splatter, and cleaning requiring exceptional finish durability. Multiple protective coats ensure these mint-green cabinets maintain their beautiful appearance through years of daily family kitchen use.
                </p>
                <h3 className="text-xl font-semibold text-dark-wood mb-4">
                  Custom Shelving Integration
                </h3>
                <p className="text-forest-green leading-relaxed">
                  Installing custom open shelving that feels authentic to cottage style while providing practical functionality requires careful planning, precise measurements, and understanding of both aesthetic design and structural requirements. The result is shelving that appears original to the space rather than added as an afterthought.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Inspiration */}
        <section className="py-16 px-4 bg-daisy-cream">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-serif text-dark-wood mb-8 text-center">
              Cottage Kitchen Styling Ideas
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white-daisy p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-dark-wood mb-4">
                  Complementary Color Palette
                </h3>
                <ul className="space-y-3 text-forest-green">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>White or cream walls creating fresh, bright backdrop for mint-green cabinets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Natural wood tones in countertops, floors, and open shelving adding warmth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Soft pastels in accessories like dish towels, pottery, and decorative items</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Vintage brass or bronze fixtures providing warm metallic accents</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-dark-wood mb-4">
                  Cottage-Style Accessories
                </h3>
                <ul className="space-y-3 text-forest-green">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Vintage pottery, crockery, and enamelware displayed on open shelving</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Fresh flowers or herbs in mason jars adding natural beauty and fragrance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Farmhouse sink with classic faucet completing the cottage aesthetic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Woven baskets, wooden cutting boards, and linen textiles adding rustic texture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-serif text-dark-wood mb-6">
              Transform Your Cottage Kitchen
            </h2>
            <p className="text-xl text-forest-green mb-8">
              Have a dated kitchen that needs cottage-style charm? We specialize in transforming kitchens with beautiful painted cabinets, wood countertop restoration, and rustic details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-forest-green text-white-daisy rounded-full text-lg font-semibold hover:bg-dark-wood transition-colors duration-300"
              >
                Get Free Quote
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-3 bg-golden-center text-dark-wood rounded-full text-lg font-semibold hover:bg-white-daisy transition-colors duration-300"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
