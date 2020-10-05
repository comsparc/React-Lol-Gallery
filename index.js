const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build"));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("connected to port: " + PORT));
