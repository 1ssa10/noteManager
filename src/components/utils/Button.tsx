import React from "react";

interface ButtonProps {
  text: string;
}
function Button({ text }: ButtonProps) {
  return (
    <div className="w-full m-4">
      <button className=" bg-black px-3 py-2 w-full rounded-lg text-white   transform hover:-translate-y-0.5 duration-200 shadow-md shadow-black uppercase">
        {text}
      </button>
    </div>
  );
}

export default Button;
