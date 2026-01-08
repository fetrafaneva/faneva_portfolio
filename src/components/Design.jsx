/**
 * @copyright 2025 ShiningPrism (Fetra Faneva)
 * @license Apache-2.0
 */

const works = [
  {
    imgSrc: "/images/project-1.jpg",
    title: "Full stack music app",
    description: "Application musicale complète avec API et MVC.",
  },
  {
    imgSrc: "/images/project-2.jpg",
    title: "Free stock photo app",
    description: "Plateforme SPA d’images libres.",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "Recipe app",
    description: "Application de recettes connectée à une API.",
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "Real estate website",
    description: "Site moderne pour agences immobilières.",
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "eCommerce website",
    description: "Plateforme eCommerce UI moderne.",
  },
  {
    imgSrc: "/images/project-6.jpg",
    title: "Personal portfolio",
    description: "Portfolio UI/UX & développement.",
  },
];

const Card = ({ imgSrc, title, description }) => (
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
        <h2 className="headline-2 text-center mb-3">My Design Work</h2>

        {/* gradient */}
        <div className="absolute z-0 w-[20%] h-[35%] top-0 pink__gradient" />

        {/* ROW 1 */}
        <div className="relative z-10 flex items-center gap-6 h-[380px] max-w-6xl mx-auto mb-8">
          {works.slice(0, 3).map((work, i) => (
            <Card key={i} {...work} />
          ))}
        </div>

        {/* ROW 2 */}
        <div className="relative z-10 flex items-center gap-6 h-[380px] max-w-6xl mx-auto">
          {works.slice(3, 6).map((work, i) => (
            <Card key={i} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
