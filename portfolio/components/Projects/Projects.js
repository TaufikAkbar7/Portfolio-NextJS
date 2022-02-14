import { project } from "../../content/data";
import { Judul } from "../atoms";
// import { useEffect } from "react";
import Link from 'next/link';

const Projects = () => {

  return (
    <div className="min-h-screen flex flex-col justify-start items-start overflow-x-hidden section-project mb-10 p-5 projects">
      <Judul color="text-white" text={project.title} marginTop="mt-14" width="w-40" height="h-2" fontSize="text-4xl" fontWeight="font-bold" />
      <p className="mt-2 text-white">{project.subtitle}</p>
      <div className="flex flex-wrap flex-row justify-start items-center container mt-2">
        {project.projects.map((item, i) => (
          <div className="mt-5 sm:w-1/2 lg:w-96 md:mt-5 sm:mt-5 sm:ml-1 sm:mr-3 h-full" key={i}>
            <div className="h-full rounded-lg overflow-hidden bg-gray-700">
              <div className="p-6 flex flex-col justify-center">
                <Judul color="text-primaryColor" marginTop="mt-2" text={item.project_name} fontSize="text-2xl" fontWeight="font-medium" />
                <div className="container mx-auto mt-4 relative items-center">
                  <p className="text-white text-sm tracking-normal font-inter">
                    {item.project_title}
                  </p>
                </div>
                <Link href={{
                  pathname: '/detail',
                  query: { id: item.id, }
                }}>
                  <span className="text-primaryColor w-24 mt-4 border-b-2 border-transparent hover:border-primaryColor cursor-pointer">Go to project</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default Projects;
