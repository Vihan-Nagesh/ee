const express = require("express");
const path = require("path");

const app = express();

// Railway provides a PORT env variable, fallback to 3000 locally
const PORT = process.env.PORT || 3000;

// Serve the GIF at /gif
app.get("/gif", (req, res) => {
  res.sendFile(path.join(__dirname, "Furinacaranimeanimefypanimereelsanimeeditanimememesfypfypgitaagotohgensh-ezgif.com-rotate.gif"));
});

// Optional: root route
app.get("/", (req, res) => {
  res.send(`
    <h1>GIF Server</h1>
    <p>View your GIF <a href="/gif">here</a>.</p>
  `);
});

// Listen on 0.0.0.0 so Railway can expose it
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
