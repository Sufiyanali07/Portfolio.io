import React from "react";
import { Projects } from "../constants";
const project = () => {
  return (
    <div className="mt-20 " id="Projects">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Projects
      </h2>
      <div className="flex flex-wrap">
        {Projects.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-1 mt-5 text-center">{option.title}</p>
              <ul>
                {option.details.map((detail, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <span className="ml-12">{detail}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://github.com/Sufiyanali07"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-purple-500 border border-purple-900 rounded-lg transition duration-200"
              >
                GitHub Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default project;
