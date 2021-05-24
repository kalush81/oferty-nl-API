const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

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
  password: {
    type: String,
    required: true
  }, // validated
  avatar: { type: String, default: "" },
  rentals: [{ type: mongoose.Schema.Types.ObjectId, ref: "rentals" }], //max 5 rentals, if premium then no max specified
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: "services" }], //max 5 rentals, if premium then no max specified
  isPremium: {
    type: Boolean,
    required: true,
  }
});

userSchema.pre('save', function (next) {
  //if (!this.isModified('password')) return next();
  this.password = this.encryptPassword(this.password);
  next()
})

userSchema.methods = {
  encryptPassword: function(plainTextPword) {
    if (!plainTextPword) {
      return ''
    } else {
      var salt = bcrypt.genSaltSync(10);
      return bcrypt.hashSync(plainTextPword, salt);
    }
  },
}

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
