import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center">
      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-5xl font-bold text-gray-200">Welcome To <br/>My Personal Portfolio</h1>
          <h3 className="text-lg font-sans text-gray-300 mt-5 tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </h3>
        </div>
        <div className="justify-center flex mt-5">
          <FaGithub className="text-2xl mr-3 text-white cursor-pointer hover:text-gray-400"/>
          <FaLinkedin className="text-2xl mr-3 text-white cursor-pointer hover:text-gray-400"/>
          <FaInstagramSquare className="text-2xl text-white cursor-pointer hover:text-gray-400"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
