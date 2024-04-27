import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Note from "../../../../models/note";

export async function GET(request: Request) {
  const urlParams = new URLSearchParams(request.url.split("?")[1]);
  const category = urlParams.get("category");
  const title = urlParams.get("title");
  await connectMongoDB();
  const notes = await Note.find({ category, title });
  return NextResponse.json({ notes });
}
