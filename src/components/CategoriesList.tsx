"use client";
import React, { useContext, useEffect, useState } from "react";
import Category from "./utils/Category";
import NotesContext from "./NotesContext";
import { string } from "yup";
import { fetchNotes } from "@/backend/GetNodes";
interface CategoriesListprops {
  categories: string[];
}
interface Note {
  id: string;
  title: string;
  content: string;
  category: string;
}
function CategoriesList({ categories }: CategoriesListprops) {
  const { cats, setCat } = useContext(NotesContext);

  return (
    <>
      {/* container */}
      <div className=" w-full mx-auto m-8 p-6 bg-black rounded-lg shadow-md shadow-black overflow-x-auto overflow-y-hidden">
        <div className="flex w-max items-center justify-center space-x-6 mx-auto ">
          {cats.length > 0 ? (
            cats.map((cat) => (
              <Category key={cat} name={cat} onClick={() => setCat(cat)} />
            ))
          ) : (
            <Category name={"Please create a category"} />
          )}
          <Category name={"all"} onClick={() => setCat("")} />
        </div>
      </div>
    </>
  );
}

export default CategoriesList;
