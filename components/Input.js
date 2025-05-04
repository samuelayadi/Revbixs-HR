import React from "react";

const Input = ({ value, placeholder }) => {
  return (
    <>
      <fieldset className="flex flex-col gap-y-2">
        <p className="">{value}</p>
        <input
          type="text"
          className="w-full py-3 px-4 border rounded-xl focus:outline-[#CF2722]"
          placeholder={placeholder}
        />
      </fieldset>
    </>
  );
};

export default Input;
