import React from "react";

const Footer = () => {
  return (
    <div className="bg-footerColor flex flex-col items-center pt-36">
      <div className="flex items-center justify-center flex-col">
        <div className="md:w-[70%]">
          <h1 className="textgradient text-[3rem] font-[700] text-center leading-[1.2]">
            Do you want to into the future before others
          </h1>
        </div>
        <div>
          <button className="border-2 my-10 py-4 px-8 text-white">
            Request Early Access
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-start justify-evenly w-full pt-24 pb-16 gap-16 text-left px-24 md:px-0">
        <div>
          <h1 className="text-white text-3xl font-[700] pb-4">GPT-3</h1>
          <p className="text-white font-primary text-sm">Usman Zubair Inc.<br/> All Rights Reserved</p>
        </div>
        <div className="text-white flex flex-col gap-10 text-sm">
          <h1 className="font-[600] text-lg">Links</h1>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="text-white flex flex-col gap-10 text-sm">
          <h1 className="font-[600] text-lg">Company</h1>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="text-white flex flex-col gap-10 text-sm">
          <h1 className="font-[600] text-lg">Get in touch</h1>
          <p>Usman Zubair</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div>
        <p className="text-white mb-4 font-primary text-sm">© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
