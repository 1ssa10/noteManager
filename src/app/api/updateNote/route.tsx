import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Note from "../../../../models/note";

export async function PUT(request: Request) {
  const urlParams = new URLSearchParams(request.url.split("?")[1]);
  const category = urlParams.get("category");
  const title = urlParams.get("title");

  const updatedNote = await request.json();

  await connectMongoDB();
  const existingNote = await Note.findOne({ category, title });

  if (!existingNote) {
    return NextResponse.json({ message: "Note not found" }, { status: 404 });
  }

  existingNote.title = updatedNote.title;
  existingNote.content = updatedNote.content;
  await existingNote.save();

  return NextResponse.json({ message: "Note updated " }, { status: 200 });
}
