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
    },
    currentCompany : {
        type: String,
        required: true,
    },
    experience : {
        type: String,
        required: true,
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
        required: true,
    },
    location : {
        type: String,
        required: true,
    }, 
});

module.exports = mongoose.model('Employee', employeeSchema);