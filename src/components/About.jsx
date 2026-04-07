/**
 * @copyright 2025 ShiningPrism (Fetra Faneva)
 * @license Apache-2.0
 */

const aboutItems = [
  { label: "Projects done", number: 25 },
  { label: "Mockups designed", number: 15 },
];

const About = () => {
  return (
    <section id="about" className="section bg-primary">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-10 bg-zinc-800/50 p-8 md:p-12 rounded-2xl">
          {/* TEXT SIDE */}
          <div className="text-zinc-300 max-w-xl">
            <h2 className="text-xl uppercase font-semibold text-zinc-100">
              About me
            </h2>
            <div className="w-24 h-[3px] bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-2"></div>

            <p className="mt-6 md:text-lg">
              Hello world ! I’m{" "}
              <span className="text-white font-semibold">Faneva</span>, a
              Full-Stack MERN Developer & UI/UX Designer based in Fianarantsoa.
              I love transforming ideas into clean, scalable, and modern digital
              experiences.
            </p>

            <p className="mt-4 text-zinc-400">
              My main stack is <strong>MERN</strong> and{" "}
              <strong>Flutter/Dart</strong>. I design with Figma & Adobe XD{" "}
              <br />
              My favorite project so far is
              <span> MERN_AIResume</span>.
            </p>

            {/* STATS */}
            <div className="flex gap-8 mt-6">
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
            </div>

            {/* CTA */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
