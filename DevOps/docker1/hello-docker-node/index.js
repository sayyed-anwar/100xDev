import express from "express" ;
let app = express() ;

app.get("/", (req, res) => res.send("Hello from Dockerized Node.js 🚀"));
app.get("/health", (req, res) => res.status(200).json({ status: "ok" }));


// IMPORTANT: bind to 0.0.0.0 so it works inside Docker

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});