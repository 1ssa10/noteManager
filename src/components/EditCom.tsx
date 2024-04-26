"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, useFormik, ErrorMessage } from "formik";
import SelectMulti from "./utils/SelectMulti";
import Textinput from "./utils/Textinput";
import Button from "./utils/Button";
import { validationEdit } from "./utils/ValidationSchema";

function EditCom() {
  const [edit, setEdit] = useState<boolean>(false);
  const [editnote, setEditnote] = useState<boolean>(false);
  const initialValues = {
    categoryNam: "",
  };

  const { handleSubmit, handleChange, values, errors, touched, isSubmitting } =
    useFormik({
      initialValues,
      validationSchema: validationEdit,
      onSubmit: (values) => {
        // Handle form submission logic here
        alert("Submitted values:");
      },
    });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="rounded-lg max-w-5xl  bg-gray-100 m-auto p-6 shadow-md shadow-black overflow-y-auto overflow-x-hidden">
          {/* container */}
          <div className="flex flex-col   items-center justify-center  md:flex-row ">
            {/* cat container */}
            <div className=" flex flex-col items-center justify-center p-2 m-4 w-full ">
              <span className="w-max mb-2">Select category</span>
              <SelectMulti options={["", "cat 1", "cat 2", "cat 3", "cat 4"]} />
              <div className=" flex w-full mx-auto py-2 space-x-2">
                <Button text="Delete" />
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
                    <Textinput
                      placeholder="Enter New Name"
                      name=" categoryNam"
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}
            </div>
            <div className=" border-b-2 md:border-b-0 md:border-r-2 h-full w-full md:w-0 "></div>

            {/* note container */}
            <div className="flex flex-col items-center justify-center p-2 m-4 w-full">
              <span className="w-max mb-2">Selcet note that needs editing</span>
              <SelectMulti options={["", "note 1", "note 2", "note 3"]} />
              <div className=" flex w-full mx-auto py-2 space-x-2">
                <Button text="Delete" />
                {!editnote && (
                  <Button
                    text="edit"
                    onClick={() => {
                      setEditnote(!editnote);
                    }}
                  />
                )}
              </div>
              {editnote && (
                <>
                  <span className="w-max my-4">Enter the Note Title</span>
                  <Textinput placeholder="Enter the Note Title" />
                  <span className="w-max my-4">Enter the Note Content</span>
                  <textarea
                    className=" border-2 border-black w-full px-2 rounded-lg min-h-40 placeholder:text-xs placeholder:text-center  "
                    placeholder="Enter the Note Title"
                  />
                </>
              )}
            </div>
          </div>
          {(edit || editnote) && (
            <>
              <Button text="save" type="submit" />
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
      </form>
    </>
  );
}

export default EditCom;
