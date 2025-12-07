import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";

const Home = () => {
  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
