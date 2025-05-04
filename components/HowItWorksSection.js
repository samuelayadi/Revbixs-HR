import Image from "next/image";
import React from "react";
import WorkStepCard from "./WorkStepCard";
import { howItWorks } from "@/constants/howItWorks";

const HowItWorksSection = () => {
  return (
    <>
      <div id="howitworks" className="my-20 mx-auto container max-w-[1200px] px-4 flex flex-col gap-20 justify-between lg:items-center lg:flex-row ">
        <div className="flex flex-col gap-16 w-full lg:w-[50%]">
          <div className="flex flex-col gap-y-5">
            <p className="text-2xl lg:text-4xl font-semibold">How it works</p>
            <p className="opacity-60 leading-6">
              We believe that the most effective HR solutions are developed by
              collaborating closely with our clients to fully understand their
              objectives and challenges.
            </p>
          </div>

          <div className="w-full md:w-[60%]">
            <Image
              src={"/images/howItWorks.png"}
              alt="Creator Spotlight Banner"
              width={1000}
              height={500}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col  gap-y-10 lg:w-[50%]">
          {howItWorks.map((item, index) => (
            <WorkStepCard key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="mb-20 w-full bg-[#FAF9F6] py-2"></div>
    </>
  );
};

export default HowItWorksSection;
