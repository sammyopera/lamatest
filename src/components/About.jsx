import React from "react";
import sittingLama from "../images/siting_lama.png";
import zigzagPattern from "../images/zig.svg"; // Import the SVG

const About = () => {
  return (
    <div className="bg-dalai_red pb-10 px-0">
      <div
        style={{
          backgroundImage: `url(${zigzagPattern})`,
          backgroundSize: "auto 40px",
          backgroundRepeat: "repeat-x",
        }}
      >
        <div className="flex justify-center">
          <p className="text-3xl font-extrabold py-10 pl-5 text-[#ffff] font-cust1">
            ABOUT LAMA
          </p>
        </div>

        <div className="flex flex-wrap justify-between items-center md:flex-nowrap p-4 md:p-4 lg:p-4">
          <div className="w-full md:w-2/5 lg:w-2/5 flex justify-center md:justify-start">
            <img
              src={sittingLama}
              className="w-3/4 sm:w-1/2 md:w-full lg:w-3/4 xl:w-3/4"
              alt="Sitting Lama"
            />
          </div>
          <div className="flex flex-col justify-center items-center text-center md:text-left md:items-start w-full md:w-3/5 lg:w-3/5 mt-4 md:mt-0">
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl px-4 md:px-4 lg:px-4 text-[#ffff] leading-normal md:leading-relaxed">
              The Uncle Lama meme project aims to build a strong,
              community-driven narrative with the help of strategic influencer
              collaborations, engaging content, and targeted promotions. By
              leveraging the gentle yet assertive nature of Uncle Lama, we will
              create a project that resonates with audiences worldwide.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
