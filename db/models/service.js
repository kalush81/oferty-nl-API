const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    title: String,
    description: String,
    isWholeCountry: Boolean,
    isNegotiable: Boolean,
    price: Number,
    pricing_plan: String,
    issuer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require: true
    }
});

const ServiceModel = mongoose.model('service', serviceSchema)

module.exports = ServiceModel