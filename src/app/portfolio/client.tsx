"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';

// Types
type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  images: string[];
  category: string;
  projectUrl?: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 3,
    title: "Dutch-Inspired Antique Washstand Revival",
    description: "Reimagining a classic washstand with a charming Dutch twist. This beautifully restored pine piece features intricate blue and white tile work, a mirror with ornate framing, and multi-functional storage, perfect for adding character to any space.",
    images: ["image_11.jpeg", "image_9.jpeg"],
    category: "Antique",
    projectUrl: "/portfolio/antique-washstand-restoration",
  },
  {
    id: 4,
    title: "Artisanal Bakery Display Makeover",
    description: "Transforming a standard store bakery into an inviting artisanal experience. Hand-drawn chalkboard illustrations and playful typography bring warmth and charm to the bread aisle, enticing customers with visual stories of freshly baked goods.",
    images: [
      "image_17.jpeg",
      "image_18.jpeg",
      "image_19.jpeg",
      "image_20.jpeg",
      "image_21.jpeg",
      "image_22.jpeg",
      "image_23.jpeg",
      "image_24.jpeg",
      "image_25.jpeg",
      "image_26.jpeg",
      "image_27.jpeg",
      "image_28.jpeg",
      "image_29.jpeg",
      "image_30.jpeg",
    ],
    category: "Art Deco",
    projectUrl: "/portfolio/grocery-store-signage",
  },
  {
    id: 5,
    title: "Charming Cottage Kitchen Refresh",
    description: "Transforming a dated kitchen into a cozy, mint-green haven. This renovation breathes new life into the space with painted cabinets, polished wood countertops, and thoughtful details, creating a perfect blend of rustic charm and modern functionality.",
    images: ["image_31.jpeg", "image_32.jpeg", "image_33.jpeg"],
    category: "Rustic",
    projectUrl: "/portfolio/cottage-kitchen-mint-green-refresh",
  },
  {
    id: 7,
    title: "Vintage Sideboard Revival",
    description:
    "Breathing new life into a classic piece. This elegant sideboard has been transformed with a crisp white finish, preserving its ornate details and adding modern charm to its timeless design.",
    images: [
      "image_41.jpeg",
      "image_39.jpeg",
      "image_38.jpeg",
      "image_42.jpeg",
      "image_43.jpeg",
      "image_44.jpeg",
      "image_40.jpeg",
      "image_8.jpeg",
    ],
    category: "Vintage",
    projectUrl: "/portfolio/vintage-sideboard-restoration",
  },
  {
    id: 8,
    title: "Church Kitchen Cabinet Refresh",
    description: "Revitalized the church kitchen with a modern touch. We repainted and added clear sealer to the existing cupboards, transforming them from natural wood into sleek, charcoal-gray units that complement the industrial-style space.",
    images: ["cp5w3n.jpeg", "yjhunm.jpeg", "d7mc0v.jpeg", "xi0gy3.jpeg", "qs3dco.jpeg", "eii8i2.jpeg", "lfcviy.jpeg", "kvreig.jpeg"],
    category: "Modern",
    projectUrl: "/portfolio/church-kitchen-cabinet-refresh",
  },
  {
    id: 11,
    title: "Coastal-Chic Hope Chest",
    description: "Complete lime-wash transformation of a dark, water-stained cedar trunk into a breezy coastal statement piece. This project showcases cerusing techniques, brass hardware restoration, and the perfect weathered sun-kissed finish for seaside living.",
    images: ["Lime-Wash1.jpg", "Lime-Wash2.jpg", "Lime-Wash4.jpg", "Lime-Wash6.jpg", "Lime-Wash7.jpg", "Lime-Wash3.jpg", "Lime-Wash5.jpg"],
    category: "Modern",
    projectUrl: "/portfolio/coastal-chic-hope-chest",
  },
  {
    id: 12,
    title: "Vintage Office Desk Transformation",
    description: "Dramatic transformation of a severely faded pinkish-mauve office desk into a luxurious deep mahogany statement piece. This restoration showcases complete finish removal, water damage repair, interior drawer restoration, and stunning high-gloss protective finish.",
    images: ["chest10.jpeg", "Chest1.jpg", "Chest2.jpg", "Chest4.jpg", "Chest7.jpg", "chest9.jpeg"],
    category: "Vintage",
    projectUrl: "/portfolio/vintage-office-desk-restoration",
  },
  {
    id: 13,
    title: "Modern Dining Table Refinishing",
    description: "Stunning transformation of a traditional dark mahogany dining table into a contemporary gray showpiece. Expert refinishing with translucent whitewash finish preserving beautiful wood grain while achieving modern aesthetic perfect for contemporary interiors.",
    images: ["portfolio-1.jpeg", "portfolio-2.jpeg", "portfolio-3.jpeg", "portfolio-4.jpeg", "portfolio-5.jpeg"],
    category: "Modern",
    projectUrl: "/portfolio/modern-dining-table-refinishing",
  },
  {
    id: 14,
    title: "Antique Display Cabinet Restoration",
    description: "Complete restoration of severely deteriorated antique display cabinet from disassembled and damaged to showroom mahogany beauty. Expert refinishing with glass restoration, hardware polishing, and precision reassembly creating elegant centerpiece.",
    images: ["image_2.jpeg", "image_1.jpeg", "image_3.jpeg"],
    category: "Antique",
    projectUrl: "/portfolio/antique-display-cabinet-restoration",
  },
  {
    id: 15,
    title: "Coastal Farmhouse Dining Set",
    description: "Beautiful X-leg farmhouse table and bench refinishing with custom two-tone finish. Soft whitewash tops paired with crisp white bases create perfect modern coastal aesthetic ideal for Scandinavian and minimalist interiors.",
    images: ["image_7.jpeg", "image_4.jpeg", "image_5.jpeg", "image_6.jpeg"],
    category: "Modern",
    projectUrl: "/portfolio/farmhouse-dining-set-refinishing",
  },
  {
    id: 16,
    title: "Classic Buffet Whitewash Refinishing",
    description: "Elegant transformation of traditional buffet from heavy dark finish to sophisticated coastal-contemporary whitewash. Features raised panel doors, fluted pilasters, decorative rosettes, and modern black hardware creating refined modern aesthetic with classic architectural charm.",
    images: ["portfolio-7.jpeg", "portfolio-9.jpeg", "portfolio-8.jpeg", "portfolio-6.jpeg"],
    category: "Vintage",
    projectUrl: "/portfolio/classic-buffet-whitewash",
  },
  {
    id: 17,
    title: "Modern TV Stand Two-Tone Refinishing",
    description: "Spectacular custom two-tone transformation of modern entertainment unit. Sophisticated blue-gray body paired with warm natural wood drawer fronts and brushed nickel hardware creates designer-quality media console perfect for modern, mid-century, or Scandinavian interiors.",
    images: ["portfolio-11.jpeg", "portfolio-12.jpeg", "portfolio-10.jpeg"],
    category: "Modern",
    projectUrl: "/portfolio/modern-tv-stand-refinishing",
  },
  {
    id: 18,
    title: "Large Dining Table Natural Wood Restoration",
    description: "Breathtaking transformation revealing spectacular natural wood grain patterns hidden beneath heavy dark finish. Rich honey, amber, and walnut tones flow across surface creating butcher block-style organic beauty perfect for farmhouse, modern organic, or Scandinavian homes.",
    images: ["portfolio-13.jpeg", "portfolio-14.jpeg"],
    category: "Rustic",
    projectUrl: "/portfolio/dining-table-natural-restoration",
  },
  {
    id: 19,
    title: "Victorian Washstand Complete Restoration",
    description: "Magnificent Victorian-era washstand with elaborate carved scroll pediment, decorative finials, marble countertop, and ornate mirror frame. Complete disassembly and meticulous restoration in rich mahogany finish showcasing finest Victorian craftsmanship perfect for traditional or vintage-inspired interiors.",
    images: ["portfolio-18.jpeg", "portfolio-15.jpeg", "portfolio-16.jpeg", "portfolio-17.jpeg"],
    category: "Antique",
    projectUrl: "/portfolio/victorian-washstand-restoration",
  },
  {
    id: 20,
    title: "Coastal Blue Outdoor Daybed Restoration",
    description: "Stunning transformation of severely weathered outdoor pine daybed into vibrant coastal resort-style piece. Sophisticated turquoise blue frame contrasts beautifully with natural wood slats, protected with UV-resistant outdoor-grade finish perfect for patios, pool areas, and Mediterranean-inspired gardens.",
    images: ["portfolio-21.jpeg", "portfolio-22.jpeg", "sunbed1.jpg", "sunbed3.jpg", "sunbed5.jpg", "sunbed7.jpg"],
    category: "Modern",
    projectUrl: "/portfolio/coastal-blue-daybed-restoration",
  },
  {
    id: 21,
    title: "Traditional Sideboard Whitewash Refinishing",
    description: "Classic buffet with glass display section transformed from heavy traditional to light cottage elegance. Soft whitewashed finish showcases raised panel doors, curved top edge, scalloped base, and vintage brass hardware creating perfect French country or farmhouse aesthetic with generous storage.",
    images: ["portfolio-24.jpeg", "portfolio-23.jpeg"],
    category: "Vintage",
    projectUrl: "/portfolio/traditional-sideboard-whitewash",
  },
  {
    id: 22,
    title: "Complete Bedroom Set Coastal White Refinishing",
    description: "Comprehensive 8+ piece bedroom suite transformation with coordinated crisp white finish. Includes bed frame with slatted headboard, nightstands, dresser, tall chest, vanity desk with mirror, wardrobe, and storage creating cohesive coastal sanctuary perfect for beach houses or fresh bedroom retreats.",
    images: ["portfolio-26.jpeg", "portfolio-38.jpeg", "portfolio-36.jpeg", "portfolio-37.jpeg", "portfolio-27.jpeg", "portfolio-25.jpeg"],
    category: "Modern",
    projectUrl: "/portfolio/complete-bedroom-set-coastal-white",
  },
  {
    id: 23,
    title: "Traditional TV Console Whitewash Refinishing",
    description: "Low-profile media console transformed from traditional dark wood to fresh coastal whitewash. Features open shelving for media equipment, decorative molding details, and elegant scalloped base perfect for modern living rooms with wall-mounted TVs.",
    images: ["portfolio-29.jpeg", "portfolio-28.jpeg", "portfolio-30.jpeg"],
    category: "Vintage",
    projectUrl: "/portfolio/tv-console-whitewash-refinishing",
  },
  {
    id: 24,
    title: "Bedroom Wardrobe White Refinishing",
    description: "Traditional pine wardrobes and armoires transformed into bright coastal-style bedroom storage. Features raised panel doors, vertical beadboard detailing, crown molding, and generous storage capacity perfect for cottage and Scandinavian interiors.",
    images: ["portfolio-35.jpeg", "portfolio-31.jpeg", "portfolio-32.jpeg", "portfolio-33.jpeg", "portfolio-34.jpeg"],
    category: "Modern",
    projectUrl: "/portfolio/bedroom-wardrobe-white-refinishing",
  },
  {
    id: 25,
    title: "Vintage Bar Cart Whitewash Refinishing",
    description: "Elegant vintage serving cart transformed into sophisticated coastal-chic bar trolley. Features decorative claw feet, raised gallery edges, tiered open shelving, and rolling casters perfect for modern entertaining in coastal or French country interiors.",
    images: ["portfolio-40.jpeg", "portfolio-41.jpeg", "portfolio-39.jpeg"],
    category: "Vintage",
    projectUrl: "/portfolio/vintage-bar-cart-whitewash-refinishing",
  },
];

const PortfolioClient: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);

  const categories = [
    "All",
    ...Array.from(new Set(portfolioItems.map((item) => item.category))),
  ];

  const filteredItems =
    filter && filter !== "All"
      ? portfolioItems.filter((item) => item.category === filter)
      : portfolioItems;

  return (
    <div className="min-h-screen bg-white-daisy py-16 px-4 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[{ label: 'Portfolio', href: '/portfolio' }]}
        className="max-w-7xl mx-auto"
      />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-dark-wood text-center mb-12">
          Our Restoration Portfolio
        </h1>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  category === (filter || "All")
                    ? "bg-forest-green text-white-daisy"
                    : "bg-golden-center text-dark-wood hover:bg-daisy-cream"
                }`}
                onClick={() => setFilter(category === "All" ? null : category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProjectCard
                  title={item.title}
                  description={item.description}
                  images={item.images}
                  category={item.category}
                  projectUrl={item.projectUrl}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <p className="text-center text-dark-wood mt-12">
            No items found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default PortfolioClient;