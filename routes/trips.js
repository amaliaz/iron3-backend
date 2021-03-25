const express = require("express");
const router = express.Router();
const TripModel = require('./../models/tripModel') 



//Get all Trips of the connected user
router.get("/", (req, res, next) => {
    TripModel.find({ id_user: { $eq: req.session.currentUser } })
      .populate("id_user") 
      .then((trips) => {
        res.status(200).json(trips);
      }).catch(error => next(error))
  });







module.exports = router;
