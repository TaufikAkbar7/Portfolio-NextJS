import { hero } from "../../content/data";
import { BackgroundAnimate } from "../index";

const Hero = () => {
  return (
    <div className="min-h-screen flex justify-center items-center" id="hero">
      <div className="grid grid-cols-2 gap-4 container mx-auto mt-5 sm:flex sm:flex-row md:grid md:grid-cols-2">
      <div className="flex flex-col justify-center items-start">
          <h1 className="text-5xl font-bold text-gray-200">Welcome To <br/>My Personal Portfolio</h1>
          <h3 className="text-lg font-sans text-gray-300 mt-5 tracking-wide">
            {hero.desc}
          </h3>
      </div>
      <BackgroundAnimate/>
      </div>
    </div>
  );
};

export default Hero;
