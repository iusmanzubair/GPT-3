import React from "react";

const Article = ({ imgUrl, title, date }) => {
  return (
    <div className="w-full h-full flex flex-col bg-footerColor">
      <div className="h-full w-full bg-footerColor">
        <img src={imgUrl} alt="blog" className="h-full w-full" />
      </div>
      <div className="flex flex-col justify-between py-4 px-6 h-full">
        <div>
          <p className="text-white font-bold font-primary text-[12px] leading-[35px]">
            {date}
          </p>
          <h3 className="font-primary font-[800] text-[15px] leading-[25px] sm:text-[18px] sm:leading-[25px] text-white mb-12">
            {title}
          </h3>
        </div>
        <p className="cursor-pointer text-white font-bold font-primary text-[12px] leading-[35px]">
          Read Full Article
        </p>
      </div>
    </div>
  );
};

export default Article;
