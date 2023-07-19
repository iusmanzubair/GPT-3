import React from "react";
import Article from "../Article";
import blog01 from "../assets/blog01.png";
import blog02 from "../assets/blog02.png";
import blog03 from "../assets/blog03.png";
import blog04 from "../assets/blog04.png";
import blog05 from "../assets/blog05.png";

const Blog = () => {
  return (
    <div id="blog" className="container mx-auto px-6 md:px-16 flex flex-col">
      <div className="w-full text-left mb-20">
        <h1 className="textgradient font-primary font-[800] text-[40px] leading-[55px] md:text-[50px] md:leading-[75px] tracking-tighter ">
          A lot is happening, <br />
          We are blogging about it.
        </h1>
      </div>
      <div className="flex flex-col-reverse lg:flex-row lg:mb-20">
        <div className="flex-[0.75] mr-8 my-8 lg:my-0 w-full lg:w-[48%]">
          <Article
            imgUrl={blog01}
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
            date="Sep 16, 2022"
          />
        </div>
        <div className="flex-[1] grid grid-cols-1 md:grid-cols-2 gap-8">
          <Article
            imgUrl={blog02}
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
            date="Sep 16, 2022"
          />
          <Article
            imgUrl={blog03}
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
            date="Sep 16, 2022"
          />
          <Article
            imgUrl={blog04}
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
            date="Sep 16, 2022"
          />
          <Article
            imgUrl={blog05}
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
            date="Sep 16, 2022"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
