import { hero, contact } from "../../content/data";
import { FaGithub, FaLinkedin, FaInstagramSquare, FaAngleDoubleDown } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";


const Hero = () => {
  const { github, linked_in, instagram, gmail } = contact.socials

  return (
    <div className="min-h-screen flex flex-col justify-center items-center" id="hero">
      <div className="container mx-auto font-sans flex flex-col justify-center items-center p-5">
        <div className="w-8/12 flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold text-gray-200 p-1">Hi. I'm Taufik Akbar</h1>
          <h3 className="text-2xl text-gray-300 mt-5 tracking-wide">
            {hero.desc}
          </h3>
          <div className="flex flex-wrap justify-center items-center mt-5">
            <a href={github} target="_blank" className="flex flex-row justify-center items-center p-2 text-gray-200 cursor-pointer hover:text-gray-400">
              <FaGithub className="text-xl mr-3 md:text-3xl" />
              <p>Github</p>
            </a>
            <a href={linked_in} target="_blank" className="flex flex-row justify-center items-center p-2  text-gray-200 cursor-pointer hover:text-gray-400">
              <FaLinkedin className="text-xl mr-3 md:text-3xl" />
              <p>LinkedIn</p>
            </a>
            <a href={instagram} target="_blank" className="flex flex-row justify-center items-center p-2  text-gray-200 cursor-pointer hover:text-gray-400">
              <FaInstagramSquare className="text-xl mr-3 md:text-3xl" />
              <p>Instagram</p>
            </a>
            <a href={gmail} target="_blank" className="flex flex-row justify-center items-center p-2  text-gray-200 cursor-pointer hover:text-gray-400">
              <SiGmail className="text-xl mr-3 md:text-3xl" />
              <p>Gmail</p>
            </a>
            <a className="flex flex-row justify-center items-center p-2  text-gray-200 cursor-pointer hover:text-gray-400">
              <FiDownload className="text-xl mr-3 md:text-3xl" />
              <p>Resume</p>
            </a>
          </div>
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
