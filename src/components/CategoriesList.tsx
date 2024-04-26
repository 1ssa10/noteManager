import React from "react";
import Category from "./utils/Category";
interface CategoriesListprops {
  categories: string[];
}
function CategoriesList({ categories }: CategoriesListprops) {
  return (
    <>
      {/* container */}
      <div className=" w-full mx-auto m-8 p-6 bg-black rounded-lg shadow-md shadow-black overflow-x-auto overflow-y-hidden">
        <div className="flex w-max items-center justify-center space-x-6 mx-auto ">
          {categories.map((cat) => (
            <Category key={cat} name={cat} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoriesList;
