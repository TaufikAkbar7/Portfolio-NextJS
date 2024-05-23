import { project } from "../../content/data";
import { Judul } from "../atoms";
import { FaExternalLinkAlt, FaGithub, FaRegFolderOpen } from "react-icons/fa";

const Projects = () => {

  return (
    <div className="min-h-screen flex flex-col justify-start items-center overflow-x-hidden section-project mb-10 projects">
      <Judul className="text-white text-2xl font-bold md:text-4xl" text={project.title} />
      <p className="sm:text-lg mt-2 text-white">{project.subtitle}</p>
      <div className="grid grid-cols-1 mt-8 gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {project.projects.map((item, i) => (
          <div className="flex flex-col justify-between w-full h-72 p-6 rounded-lg overflow-hidden bg-gray-700 sm:w-80" key={i}>
            <div className="flex justify-between items-center w-full">
              <FaRegFolderOpen className="w-8 h-8 text-primaryColor" />
              <div className="flex items-center gap-x-3">
                {item.linkWebsite && (
                  <a href={item.linkWebsite} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt className="w-5 h-5 text-primaryColor" />
                  </a>
                )}
                <a href={item.linkGithub} target="_blank" rel="noreferrer">
                  <FaGithub className="w-5 h-5 text-primaryColor" />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <Judul className="text-white mt-2 text-xl font-medium md:text-2xl" text={item.project_name} />
              <div className="mt-4 relative items-center">
                <p className="text-white text-sm tracking-normal font-inter">
                  {item.project_title}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-0.5 items-center mt-3">
              {item.stacks.map((stack, stackItem) => (
                <p key={stack + stackItem} className="text-sm text-gray-400">{stack}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default Projects;
