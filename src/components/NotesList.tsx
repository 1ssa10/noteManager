"use client";
import React, { useContext, useEffect, useState } from "react";
import NoteCard from "./utils/NoteCard";
import NotesContext from "./NotesContext";

interface Note {
  id: string;
  title: string;
  content: string;
  category?: string;
}

function NotesList() {
  const { notes, loading, cat } = useContext(NotesContext);

  return (
    <>
      {cat ? <div>{cat}</div> : <div>All</div>}
      <div className="grid grid-cols-1 w-full gap-4  items-start justify-center mx-auto p-2  md:grid-cols-3 overflow-auto  ">
        {loading ? (
          <p>Loading notes...</p>
        ) : (
          notes.map((note: Note, index: number) => (
            <NoteCard
              key={index}
              title={note.title}
              content={note.content}
              cat={cat}
            />
          ))
        )}
      </div>
    </>
  );
}

export default NotesList;
