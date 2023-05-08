import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/bg.jpg";
import axios from "axios";

const FeedbackForm = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get("name");
  const title = urlParams.get('title');
  const [experience, setExperience] = useState("");
  const [technicalSkills, setTechnicalSkills] = useState("");
  const [interPersonalSkills, setInterPersonalSkills] = useState("");
  const [problemSolving, setProblemSolving] = useState("");
  const [interviewScore, setInterviewScore] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      experience,
      technicalSkills,
      interPersonalSkills,
      problemSolving,
      interviewScore,
    };
    // Redirect to home page
   
      try {
        const response = axios.post('http://localhost:5000/score/update', {formData});
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching score details:', error);
      }
    navigate("/");
  };

  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex justify-center items-center" >
        <div className="bg-gray-200 shadow-lg rounded-lg px-8 pt-6 pb-8 mt-12 mb-12 flex flex-col">
      <h1 className="text-3xl font-bold mb-8 text-center">Feedback Form</h1>
      <h2 className="text-xl font-bold mb-4 text-center">
        Employee: {name}
      </h2>
      <h2 className="text-xl font-bold mb-4 text-center">Job Title: {title}</h2>
      <form onSubmit={handleSubmit} style={{width:"500px"}}>
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
            value={interPersonalSkills}
            onChange={(e) => setInterPersonalSkills(e.target.value)}
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
