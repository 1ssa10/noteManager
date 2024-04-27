import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Note from "../../../../models/note";

export async function PUT(request: Request) {
  const urlParams = new URLSearchParams(request.url.split("?")[1]);
  const category = urlParams.get("category");

  const updatedNote = await request.json();

  await connectMongoDB();
  const categoryNotes = await Note.find({ category });

  if (!categoryNotes) {
    return NextResponse.json({ message: "Note not found" }, { status: 404 });
  }

  for (const note of categoryNotes) {
    note.category = updatedNote.category;
    await note.save();
  }

  return NextResponse.json({ message: "Category updated " }, { status: 200 });
}

export async function GET(request: Request) {
  const urlParams = new URLSearchParams(request.url.split("?")[1]);
  const category = urlParams.get("category");

  await connectMongoDB();
  const notes = await Note.find({ category });
  return NextResponse.json({ notes });
}
