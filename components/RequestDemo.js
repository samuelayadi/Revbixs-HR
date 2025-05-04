import Image from "next/image";
import React from "react";
import Input from "./Input";
import SelectInput from "./SelectInput";
import { EmployeeSizeOptions, roles } from "@/constants/requestDemoOptions";

const RequestDemo = () => {
  return (
    <>
      <div
        id="demo"
        className="max-w-[1200px] mx-auto px-4 py-20 flex flex-col lg:flex-row gap-10"
      >
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          <div className="flex flex-col gap-y-3">
            <p className="text-2xl lg:text-4xl font-semibold">
              A trial will convince you
            </p>
            <p className="opacity-60 leading-6">
              We believe that the most effective HR solutions are developed by
              collaborating closely with our clients to fully understand their
              objectives and challenges.
            </p>
          </div>
          <div className="w-full">
            <Image
              src={"/images/demo_image.avif"}
              alt="Creator Spotlight Banner"
              width={1000}
              height={500}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>

        <div className="py-10 px-4 md:px-6 w-full lg:w-1/2 bg-[#FAF9F7] flex flex-col gap-y-6 rounded-xl">
          <div className="grid md:grid-cols-2 items-center gap-5">
            <Input value={"First Name"} placeholder={""} />
            <Input value={"Last Name"} placeholder={""} />
          </div>

          <div className="grid md:grid-cols-2 items-center gap-5">
            <Input value={"Phone Number"} placeholder={""} />
            <Input value={"Work Email"} placeholder={""} />
          </div>

          <div className="grid md:grid-cols-2 items-center gap-5">
            <Input value={"Company name"} placeholder={""} />
            <SelectInput
              value={"Role"}
              placeholder="Please Select"
              options={roles}
            />
          </div>
          <div className="grid md:grid-cols-2 items-center gap-5">
            <SelectInput
              value={"Employee Headcount"}
              placeholder="Please Select"
              options={EmployeeSizeOptions}
            />
          </div>

          <button className="px-5 py-3 rounded-xl font-medium bg-[#CF2722] text-white">
            Schedule Demo
          </button>
        </div>
      </div>
    </>
  );
};

export default RequestDemo;
