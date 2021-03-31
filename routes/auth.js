const express = require("express");

const router = express.Router();
const User = require("../models/User");
const fileUploader = require("./../configs/cloudinary");
const isLoggedIn = require("./../middlewares/isLoggedIn");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.post("/signup", fileUploader.single("profileImg"), (req, res, next) => {
  const { email, password, firstName, lastName } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Email and password required" });
    return;
  }

  User.findOne({ email })
    .then((foundUser) => {
      if (foundUser) {
        res.status(400).json({ message: "Email already exists" });
        return;
      }

      const hashedPassword = bcrypt.hashSync(password, bcryptSalt);

      const newUser = {
        email,
        firstName,
        lastName,
        password: hashedPassword,
      };

      if (req.file) {
        newUser.profileImg = req.file.path;
      }

      User.create(newUser)
        .then((createdUser) => {
          res.status(201).json(createdUser);
        })
        .catch((error) => {
          next(error);
        });
    })
    .catch((error) => {
      next(error);
    });
});

router.post("/signin", (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((foundUser) => {
      if (!foundUser) {
        res.status(400).json({ message: "Invalid credentials" });
        return;
      }
console.log("FOUND USERRRRR",foundUser);
      const isSamePassword = bcrypt.compareSync(password, foundUser.password);
      if (!isSamePassword) {
        res.status(400).json({ message: "Bad credentials" });
        return;
      }
      console.log("GOOD PASSWORD");
      req.session.currentUser = {
        _id: foundUser._id,
      };
      console.log("CURRENT USER");
      res.redirect("current-user");
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/current-user", isLoggedIn, (req, res, next) => {
  User.findById(req.session.currentUser._id)
    .select("-password")
    .then((currentUser) => {
      console.log("CURRENT USER", currentUser);
      res.status(200).json(currentUser);
    })
    .catch((error) => {
      next(error);
    });
});

router.delete("/logout", (req, res, next) => {
  req.session.destroy(function (err) {
    if (err) {
      res.status(500).json(err);
    }
    res.status(200).json({ message: "Successfuly logged out" });
  });
});

module.exports = router;
