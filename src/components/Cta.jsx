import React from "react";

const Cta = () => {
  return (
    <div className="w-[90%] mx-auto px-6 md:px-0 my-36 rounded-2xl bargradient">
      <div className="md:px-10 py-11">
        <div>
          <p className="font-[700] text-sm font-primary mb-4 md:mb-0">
            Request Early Access to Get Started
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="font-[900] text-[24px] font-primary mb-6 md:mb-0 leading-8 sm:leading-normal">
            Register today & start exploring the endless possibilities.
          </h1>
          <button className="text-white bg-black px-10 py-4 rounded-full min-w-[180px]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
