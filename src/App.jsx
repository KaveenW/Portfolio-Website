import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/Aboutsummary";
import ReactLenis from "lenis/react";
import Projects from "./sections/Projects";
import AboutSummary from "./sections/Aboutsummary";

const App = () => {
  return (
    <ReactLenis
      root
      className="relative w-screen min-h-screen overflow-x-hidden"
    >
      <Navbar />
      <Hero />
      <AboutSummary />
    </ReactLenis>
  );
};

export default App;
