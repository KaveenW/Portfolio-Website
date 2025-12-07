import React from "react";
import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import AnimatedTextLines from "../components/AnimatedTextLines";
import manImage from "../../public/images/man.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Passionate about clean architecture
    I build scalable, high-performance solutions
     from prototype to production`;
  const imgRef = useRef(null);
  const aboutText = `Obsessed with creating fast, intuitive apps — from clean, pixel-perfect React interfaces to reliable and scalable backends. Every line of code I write is meant to feel smooth, thoughtful, and purposeful for the user.

When I’m not building something, I’m usually experimenting with new ideas, improving old projects, or helping other developers by sharing what I learn. And if I’m not at my desk, you’ll probably find me playing badminton, sipping a caramel latte, or chasing the next cool tech idea that pops into my head.`;

  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: true,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100% , 100% 100%, 100% 100% , 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subtitle={"Code with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img src={manImage} alt="man" className="w-md rounded-3xl" />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
