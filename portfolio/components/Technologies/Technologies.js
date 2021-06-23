import { Judul } from "../atoms";
import Image from "next/image";
import { tech } from "../../content/data";

const Technologies = () => {
  return (
    <div className="mt-10 min-h-screen flex justify-center items-center flex-col" id="tech">
      <Judul
        text={tech.title}
        width="w-40"
        height="h-2"
        fontSize="text-5xl"
        fontWeight="font-bold"
      />
      <div className="container mx-auto flex flex-wrap justify-center  mt-20">
        {tech.img_tech.map((img, i) => (
          <div className="h-40 w-40 bg-white shadow-xl ml-2 rounded-full flex justify-center items-center p-5 m-2 animate-bounce" key={i}>
          <Image src={img} alt={`img-${i}`} />
        </div>
        ))}
      </div>
      <p className="mt-10 mb-10 w-11/12 md:max-w-xl text-center inline-block text-xl md:text-2xl font-dosis text-white">
        {tech.desc}
      </p>
    </div>
  );
};

export default Technologies;
