import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: Record<string, any>;
  location?: {
    name: string;
    latitude: number;
    longitude: number;
    region?: string;
  };
}

const SEO: React.FC<SEOProps> = ({
  title = "Blooming Furniture - Expert Furniture Restoration West Coast South Africa",
  description = "Professional furniture restoration, repair, and refinishing services in West Coast, South Africa. Transform your beloved furniture with expert craftsmanship. Free quotes available.",
  keywords = "furniture restoration, furniture repair, West Coast South Africa, furniture refinishing, antique restoration, furniture makeover, Saldanha Bay, Vredenburg, Langebaan",
  image = "/blooming-furniture.png",
  url = "https://bloomingfurniture.co.za",
  type = "website",
  structuredData,
  location
}) => {
  const fullTitle = title.includes("Blooming Furniture") ? title : `${title} | Blooming Furniture`;
  const fullImageUrl = image.startsWith('http') ? image : `${url}${image}`;

  // Default location (Langebaan)
  const defaultLocation = {
    name: "Langebaan, Western Cape, South Africa",
    latitude: -33.0893,
    longitude: 18.0371,
    region: "ZA-WC"
  };

  const currentLocation = location || defaultLocation;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Blooming Furniture" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Blooming Furniture" />
      <meta property="og:locale" content="en_ZA" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content={currentLocation.region || "ZA-WC"} />
      <meta name="geo.placename" content={currentLocation.name} />
      <meta name="geo.position" content={`${currentLocation.latitude};${currentLocation.longitude}`} />
      <meta name="ICBM" content={`${currentLocation.latitude}, ${currentLocation.longitude}`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
    </Head>
  );
};

export default SEO;