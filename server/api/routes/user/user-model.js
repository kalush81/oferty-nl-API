const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    require: true //TODO@ strict validation
  }, 
  email: {
    type: String,
    unique: true,
    required: true //TODO@ strict validation
  }, 
  phone: { type: String, required: [true, "numer tel wymagany"] }, //TODO@ strict validation
  password: String, // validated
  avatar: { type: String, default: "" },
  rentals: [{ type: mongoose.Schema.Types.ObjectId, ref: "rentals" }], //max 5 rentals, if premium then no max specified
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: "services" }], //max 5 rentals, if premium then no max specified
  isPremium: {
    type: Boolean,
    required: true,
  }
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
