const mongoos = require('mongoose');

const offerSchema = new mongoos.Schema({
    role : {
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
    employee : {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    status : {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
},
{timestamps: true}
);

module.exports = mongoos.model('Offer', offerSchema);