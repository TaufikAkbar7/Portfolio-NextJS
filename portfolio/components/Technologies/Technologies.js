import { Judul } from "../atoms";
import Image from "next/image";
import react from "../../public/assets/react.png";
import mongo from "../../public/assets/mongo.png";
import node from "../../public/assets/node.png";
import express from "../../public/assets/express.png";
import redux from "../../public/assets/redux.png";
import bootstrap from "../../public/assets/bootstrap.png";

const Technologies = () => {
  return (
    <div className="mt-5 min-h-screen flex justify-center items-center flex-col">
      <Judul
        text="Technologies"
        width="w-40"
        height="h-2"
        fontSize="text-5xl"
        fontWeight="font-bold"
      />
      <div className="container mx-auto flex flex-wrap justify-center  mt-20">
        <div className="h-40 w-40 bg-white shadow-xl ml-2 rounded-full flex justify-center items-center p-5 m-2 animate-bounce">
          <Image src={react} alt="react" />
        </div>
        <div className="h-40 w-40 bg-white shadow-xl ml-2 rounded-full flex justify-center items-center p-5 m-2 animate-bounce">
          <Image src={mongo} alt="mongo" />
        </div>
        <div className="h-40 w-40 bg-white shadow-xl ml-2 rounded-full flex justify-center items-center p-5 m-2 animate-bounce">
          <Image src={node} alt="node" />
        </div>
        <div className="h-40 w-40 bg-white shadow-xl ml-2 rounded-full flex justify-center items-center p-5 m-2 animate-bounce">
          <Image src={express} alt="express" />
        </div>
        <div className="h-40 w-40 bg-white shadow-xl ml-2 rounded-full flex justify-center items-center p-5 m-2 animate-bounce">
          <Image src={redux} alt="redux" />
        </div>
        <div className="h-40 w-40 bg-white shadow-xl ml-2 rounded-full flex justify-center items-center p-8 m-2 animate-bounce">
          <Image src={bootstrap} alt="bootstrap" />
        </div>
      </div>
      <p className="mt-10 mb-10 w-11/12 md:max-w-xl text-center inline-block text-xl md:text-2xl font-dosis text-white">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
      </p>
    </div>
  );
};

export default Technologies;
