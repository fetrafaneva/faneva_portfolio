/**
 * @copyright 2025 ShiningPrism (Fetra Faneva)
 * @license Apache-2.0
 */

/**
 * Compenents
 */
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/AIResume.png",
    title: "AIResume app",
    tags: ["React", "nodeJS", "MongoDB"],
    projectLink: "https://nyresumeako.vercel.app/",
    category: "Full Stack",
    isNew: true,
  },
  {
    imgSrc: "/images/papilloguide.png",
    title: "PapilloGuide app",
    tags: ["React", "TailwindCSS", "JavaScript"],
    projectLink: "https://papillo-guide.vercel.app/",
    category: "Front-End",
    isNew: false,
  },
  {
    imgSrc: "/images/project-3.png",
    title: "Twitter Media Downlaod",
    tags: ["Typscript", "Python", "Automatisation"],
    projectLink: "https://github.com/fetrafaneva/twitterX_media_down",
    category: "Full Stack",
    isNew: false,
  },
  {
    imgSrc: "/images/project-4.png",
    title: "SocialApp-API REST",
    tags: ["Nodejs", "Rest-API", "MongoDB"],
    projectLink: "https://github.com/fetrafaneva/SocialApp_API_REST",
    category: "Back-End",
    isNew: false,
  },
  {
    imgSrc: "/images/FleetTrack.png",
    title: "Fleettrack",
    tags: ["Nextjs", "Supabase", "MongoDB"],
    projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
    category: "Full Stack",
    isNew: false,
  },
  {
    imgSrc: "/images/project-6.png",
    title: "MERN Authentication",
    tags: ["React", "MongoDB", "email-verification"],
    projectLink: "https://github.com/fetrafaneva/mern-authentify",
    category: "Full Stack",
    isNew: false,
  },
  {
    imgSrc: "/images/navi.png",
    title: "Navi - AI Desktop Avatar Assistant",
    tags: [
      "React",
      "TypeScript",
      "Electron",
      "Gemini AI",
      "ElevenLabs",
      "Vite",
    ],
    projectLink: "https://github.com/fetrafaneva/navi",
    category: "Desktop AI",
    isNew: true,
  },
];

const springTransition = {
  type: "spring",
  stiffness: 250,
  damping: 70,
  mass: 1,
};

const Work = () => {
  return (
    <section id="development" className="bg-primary section">
      <div className="container">
        <motion.h2
          className="headline-2 mb-8"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={springTransition}
        >
          My Development Work
        </motion.h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(
            ({ imgSrc, title, tags, projectLink, category, isNew }, key) => (
              <motion.div
                key={key}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ...springTransition, delay: 0.1 + key * 0.08 }}
              >
                <ProjectCard
                  imgSrc={imgSrc}
                  title={title}
                  tags={tags}
                  projectLink={projectLink}
                  category={category}
                  isNew={isNew}
                />
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
