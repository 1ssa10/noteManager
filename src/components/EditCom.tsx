"use client";
import React, { useContext, useEffect, useState } from "react";

import SelectMulti from "./utils/SelectMulti";
import Textinput from "./utils/Textinput";
import Button from "./utils/Button";
import NotesContext from "./NotesContext";
import {
  deletCategory,
  deletNote,
  editNote,
  fetchExistNotes,
} from "@/backend/GetNodes";
import Popup from "reactjs-popup";

interface Note {
  id: string;
  title: string;
  content: string;
  category: string;
}
interface error {
  valuesNotFound: string;
}
function EditCom() {
  const { cats, setCat, notes, setFactor, factor, setCats, cat } =
    useContext(NotesContext);
  const [edit, setEdit] = useState<boolean>(false);
  const [editnote, setEditnote] = useState<boolean>(false);
  const [note, setNote] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [noteTitle, setNoteTitle] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [editedTitle, setEditTitle] = useState<string>("");
  const [editedContent, setEditContent] = useState<string>("");

  const [errors, setErrors] = useState<error>();

  let error = {} as {
    valuesNotFound: string;
  };

  const handlevalidation = (isnote: boolean) => {
    if (isnote) {
      if (category == "" || note == "") {
        error.valuesNotFound = "please enter all info";
        setErrors(error);
      } else {
        setErrors({ valuesNotFound: "" });
        setIsOpen(true);
      }
    } else {
      if (category == "") {
        error.valuesNotFound = "please select category";
        setErrors(error);
      } else {
        setErrors({ valuesNotFound: "" });
        setIsOpen1(true);
      }
    }
  };

  const handleDeleteNote = async () => {
    if (category && note) {
      await deletNote(category, note);
      setNote("");
      setFactor((prevFactor) => prevFactor + 1);
    }
  };

  const handleDeleteCat = async () => {
    if (category) {
      await deletCategory(category);
      setCats((prevCats) => prevCats.filter((c) => c !== category));
      setCategory("");
      setFactor((prevFactor) => prevFactor + 1);
    }
  };

  const findOldNote = async (category: string, title: string) => {
    if (category == "" || title == "") {
      setErrors({ valuesNotFound: " enter category and title to edit" });
    } else {
      setErrors({ valuesNotFound: "" });
      const data = await fetchExistNotes(category, title);
      setEditTitle(data[0]?.title);
      setEditContent(data[0]?.content);
      setEditnote(!editnote);
    }
  };
  const handleUpdate = async (
    category: string,
    title: string,
    newTitle: string,
    newContent: string
  ) => {
    if (category == "" || title == "" || newTitle == "" || newContent == "") {
      setErrors({ valuesNotFound: " make sure to enter all data" });
    } else {
      if (title === newTitle) {
        await editNote(category, title, newTitle, newContent);
        setEditnote(!editnote);
      } else {
        const data = await fetchExistNotes(category, newTitle);
        if (data.length > 0) {
          setErrors({ valuesNotFound: " Title exist" });
        } else {
          await editNote(category, title, newTitle, newContent);
          setEditnote(!editnote);
        }
      }
    }
    setFactor((prevFactor) => prevFactor + 1);
  };

  const closePopup = () => setIsOpen(false);
  const closePopup1 = () => setIsOpen1(false);

  useEffect(() => {
    setNoteTitle([]);
    let titles = [] as string[];
    for (const note of notes) {
      if (note.category == category) {
        titles.push(note.title);
      }
    }
    if (category) {
      setNoteTitle(titles);
    }
  }, [category, cats, notes]);
  useEffect(() => {}, [factor]);
  console.log;
  return (
    <>
      <div className="rounded-lg max-w-5xl  bg-gray-100 m-auto p-6 shadow-md shadow-black overflow-auto ">
        {/* container */}
        <div className="flex flex-col   items-center justify-center  md:flex-row ">
          {/* cat container */}
          <div className=" flex flex-col items-center justify-center p-2 m-4 w-full ">
            <span className="w-max mb-2">Select category</span>
            <SelectMulti
              options={["", ...cats]}
              value={category}
              onChange={(e) => {
                setCategory(e.target.value), setCat(e.target.value);
              }}
            />

            <div className=" flex w-full mx-auto py-2 space-x-2">
              <Button
                text="Delete"
                onClick={() => {
                  handlevalidation(false);
                }}
                type="button"
              />
              {!edit && (
                <Button
                  text="edit"
                  onClick={() => {
                    setEdit(!edit);
                  }}
                />
              )}
            </div>

            {edit && (
              <>
                <span className="w-max my-4">Rename Category </span>
                <div>
                  <Textinput placeholder="Enter New Name" name=" categoryNam" />
                </div>
              </>
            )}
          </div>
          <div className=" border-b-2 md:border-b-0 md:border-r-2 h-full w-full md:w-0 "></div>

          {/* note container */}
          <div className="flex flex-col items-center justify-center p-2 m-4 w-full">
            <span className="w-max mb-2">Selcet note that needs editing</span>
            <SelectMulti
              options={["", ...noteTitle]}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <div className=" flex w-full mx-auto py-2 space-x-2">
              <Button
                text="Delete"
                onClick={() => {
                  handlevalidation(true);
                }}
                type="button"
              />
              {!editnote && (
                <Button
                  text="edit"
                  onClick={() => {
                    findOldNote(category, note);
                  }}
                />
              )}
            </div>
            {editnote && (
              <>
                <span className="w-max my-4">Enter the Note Title</span>
                <Textinput
                  placeholder="Enter the Note Title"
                  value={editedTitle}
                  onChange={(e) => {
                    setEditTitle(e.target.value);
                  }}
                />

                <span className="w-max my-4">Enter the Note Content</span>
                <textarea
                  className=" border-2 border-black w-full px-2 rounded-lg min-h-40 placeholder:text-xs placeholder:text-center  "
                  placeholder="Enter the Note Title"
                  value={editedContent}
                  onChange={(e) => {
                    setEditContent(e.target.value);
                  }}
                />
              </>
            )}
          </div>
        </div>

        {errors?.valuesNotFound ? (
          <div className=" text-red-700"> {errors.valuesNotFound}</div>
        ) : null}

        {(edit || editnote) && (
          <>
            <Button
              text="save"
              type="button"
              onClick={() => {
                handleUpdate(category, note, editedTitle, editedContent);
              }}
            />
            <Button
              text="cancel"
              onClick={() => {
                setEdit(false);
                setEditnote(false);
              }}
            />
          </>
        )}
      </div>
      <Popup open={isOpen} onClose={closePopup} position="right center">
        <div className=" bg-black rounded-lg text-white px-6 py-4">
          <h2>
            Delete {note} from {category} ?
          </h2>
          <div className="flex space-x-2">
            <button
              className=" w-full rounded-lg mx-auto border"
              onClick={() => {
                handleDeleteNote(), closePopup();
              }}
            >
              DELETE
            </button>
            <button
              className=" w-full rounded-lg mx-auto border"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      </Popup>
      <Popup open={isOpen1} onClose={closePopup1} position="right center">
        <div className=" bg-black rounded-lg text-white px-6 py-4">
          <h2>Delete {category} ?</h2>
          <div className="flex space-x-2">
            <button
              className=" w-full rounded-lg mx-auto border"
              onClick={() => {
                handleDeleteCat(), closePopup1();
              }}
            >
              DELETE
            </button>
            <button
              className=" w-full rounded-lg mx-auto border"
              onClick={closePopup1}
            >
              Close
            </button>
          </div>
        </div>
      </Popup>
    </>
  );
}

export default EditCom;
