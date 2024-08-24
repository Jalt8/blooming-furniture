import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  images: string[];
  category: string;
}

const PaintingShowcase: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Vintage Display Cabinet Revival",
      description:
        "Restoring elegance to this classic mahogany china cabinet, showcasing its timeless charm and craftsmanship.",
      images: ["image_3._pcofas", "image_2_wiwxtl", "image_1_thfxte"],
      category: "Cabinet Restoration"
    },
    {
      title: "Modern Farmhouse Dining Set Makeover",
      description:
        "Transforming a rustic picnic table into an elegant indoor dining solution. This whitewashed table and bench combo now brings charm and versatility to any dining space.",
      images: [
        "image_7_rrtjd8",
        "image_5_xlx6ku",
        "image_6_klvx7a",
        "image_4_cxhk5f",
      ],
      category: "Dining Set Transformation"
    },
    {
      title: "Vintage Sideboard Revival",
      description:
        "Breathing new life into a classic piece. This elegant sideboard has been transformed with a crisp white finish, preserving its ornate details and adding modern charm to its timeless design.",
      images: ["image_41_w5fagg", "image_40_igwj0w"],
      category: "Sideboard Makeover"
    },
  ];

  return (
    <section className="bg-white-daisy py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-dark-wood">
          Transformation Showcase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              images={project.images}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaintingShowcase;