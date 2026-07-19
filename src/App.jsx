/**
 * @copyright 2025 ShiningPrism (Fetra Faneva)
 * @license Apache-2.0
 */

/*
 * Components
 */
import SmoothScroll from "./components/SmoothScroll";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Design from "./components/Design";

const App = () => {
  return (
    <SmoothScroll>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Design />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
};

export default App;
