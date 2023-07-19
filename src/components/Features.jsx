import React from "react";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..",
  },
];
const Features = () => {
  return (
    <div
      className="container mx-auto px-6 md:px-0 my-36 flex flex-col md:flex-row items-start justify-center"
      id="features"
    >
      <div className="max-w-[300px] lg:max-w-[450px] py-5 md:px-16 lg:mr-24">
        <h1 className="text-2xl textgradient font-[700] leading-8 mb-12 md:mb-16">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p className="text-subtextColor text-sm font-primary">
          Request Early Access to Get Started
        </p>
      </div>
      <div className="flex flex-col gap-10 py-5">
        {featuresData.map((item) => (
          <div className="flex flex-col md:flex-row">
            <div className="md:w-[25%] mb-8 md:mb-0">
              <div className="h-1 w-10 bargradient my-1"></div>
              <h1 className="text-white font-[700] text-[18px] lg:mr-6 min-w-[120px]">
                {item.title}
              </h1>
            </div>
            <div className="text-start md:w-[75%]">
              <p className="text-textColor font-primary font-[600] px-2 lg:px-16">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
