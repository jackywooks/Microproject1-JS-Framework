const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const data = require("./data/fruit.json");

// app.use(express.static("public"));
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/fruit", express.static(path.join(__dirname, "public/fruit.html")));
app.use("/farm", express.static(path.join(__dirname, "public/farm.html")));
app.use("/api", express.static(path.join(__dirname, "public/api.html")));
app.get("/api/fruits", (req, res) => {
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
