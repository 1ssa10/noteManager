import React from "react";

function Seacrh() {
  return (
    <div className=" flex  flex-col  items-center justify-center  p-6 space-y-4 md:flex-row md:justify-between md:space-y-0 ">
      <input
        type="text"
        placeholder="Search"
        className="border border-gray-600 rounded-md w-full p-3 md:max-w-lg focus:outline-none "
      />
      <button className=" bg-slate-600 px-3 py-2 rounded-lg text-white  transform hover:-translate-y-0.5 duration-200 shadow-md shadow-black">
        Filter
      </button>
    </div>
  );
}

export default Seacrh;
