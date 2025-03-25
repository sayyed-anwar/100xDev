import mongoose, { Schema, model } from "mongoose";
mongoose.connect("mongodb://localhost:27017/second-brain");

const userSchema = new Schema({
  username: { type: "string", unique: true, required: true },
  email: { type: "string", required: true, unique: true },
  password: { type: "string", required: true },
});

export const UserModel = model("User", userSchema);



const contentSchema = new Schema({
  title :{type: "string", required: true},
  content : {type: "string", required: true},
  link : {type: "string"},
  userId: {type: Schema.Types.ObjectId, ref: "User"},
  tags : [{type: Schema.Types.ObjectId, ref: "Tag"}]
});


export const ContentModel = model("Content", contentSchema);