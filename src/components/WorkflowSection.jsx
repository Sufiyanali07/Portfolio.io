import React from "react";
import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { Skills } from "../constants";

const WorkflowSection = () => {
  return (
    <div id="Technical Skills" className="mt-12 sm:mt-20 px-3 sm:px-6">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center tracking-wide">
        Technical Skills &{" "}
        <span className="bg-gradient-to-r from-purple-950 to-purple-400 text-transparent bg-clip-text">
          Cloud Expertise
        </span>
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-12 mt-8 sm:mt-12">
        <div className="w-full lg:w-1/2">
          <img
            src={codeImg}
            alt="code"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
          {Skills.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
            >
              <div className="flex-shrink-0 text-green-400 bg-neutral-900 h-8 w-8 sm:h-10 sm:w-10 p-1.5 sm:p-2 flex justify-center items-center rounded-full">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="flex-1">
                <h5 className="text-lg sm:text-xl font-medium mb-1 sm:mb-2">
                  {item.title}
                </h5>
                <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowSection;
