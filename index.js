const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from "public"
app.use(express.static(path.join(__dirname, "public")));

// Example endpoint for GIF
app.get("/gif", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "your.gif"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
