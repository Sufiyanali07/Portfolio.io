import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import resume1 from "../assets/sufiyanali-resume.pdf";
import resume2 from "../assets/AWS cloud.pdf";
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide ">
        Hi, I'm Sufiyan Ali –{" "}
        <span className="bg-gradient-to-r from-purple-950 to-purple-400 text-transparent bg-clip-text">
          {" "}
          Web Developer & Cloud Enthusiast
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        "A passionate web developer and cloud enthusiast eager to build scalable
        applications and explore AWS services. Always learning and adapting to
        new technologies to create efficient and secure solutions."
      </p>
      <div className="flex justify-center my-10">
        <a
          href={resume1}
          download="Web resume"
          className="bg-gradient-to-r from-purple-950 to-purple-400 py-3 px-4 mx-3 rounded-md"
        >
          {" "}
          Web Resume
        </a>
        <a
          href={resume2}
          download="Cloud resume"
          className="py-3 px-4 mx-3 rounded-md border"
        >
          Cloud Resume
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your Browser does not support the video tag.
        </video>

        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your Browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
