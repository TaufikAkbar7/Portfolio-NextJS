import { hero, contact } from "../../content/data";
import Link from "next/link"
import { FaGithub, FaLinkedin, FaInstagramSquare, FaAngleDoubleDown } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  const { github, linked_in, instagram, gmail } = contact.socials
  return (
    <div className="min-h-screen flex flex-col justify-center items-center" id="hero">
      <div className="container mx-auto font-sans flex flex-col justify-center items-center">
        <div className="w-8/12 flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold text-gray-200">Hi. I'm Taufik Akbar</h1>
          <h3 className="text-2xl text-gray-300 mt-5 tracking-wide">
            {hero.desc}
          </h3>
        </div>
        <div className="flex flex-row justify-center items-center mt-3">
          <Link href={github}>
            <FaGithub className="text-3xl sm:text-3xl md:text-3xl mr-3 text-white cursor-pointer hover:text-gray-400" />
          </Link>
          <Link href={linked_in}>
            <FaLinkedin className="text-3xl sm:text-3xl md:text-3xl mr-3 text-white cursor-pointer hover:text-gray-400" />
          </Link>
          <Link href={instagram}>
            <FaInstagramSquare className="text-3xl sm:text-3xl md:text-3xl mr-3 text-white cursor-pointer hover:text-gray-400" />
          </Link>
          <Link href={gmail}>
            <SiGmail className="text-3xl sm:text-3xl md:text-3xl text-white cursor-pointer hover:text-gray-400" />
          </Link>
        </div>
      </div>
      <div className="animate-bounce text-3xl text-white cursor-pointer mt-10">
        <ScrollLink to="projects" smooth={true} duration={2000}>
          <FaAngleDoubleDown />
        </ScrollLink>
      </div>
    </div>
  );
};

export default Hero;
