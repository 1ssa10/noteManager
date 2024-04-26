import React from "react";
interface NoteCardProps {
  title: string;
  content: string;
}
function NoteCard({ title, content }: NoteCardProps) {
  return (
    <>
      {/* note Container */}
      <div className=" flex flex-col  rounded-lg p-4 bg-black text-white ">
        {/* note elements*/}
        <div className=" relative overflow-hidden">
          <input
            type="checkbox"
            className=" peer absolute top-0 inset-x-0 w-full h-12 z-10 opacity-0 cursor-pointer"
          />
          {/* note Title */}
          <div className="h-12 w-full pl-5 flex items-center">
            <h1 className="text-lg font-semibold text-white">{title}</h1>
          </div>
          {/* arrow icon  */}
          <div className=" absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          {/* Note Content */}
          <div className="overflow-auto transition-all duration-500 max-h-0 peer-checked:max-h-screen ">
            <div className="p-4 text-xs tracking-normal leading-4  ">
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoteCard;
