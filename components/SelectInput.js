import React from "react";

const SelectInput = ({ value, placeholder, options = [] }) => {
  return (
    <fieldset className="flex flex-col gap-y-2">
      {value && <p className="">{value}</p>}
      <select
        name="Value"
        className="w-full py-3 px-2 border rounded-xl opacity-90 focus:outline-[#CF2722]"
        defaultValue=""
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value}>
            {opt?.value}
          </option>
        ))}
      </select>
    </fieldset>
  );
};

export default SelectInput;
