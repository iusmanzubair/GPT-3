import React from "react";
import google from "../assets/google.png";
import shopify from "../assets/shopify.png";
import slack from "../assets/slack.png";
import atlassian from "../assets/atlassian.png";
import dropbox from "../assets/dropbox.png";

const Brand = () => {
  return (
    <div className="container mx-auto my-6 px-6 sm:px-0 flex flex-wrap justify-center items-center gap-5 md:gap-10 lg:gap-20 min-h-[120px]">
      <div>
        <img src={google} alt="google" className="h-5 cursor-pointer" />
      </div>
      <div>
        <img src={slack} alt="slack" className="h-5 cursor-pointer" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" className="h-5 cursor-pointer" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" className="h-5 cursor-pointer" />
      </div>
      <div>
        <img src={shopify} alt="shopify" className="h-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default Brand;
