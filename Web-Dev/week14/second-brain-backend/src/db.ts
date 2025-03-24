import mongoose, { Schema, model } from "mongoose";
mongoose.connect("mongodb://localhost:27017/second-brain");

const userSchema = new Schema({
  username: { type: "string", unique: true, required: true },
  email: { type: "string", required: true, unique: true },
  password: { type: "string", required: true },
});

export const UserModel = model("User", userSchema);
