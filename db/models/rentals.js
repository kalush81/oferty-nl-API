const mongoose = require('mongoose')

const rentalSchema = new mongoose.Schema({
    category: String,
    title: String,
    description: String,
    hourlyPrice: Number,
    dailyPrice: Number,
    isWholeCountry: Boolean,
    isNegotiable: Boolean,
    mainImgUrl: String,
    extraImgUrls: [ String ],
    userId: mongoose.ObjectId
});

const RentalModel = mongoose.model('rental', rentalSchema)

module.exports = RentalModel