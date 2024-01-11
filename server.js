const express = require("express");
require("dotenv").config();
const cors = require("cors");
const signup = require("./routes/signup");
const cookieParser = require("cookie-parser");
const login = require("./routes/login");
const verifyiedornot = require("./routes/permissions");
const connect = require("./services/connectdb");
const path = require("path");

const port = process.env.PORT || 8000;
const app = express();

connect();

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "views")));

app.use("/signup", signup);
app.use("/login", login);
app.use("/verify", verifyiedornot);

// frontend routes (files) aabhi bass aaise hi kar diya hai

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "signup.html"));
});

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "dashboard.html"));
});

app.get("/permissions", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "permissions.html"));
});

app.get("/notaman", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "notaman.html"));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:8000/`);
});
