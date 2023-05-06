const mongoos = require('mongoose');

const offerSchema = new mongoos.Schema({
    id : {
        type: mongoos.Schema.Types.ObjectId,
        default: mongoos.Types.ObjectId,
        required : true,
    },
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