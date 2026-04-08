/**
 * @copyright 2025 ShiningPrism (Fetra Faneva)
 * @license Apache-2.0
 */

/**
 * Compenents
 */
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/AIResume.png",
    title: "AIResume app",
    tags: ["React", "nodeJS", "MongoDB"],
    projectLink: "https://github.com/fetrafaneva/MERN_AIResume",
    category: "Full Stack",
    isNew: true,
  },
  {
    imgSrc: "/images/papilloguide.png",
    title: "PapilloGuide app",
    tags: ["React", "TailwindCSS", "JavaScript"],
    projectLink: "https://github.com/fetrafaneva/PapilloGuide",
    category: "Full Stack",
    isNew: true,
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "Recipe app",
    tags: ["Development", "API"],
    projectLink: "",
    category: "Full Stack",
    isNew: false,
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "Real state website",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee-org/wealthome",
    category: "Full Stack",
    isNew: false,
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "eCommerce website",
    tags: ["eCommerce", "Development"],
    projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
    category: "Full Stack",
    isNew: false,
  },
  {
    imgSrc: "/images/project-6.jpg",
    title: "vCard Personal portfolio",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
    category: "Full Stack",
    isNew: false,
  },
];

const Work = () => {
  return (
    <section id="development" className="bg-primary section">
      <div className="container">
        <h2 className="headline-2 mb-8">My Development Work</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(
            ({ imgSrc, title, tags, projectLink, category, isNew }, key) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                category={category}
                isNew={isNew}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
