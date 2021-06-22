import Image from "next/image";
import pic from "../../public/assets/pic.jpg";
import { Judul } from "../atoms"
const Projects = () => {
  return (
    <div className="mt-5 min-h-screen">
      <Judul text="Projects" width="w-40" height="h-2" fontSize="text-5xl" fontWeight="font-bold"/>
      <div className="flex flex-wrap justify-center items-center container mx-auto">
        <div className="p-4 sm:w-1/2 lg:w-1/3">
          <div className="h-full border-2 border-white border-opacity-60 rounded-lg overflow-hidden">
            <Image
              src={pic}
              alt="project"
              width={500}
              height={500}
              className="w-full object-cover object-center"
            />
            <div className="p-6 flex flex-col items-center">
              <Judul text="Project" width="w-20" height="h-2" fontSize="text-2xl" fontWeight="font-medium"/>
              <div className="container mx-auto mt-4">
                <p className="text-white">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua."
                </p>
              </div>
              <div className="container mx-auto mt-3">
                <span className="rounded-full py-1 px-3 bg-gray-500">
                  React JS
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-center mb-5">
              <button className="border bg-blue-500 border-blue-500 text-white font-bold py-2 px-4 rounded mr-20 hover:bg-transparent hover:text-blue-500 hover:border-blue-500">
                Code
              </button>
              <button className="border bg-blue-500 border-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-transparent hover:text-blue-500 hover:border-blue-500">
                Source
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
