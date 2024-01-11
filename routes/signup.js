const express = require("express");
const User = require("../models/usermodel");

const router = express.Router();

router.post("/", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = new User({ username, email, password });

    await newUser.save();
    // res.send({ success: "true", ...newUser["_doc"] });
    res.redirect("/");
  } catch (error) {
    console.log("error : Some issues with this User name or password");
    res.redirect("/");
  }
});

module.exports = router;
