const express = require("express");
const router = express.Router();

const User = require("../models/userModel");

// routes
// CRUD Operations

router.get("/users", async (req, res) => {
  console.log("Received Request for GET method");
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Create
router.post("/users", async (req, res) => {
  console.log("Received Request for POST method");
  try {
    const { name, age, weight } = req.body;
    const newUser = new User({ name, age, weight });
    await newUser.save();
    res.status(200).json({
      success: true,
      User: newUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// update
router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, age, weight } = req.body;

  try {
    const updateUser = await User.findByIdAndUpdate(id, { name, age, weight });
    if (!updateUser) {
      res.json({
        message: "User Not Found",
      });
    }
    // but if you have updated the user successfully
    res.status(200).json({
      success: true,
      user: updateUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// delete
router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleteUser = await User.findByIdAndDelete(id);

    if (!deleteUser) {
      res.json({
        message: "User Not Found",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
