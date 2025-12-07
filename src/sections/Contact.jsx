import React from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const Contact = () => {
  const text = `Got a Quesiton, how or project Idea?
    We'd love ot hear from you and discuss further`;
  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black"
    >
      <div>
        <AnimatedHeaderSection
          subtitle={"You Dream It, I Code It"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />
      </div>
      <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
        <div className="flex flex-col w-full gap-10">
          <div className="social-link">
            <h2>E-mail</h2>
            <div className="w-full h-px my-2 bg-white/30" />
            <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
              KaveenW19@gmail.com
            </p>
          </div>
          <div className="social-link">
            <h2>Phone</h2>
            <div className="w-full h-px my-2 bg-white/30" />
            <p className="text-xl lowercase md:text-2xl lg:text-3xl">
              +33 7 12 12 32 12
            </p>
          </div>
          <div className="social-link">
            <h2>Social Media</h2>
            <div className="w-full h-px my-2 bg-white/30" />
            <div className="flex flex-wrap gap-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
