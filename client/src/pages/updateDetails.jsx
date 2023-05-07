import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import bgImage from "../assets/bg.jpg";
import { useSelector } from 'react-redux';

const UpdateDetails = () => {
    const userId = useSelector((state) => state.login.userId);
  const userType = useSelector((state) => state.login.userType);
    const [currentCompany, setCurrentCompany] = useState("");
    const [experience, setExperience] = useState("");
    const [skills, setSkills] = useState([]);
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [website, setWebsite] = useState("");

  const navigate = useNavigate();
    const name = userId
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        if (userType === "employee") {
          const updatedEmployeeDetails = {
            name,
            currentCompany,
            experience,
            skills,
            location,
          };
  
          await axios.post("http://localhost:5000/employee/update", updatedEmployeeDetails);
        } else if (userType === "company") {
          const updatedCompanyDetails = {
            name,
            description,
            website,
            location,
          };
  
          await axios.post("http://localhost:5000/company/update", updatedCompanyDetails);
        }
  
        // Redirect to a success page or desired route
        navigate("/");
      } catch (error) {
        // Handle error
        console.log(error);
      }
    };

  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
  <div className="flex justify-center items-center h-screen">
    <div className="bg-gray-200 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Update {userType === "employee" ? "Employee" : "Company"} Details
      </h2>
      <form onSubmit={handleSubmit} style={{ width: "500px" }}>
        {/* Render employee update form */}
        {userType === "employee" && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="currentCompany">
                Current Company
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="currentCompany"
                type="text"
                placeholder="Enter current company"
                value={currentCompany}
                onChange={(e) => setCurrentCompany(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="experience">
                Experience
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="experience"
                type="text"
                placeholder="Enter experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="skills">
                Skills
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="skills"
                type="text"
                placeholder="Enter skills (comma-separated)"
                value={skills}
                onChange={(e) => setSkills(e.target.value.split(","))}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="location">
                Location
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="location"
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
          </>
        )}

        {/* Render company update form */}
        {userType === "company" && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="location">
              Location
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="website">
              Website
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="website"
              type="text"
              placeholder="Enter website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              required
            />
          </div>
          
        </>
      )}

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Update Details
      </button>
    </form>
  </div>
</div>
</div>
    
  );
}

export default UpdateDetails;