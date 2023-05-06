import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/bg.jpg";

const FeedbackForm = () => {
  const [candidateName, setCandidateName] = useState("");
  const [experience, setExperience] = useState("");
  const [technicalSkills, setTechnicalSkills] = useState("");
  const [interpersonalSkills, setInterpersonalSkills] = useState("");
  const [problemSolving, setProblemSolving] = useState("");
  const [interviewScore, setInterviewScore] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      candidateName,
      experience,
      technicalSkills,
      interpersonalSkills,
      problemSolving,
      interviewScore,
    };
    console.log(formData);
    // Redirect to home page
    navigate("/");
  };

  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex justify-center items-center h-screen" >
        <div className="bg-gray-200 shadow-lg rounded-lg px-8 pt-6 pb-8 mt-12 mb-12 flex flex-col">
      <h1 className="text-3xl font-bold mb-8 text-center">Feedback Form</h1>
      <form onSubmit={handleSubmit} style={{width:"500px"}}>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="candidateName"
          >
            Candidate Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="candidateName"
            type="text"
            placeholder="Enter candidate name"
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            required
          />
        </div>
        <h2 className="text-1xl font-bold mb-4 text-center">Enter the scores for these parameters out of 100</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="experience"
          >
            Experience
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="experience"
            type="text"
            placeholder="Enter candidate's experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="technicalSkills"
          >
            Technical Skills
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="technicalSkills"
            type="text"
            placeholder="Enter candidate's technical skills"
            value={technicalSkills}
            onChange={(e) => setTechnicalSkills(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="interpersonalSkills"
          >
            Interpersonal Skills
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="interpersonalSkills"
            type="text"
            placeholder="Enter candidate's interpersonal skills"
            value={interpersonalSkills}
            onChange={(e) => setInterpersonalSkills(e.target.value)}
            required
          />
        </div>
            <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="problemSolvingAbility"
          >
            Problem Solving Ability
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="problemSolvingAbility"
            type="text"
            placeholder="Enter candidate's problem solving ability"
            value={problemSolving}
            onChange={(e) => setProblemSolving(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="interviewScore"
          >
            Interview Score
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="interviewScore"
            type="number"
            min="0"
            max="100"
            placeholder="Enter candidate's interview score"
            value={interviewScore}
            onChange={(e) => setInterviewScore(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Feedback
        </button>
      </form>
      </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
