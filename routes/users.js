const express = require("express");
const router = express.Router();
const User = require("../models/User");
const TripModel = require("../models/tripModel");
const fileUploader = require("./../configs/cloudinary");
const isLoggedIn = require("./../middlewares/isLoggedIn");


//PATCH USER (UPDATE)
router.patch(
  "/profile",
  isLoggedIn,
  fileUploader.single("profileImg"),
  (req, res, next) => {
    const userId = req.session.currentUser;
    // Add profileImage key to req.body
    if (req.file) {
      req.body.profileImg = req.file.path; 
    }
    User.findByIdAndUpdate(userId, req.body, { new: true })
    // Remove the password field from the found document.
      .select("-password") 
      .then((userDocument) => {
        res.status(200).json(userDocument);
      })
      .catch(next);
  }
);


//GET the connected user 
router.get("/profile", isLoggedIn, (req, res, next) => {
  User.findById(req.session.currentUser)
    .select("-password") // Remove the password field from the found document.
    .then((userDocument) => {
      return res.status(200).json(userDocument);
    })
    .catch(next);
});


//GET all trips of the current user
router.get("/profile/trips", isLoggedIn, (req, res, next) => {
  // We retrieve the users id from the session.
  const currentUserId = req.session.currentUser._id; 
  // get all the items matching the id_user field that matches the logged in users id.
  TripModel.find({ id_user: { $eq: currentUserId } })
    .then((trips) => {
      console.log("helooooooo",trips);
      res.status(200).json(trips);
    })
    .catch(next);
});

module.exports = router;
