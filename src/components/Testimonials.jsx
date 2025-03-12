import React from "react";
import { services } from "../constants";

const Testimonials = () => {
  return (
    <div id="What I Offer" className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        "What I Offer –{" "}
        <span className="bg-gradient-to-r from-purple-950 to-purple-400 text-transparent bg-clip-text">
          {""} Skills & Solutions"
        </span>
      </h2>
      <div className="flex flex-wrap justify-center ">
        {services.map((service, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin ">
              <p>{service.text}</p>
              <div className="flex mt-8 items-center">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={service.image}
                  alt={service.title}
                />
              </div>
              <h2 className="text-lg font-semibold">{service.title}</h2>
            </div>
          </div>
        ))}
      </div>
      <hr className="p-5 mt-15 border-neutral-800" />
    </div>
  );
};

export default Testimonials;
