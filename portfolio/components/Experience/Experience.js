import { Judul } from "../atoms";

const Experience = () => {
  return (
    <div className="min-h-screen mt-5" id="experience">
      <Judul text="Experience" width="w-40" height="h-2" fontSize="text-5xl" fontWeight="font-bold"/>
      <div className="container mx-auto mt-5 flex flex-wrap justify-center items-center">
      <div className="sm:w-1/2 lg:w-1/3 text-white">
        <div className="p-8 border-2 border-white">
          <Judul text="Lorem" width="w-full" height="h-2" fontSize="text-2xl" fontWeight="font-medium"/>
          <div className="mt-2">
            <h3 className="font-mono text-xl font-normal">
              Lorem ipsum | July 2020 - Present
            </h3>
            <p className="text-lg font-serif">
              Skills: Lorem, Lorem, Lorem, Lorem
            </p>
          </div>
          <div className="font-sans text-lg mt-2">
            <ul className="list-disc list-outside">
              <li>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </li>
              <li>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </li>
              <li>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
