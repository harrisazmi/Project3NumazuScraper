const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 3323;

app.use(cors({ origin: "*" }));

const staticPath = path.join(__dirname, "/");

app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
