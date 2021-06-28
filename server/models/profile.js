import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  img: { type: Image },
  bio: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  creator: { type: String },
});

export default mongoose.model("profile", profileSchema);
