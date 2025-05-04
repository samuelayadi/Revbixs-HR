import React from "react";

const WorkStepCard = ({ icon, title, description }) => {
  return (
    <>
      <div className="flex gap-x-5 lg:items-center">
        <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-xl flex justify-center items-center text-white bg-black">
          {icon}
        </div>
        <div className="flex flex-col gap-y-3 w-[85%]">
          <p className="text-lg lg:text-2xl font-medium">{title}</p>
          <p className="text-sm opacity-60">{description}</p>
        </div>
      </div>
    </>
  );
};

export default WorkStepCard;
