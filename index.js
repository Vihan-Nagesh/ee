// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (like gifs) from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Example: http://your-railway-app.up.railway.app/hello
app.get("/hello", (req, res) => {
  res.send("🚂 Railway server is running!");
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
