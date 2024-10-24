// ************* //
// Yaha File Saare Item specific routes ko store karegi

const express = require("express");
const router = express.Router();

// define the home page route
router.get("/", (req, res) => {
  //   console.log("Main Ja Raha ho bhai tera GET Request Leke Server ke pass");
  res.send("Tune To Ek Get Request Maar Diya hai bhai");
  //   res.sendFile(path.join(__dirname, "dummy.html"));
});

router.post("/items", (req, res) => {
  // res.send("Got a POST Request veere");
  res.json({
    name: "Nikesh",
    age: 22,
    address: "Vakola Mumbai Santacruz",
  });
});

router.put("/items/:id", (req, res) => {
  res.send("Got a PUT Request bhai");
});

router.delete("/items/:id", (req, res) => {
  res.send("Got a DELETE Request veere");
});

module.exports = router;
