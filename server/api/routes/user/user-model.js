const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    rentals: [mongoose.Schema.Types.ObjectId],
    services: [mongoose.Schema.Types.ObjectId],
    isPremium: Boolean,
})

const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel