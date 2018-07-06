const express = require("express");
const path = require("path");
const app = express();
const generatePassword = require("password-generator");

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", (req, res) => {
  res.json({ working: true });
});

app.get("/api/password", (req, res) => {
  const passwords = Array.from(Array(5)).map(i => generatePassword());
  res.json({ passwords: passwords });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "client/build/index.html"));
});
app.listen(process.env.PORT || 9001, () => console.log("app running"));
