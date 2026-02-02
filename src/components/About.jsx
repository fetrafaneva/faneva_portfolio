/**
 * @copyright 2025 ShiningPrism (Fetra Faneva)
 * @license Apache-2.0
 */

const aboutItems = [
  {
    label: "Project done",
    number: 25,
  },
  {
    label: "Mockup done",
    number: 15,
  },
];

const About = () => {
  return (
    <section id="about" className="section bg-primary">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Faneva, a Full-Stack MERN developer and a UI/UX
            Designer based in Fianarantsoa. I design and build whatever I can
            imagine. My main tech stack is MERN (MongoDB, Express, React,
            Node.js) and Flutter/Dart. My favorite tools are Figma, Adobe XD,
            and Workflow. My favorite project i've done is MERN_AIResume..
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
