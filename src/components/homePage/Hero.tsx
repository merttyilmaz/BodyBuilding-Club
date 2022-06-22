import React from "react";

const Banner = require("../../assets/images/banner.png");

const Hero = () => {
  return (
    <div className="relative px-10 py-20">
      <div className="flex justify-between">
        <div className="space-y-6">
          <h2 className="font-semibold text-red-500 ">Buff Club</h2>
          <h1 className="font-bold ">
            Sweat, Smile <br /> Repeat
          </h1>
          <h6 className="text-xl ">
            Check out the most effective exercises for your body
          </h6>
          <button className="px-4 py-2 text-xl text-white bg-red-500 rounded-lg">
            Explore Exercises
          </button>
          <h1 className="hidden font-semibold text-red-500 xl:block opacity-10 text-[200px]">
            Exercises
          </h1>
        </div>
        <img
          src={Banner}
          alt="banner"
          className="hidden xl:block xl:absolute xl:right-4 xl:-top-36 w-[700px] h-[900px]"
        />
      </div>
    </div>
  );
};

export default Hero;
