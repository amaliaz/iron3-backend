const express = require("express");
const router = express.Router();
const User = require("./../models/user");
const TripModel = require('./../models/tripModel') 
const fileUploader = require("./../configs/cloudinary");
const isLoggedIn = require("./../middlewares/isLoggedIn");



//GET all trips of the connected user
router.get("/trips", (req, res, next) => {
  console.log("helooo",req.session.currentUser._id );
    TripModel.find({ id_user: { $eq: req.session.currentUser._id } })
      .populate("id_user") 
      .then((trips) => {
        res.status(200).json(trips);
      }).catch(error => next(error))
  });


 //GET one trip of the connected user
router.get("/trips/:id", (req, res, next) => {
    TripModel.findById(req.params.id)
      .then((trips) => {
        if (!trips)
        return res.status(404).json({ message: "Item not found" });
      if (trips.id_user.toString() !== req.session.currentUser._id.toString()) {
        return res
          .status(403)
          .json({ message: "You are not allowed to update this document" });
      }
        res.status(200).json(trips);
      }).catch(error => next(error))
  }); 

//POST new trip (only the connected user)
  router.post("/new-trip", fileUploader.single("image"), (req, res, next) => {
    let newTrip = { id_user: req.session.currentUser, ...req.body };
    if (req.file) {
      newTrip.image = req.file.path;
      console.log(req.file)
    }
    console.log(newTrip)
    TripModel.create(newTrip)
      .then((dbRes) => {
        res.json(dbRes);
        User.findByIdAndUpdate(req.session.currentUser._id,  {
          $push: { id_trips: dbRes._id },
        },{new:true}).then(updatedUser => {
          console.log(updatedUser)
        }).catch(error => {
          console.log(error)
        })
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  });



  //Update selected trip (only the connected user)
  router.patch(
    "/trips/:id",
    fileUploader.single("image"),
    (req, res, next) => {
      let selectedTrip = { id_user: req.session.currentUser._id, ...req.body };
  
      TripModel.findById(req.params.id)
        .then((tripDocument) => {
          console.log("tttt",tripDocument);
          if (!tripDocument)
            return res.status(404).json({ message: "Item not found" });
          if (tripDocument.id_user.toString() !== req.session.currentUser._id.toString()) {
            return res
              .status(403)
              .json({ message: "You are not allowed to update this document" });
          }
          if (req.file) {
            selectedTrip.image = req.file.secure_url;
          }
  
          TripModel.findByIdAndUpdate(req.params.id, selectedTrip, { new: true })
            .populate("id_user")
            .then((updatedDocument) => {
              return res.status(200).json(updatedDocument);
            })
            .catch(next);
        })
        .catch(next);
    }
  );


  //Delete selected trip(only the connected user)

  router.delete("/trips/:id",(req, res, next) => {
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

        User.findByIdAndUpdate(req.session.currentUser._id,  {
          $pull: { id_trips: trip._id },
        },{new:true}).then(updatedUser => {
          console.log(updatedUser)
        }).catch(error => {
          console.log(error)
        })
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  });


module.exports = router;
