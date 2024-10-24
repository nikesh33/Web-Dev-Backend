const express = require("express");
const router = express.Router();

// middleware
const auth = function (req, res, next) {
  console.log("I am Inside auth wala middleware");
  // dummy user add kar rha hu
  req.user = { userId: 1, role: "student" };

  if (req.user) {
    // if valid user is there in req,then proceed to next middleware
    next();
  } else {
    // if not a valid user
    res.json({
      sucess: false,
      message: "Not a Valid User",
    });
  }
};

const isStudent = function (req, res, next) {
    console.log("I am inside student wala middleware");
    if (req.user.role === "student") {
      next();
    } 
    else {
      res.json({
        sucess: false,
        message: "Access Denied,this route is only for student",
      });
    }
  };

// admin
const isAdmin = function (req, res, next) {
  console.log("I am inside Admin wala middleware");
  if (req.user.role === "admin") {
    next();
  } 
  else {
    res.json({
      sucess: false,
      message: "Access Denied, this route is only for admin",
    });
  }
};

// routes
router.get("/student", auth,isStudent, (req, res) => {
  console.log("I am Inside student route");
  res.send("Student Specific Page");
});

router.get("/admin", auth, isAdmin, (req, res) => {
  console.log("I am Inside admin route");
  res.send("Admin Specific Page");
});

module.exports = router;
