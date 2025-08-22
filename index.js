const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// always serve this exact GIF at /gif
app.get("/gif", (req, res) => {
  res.sendFile(path.join(__dirname, "Furinacaranimeanimefypanimereelsanimeeditanimememesfypfypgitaagotohgensh-ezgif.com-rotate.gif"));
});

app.listen(port, () => {
  console.log(`GIF available at: http://localhost:${port}/gif`);
});
