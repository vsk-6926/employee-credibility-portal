const Score = require('../models/Score');

const getScore = async (req, res) => {
    try {
        const score = await Score.findOne({ name: req.params.name });
        const finalScore = (score.experience * 0.3 + score.skills *0.1+ score.education*0.15 + score.jobOffer*0.3 + score.interviews*0.15);
        res.status(200).json({
            score: score,
            finalScore: finalScore,
        });
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

const updateScore = async (req, res) => {
    const score = req.body;
    let currentScore = await Score.find({name : score.name});
    currentScore = currentScore[0];
    console.log(currentScore);
    console.log(req.body);
    try {
        const newScore =  await Score.findOneAndUpdate(
            {name: score.name},
            {$set: {experience: (score.experience + currentScore.experience)/2, 
            skills: (score.skills + currentScore.skills)/2, 
            education: (score.education + currentScore.education)/2, 
            jobOffer: (score.jobOffer + currentScore.jobOffer)/2, 
            interviews: (score.interviews + currentScore.interviews)/2} 
        });
        res.status(201).json(newScore);
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

module.exports = {
    getScore,
    updateScore,
};

