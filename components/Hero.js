import React from "react";
import { PiChartLineUp } from "react-icons/pi";

const Hero = () => {
  return (
    <>
      <div className="mx-auto my-16 lg:my-10 max-w-[1200px]">
        <div className="mx-auto w-[80%] flex flex-col gap-y-6">
          <button className="mx-auto px-5 py-1 rounded-full border-white border flex items-center gap-x-4">
            <PiChartLineUp className="text-white text-2xl" />
            <p className="text-sm text-white">Built for Growth</p>
          </button>
          <h1 className="text-3xl lg:text-6xl text-center leading-10 lg:leading-20 font-bold bg-gradient-to-r from-white to-[#54545491] bg-clip-text nunito text-transparent">
            Revolutionize Your HR Workflow
          </h1>
          <p className="text-white opacity-70 text-center">
            Revbix centralizes employee data and automates every step—from
            onboarding and time‑tracking to payroll and performance—so your team
            spends less time on admin and more time on what matters.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
