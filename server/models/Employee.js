const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    id : {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
        required : true,
    },
    name : {
        type: String,
        required: true,
        min: 3,
        max: 255,   
    },
    currentCompany : {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    experience : {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    email : {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    phone : {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    skills : {
        type: array,
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
});

module.exports = mongoose.model('Employee', employeeSchema);