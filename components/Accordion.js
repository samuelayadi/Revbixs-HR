"use client";
import React, { useRef, useEffect, useState } from "react";

const Accordion = ({ question, answer, id, active, setActive }) => {
  const contentRef = useRef(null);
  const isOpen = active === id;
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  const toggleAccordion = () => {
    setActive(isOpen ? null : id);
  };

  return (
    <div className="flex-col flex gap-y-2 border-b py-4 px-4 transition-all">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <p className="lg:text-lg font-medium">{question}</p>
        <button className="text-2xl font-medium transition-transform duration-300">
          {isOpen ? "-" : "+"}
        </button>
      </div>

      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className={`overflow-hidden transition-all duration-500 ease-in-out`}
      >
        <p className="text-sm opacity-60 leading-6 pt-2">{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
