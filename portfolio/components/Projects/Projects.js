import Image from "next/image";
import { project } from "../../content/data";
import { Judul } from "../atoms";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="min-h-screen mt-10" id="projects">
      <Judul text={project.title} width="w-40" height="h-2" fontSize="text-5xl" fontWeight="font-bold"/>
      <div className="flex flex-wrap justify-center items-center container mx-auto mt-5">
        {project.projects.map((item, i) => (
          <div className="sm:w-1/2 lg:w-1/3 md:ml-4 md:mr-4 md:mt-5 sm:mt-5 sm:ml-1 sm:mr-3" key={i}>
          <div className="h-full border-2 border-white border-opacity-60 rounded-lg overflow-hidden">
            <Image
              src={item.img}
              alt="project"
              width={500}
              height={500}
              className="w-full object-cover object-center"
            />
            <div className="p-6 flex flex-col items-center">
              <Judul text={item.project_name} width="w-20" height="h-2" fontSize="text-2xl" fontWeight="font-medium"/>
              <div className="container mx-auto mt-4 relative items-center">
                <p className="text-white tracking-normal">
                  {item.project_desc}
                </p>
              </div>
              <div className="container mx-auto mt-3 flex flex-wrap justify-center">
              {item.stacks.map((stack, i) => (
                 <span className="rounded-full py-1 px-3 bg-gray-500 mt-2 m-1" key={i}>
                    {stack}
                  </span>
                ))}
                </div>
            </div>
            <div className="flex flex-row justify-center">
              {item.links.map((btn, i) => (
                <Link key={i} href={btn.link}>
                  <div className="m-5 cursor-pointer border bg-blue-500 border-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-transparent hover:text-blue-500 hover:border-blue-500">
                  {btn.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
