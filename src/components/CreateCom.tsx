import React from "react";
import Button from "./utils/Button";
import Textinput from "./utils/Textinput";
import SelectMulti from "./utils/SelectMulti";

function CreateCom() {
  return (
    <>
      {/* container */}
      <div className="flex flex-col rounded-lg max-w-5xl  items-center justify-center bg-gray-100 m-auto p-6  md:flex-row shadow-md shadow-black overflow-y-auto overflow-x-hidden">
        <div className="flex flex-col w-full items-center justify-center p-4 m-4 space-y-6 ">
          <span className="w-max mb-2">Select category</span>
          <div className="w-full mb-4 ">
            <SelectMulti options={["cat 1", "cat 2", "cat 3", "cat 4"]} />
          </div>
          <div className="w-full border-b-2 text-center">OR</div>
          <span className="w-max my-4">Create New Category</span>
          <div>
            <Textinput placeholder="Enter Category Name" />
          </div>
          <Button text="Create category" />
        </div>
        <div className=" border-b-2 md:border-b-0 md:border-r-2 h-full w-full md:w-0 "></div>

        <div className="flex flex-col items-center justify-center p-2 m-4 w-full space-y-1">
          <span className="w-max my-4">Enter the Note Title</span>
          <Textinput placeholder="Enter the Note Title" />
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
