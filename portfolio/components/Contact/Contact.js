import { Judul } from "../atoms";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="mt-5 h-72">
      <Judul
        text="Contact Me"
        width="w-40"
        height="h-2"
        fontSize="text-5xl"
        fontWeight="font-bold"
      />
      <div className="mt-5 flex flex-wrap justify-center items-center container mx-auto">
        <div className="p-4 sm:w-1/2 lg:w-1/3 text-white text-center mr-2">
          <h2 className="text-4xl font-medium">Socials</h2>
          <div className="justify-center flex mt-5">
            <FaGithub className="text-5xl mr-3 text-white cursor-pointer hover:text-gray-400" />
            <FaLinkedin className="text-5xl mr-3 text-white cursor-pointer hover:text-gray-400" />
            <FaInstagramSquare className="text-5xl mr-3 text-white cursor-pointer hover:text-gray-400" />
            <SiGmail className="text-5xl text-white cursor-pointer hover:text-gray-400"/>
          </div>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/3 text-white text-center">
            <h3>+62 812-1326-0537</h3>
            <h3>Jakarta Timur, DKI Jakarta / Indonesia</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
