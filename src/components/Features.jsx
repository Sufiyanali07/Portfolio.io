import React from "react";
import { Education } from "../constants";

const Features = () => {
  return (
    <div
      id="Education"
      className="relative mt-12 sm:mt-20 border-b border-neutral-800 min-h-[600px] sm:min-h-[800px] px-3 sm:px-6 lg:px-8"
    >
      <div className="text-center">
        <span className="bg-neutral-900 text-purple-500 rounded-full h-6 text-xs sm:text-sm font-medium px-3 py-1 uppercase">
          Education
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl mt-6 sm:mt-10 lg:mt-12 tracking-wide">
          Education &{" "}
          <span className="bg-gradient-to-r from-purple-950 to-purple-400 text-transparent bg-clip-text">
            Learning Journey
          </span>
        </h2>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center mt-8 sm:mt-12 lg:mt-16 gap-4 sm:gap-6 lg:gap-8">
          {Education.map((education, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-md"
            >
              <div className="h-full p-4 sm:p-6 lg:p-8 border border-neutral-700 rounded-xl hover:border-purple-400 transition-all duration-300 bg-black/30 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 flex h-8 w-8 sm:h-10 sm:w-10 p-1.5 sm:p-2 bg-neutral-900 text-purple-400 justify-center items-center rounded-full">
                    {education.icon}
                  </div>
                  <div className="flex-1">
                    <h5 className="text-lg sm:text-xl lg:text-2xl font-medium mb-2 sm:mb-3">
                      {education.text}
                    </h5>
                    <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
                      {education.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
