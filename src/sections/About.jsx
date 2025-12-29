import React from "react";
import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import AnimatedTextLines from "../components/AnimatedTextLines";
import profileImage from "../../public/assets/projects/profile2.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Passionate about clean architecture
    I build scalable, high-performance solutions
     from prototype to production`;
  const imgRef = useRef(null);
  const aboutText = `I’m a Software Engineering graduate who enjoys turning ideas into fast, easy-to-use applications. I build clean, responsive websites and apps, focusing on making them reliable and pleasant to use.

I’m interested in using AI when it genuinely improves the experience, such as making products smarter, more helpful, or more personal. I like understanding how everything fits together — from how data moves through the system to the small details users interact with — and I aim to write code that’s clear, practical, and well thought out.`;

  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
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
        <img src={profileImage} alt="man" className="w-md rounded-3xl" />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
