import React from "react";

interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}
function Button({ text, onClick, type }: ButtonProps) {
  return (
    <div className="w-full my-2 mx-auto">
      <button
        className=" bg-black  px-3 py-2 w-full rounded-lg text-white   transform hover:-translate-y-0.5 duration-200 shadow-md shadow-black uppercase"
        onClick={onClick}
        type={type}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
