import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bedroom Wardrobe White Refinishing | Traditional Armoire Transformation',
  description: 'Professional white refinishing of traditional pine wardrobes and armoires. Raised panel doors, beadboard detailing, crown molding, and generous storage transformed into bright coastal bedroom pieces perfect for cottage and Scandinavian interiors.',
  keywords: 'wardrobe refinishing, armoire restoration, bedroom storage refinishing, white wardrobe, coastal wardrobe, beadboard wardrobe, raised panel armoire, bedroom furniture refinishing, pine wardrobe painting, cottage style wardrobe',
  openGraph: {
    title: 'Bedroom Wardrobe White Refinishing - Traditional Armoire Transformation',
    description: 'Professional transformation of traditional pine wardrobes into bright coastal-style storage pieces. Features raised panels, beadboard detailing, crown molding, and crisp white finish.',
    images: ['/images/portfolio/portfolio-35.jpeg'],
    type: 'article',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Bedroom Wardrobe White Refinishing - Traditional Pine Armoire Transformation",
  "description": "Professional furniture refinishing transforming substantial bedroom storage pieces into fresh coastal-style wardrobes with raised panels, beadboard detailing, and crisp white finish.",
  "image": [
    "https://bloomingfurniture.co.za/images/portfolio/portfolio-35.jpeg",
    "https://bloomingfurniture.co.za/images/portfolio/portfolio-31.jpeg",
    "https://bloomingfurniture.co.za/images/portfolio/portfolio-32.jpeg"
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

const refinishingSteps = [
  {
    title: "Complete Surface Preparation",
    description: "Thorough sanding of all wardrobe surfaces including cabinet body, doors, frames, and interior areas. Removed existing finish to create smooth foundation for refinishing."
  },
  {
    title: "Wood Conditioning Throughout",
    description: "Applied wood conditioner to all pine surfaces ensuring even paint absorption and preventing blotchiness on these substantial storage pieces."
  },
  {
    title: "Raised Panel Door Preservation",
    description: "Carefully prepared raised panel doors maintaining architectural details, crisp edges, and dimensional character while ensuring smooth paint application."
  },
  {
    title: "Beadboard Panel Refinishing",
    description: "Refinished vertical beadboard/tongue-and-groove door panels preserving charming cottage-style detailing and texture throughout each groove."
  },
  {
    title: "Crisp White Paint Application",
    description: "Applied premium white paint to cabinet bodies, doors, frames, and all visible surfaces using professional techniques for smooth, even coverage."
  },
  {
    title: "Crown Molding Highlighting",
    description: "Carefully painted decorative crown molding and trim details, ensuring clean lines and elegant finishing touches at top edges."
  },
  {
    title: "Bottom Drawer Refinishing",
    description: "Refinished bottom drawer storage on applicable pieces including drawer fronts, sides, and hardware for cohesive appearance."
  },
  {
    title: "Interior Refinishing",
    description: "Painted interior shelving areas and hanging rod sections creating bright, fresh storage spaces that complement the exterior transformation."
  },
  {
    title: "Hardware Upgrade",
    description: "Installed clean white ceramic knobs providing simple, elegant hardware that maintains the crisp coastal aesthetic without visual distraction."
  },
  {
    title: "Multiple Protective Clear Coats",
    description: "Applied several layers of clear protective coating ensuring durability for daily bedroom use including door operation and drawer access."
  },
  {
    title: "Professional Matte Finish",
    description: "Achieved smooth, professional matte finish throughout all surfaces eliminating brush marks and creating that perfect coastal cottage look."
  }
];

export default function BedroomWardrobeWhiteRefinishing() {
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
              Bedroom Wardrobe White Refinishing
            </h1>
            <p className="text-xl text-forest-green leading-relaxed">
              Professional transformation of traditional pine wardrobes and armoires into bright coastal-style bedroom storage. Features raised panel doors, vertical beadboard detailing, crown molding, and generous storage capacity perfect for cottage and Scandinavian interiors.
            </p>
          </div>
        </header>

        {/* Final Result Images */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-serif text-dark-wood mb-8 text-center">
              Completed Transformations
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <Image
                  src="/images/portfolio/portfolio-35.jpeg"
                  alt="Finished wardrobe with raised panel double doors and crown molding" width={800} height={600}
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center text-forest-green mt-3 italic">
                  Raised panel wardrobe with crown molding detailing
                </p>
              </div>
              <div>
                <Image
                  src="/images/portfolio/portfolio-31.jpeg"
                  alt="Completed armoire with bottom drawer storage and decorative vase accent" width={800} height={600}
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center text-forest-green mt-3 italic">
                  Armoire with bottom drawer and interior shelving
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <Image
                  src="/images/portfolio/portfolio-32.jpeg"
                  alt="Refinished wardrobe featuring vertical beadboard-style panel doors" width={800} height={600}
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center text-forest-green mt-3 italic text-sm">
                  Vertical beadboard door style
                </p>
              </div>
              <div>
                <Image
                  src="/images/portfolio/portfolio-33.jpeg"
                  alt="Close-up view of beadboard door detail and white knob hardware" width={800} height={600}
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center text-forest-green mt-3 italic text-sm">
                  Beadboard detail with white ceramic knobs
                </p>
              </div>
              <div>
                <Image
                  src="/images/portfolio/portfolio-34.jpeg"
                  alt="Final installation showing crisp white raised panel doors with crown molding" width={800} height={600}
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center text-forest-green mt-3 italic text-sm">
                  Crisp raised panels with crown molding
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-daisy-cream">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-serif text-dark-wood mb-12 text-center">
              Wardrobe Features & Details
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Raised Panel Doors</h3>
                <p className="text-forest-green">
                  Classic raised panel door construction providing dimensional architectural character and timeless elegance with crisp white finish.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Beadboard Detailing</h3>
                <p className="text-forest-green">
                  Charming vertical beadboard/tongue-and-groove paneling on select doors creating cottage-style texture and visual interest.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Crown Molding</h3>
                <p className="text-forest-green">
                  Decorative crown molding trim at top edges adding elegant finishing touches and sophisticated architectural detail.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Full-Height Hanging Space</h3>
                <p className="text-forest-green">
                  Generous interior hanging rod space accommodating full-length garments, dresses, coats, and suits with ample room.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Interior Shelving</h3>
                <p className="text-forest-green">
                  Multiple interior shelves providing organized storage for folded clothing, linens, accessories, and bedroom essentials.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Bottom Drawer Storage</h3>
                <p className="text-forest-green">
                  Select pieces feature bottom drawer storage adding extra organization for smaller items, undergarments, or accessories.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">White Ceramic Hardware</h3>
                <p className="text-forest-green">
                  Clean white ceramic knobs maintaining crisp aesthetic without visual distraction, perfect for coastal cottage style.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Substantial Storage Capacity</h3>
                <p className="text-forest-green">
                  These traditional pine armoires provide generous storage perfect for bedrooms lacking built-in closet space.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Bright Coastal Finish</h3>
                <p className="text-forest-green">
                  Crisp white finish creates spacious, airy feeling ideal for Scandinavian, coastal cottage, or modern farmhouse bedrooms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Refinishing Process */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-serif text-dark-wood mb-12 text-center">
              Professional Refinishing Process
            </h2>
            <div className="space-y-8">
              {refinishingSteps.map((step, index) => (
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
              Beautiful Bedroom Storage Transformations
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-forest-green leading-relaxed mb-4">
                These professional wardrobe refinishing projects showcase how traditional pine armoires transform into bright, spacious-feeling bedroom storage solutions. The crisp white finish updates these substantial pieces into fresh coastal or cottage-style wardrobes that brighten any bedroom environment.
              </p>
              <p className="text-forest-green leading-relaxed mb-4">
                Whether featuring classic raised panel doors or charming vertical beadboard detailing, each piece showcases clean lines and architectural character. The refinishing process carefully preserves dimensional door details, crown molding trim, and interior functionality while creating that perfect bright, airy aesthetic.
              </p>
              <p className="text-forest-green leading-relaxed mb-4">
                The substantial storage capacity makes these wardrobes incredibly practical for modern bedroom organization. Full-height hanging space accommodates dresses, suits, and coats, while interior shelving provides organized storage for folded items and accessories. Select pieces feature bottom drawer storage adding even more organizational versatility.
              </p>
              <p className="text-forest-green leading-relaxed">
                Crown molding adds elegant finishing touches while simple white ceramic knob hardware maintains the clean, uncluttered aesthetic. These refinished wardrobes prove perfect for bedrooms lacking built-in closet space, guest rooms, or anyone seeking that bright, airy Scandinavian or coastal cottage bedroom style with practical, generous storage solutions that combine beauty with everyday functionality.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Excellence */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-serif text-dark-wood mb-8 text-center">
              Technical Excellence in Wardrobe Refinishing
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-dark-wood mb-4">
                  Architectural Detail Preservation
                </h3>
                <p className="text-forest-green leading-relaxed mb-6">
                  Successfully maintaining raised panel dimensions, beadboard groove definition, and crown molding profiles requires careful preparation techniques. Our refinishing process preserves these architectural elements while achieving smooth, even paint coverage that enhances rather than obscures the beautiful detailing.
                </p>
                <h3 className="text-xl font-semibold text-dark-wood mb-4">
                  Interior & Exterior Coordination
                </h3>
                <p className="text-forest-green leading-relaxed">
                  Complete refinishing extends to interior shelving and hanging areas creating cohesive, bright storage spaces. This comprehensive approach ensures the transformation is beautiful both when doors are closed and opened, with interior surfaces as fresh and clean as exterior finishes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark-wood mb-4">
                  Durability for Daily Use
                </h3>
                <p className="text-forest-green leading-relaxed mb-6">
                  Wardrobes experience constant door operation, drawer access, and clothing contact requiring exceptional finish durability. Multiple protective clear coat layers ensure these refinished pieces withstand daily bedroom use while maintaining their beautiful appearance for years to come.
                </p>
                <h3 className="text-xl font-semibold text-dark-wood mb-4">
                  Professional Smooth Finish
                </h3>
                <p className="text-forest-green leading-relaxed">
                  Achieving flawless matte finish on large wardrobe surfaces, detailed door panels, and trim elements requires expert technique and attention to detail. The result is smooth, brush-mark-free surfaces with consistent coverage creating that perfect coastal cottage aesthetic throughout these substantial storage pieces.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-daisy-cream">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-serif text-dark-wood mb-6">
              Transform Your Bedroom Storage
            </h2>
            <p className="text-xl text-forest-green mb-8">
              Have traditional wardrobes or armoires that need updating? We specialize in transforming bedroom storage furniture into bright, beautiful coastal-style pieces.
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
