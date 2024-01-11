const express = require("express");
const authverify = require("../middleware/authVerify");

const router = express.Router();

router.post("/", (req, res) => {
  try {
    if (!authverify(req.cookies["token"])) {
      res.redirect("/");
    }
    // res.status(200).send("permission hai bhai ko , Salam bhai !!");
    res.redirect("/permissions");
  } catch (error) {
    // res.status(401).send("some error");
    res.redirect("/notaman");
  }
});

module.exports = router;
