import React from "react";
import Button from "./utils/Button";

function CreateCom() {
  return (
    <>
      {/* container */}
      <div className="flex flex-col rounded-lg max-w-5xl  items-center justify-center bg-gray-100 m-auto p-6  md:flex-row shadow-md shadow-black">
        <div className="flex flex-col w-full items-center justify-center p-4 m-4 space-y-6 ">
          <span className="w-max mb-2">Select category</span>
          <div className="w-full mb-4 ">
            <select className="w-full bg-black text-white rounded-lg text-center transform hover:-translate-y-0.5 duration-200 shadow-md shadow-black focus:outline-none">
              <option>cat 1</option>
              <option>cat 2</option>
              <option>cat 3</option>
              <option>cat 4</option>
              <option>cat 5</option>
              <option>cat 6</option>
            </select>
          </div>
          <div className="w-full md:border-b-2 text-center">OR</div>
          <span className="w-max my-4">Create New Category</span>
          <div>
            <input
              type="text"
              className=" border-2 border-black w-full px-2 rounded-lg placeholder:text-xs"
              placeholder="Enter Category Name"
            />
          </div>
          <Button text="Create category" />
        </div>
        <div className=" border-b-2 md:border-b-0 md:border-r-2 h-full w-full md:w-0 "></div>

        <div className="flex flex-col items-center justify-center p-2 m-4 w-full">
          <span className="w-max my-4">Enter the Note Title</span>
          <input
            type="text"
            className=" border-2 border-black w-full px-2 rounded-lg placeholder:text-xs "
            placeholder="Enter the Note Title"
          />
          <span className="w-max my-4">Enter the Note Content</span>
          <textarea
            className=" border-2 border-black w-full px-2 rounded-lg min-h-40 placeholder:text-xs placeholder:text-center  "
            placeholder="Enter the Note Title"
          />
          <Button text="ADD Note" />
        </div>
      </div>
    </>
  );
}

export default CreateCom;
