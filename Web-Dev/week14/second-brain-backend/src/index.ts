import express from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "./db";
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
app.post("/api/v1/auth/signin",async (req, res) => {
  const { email, password } = req.body;
  const user =await UserModel.findOne({ email, password });
  if (!user) {
    res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ email }, SECRET_KEY);
  res.json({ token });
});
app.post("/api/v1/content", (req, res) => {});
app.get("/api/v1/content", (req, res) => {});
app.patch("/api/v1/content", (req, res) => {});
app.delete("/api/v1/content", (req, res) => {});

app.post("/api/v1/brain/share", (req, res) => {});
app.get("/api/v1/brain/:id", (req, res) => {});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
