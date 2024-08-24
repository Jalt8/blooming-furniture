"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { CldImage } from 'next-cloudinary';

// Types
type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  images: string[];
  category: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Vintage Display Cabinet Revival",
    description:
    "Restoring elegance to this classic mahogany china cabinet, showcasing its timeless charm and craftsmanship.",
    images: ["image_3_pcofas", "image_2_wiwxtl", "image_1_thfxte"],
    category: "Vintage",
  },
  {
    id: 2,
    title: "Modern Farmhouse Dining Set Makeover",
    description:
    "Transforming a rustic picnic table into an elegant indoor dining solution. This whitewashed table and bench combo now brings charm and versatility to any dining space.",
    images: [
      "image_7_rrtjd8",
      "image_6_klvx7a",
      "image_5_xlx6ku",
      "image_4_cxhk5f",
    ],
    category: "Modern",
  },
  {
    id: 3,
    title: "Dutch-Inspired Antique Washstand Revival",
    description: "Reimagining a classic washstand with a charming Dutch twist. This beautifully restored pine piece features intricate blue and white tile work, a mirror with ornate framing, and multi-functional storage, perfect for adding character to any space.",
    images: ["image_11_zj1j1w", "image_9_q1q11y"],
    category: "Antique",
  },
  {
    id: 4,
    title: "Artisanal Bakery Display Makeover",
    description: "Transforming a standard store bakery into an inviting artisanal experience. Hand-drawn chalkboard illustrations and playful typography bring warmth and charm to the bread aisle, enticing customers with visual stories of freshly baked goods.",
    images: [
      "image_17_oy9tau",
      "image_18_jommum",
      "image_19_oxwdvb",
      "image_20_ta4kfd",
      "image_21_vzuxad",
      "image_22_tjhir0",
      "image_23_v36gyf",
      "image_24_x5yiru",
      "image_25_fwsr3o",
      "image_26_pwtzix",
      "image_27_i8stxy",
      "image_28_xzvjum",
      "image_29_lh1svw",
      "image_30_taajtu",
    ],
    category: "Art Deco",
  },
  {
    id: 5,
    title: "Charming Cottage Kitchen Refresh",
    description: "Transforming a dated kitchen into a cozy, mint-green haven. This renovation breathes new life into the space with painted cabinets, polished wood countertops, and thoughtful details, creating a perfect blend of rustic charm and modern functionality.",
    images: ["image_31_yf0wbz", "image_32_cosavr", "image_33_qcm9yw"],
    category: "Vintage",
  },
  {
    id: 6,
    title: "Rustic Windmill Barn Door Revival",
    description: "Transforming a classic barn door into a captivating statement piece. This restored door showcases a weathered blue and white finish, featuring a clever windmill blade design and a pop of red, perfect for adding rustic charm to farmhouse-inspired interiors.",
    images: ["image_34_egq5wj"],
    category: "Rustic",
  },
  {
    id: 7,
    title: "Vintage Sideboard Revival",
    description:
    "Breathing new life into a classic piece. This elegant sideboard has been transformed with a crisp white finish, preserving its ornate details and adding modern charm to its timeless design.",
    images: [
      "image_39_y0xoeu",
      "image_40_igwj0w",
      "image_41_w5fagg",
      "image_42_jq6mmg",
      "image_43_f5ikfu",
      "image_44_pzqbgm",
    ],
    category: "Vintage",
  },
];

const PortfolioPage: React.FC = () => {
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

export default PortfolioPage;
