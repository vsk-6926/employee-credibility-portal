const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        unique:true
    },
    experience: {
        type: Number,
    },
    technicalSkills: {
        type: Number,
    },
    interPersonalSkills: {
        type: Number,
    },
    problemSolving: {
        type: Number,
    },
    offersAcceptance: {
        type: Number,
    },
    interviews: {
        type: Number,
    },
    totalScore: {
        type: Number,
    },
});

module.exports = mongoose.model('Score', scoreSchema);

