import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ReactLenis from "lenis/react";
import Projects from "./sections/Projects";
import AboutSummary from "./sections/Aboutsummary";
import About from "./sections/About";
import Contact from "./sections/Contact";
const App = () => {
  return (
    <ReactLenis
      root
      className="relative w-screen min-h-screen overflow-x-hidden"
    >
      <Navbar />
      <Hero />
      <AboutSummary />
      <Projects />
      <About />
      <Contact />
    </ReactLenis>
  );
};

export default App;
