import { whyChooseUs } from "@/constants/whyChooseUs";
import React from "react";

const WhyChooseUsSection = () => {
  return (
    <>
      <div id="whychooseus" className="my-20 mx-auto flex flex-col gap-y-10 container max-w-[1200px] px-4">
        <div className="flex flex-col gap-y-4 items-center ">
          <p className="text-2xl lg:text-3xl text-center font-semibold lg:font-bold text-black">
            Why Choose Revbix HR ?
          </p>
          <div className="w-20 h-0.5 rounded-full bg-[#CF2722]"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-20 justify-center">
          {whyChooseUs?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center py-4 gap-y-8"
            >
              {item.icon}
              <div className="flex flex-col items-center gap-y-5">
                <p className="text-xl lg:text-2xl text-center font-semibold">
                  {item.title}
                </p>
                <p className="opacity-70 text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-20 w-full bg-[#FAF9F6] py-2"></div>
    </>
  );
};

export default WhyChooseUsSection;
