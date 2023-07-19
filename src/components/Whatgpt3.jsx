import React from "react";
import Feature from "../Feature";

const Whatgpt3 = () => {
  return (
    <section className="w-[90%] mx-auto" id="wgpt3">
    <div className="container mx-auto px-6 md:px-0 boxgradient">
      <div className="flex flex-col md:flex-row py-16 md:px-16">
        <div className="flex flex-col justify-center items-start mb-4 md:mb-0 md:w-[40%]">
          <div className="h-1 w-10 bargradient my-1"></div>
          <h1 className="text-white text-xl font-[700]">What is GPT3</h1>
        </div>
        <div className="md:w-[60%]">
          <p className="text-textColor font-[600] font-primary">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:items-center py-6 md:px-16 my-5">
        <div className="max-w-[510px]">
          <h1 className="text-3xl textgradient font-[700] leading-10 mb-6 md:mb-0">
            The possibilities are beyond your imaginations
          </h1>
        </div>
        <div>
          <p className="text-subtextColor font-[600] cursor-pointer">Explore the library</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard on ought."
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entarance to on by. As put impossible own apartment to."
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entarance to on by. As put impossible own apartment to."
        />
      </div>
    </div>
    </section>
  );
};

export default Whatgpt3;
