import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Note from "../../../../../models/note";

export async function GET(request: Request, { params }: any) {
  const { category } = params;
  await connectMongoDB();
  try {
    const notes = await Note.find({ category });
    return NextResponse.json({ notes });
  } catch (error) {
    console.error("Error fetching notes:", error);
    return NextResponse.json(
      { error: "Failed to fetch  filtered notes" },
      { status: 500 }
    );
  }
}
