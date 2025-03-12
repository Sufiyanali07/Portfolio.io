import React from "react";
import { Education } from "../constants";

const FeatureSection = () => {
  return (
    <div
      id="Education"
      className="relative mt-20 border-b border-neutral-800 min-h-[800px] "
    >
      <div className="text-center">
        <span
          className="bg-neutral-900 text-purple-500 rounded-full h-6
        text-sm font-medium py-1 uppercase"
        >
          Education
        </span>
        <h2
          className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide
        "
        >
          Education &{" "}
          <span className="bg-gradient-to-r from-purple-950 to-purple-400 text-transparent bg-clip-text">
            {""} Learning Journey
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {Education.map((education, index) => (
          <div key={index} className="w-full sm:1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-purple-400 justify-center items-center rounded-full">
                {education.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl ">{education.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {education.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
