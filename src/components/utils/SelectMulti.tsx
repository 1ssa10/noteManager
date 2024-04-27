import React from "react";
interface SelectMultiProps {
  options: string[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  value?: string;
}
function SelectMulti({ options, onChange, value }: SelectMultiProps) {
  return (
    <>
      <select
        value={value}
        onChange={onChange}
        className="w-full bg-black text-white rounded-lg text-center transform hover:-translate-y-0.5 duration-200 shadow-md shadow-black focus:outline-none"
      >
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
