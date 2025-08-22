const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Serve the whole folder as static files
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`GIFs available at: http://localhost:${port}`);
});
