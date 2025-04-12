import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import resume1 from "../assets/sufiyanali-resume.pdf";
import resume2 from "../assets/AWS cloud.pdf";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-4 sm:mt-8 lg:mt-12 px-3 sm:px-6">
      <h1 className="text-2xl sm:text-4xl lg:text-6xl xl:text-7xl text-center tracking-wide leading-tight animate-fade-in">
        Hi, I'm Sufiyan Ali –{" "}
        <span className="bg-gradient-to-r from-purple-950 to-purple-400 text-transparent bg-clip-text font-bold">
          Web Developer & Cloud Enthusiast
        </span>
      </h1>
      <p className="mt-6 sm:mt-8 lg:mt-10 text-sm sm:text-base lg:text-lg text-center text-neutral-500 max-w-4xl leading-relaxed px-2">
        "A passionate web developer and cloud enthusiast eager to build scalable
        applications and explore AWS services. Always learning and adapting to
        new technologies to create efficient and secure solutions."
      </p>
      <div className="flex flex-col sm:flex-row justify-center my-6 sm:my-8 lg:my-10 gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md">
        <a
          href={resume1}
          download="Web resume"
          className="bg-gradient-to-r from-purple-950 to-purple-400 py-2.5 sm:py-3 px-4 sm:px-6 rounded-md text-white text-sm sm:text-base font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 text-center"
        >
          Web Resume
        </a>
        <a
          href={resume2}
          download="Cloud resume"
          className="py-2.5 sm:py-3 px-4 sm:px-6 rounded-md border border-purple-400 text-purple-400 text-sm sm:text-base font-medium hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 text-center"
        >
          Cloud Resume
        </a>
      </div>
      <div className="flex flex-col md:flex-row mt-6 sm:mt-8 lg:mt-10 justify-center gap-3 sm:gap-4 w-full max-w-6xl">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="rounded-lg w-full md:w-1/2 border-2 border-purple-400 shadow-lg hover:shadow-xl transition-all duration-300 aspect-video object-cover"
        >
          <source src={video1} type="video/mp4" />
          Your Browser does not support the video tag.
        </video>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="rounded-lg w-full md:w-1/2 border-2 border-purple-400 shadow-lg hover:shadow-xl transition-all duration-300 aspect-video object-cover"
        >
          <source src={video2} type="video/mp4" />
          Your Browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
