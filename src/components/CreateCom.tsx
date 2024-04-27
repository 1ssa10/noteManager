"use client";
import React, { useContext, useEffect, useState } from "react";
import Button from "./utils/Button";
import Textinput from "./utils/Textinput";
import SelectMulti from "./utils/SelectMulti";
import NotesContext from "./NotesContext";
import { createNewNote, fetchExistNotes, fetchNotes } from "@/backend/GetNodes";
import Popup from "reactjs-popup";

interface errors {
  catNotFound?: string;
  noteNoteFound?: string;
  alreadyexist?: string;
}
function CreateCom() {
  const { cats, loading, setFactor, factor, cat } = useContext(NotesContext);

  const [selectedValue, setSelectedValue] = useState("");
  const [newCat, setnewCat] = useState("");
  const [newNote, setnewNote] = useState("");
  const [newContent, setContent] = useState("");
  const [errors, setErrors] = useState<errors>({});
  const [isOpen, setIsOpen] = useState(false);

  const handlevalidation = async () => {
    const error = {} as errors;

    if (selectedValue == "" && newCat == "") {
      error.catNotFound = " Please select or create category";
    }
    if (selectedValue !== "" && newCat !== "") {
      error.catNotFound = " Please choose between creating and selecting";
    }
    if (newNote == "" || newContent == "") {
      error.noteNoteFound = " Enter all Note details";
    }
    if (selectedValue) {
      const exist = await fetchExistNotes(selectedValue, newNote);

      if (exist.length > 0) {
        error.alreadyexist = "note title already exist in this category";
      }
    }
    if (newCat) {
      if (cats.includes(newCat)) {
        error.alreadyexist = "category already exist";
      }
      const exist = await fetchExistNotes(newCat, newNote);
      if (exist.length > 0) {
        error.alreadyexist = "category already exist";
      }
    }

    if (Object.keys(error).length > 0) {
      setErrors(error);
    } else {
      setErrors({});
      if (selectedValue) {
        await createNewNote(newNote, newContent, selectedValue);
      } else {
        await createNewNote(newNote, newContent, newCat);
      }

      setFactor((prevFactor) => prevFactor + 1);
      setIsOpen(true);
    }
  };
  const closePopup = () => setIsOpen(false);
  return (
    <>
      {/* container */}
      <div className="flex flex-col rounded-lg max-w-5xl  items-center justify-center bg-gray-100 m-auto p-6  md:flex-row shadow-md shadow-black overflow-y-auto overflow-x-hidden">
        <div className="flex flex-col w-full items-center justify-center p-4 m-4 space-y-6 ">
          <span className="w-max mb-2">Select category</span>
          <div className="w-full mb-4 ">
            <SelectMulti
              options={["", ...cats]}
              value={selectedValue}
              onChange={(e) => {
                setSelectedValue(e.target.value);
              }}
            />
          </div>
          <div className="w-full border-b-2 text-center">OR</div>
          <span className="w-max my-4">Create New Category</span>
          <div>
            <Textinput
              placeholder="Enter Category Name"
              name="newCategory"
              value={newCat}
              onChange={(e) => setnewCat(e.target.value)}
            />
          </div>
          {errors?.catNotFound ? (
            <div className=" text-red-700"> {errors.catNotFound}</div>
          ) : null}
        </div>
        <div className=" border-b-2 md:border-b-0 md:border-r-2 h-full w-full md:w-0 "></div>

        <div className="flex flex-col items-center justify-center p-2 m-4 w-full space-y-1">
          <span className="w-max my-4">Enter the Note Title</span>
          <Textinput
            placeholder="Enter the Note Title"
            value={newNote}
            onChange={(e) => setnewNote(e.target.value)}
          />
          <span className="w-max my-4">Enter the Note Content</span>
          <textarea
            className=" border-2 border-black w-full px-2 rounded-lg min-h-40 placeholder:text-xs placeholder:text-center  "
            placeholder="Enter the Note Title"
            value={newContent}
            onChange={(e) => setContent(e.target.value)}
          />
          {errors?.noteNoteFound ? (
            <div className=" text-red-700"> {errors.noteNoteFound}</div>
          ) : null}
          {errors?.alreadyexist ? (
            <div className=" text-red-700"> {errors.alreadyexist}</div>
          ) : null}
          <Button
            text="ADD Note"
            onClick={() => {
              handlevalidation();
            }}
          />
        </div>
      </div>
      <Popup open={isOpen} onClose={closePopup} position="right center">
        <div className=" bg-black rounded-lg text-white px-6 py-4">
          <h2>Note Added Successfully!</h2>
          <button
            className=" w-full rounded-lg mx-auto border"
            onClick={() => {
              closePopup(),
                setnewCat(""),
                setContent(""),
                setnewNote(""),
                setSelectedValue("");
            }}
          >
            Close
          </button>
        </div>
      </Popup>
    </>
  );
}

export default CreateCom;
