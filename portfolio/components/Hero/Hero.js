import { hero, contact } from "../../content/data";
import Link from "next/link"
import { FaGithub, FaLinkedin, FaInstagramSquare, FaAngleDoubleDown } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  const { github, linked_in, instagram, gmail } = contact.socials

  const handleDownload = (e) => {
    e.preventDefault();
    window.location.href = "https://taufikakbar7.vercel.app/public/assets/TaufikAkbar-CV.pdf"
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center" id="hero">
      <div className="container mx-auto font-sans flex flex-col justify-center items-center p-5">
        <div className="w-8/12 flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold text-gray-200 p-1">Hi. I'm Taufik Akbar</h1>
          <h3 className="text-2xl text-gray-300 mt-5 tracking-wide">
            {hero.desc}
          </h3>
          <div className="flex flex-wrap justify-center items-center mt-5">
            <div className="flex flex-row justify-center items-center p-2 text-gray-200 cursor-pointer hover:text-gray-400">
              <Link href={github}>
                <FaGithub className="text-xl mr-3 md:text-3xl" />
              </Link>
              <p>Github</p>
            </div>
            <div className="flex flex-row justify-center items-center p-2  text-gray-200 cursor-pointer hover:text-gray-400">
              <Link href={linked_in}>
                <FaLinkedin className="text-xl mr-3 md:text-3xl" />
              </Link>
              <p>LinkedIn</p>
            </div>
            <div className="flex flex-row justify-center items-center p-2  text-gray-200 cursor-pointer hover:text-gray-400">
              <Link href={instagram}>
                <FaInstagramSquare className="text-xl mr-3 md:text-3xl" />
              </Link>
              <p>Instagram</p>
            </div>
            <div className="flex flex-row justify-center items-center p-2  text-gray-200 cursor-pointer hover:text-gray-400">
              <Link href={gmail}>
                <SiGmail className="text-xl mr-3 md:text-3xl" />
              </Link>
              <p>Gmail</p>
            </div>
            <div className="flex flex-row justify-center items-center p-2  text-gray-200 cursor-pointer hover:text-gray-400">
              <Link href={github}>
                <FiDownload className="text-xl mr-3 md:text-3xl" onClick={handleDownload}/>
              </Link>
              <p>Resume</p>
            </div>
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
