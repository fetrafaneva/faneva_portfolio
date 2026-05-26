/**
 * @copyright 2025 ShiningPrism (Fetra Faneva)
 * @license Apache-2.0
 */

import { ArrowUpRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-1.jpg",
    title: "Full Stack Music App",
    description:
      "Application musicale complète avec authentification, API et architecture MVC moderne.",
    tags: ["API", "MVC", "Development"],
  },
  {
    imgSrc: "/images/project-2.jpg",
    title: "Free Stock Photo App",
    description:
      "Plateforme SPA performante pour explorer et télécharger des images libres.",
    tags: ["API", "SPA"],
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "Recipe App",
    description:
      "Application de recettes intelligente connectée à une API externe.",
    tags: ["API", "Development"],
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "Real Estate Website",
    description: "Site immobilier moderne avec expérience utilisateur premium.",
    tags: ["Web Design", "Development"],
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "eCommerce Website",
    description:
      "Plateforme eCommerce responsive avec interface élégante et rapide.",
    tags: ["eCommerce", "Development"],
  },
  {
    imgSrc: "/images/project-6.jpg",
    title: "Personal Portfolio",
    description: "Portfolio moderne orienté UI/UX et développement frontend.",
    tags: ["UI/UX", "Development"],
  },
];

/* ================= DESKTOP HOVER CARD ================= */

const HoverCard = ({ imgSrc, title, description, tags }) => {
  return (
    <div
      className="
        group relative flex-grow w-56 h-[420px]
        overflow-hidden rounded-3xl
        transition-all duration-500 ease-out
        hover:w-full
        border border-white/10
        bg-gradient-to-b from-white/5 to-white/[0.02]
        shadow-lg hover:shadow-2xl
      "
    >
      {/* IMAGE */}
      <img
        src={imgSrc}
        alt={title}
        className="
          absolute inset-0 h-full w-full object-cover object-center
          transition-transform duration-700
          group-hover:scale-110
        "
      />

      {/* OVERLAY */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black via-black/50 to-transparent
        "
      />

      {/* CONTENT */}
      <div
        className="
          absolute inset-0 z-10
          flex flex-col justify-end
          p-7
          translate-y-6
          opacity-0
          group-hover:translate-y-0
          group-hover:opacity-100
          transition-all duration-500
        "
      >
        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="
                px-3 py-1 rounded-full
                text-xs font-medium
                bg-white/15 backdrop-blur-md
                border border-white/10
                text-white
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* TITLE */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>

            <p className="text-sm text-zinc-300 mt-2 max-w-sm leading-relaxed">
              {description}
            </p>
          </div>

          <div
            className="
              min-w-12 h-12 rounded-full
              bg-white text-black
              flex items-center justify-center
              group-hover:rotate-45
              transition-transform duration-300
            "
          >
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>

      {/* SMALL TITLE DEFAULT */}
      <div
        className="
          absolute bottom-0 left-0 right-0 z-[5]
          p-6
          group-hover:opacity-0
          transition-opacity duration-300
        "
      >
        <h3 className="text-white text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

/* ================= MAIN COMPONENT ================= */

const Work = () => {
  return (
    <section
      id="design"
      className="
        bg-primary section relative overflow-hidden
      "
    >
      {/* BACKGROUND EFFECT */}
      <div
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[700px] h-[700px]
          bg-purple-500/10 blur-[120px]
          rounded-full
          pointer-events-none
        "
      />

      <div className="container relative z-10">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="headline-2 mb-4">My Design Work</h2>
        </div>

        {/* ================= MOBILE ================= */}

        <div
          className="
            grid gap-x-4 gap-y-5
            grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]
            md:hidden
          "
        >
          {works.map((work, i) => (
            <ProjectCard
              key={i}
              imgSrc={work.imgSrc}
              title={work.title}
              tags={work.tags}
            />
          ))}
        </div>

        {/* ================= DESKTOP ================= */}

        <div className="hidden md:block space-y-8">
          {/* ROW 1 */}
          <div className="flex items-center gap-6 h-[420px] max-w-7xl mx-auto">
            {works.slice(0, 3).map((work, i) => (
              <HoverCard key={i} {...work} />
            ))}
          </div>

          {/* ROW 2 */}
          <div className="flex items-center gap-6 h-[420px] max-w-7xl mx-auto">
            {works.slice(3, 6).map((work, i) => (
              <HoverCard key={i} {...work} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
