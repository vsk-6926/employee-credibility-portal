const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    id : {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
        required : true,
    },
    title : {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    requirements : {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    description : {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    company : {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    location : {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    salary : {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
});


module.exports = mongoose.model('Job', jobSchema);