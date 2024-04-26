"use client";
import React, { useState } from "react";
import NoteCard from "./utils/NoteCard";

function NotesList() {
  return (
    <div className="grid grid-cols-1 w-full gap-4  items-start justify-center mx-auto p-2  md:grid-cols-3 overflow-auto  ">
      <NoteCard
        title="Note 1"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nam sed quia maxime consequatur enim modi provident eligendi odit officiis!"
      />
      <NoteCard
        title="Note 2"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nam sed quia maxime consequatur enim modi provident eligendi odit officiis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nam sed quia maxime consequatur enim modi provident eligendi odit officiis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nam sed quia maxime consequatur enim modi provident eligendi odit officiis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nam sed quia maxime consequatur enim modi provident eligendi odit officiis!"
      />
      <NoteCard
        title="Note 3"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nam sed quia maxime consequatur enim modi provident eligendi odit officiis!"
      />
      <NoteCard
        title="Note 4"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nam sed quia maxime consequatur enim modi provident eligendi odit officiis!"
      />
      <NoteCard
        title="Note 5"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nam sed quia maxime consequatur enim modi provident eligendi odit officiis!"
      />
      <NoteCard
        title="Note 6"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nam sed quia maxime consequatur enim modi provident eligendi odit officiis!"
      />
    </div>
  );
}

export default NotesList;
