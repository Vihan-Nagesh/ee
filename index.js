const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Serve everything in this folder (including GIFs) as static files
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});
