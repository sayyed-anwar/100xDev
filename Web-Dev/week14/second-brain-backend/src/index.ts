import express from "express";
import jwt from "jsonwebtoken";
import { ContentModel, UserModel } from "./db";
import { userMiddleware } from "./middlewares";
const app = express();
app.use(express.json());

const SECRET_KEY = "your_secret_key";

app.post("/api/v1/auth/signup", async (req, res) => {
  try {
    const { email, password, username } = req.body;
    await UserModel.create({ email, password, username });
    res.json({ message: "User created" });
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
  }
});
app.post("/api/v1/auth/signin", async (req, res) => {
  const { email, password, _id } = req.body;

  const user = await UserModel.findOne({ email, password });
  console.log(user, "User id");
  if (!user) {
    res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ id: user?._id }, SECRET_KEY);
  res.json({ token });
});
app.post("/api/v1/content", userMiddleware, async (req, res) => {
  try {
    const { title, content, link, tags } = req.body;
    await ContentModel.create({
      title,
      content,
      link,
      tags: [],
      //@ts-ignore
      userId: req.userId,
    });
    res.json({ message: "Content created" });
    return;
  } catch (error) {
    res.json({ message: "Faild to Content" });
  }
});
app.get("/api/v1/content", userMiddleware,async (req, res) => {
  try {
    //@ts-ignore
    const userId = req.userId;
    const Content =await ContentModel.find({ userId: userId }).populate("userId", "username");
    res.json({ Content });
  } catch (error) {
    res.json({ message: "Error fetching content" });
  }
});
app.patch("/api/v1/content", userMiddleware, (req, res) => {
  //@ts-ignore
  const userId = req.userId;
  const data = ContentModel.find({ userId });
  res.json({ message: "Content updated" });
});
app.delete("/api/v1/content", (req, res) => {});

app.post("/api/v1/brain/share", (req, res) => {});
app.get("/api/v1/brain/:id", (req, res) => {});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
