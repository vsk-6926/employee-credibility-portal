const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,   
    },
    currentCompany : {
        type: String,
    },
    experience : {
        type: String,
    },
    email : {
        type: String,
        required: true,
    },
    phone : {
        type: String,
        required: true,
    },
    skills : {
        type: [String],
    },
    location : {
        type: String,
    }, 
});

module.exports = mongoose.model('Employee', employeeSchema);