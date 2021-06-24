import { Judul } from "../atoms";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { contact } from "../../content/data";
import Link from "next/link";

const Contact = () => {

  const { github, linked_in, instagram, gmail } = contact.socials

  return (
    <div className="mt-5 h-96 flex flex-col justify-center items-center" id="contact">
      <Judul
        text={contact.title}
        width="w-40"
        height="h-2"
        fontSize="text-5xl"
        fontWeight="font-bold"
      />
      <div className="mt-12 flex flex-wrap justify-center items-center container mx-auto">
        <div className="p-4 sm:w-1/2 lg:w-1/3 text-white text-center mr-2">
          <h2 className="text-4xl font-medium">Socials</h2>
          <div className="justify-center flex mt-5">
            <Link href={github}>
              <FaGithub className="text-5xl sm:text-3xl md:text-5xl mr-3 text-white cursor-pointer hover:text-gray-400"/>
            </Link>
            <Link href={linked_in}>
              <FaLinkedin className="text-5xl sm:text-3xl md:text-5xl mr-3 text-white cursor-pointer hover:text-gray-400"/>
            </Link>
            <Link href={instagram}>
              <FaInstagramSquare className="text-5xl sm:text-3xl md:text-5xl mr-3 text-white cursor-pointer hover:text-gray-400"/>
            </Link>
            <Link href={gmail}>
              <SiGmail className="text-5xl sm:text-3xl md:text-5xl text-white cursor-pointer hover:text-gray-400"/>
            </Link>
          </div>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/3 text-white text-center">
            <h3>{contact.no_telp}</h3>
            <h3>{contact.address}</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
