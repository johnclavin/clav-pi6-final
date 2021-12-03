// server/index.js

const express = require("express");

const PORT = 5000;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Data from Express Server" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  console.log('http://localhost:5000/api');
});

