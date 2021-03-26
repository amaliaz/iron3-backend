const express = require("express");
const router = express.Router();
const User = require("../models/User");
const TripModel = require('./../models/tripModel') 
const fileUploader = require("./../configs/cloudinary");
const isLoggedIn = require("./../middlewares/isLoggedIn");


//Get all Trips of the connected user
router.get("/trips", (req, res, next) => {
  console.log("helooo",req.session.currentUser._id );
    TripModel.find({ id_user: { $eq: req.session.currentUser._id } })
      .populate("id_user") 
      .then((trips) => {
        res.status(200).json(trips);
      }).catch(error => next(error))
  });


  router.post("/new-trip",  fileUploader.single("profileImg"), (req, res, next) => {
    let newTrip = { id_user: req.session.currentUser, ...req.body };
    TripModel.create(newTrip)
      .then((dbRes) => {
        res.json(dbRes);
      })
      .catch((err) => {
        next(err);
      });
  });

  // router.post("/new-trip",(req, res, next) => {
  //   let newTrip = { id_user: req.session.currentUser, ...req.body };
  //   TripModel.create(newTrip)
  //     .then((dbRes) => {
  //       res.json(dbRes);
  //       return User.findByIdAndUpdate(req.session.currentUser._id, req.body, {
  //         $push: { id_trips: dbRes._id },
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       next(err);
  //     });
  // });

  router.delete("/trips/:id", (req, res, next) => {
    TripModel.findById(req.params.id)
      .then((trip) => {
        if (!trip) {
          return res.status(404).json({ message: "Item not found" });
        }
        if (trip.id_user.toString() !== req.session.currentUser._id.toString()) {
          return res.status(403).json({ message: "You can't delete this item" });
        }
  
        TripModel.findByIdAndDelete(req.params.id)
          .then(() => {
            return res.sendStatus(204);
          })
          .catch(next);

        //   User.findByIdAndUpdate(req.session.currentUser._id, {
        //     $pull: { id_trips: trip._id },
        //   })
        // .then(() => console.log({ message: "You deleted this item from user array" }))
        // .catch((err) => {
        //   console.log(err);
        //   next(err);
        // });
      })
      .catch(next);
  });
  




module.exports = router;
