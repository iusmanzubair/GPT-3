import React from "react";
import Article from "../Article";
import blog01 from "../assets/blog01.png";
import blog02 from "../assets/blog02.png";
import blog03 from "../assets/blog03.png";
import blog04 from "../assets/blog04.png";
import blog05 from "../assets/blog05.png";

const Blog = () => {
  return (
    <section className="w-[90%] mx-auto" id="blog">
      <div className="container mx-auto md:px-6 text-white">
        <div className="mb-16">
          <h1 className="textgradient text-[3rem] leading-[1.3] font-[700] py-3">
            A lot is happening,
            <br /> We are blogging about it.
          </h1>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-start justify-center lg:px-24">
          <div className="lg:w-[40%]">
            <div>
              <img src={blog01} alt="blog" className="lg:h-[250px] lg:w-[350px]" />
            </div>
            <div className="bg-footerColor lg:w-[350px] lg:h-[373px] px-6 py-8 flex flex-col justify-between">
              <div>
                <p className="font-[600] font-primary text-[12px]">
                  Sep 26, 2022
                </p>
                <h1 className="my-7 font-[600] text-lg">
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </h1>
              </div>
              <div>
                <p className="text-primary text-[12px] cursor-pointer">
                  Read Full Article
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-10">
            <Article
              imgUrl={blog02}
              date="Sep 26, 2022"
              text="Read Full Article"
              title="GPT-3 and Open AI is the future. Let us exlore how it is?"
            />
            <Article
              imgUrl={blog03}
              date="Sep 26, 2022"
              text="Read Full Article"
              title="GPT-3 and Open AI is the future. Let us exlore how it is?"
            />
            <Article
              imgUrl={blog04}
              date="Sep 26, 2022"
              text="Read Full Article"
              title="GPT-3 and Open AI is the future. Let us exlore how it is?"
            />
            <Article
              imgUrl={blog05}
              date="Sep 26, 2022"
              text="Read Full Article"
              title="GPT-3 and Open AI is the future. Let us exlore how it is?"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
