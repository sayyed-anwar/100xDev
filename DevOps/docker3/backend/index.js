const express = require("express");
const mongoose = require("mongoose");

const app = express();

// MongoDB URL from environment variable
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/testdb";

// Connect to MongoDB
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("Hello from Node.js + MongoDB via Docker Compose 🚀");
});

app.listen(3000, () => console.log("Backend running on port 3000"));
