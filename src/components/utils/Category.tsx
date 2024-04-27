import React from "react";
interface CategoryProps {
  name: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function Category({ name, onClick }: CategoryProps) {
  return (
    // cat container
    <div
      onClick={onClick}
      className=" w-full  px-3 py-2 bg-white rounded-lg transform hover:-translate-y-0.5 duration-200"
    >
      {/* category name */}
      <h1 className="text-lg font-semibold text-black whitespace-nowrap">
        {name}
      </h1>
    </div>
  );
}

export default Category;
