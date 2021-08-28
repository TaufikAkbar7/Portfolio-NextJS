import { project } from "../../content/data";
import { Judul } from "../atoms";
import { FaRegFolder } from "react-icons/fa";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// import Link from "next/link";

const Projects = () => {

  useEffect(() => {
    
    gsap.timeline({
      scrollTrigger: {
        trigger: '.section-project',
        start: 'center bottom',
        markers: true,
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete reverse reset',
      }
    })

    .from('.title', { 
      y: 300, 
      opacity: 0, 
      duration: 1 
    }, "+=1")
    .from('.listProject', {
      x: 1000,
      opacity: 0, 
      duration: 1.5
    })
  }, [])

  return (
    <div className="min-h-screen flex flex-col justify-center items-center overflow-x-hidden section-project" id="projects">
      <Judul text={project.title} marginTop="mt-14" width="w-40" height="h-2" fontSize="text-5xl" fontWeight="font-bold"/>
      <div className="flex flex-wrap justify-center items-center container mx-auto mt-5 listProject">
        {project.projects.map((item, i) => (
          <div className="mt-5 p-5 sm:w-1/2 lg:w-1/3 md:ml-4 md:mr-4 md:mt-5 sm:mt-5 sm:ml-1 sm:mr-3" key={i}>
          <div className="h-full rounded-lg overflow-hidden bg-gray-700">
            <div className="p-6 flex flex-col items-center">
              <div className="flex flex-row justify-between items-start w-full">
                <FaRegFolder className="text-4xl"/>
                <div className="text-2xl flex flex-row">
                  {item.links.map(loop => (
                    <a className="px-2" key={loop.name} href={loop.link} target="_blank" rel="noreferrer">
                      <span className="cursor-pointer hover:text-gray-400">{loop.tag}</span>
                    </a>
                  ))}
                </div>
              </div>
              <Judul text={item.project_name} fontSize="text-2xl" fontWeight="font-medium"/>
              <div className="container mx-auto mt-4 relative items-center">
                <p className="text-white tracking-normal">
                  {item.project_desc}
                </p>
              </div>
              <div className="container mx-auto mt-3 flex flex-wrap justify-center">
              {item.stacks.map((stack, i) => (
                 <span className="mt-2 m-1 text-gray-400 text-sm" key={i}>
                    {stack}
                  </span>
                ))}
                </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
