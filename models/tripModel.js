const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    comments: String,
    rating: { type: Number, min: 0, max: 5, default: 0 },
    image: String,
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
    address: String,
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