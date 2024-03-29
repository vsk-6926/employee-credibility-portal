const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    email: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    description: {
        type: String,
        required: false,
        min: 3,
        max: 255,
    },
    location: {
        type: String,
        required: false,
        min: 3,
        max: 255,
    },
    website: {
        type: String,
        required: false,
        min: 3,
        max: 255,
    },
    phone: {
        type: String,
        required: false,
        min: 3,
        max: 255,
    },
});

module.exports = mongoose.model('Company', companySchema);
