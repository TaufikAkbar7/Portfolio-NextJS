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
      <div className="container mx-auto font-sans flex flex-col justify-start items-start p-5">
        <div className="w-8/12 flex flex-col justify-start items-start">
          <h1 className="text-4xl font-bold text-gray-200 p-1">
            Hi!
          </h1>
          <h2 className="text-5xl font-bold text-gray-200 p-1">
            You can call me
            <span className="text-primaryColor pl-2">Taufik</span>
          </h2>
          <h3 className="text-lg text-gray-300 mt-5 tracking-wide">
            {desc}
          </h3>
          <div className="flex flex-wrap justify-center items-center mt-5">
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="flex flex-row justify-center items-center p-2 text-gray-200 cursor-pointer hover:text-gray-400"
              >
                <span className="text-xl mr-3 md:text-3xl">{item.tag}</span>
                <p>{item.name}</p>
              </a>
            ))}
          </div>
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
