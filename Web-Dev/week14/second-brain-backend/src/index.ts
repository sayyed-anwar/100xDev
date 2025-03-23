import express from "express";
import jwt from "jsonwebtoken";
const app = express();

app.post("/api/v1/auth/signup", (req, res) => {});
app.post("/api/v1/auth/signin", (req, res) => {});
app.post("/api/v1/content", (req, res) => {});
app.get("/api/v1/content", (req, res) => {});
app.patch("/api/v1/content", (req, res) => {});
app.delete("/api/v1/content", (req, res) => {});

app.post("/api/v1/brain/share", (req, res) => {});
app.get("/api/v1/brain/:id", (req, res) => {});