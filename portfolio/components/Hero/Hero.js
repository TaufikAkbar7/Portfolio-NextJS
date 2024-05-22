import { hero, contact } from "../../content/data";
import { Link as ScrollLink } from "react-scroll";
import { FaAngleDoubleDown } from "react-icons/fa";

const Hero = () => {
  const { socials } = contact;
  const { desc } = hero;

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center"
      id="hero"
    >
      <div className="font-sans flex flex-col lg:flex-row justify-center items-center p-5">
        <div className="flex-1">
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-200 p-1">
            Hi!
          </h1>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-200 p-1">
            You can call me
            <span className="text-primaryColor pl-2">Taufik</span>
          </h2>
          <h3 className="xs:text-base lg:text-xl w-3/4 text-gray-300 mt-5 tracking-wide leading-relaxed">
            {desc}
          </h3>
          <a href="mailto:akbar.taufik062@gmail.com" className="inline-block mt-10 py-3 px-8 border font-semibold text-lg rounded-lg border-primaryColor hover:bg-primaryColor">Get In Touch</a>
        </div>
        <div className="flex w-72 flex-row justify-center items-center mt-5">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="flex flex-row justify-center items-center p-2 text-gray-200 cursor-pointer hover:text-gray-400"
            >
              <span className="text-2xl mr-3 md:text-3xl">{item.tag}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="animate-bounce text-3xl text-white cursor-pointer mt-10">
        <ScrollLink to="projects" smooth={true} duration={2000}>
          <FaAngleDoubleDown />
        </ScrollLink>
      </div>
    </section>
  );
};

export default Hero;
