import React from "react";
import { Projects as ProjectsList } from "../constants";

const Projects = () => {
  return (
    <div className="mt-12 sm:mt-20 px-3 sm:px-6 lg:px-8" id="Projects">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center mb-6 sm:mb-8 tracking-wide">
        Projects
      </h2>
      <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6">
        {ProjectsList.map((option, index) => (
          <div
            key={index}
            className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
          >
            <div className="h-full p-4 sm:p-6 lg:p-8 border border-neutral-700 rounded-xl hover:border-purple-400 transition-all duration-300 bg-black/30 backdrop-blur-sm flex flex-col">
              <p className="text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 text-center font-medium">
                {option.title}
              </p>
              <ul className="space-y-2 sm:space-y-3 flex-1">
                {option.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="ml-2 sm:ml-4 text-xs sm:text-sm lg:text-base leading-relaxed">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 sm:pt-6 flex flex-col gap-3">
                <a
                  href={option.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center text-center w-full h-10 sm:h-12 p-4 tracking-tight text-sm sm:text-base hover:bg-purple-500 border border-purple-900 rounded-lg transition duration-200"
                >
                  View on GitHub
                </a>
                <a
                  href={option.netlifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center text-center w-full h-10 sm:h-12 p-4 tracking-tight text-sm sm:text-base hover:bg-purple-500 border border-purple-900 rounded-lg transition duration-200"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
