const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    id_comments:{
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
    image: String,
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
    city: String,
    location: {
      type: {
        type: String,
        enum: ["Point"],
      },
      coordinates: {
        type: [Number],
      },
    },
    formattedAddress: String,
    transportation: {
      type: String,
      required: true,
    },
    accomondation: {
      type: String,
      required: true,
    },
    id_user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
    },
  }
);

const TripModel = mongoose.model("Trip", tripSchema);

module.exports = TripModel;
