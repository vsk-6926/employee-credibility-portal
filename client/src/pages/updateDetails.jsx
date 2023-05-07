import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import bgImage from "../assets/bg.jpg";

const UpdateDetails = () => {
    const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [salary,setSalary] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [requirements, setRequirements] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to backend
    const formData = {
      title:jobTitle,
      company:companyName,
      location:location,
      salary:salary,
      description:jobDescription,
      requirements:requirements
    };
    console.log(formData);
    axios.post("http://localhost:5000/job/create", formData)
      .then((response) => {
        console.log(response);
        // Redirect to home page
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
    // Redirect to home page
    navigate("/");
  };

  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex justify-center items-center h-screen" >
        <div className="bg-gray-200 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col">
          <h2 className="text-2xl font-bold mb-4 text-center">Create a New Job Listing</h2>
          <form onSubmit={handleSubmit} style={{width:"500px"}}>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="jobTitle"
          >
            Job Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="jobTitle"
            type="text"
            placeholder="Enter job title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="companyName"
          >
            Company Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="companyName"
            type="text"
            placeholder="Enter company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder="Enter job location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="jobDescription"
          >
            Job Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="jobDescription"
            placeholder="Enter job description"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="salary"
          >
            Expected Salary
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="salary"
            type="text"
            placeholder="Enter salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="requirements"
          >
           Requirements
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="requirements"
            type="text"
            placeholder="Enter Requirements"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Listing
        </button>
      </form>
        </div>
      </div>
    </div>
    
  );
}

export default UpdateDetails;