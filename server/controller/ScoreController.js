const Score = require("../models/Score");

const getScore = async (req, res) => {
  try {
    const { name } = req.body;
    const score = await Score.findOne({ name: name });

    res.status(200).json({
      score,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateScore = async (req, res) => {
  try {
    console.log(req.body);
    const {
      name,
      experience,
      technicalSkills,
      interPersonalSkills,
      problemSolving,
      interviewScore,
    } = req.body.formData;
    const currentScore = await Score.findOne({ name: name });

    const updatedExperience =
      (parseInt(experience) + parseInt(currentScore.experience)) / 2;
    const updatedTechnicalSkills =
      (parseInt(technicalSkills) + parseInt(currentScore.technicalSkills)) / 2;
    const updatedInterPersonalSkills =
      (parseInt(interPersonalSkills) +
        parseInt(currentScore.interPersonalSkills)) /
      2;
    const updatedProblemSolving =
      (parseInt(problemSolving) + parseInt(currentScore.problemSolving)) / 2;
    const updatedInterviews =
      (parseInt(interviewScore) + parseInt(currentScore.interviews)) / 2;
    const totalScore =
      (updatedExperience * 0.2 +
        updatedTechnicalSkills * 0.15 +
        updatedInterPersonalSkills * 0.1 +
        updatedProblemSolving * 0.15 +
        updatedInterviews * 0.3) /
      0.9;

    const updatedScores = {
      experience: updatedExperience,
      technicalSkills: updatedTechnicalSkills,
      interPersonalSkills: updatedInterPersonalSkills,
      problemSolving: updatedProblemSolving,
      interviews: updatedInterviews,
      totalScore,
    };

    console.log(updatedScores);

    const newScore = await Score.findOneAndUpdate(
      { name: name },
      {
        $set: {
            experience: updatedExperience,
            technicalSkills: updatedTechnicalSkills,
            interPersonalSkills: updatedInterPersonalSkills,
            problemSolving: updatedProblemSolving,
            interviews: updatedInterviews,
            totalScore: totalScore
              
        },
      },
      { new: true }
    );

    res.status(200).json(newScore);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getScore,
  updateScore,
};
