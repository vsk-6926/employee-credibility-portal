const Offer = require('../../models/Offer');


const getOffers = async (req, res) => {
    const offer = req.body;
    const takeOffer = await Offer.find({ employee: offer.employee });
    if(!takeOffer){
        res.status(400).json({ message: 'Offer does not exist' });
    }
    try{
        res.status(200).json(takeOffer);
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

module.exports = getOffers;
