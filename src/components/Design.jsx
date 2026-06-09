import { ArrowUpRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

const works = [
  {
    imgSrc: "/images/desing1.png",
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

const HoverCard = ({ imgSrc, title, description, tags }) => {
  return (
    <div
      className="
        group relative flex-grow w-56 h-[420px]
        overflow-hidden rounded-3xl
        border border-white/10
        bg-gradient-to-b from-white/5 to-white/[0.02]
        transition-all duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:w-full hover:-translate-y-2
        hover:shadow-[0_25px_80px_rgba(0,0,0,0.45)]
        transform-gpu will-change-transform
      "
    >
      <img
        src={imgSrc}
        alt={title}
        className="
          absolute inset-0 h-full w-full object-cover object-center
          scale-100 group-hover:scale-110
          group-hover:rotate-[1deg]
          transition-transform duration-[1400ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          will-change-transform
        "
      />

      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black/90 via-black/40 to-black/10
          opacity-80 group-hover:opacity-100
          transition-opacity duration-700
        "
      />

      <div
        className="
          absolute inset-0 opacity-0
          group-hover:opacity-100
          transition-opacity duration-700
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]
          pointer-events-none
        "
      />

      <div
        className="
          absolute inset-0 z-10
          flex flex-col justify-end
          p-7
          translate-y-10 opacity-0
          group-hover:translate-y-0
          group-hover:opacity-100
          transition-all duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
        "
      >
        <div
          className="
            flex flex-wrap gap-2 mb-4
            translate-y-4 opacity-0
            group-hover:translate-y-0
            group-hover:opacity-100
            transition-all duration-700 delay-100
          "
        >
          {tags.map((tag, index) => (
            <span
              key={index}
              className="
                px-3 py-1 rounded-full
                text-xs font-medium
                bg-white/10 backdrop-blur-xl
                border border-white/10
                text-white
              "
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <h3
              className="
                text-2xl font-bold text-white
                translate-y-4 opacity-0
                group-hover:translate-y-0
                group-hover:opacity-100
                transition-all duration-700 delay-150
              "
            >
              {title}
            </h3>
            <p
              className="
                text-sm text-zinc-300 mt-2 max-w-sm leading-relaxed
                translate-y-4 opacity-0
                group-hover:translate-y-0
                group-hover:opacity-100
                transition-all duration-700 delay-200
              "
            >
              {description}
            </p>
          </div>

          <div
            className="
              min-w-12 h-12 rounded-full
              bg-white text-black
              flex items-center justify-center
              scale-90 opacity-0 rotate-0
              group-hover:scale-100
              group-hover:opacity-100
              group-hover:rotate-45
              transition-all duration-500 delay-300
            "
          >
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>

      <div
        className="
          absolute bottom-0 left-0 right-0 z-[5]
          p-6
          group-hover:translate-y-6
          group-hover:opacity-0
          transition-all duration-500
        "
      >
        <h3 className="text-white text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

const Work = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleWorks = showAll ? works : works.slice(0, 3);

  return (
    <section
      id="design"
      className="bg-primary section relative overflow-hidden"
    >
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
        <div className="text-center mb-14">
          <h2 className="headline-2 mb-4">My Design Work</h2>
        </div>

        {/* Mobile grid */}
        <div
          className="
            grid gap-x-4 gap-y-5
            grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]
            md:hidden
          "
        >
          {visibleWorks.map((work, i) => (
            <ProjectCard
              key={i}
              imgSrc={work.imgSrc}
              title={work.title}
              tags={work.tags}
            />
          ))}
        </div>

        {/* Desktop hover cards */}
        <div className="hidden md:block">
          <div className="flex items-center gap-6 h-[420px] max-w-7xl mx-auto">
            {visibleWorks.slice(0, 3).map((work, i) => (
              <HoverCard key={i} {...work} />
            ))}
          </div>

          {showAll && (
            <div className="flex items-center gap-6 h-[420px] max-w-7xl mx-auto mt-8">
              {works.slice(3, 6).map((work, i) => (
                <HoverCard key={i} {...work} />
              ))}
            </div>
          )}
        </div>

        {/* Bouton Voir plus / Voir moins */}
        {/* Bouton Voir plus */}
        <div className="flex justify-center mt-12">
          <a
            href="https://www.behance.net/fetrafaneva"
            target="_blank"
            rel="noopener noreferrer"
            className="
    flex items-center gap-2
    px-8 py-3 rounded-full
    border border-white/20
    text-white text-sm font-medium
    bg-white/5 hover:bg-white/10
    backdrop-blur-sm
    transition-all duration-300
    hover:-translate-y-0.5
    hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]
  "
          >
            Voir plus
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
