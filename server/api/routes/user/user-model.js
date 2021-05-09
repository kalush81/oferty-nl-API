const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String, //must be unique and validated
  email: String, //must be unique and validated
  phoneNumber: String, // validate number
  password: String, // validated
  rentals: [{ type: mongoose.Schema.Types.ObjectId, ref: "rentals" }], //max 5 rentals, if premium then no max specified
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: "services" }], //max 5 rentals, if premium then no max specified
  isPremium: Boolean,
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
