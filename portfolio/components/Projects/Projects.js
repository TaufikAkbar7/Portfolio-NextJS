import { project } from "../../content/data";
import { Judul } from "../atoms";
import Image from 'next/image'
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
    <div className="min-h-screen flex flex-col justify-center items-center overflow-x-hidden section-project" id="projects">
      <Judul text={project.title} marginTop="mt-14" width="w-40" height="h-2" fontSize="text-5xl" fontWeight="font-bold" />
      <div className="flex flex-wrap justify-center items-center container mx-auto mt-5 listProject">
        {project.projects.map((item, i) => (
          <div className="mt-5 p-5 sm:w-1/2 lg:w-96 md:ml-4 md:mr-4 md:mt-5 sm:mt-5 sm:ml-1 sm:mr-3" key={i}>
            <Link href={{
              pathname: '/detail',
              query: { id: item.id,  }
            }}>
              <div className="h-full rounded-lg overflow-hidden bg-gray-700 cursor-pointer">
                <div className="p-6 flex flex-col items-center">
                  <div className="w-full">
                    <Image src={item.image[0]} className="object-cover" width={850} height={400} />
                  </div>
                  <Judul marginTop="mt-2" text={item.project_name} fontSize="text-xl" fontWeight="font-medium" />
                  <div className="container mx-auto mt-4 relative items-center">
                    <p className="text-white text-sm tracking-normal">
                      {item.project_title}
                    </p>
                  </div>
                  {/* <div className="container mx-auto mt-3 flex flex-wrap justify-center">
              {item.stacks.map((stack, i) => (
                 <span className="mt-2 m-1 text-gray-400 text-sm" key={i}>
                    {stack}
                  </span>
                ))}
                </div> */}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div >
  );
};

export default Projects;
