// components/HeroSocials.jsx
import { FaLinkedin, FaGithub } from "react-icons/fa";

const HeroSocials = () => {
  return (
    <div className="absolute flex gap-5 bottom-20 left-10 z-20">
      <a
        href="https://www.linkedin.com/in/kaveen-wickramasinghe-b00bb72bb/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:scale-110"
      >
        <FaLinkedin className="w-8 h-8 md:w-14 md:h-14" />
      </a>

      <a
        href="https://github.com/KaveenW"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:scale-110 hover:text-gray-800"
      >
        <FaGithub className="w-8 h-8 md:w-14 md:h-14" />
      </a>
    </div>
  );
};

export default HeroSocials;
