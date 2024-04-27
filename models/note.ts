import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema(
  {
    title: String,
    content: String,
    category: String,
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.models.Note || mongoose.model("Note", noteSchema);

export default Note;
