import React from "react";
interface SelectMultiProps {
  options: string[];
}
function SelectMulti({ options }: SelectMultiProps) {
  return (
    <>
      <select className="w-full bg-black text-white rounded-lg text-center transform hover:-translate-y-0.5 duration-200 shadow-md shadow-black focus:outline-none">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectMulti;
