const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app = express();

app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded!");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
