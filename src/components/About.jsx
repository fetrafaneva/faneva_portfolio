/**
 * @copyright 2025 ShiningPrism (Fetra Faneva)
 * @license Apache-2.0
 */

import { motion } from "framer-motion";

const aboutItems = [
  { label: "Projects done", number: 15 },
  { label: "Mockups designed", number: 4 },
];

const springTransition = {
  type: "spring",
  stiffness: 250,
  damping: 70,
  mass: 1,
};

const About = () => {
  return (
    <section id="about" className="section bg-primary">
      <div className="container">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10 bg-zinc-800/50 p-8 md:p-12 rounded-2xl"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={springTransition}
        >
          {/* TEXT SIDE */}
          <div className="text-zinc-300 max-w-xl">
            <motion.h2
              className="text-xl uppercase font-semibold text-zinc-100"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ...springTransition, delay: 0.1 }}
            >
              About me
            </motion.h2>

            <motion.div
              className="w-24 h-[3px] bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-2"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              style={{ transformOrigin: "left" }}
              transition={{ ...springTransition, delay: 0.2 }}
            ></motion.div>

            <motion.p
              className="mt-6 md:text-lg"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ...springTransition, delay: 0.3 }}
            >
              Hello world ! I’m{" "}
              <span className="text-white font-semibold">Faneva</span>, a
              Full-Stack MERN Developer & UI/UX Designer based in Antananarivo.
              I love transforming ideas into clean, scalable, and modern digital
              experiences.
            </motion.p>

            <motion.p
              className="mt-4 text-zinc-400"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ...springTransition, delay: 0.4 }}
            >
              My main stack is <strong>MERN and Nextjs</strong>. I design with
              Figma & Adobe XD <br />
              My favorite project so far is
              <span> twitterX_media_down </span>.
            </motion.p>

            {/* STATS */}
            {/* <div className="flex gap-8 mt-6">
              {aboutItems.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-white">
                      {item.number}
                    </span>
                    <span className="text-sky-400 text-2xl font-bold">+</span>
                  </div>
                  <p className="text-sm text-zinc-400">{item.label}</p>
                </div>
              ))}
            </div> */}

            {/* CTA */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
