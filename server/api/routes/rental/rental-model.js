const mongoose = require("mongoose");

const rentalSchema = new mongoose.Schema({
  title: String,
  description: String,
  hourlyPrice: Number,
  dailyPrice: Number,
  isWholeCountry: Boolean,
  isNegotiable: Boolean,
  mainImage: String,
  extraImages: [String],
  issuer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    require: true,
  },
});

const RentalModel = mongoose.model("rental", rentalSchema);

module.exports = RentalModel;