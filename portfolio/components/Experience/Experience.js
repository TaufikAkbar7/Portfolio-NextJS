import { experience } from "../../content/data";
import { Judul } from "../atoms";

const Experience = () => {
  return (
    <div className="h-5/6 mt-5" id="experience">
      <Judul text={experience.title} width="w-40" height="h-2" fontSize="text-5xl" fontWeight="font-bold"/>
      <div className="container mx-auto mt-5 flex flex-wrap justify-center items-center">
      {experience.experiences.map((item, i) => (
        <div className="sm:w-1/2 lg:w-1/3 text-white mr-5 sm:mt-5" key={i}>
        <div className="p-8 border-2 border-white">
          <Judul text={item.company_name} width="w-full" height="h-2" fontSize="text-2xl" fontWeight="font-medium"/>
          <div className="mt-2">
            <h3 className="font-mono text-lg font-normal">
              {item.job} | {item.awal_masuk} - {item.akhir}
            </h3>
            <p className="text-lg font-sans">
              Skills: {item.skills}
            </p>
          </div>
          <div className="font-sans text-lg mt-2">
            <ul className="list-disc list-outside">
              {item.job_desc.map((job, i) => (
                  <li key={i}>{job}</li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Experience;
