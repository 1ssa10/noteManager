import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Note from "../../../../models/note";

export async function DELETE(request: Request) {
  console.log(request.method);
  const urlParams = new URLSearchParams(request.url.split("?")[1]);
  const category = urlParams.get("category");
  const title = urlParams.get("title");
  console.log(title);
  await connectMongoDB();
  await Note.deleteOne({ category, title });
  return NextResponse.json({ message: "Note deleted" }, { status: 200 });
}
