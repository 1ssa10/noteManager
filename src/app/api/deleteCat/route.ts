import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Note from "../../../../models/note";

export async function DELETE(request: Request) {
  const urlParams = new URLSearchParams(request.url.split("?")[1]);
  const category = urlParams.get("category");

  await connectMongoDB();
  await Note.deleteMany({ category });
  return NextResponse.json({ message: "Note deleted" }, { status: 200 });
}
