import { hero } from "../../content/data";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center" id="hero">
      <div className="flex flex-col">
          <h1 className="text-5xl font-bold text-gray-200">Welcome To <br/>My Personal Portfolio</h1>
          <h3 className="text-lg font-sans text-gray-300 mt-5 tracking-wide">
            {hero.desc}
          </h3>
      </div>
    </div>
  );
};

export default Hero;
