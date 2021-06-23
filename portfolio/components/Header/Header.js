import { FiSlack } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6" id="header">
      <div className="flex items-center flex-shrink-0 text-gray-300 mr-6">
        <FiSlack/>
        <a href="#header" className="font-semibold text-2xl tracking-tight">Portfolio</a>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded border-teal-400 text-gray-300 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
         <ScrollLink to="projects" smooth={true} duration={2000}>
          <span
            // href="#projects"
            className="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-xl text-gray-300 hover:text-white mr-7"
          >
            Projects
          </span>
          </ScrollLink>
          <a
            href="#tech"
            className="block mt-4 lg:inline-block lg:mt-0 text-xl text-gray-300 hover:text-white mr-7"
          >
            Technologies
          </a>
          <a
            href="#contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-xl text-gray-300 hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
