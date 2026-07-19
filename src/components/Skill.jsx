/**
 * @copyright 2025 ShiningPrism (Fetra Faneva)
 * @license Apache-2.0
 */

/**
 * Components
 */
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/figma.svg",
    label: "Figma",
    desc: "Design tool",
    level: "intermediate",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
];

const springTransition = {
  type: "spring",
  stiffness: 250,
  damping: 70,
  mass: 1,
};

const Skill = () => {
  return (
    <section className="bg-primary section">
      <div className="container">
        <motion.h2
          className="headline-2"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={springTransition}
        >
          Essential Tools I use
        </motion.h2>

        <motion.p
          className="text-zinc-400 mt-3 mb-8 max-w-[50ch]"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...springTransition, delay: 0.1 }}
        >
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </motion.p>

        <div className=" grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc, level }, key) => (
            <motion.div
              key={key}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ...springTransition, delay: 0.2 + key * 0.08 }}
            >
              <SkillCard
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                level={level}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
