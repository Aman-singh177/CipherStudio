import mongoose from "mongoose";

const studioSchema = new mongoose.Schema({
  title: { type: String, default: "Untitled Studio" },
  files: { type: Object, required: true },  
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model("Studio", studioSchema);
