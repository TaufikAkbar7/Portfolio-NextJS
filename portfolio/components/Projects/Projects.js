import { project } from "../../content/data";
import { Judul } from "../atoms";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);


const Projects = () => {

  useEffect(() => {

    gsap.timeline({
      scrollTrigger: {
        trigger: '.section-project',
        start: 'center bottom',
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
    <div className="min-h-screen flex flex-col justify-center items-center overflow-x-hidden section-project mb-10" id="projects">
      <Judul color="text-gray-200" text={project.title} marginTop="mt-14" width="w-40" height="h-2" fontSize="text-5xl" fontWeight="font-bold" />
      <div className="flex flex-col justify-center items-center container mx-auto mt-5 listProject">
        {project.projects.map((item, i) => (
          <div className="mt-5 p-5 sm:w-1/2 lg:w-600 md:ml-4 md:mr-4 md:mt-5 sm:mt-5 sm:ml-1 sm:mr-3 w-full h-full" key={i}>
            <div className="h-full rounded-lg overflow-hidden bg-gray-700">
              <div className="p-6 flex flex-col text-left">
                <Judul color="text-primaryColor" marginTop="mt-2" text={item.project_name} fontSize="text-2xl" fontWeight="font-medium" />
                <div className="container mx-auto mt-4 relative items-center">
                  <p className="text-white text-md tracking-normal font-inter">
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
