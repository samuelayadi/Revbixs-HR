"use client";
import React, { useState } from "react";
import Accordion from "./Accordion";
import { FAQ } from "@/constants/FAQ";

const FAQSection = () => {
  const [active, setActive] = useState(null);
  return (
    <>
      <div id="faq" className="my-20 mx-auto flex flex-col lg:flex-row gap-10 container max-w-[1200px] px-4">
        <div className="flex flex-col gap-y-10 w-full lg:w-1/2">
          <p className="text-2xl font-semibold">Revbix HR FAQs</p>
          <p className="text-sm opacity-60 leading-6">
            We pride ourselves on being a top HR partner—offering robust
            resource libraries and clear, concise answers to help our clients
            navigate every HR challenge.
          </p>
          <div className="flex gap-x-8 items-center">
            <button className="px-10 py-3 border font-medium text-sm text-black rounded-full">
              More Questions
            </button>

            <a
              href=""
              className="underline text-sm font-medium underline-offset-4"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex flex-col border-t gap-y-4 w-full lg:w-1/2">
          {FAQ?.map((item, index) => (
            <Accordion
              key={index}
              {...item}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
      </div>
      <div className="mb-20 w-full bg-[#FAF9F6] py-2"></div>
    </>
  );
};

export default FAQSection;
