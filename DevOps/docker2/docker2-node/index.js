import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, Docker!");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});
console.log("working")
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});