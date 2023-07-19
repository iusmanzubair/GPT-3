import React from "react";
import possibility from "../assets/possibility.png";

const Possibility = () => {
  return (
    <div
      className="container mx-auto px-6 md:px-0 flex flex-col-reverse md:flex-row justify-center items-center"
      id="possibilities"
    >
      <div className="md:w-[35%]">
        <img src={possibility} alt="possibilities" className="max-h-[500px]" />
      </div>
      <div className="md:w-[55%] flex flex-col md:px-20">
        <div>
          <p className="text-textColor font-[600] font-primary text-sm lg:text-lg cursor-pointer">
            Request Early Access to Get Started
          </p>
        </div>
        <div className="my-5">
          <h1 className="text-white textgradient text-4xl font-[700] py-2">
            The possibilities are beyond your imaginations
          </h1>
        </div>
        <div>
          <p className="text-textColor font-[600] font-primary mb-4">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
        </div>
        <div>
          <p className="text-subtextColor font-[600] font-primary mt-6 text-sm lg:text-lg mb-8 md:mb-0 cursor-pointer">
            Request Early Access to Get Started
          </p>
        </div>
      </div>
    </div>
  );
};

export default Possibility;
