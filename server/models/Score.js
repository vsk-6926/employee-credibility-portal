const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    skills: {
        type: Number,
        required: true,
    },
    education: {
        type: Number,
        required: true,
    },
    jobOffer: {
        type: Number,
        required: true,
    },
    interviews: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Score', scoreSchema);

