import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Note from "../../../../models/note";

export async function POST(request: Request) {
  const { title, content, category } = await request.json();
  await connectMongoDB();
  await Note.create({ title, content, category });
  return NextResponse.json({ message: "note created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const notes = await Note.find();
  return NextResponse.json({ notes });
}

export async function DELETE(request: Request) {
  const urlParams = new URLSearchParams(request.url.split("?")[1]);
  const category = urlParams.get("category");
  const title = urlParams.get("title");
  console.log(title);
  await connectMongoDB();
  await Note.deleteOne({ category, title });
  return NextResponse.json({ message: "Note deleted" }, { status: 200 });
}
