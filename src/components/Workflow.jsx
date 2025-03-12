import React from "react";
import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { Skills } from "../constants";

const WorkFlow = () => {
  return (
    <div id="Technical Skills" className="mt-20">
      <h2
        className="text-3xl sm:text-5xl lg:text-6xl text-center
       mt-6 tracking-wide"
      >
        Technical Skills &{" "}
        <span className="bg-gradient-to-r from-purple-950 to-purple-400 text-transparent bg-clip-text ">
          Cloud Expertise
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2 mt-25">
          <img src={codeImg} alt="code" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {Skills.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
              <p className="text-md text-neutral-500 ml-10">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
