import React from "react";
import people from "../assets/people.png";
import ai from "../assets/ai.png";

const Header = () => {
  return (
    <div
      className="container mx-auto px-6 flex flex-col lg:flex-row gap-5"
    >
      <div className="w-full lg:w-[50%] my-5 lg:my-16">
        <h1 className="textgradient text-[45px] lg:text-[48px] font-[800] font-primary leading-[58px] lg:pr-14">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="text-textColor font-primary my-10 text-[16px] md:text-lg font-[600] lg:pr-36 md:leading-6 lg:leading-8">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="flex mr-2 lg:mr-20">
          <input
            type="text"
            placeholder="Your Email Address"
            className="bg-footerColor py-3 md:py-5 px-4 rounded-lg shadow-black w-[70%] sm:w-[80%] border-footerColor border-solid outline-none text-white text-sm"
          />
          <button
            type="button"
            className="bg-orange-600 w-[30%] sm:w-[20%] rounded-md text-white text-sm font-[600] outline-none"
          >
            Get Started
          </button>
        </div>
        <div className="my-7 flex flex-col md:flex-row items-center">
          <img src={people} alt="people" className="mb-2" />
          <p className="text-textColor font-primary ml-2 text-[16px] font-[600] text-center">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center lg:items-center lg:w-[50%]">
        <img src={ai} alt="ai" className="max-h-[500px]" />
      </div>
    </div>
  );
};

export default Header;
