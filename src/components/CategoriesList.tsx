import React from "react";

function CategoriesList() {
  return (
    <>
      {/* container */}
      <div className=" w-full mx-auto m-8 p-6 bg-black rounded-lg shadow-md shadow-black overflow-x-auto overflow-y-hidden">
        <div className="flex w-max items-center justify-center space-x-6 mx-auto ">
          <div className="  px-3 py-2 bg-white rounded-lg transform hover:-translate-y-0.5 duration-200">
            {/* category 1 */}
            <h1 className="text-lg font-semibold text-black whitespace-nowrap">
              Category 1
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesList;
