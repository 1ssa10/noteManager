import React from "react";
interface TextinputProps {
  placeholder: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
}
function Textinput({ placeholder, name, ...props }: TextinputProps) {
  return (
    <>
      <input
        type="text"
        className=" border-2 border-black w-full px-2 rounded-lg placeholder:text-xs "
        placeholder={placeholder}
        value={props.value}
        name={name}
        onChange={props.onChange}
      />
    </>
  );
}

export default Textinput;
