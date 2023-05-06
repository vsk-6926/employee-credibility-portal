const Offer = require('../../models/Offer'); 
const mongoose = require('mongoose');

const createOffer = async (req, res) => {
    const offer = req.body;
    const newOffer = new Offer({
        id: new mongoose.Types.ObjectId(),
        role: offer.role,
        employee: offer.employee,
        company: offer.company,
        status: offer.status,
    });
    try {
        const savedOffer = await newOffer.save();
        res.status(201).json(savedOffer);
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

module.exports = createOffer;
