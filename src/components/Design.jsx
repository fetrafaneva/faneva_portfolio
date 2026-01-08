/**
 * @copyright 2025 ShiningPrism (Fetra Faneva)
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-1.jpg",
    title: "Full stack music app",
    description: "Application musicale complète avec API et MVC.",
    tags: ["API", "MVC", "Development"],
  },
  {
    imgSrc: "/images/project-2.jpg",
    title: "Free stock photo app",
    description: "Plateforme SPA d’images libres.",
    tags: ["API", "SPA"],
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "Recipe app",
    description: "Application de recettes connectée à une API.",
    tags: ["API", "Development"],
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "Real estate website",
    description: "Site moderne pour agences immobilières.",
    tags: ["Web-design", "Development"],
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "eCommerce website",
    description: "Plateforme eCommerce UI moderne.",
    tags: ["eCommerce", "Development"],
  },
  {
    imgSrc: "/images/project-6.jpg",
    title: "Personal portfolio",
    description: "Portfolio UI/UX & développement.",
    tags: ["UI/UX", "Development"],
  },
];

/* Card desktop (hover expand) */
const HoverCard = ({ imgSrc, title, description }) => (
  <div className="relative group flex-grow transition-all duration-500 w-56 h-[380px] hover:w-full overflow-hidden rounded-2xl">
    <img
      src={imgSrc}
      alt={title}
      className="h-full w-full object-cover object-center"
    />

    <div
      className="absolute inset-0 flex flex-col justify-end p-8
                    text-white bg-black/50 opacity-0
                    group-hover:opacity-100 transition-all duration-300"
    >
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-sm mt-1">{description}</p>
    </div>
  </div>
);

const Work = () => {
  return (
    <section
      id="design"
      className="bg-primary section relative overflow-hidden"
    >
      <div className="container">
        <h2 className="headline-2 text-center mb-8">My Design Work</h2>

        {/* ================= MOBILE (same as Development Work) ================= */}
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] md:hidden">
          {works.map((work, i) => (
            <ProjectCard
              key={i}
              imgSrc={work.imgSrc}
              title={work.title}
              tags={work.tags}
            />
          ))}
        </div>

        {/* ================= DESKTOP (hover expand) ================= */}
        <div className="hidden md:block">
          {/* ROW 1 */}
          <div className="relative z-10 flex items-center gap-6 h-[380px] max-w-6xl mx-auto mb-8">
            {works.slice(0, 3).map((work, i) => (
              <HoverCard key={i} {...work} />
            ))}
          </div>

          {/* ROW 2 */}
          <div className="relative z-10 flex items-center gap-6 h-[380px] max-w-6xl mx-auto">
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
