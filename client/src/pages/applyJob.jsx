import React, { useEffect, useState } from "react";
import bgImage from "../assets/bg.jpg";
import axios from "axios";
import { FaBriefcase } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const JobApplicationForm = () => {
    const navigate = useNavigate();
    const userId = useSelector((state) => state.login.userId);
  const [resumeLink, setResumeLink] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [jobDetails, setJobDetails] = useState([]);
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.post(
          `http://localhost:5000/job/jobdetails`,
          { id: id }
        );
        setJobDetails(response.data[0]);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };
    fetchJobDetails();
  }, [id]);
  const { title, company, location, salary, description } = jobDetails;

  const handleSubmit =async (e) => {
    e.preventDefault();
    // Handle form submission
    try {
        const formData = {
          jobTitle: title,
          name: company,
          company: company,
          employee: userId, 
          resumeLink: resumeLink,
          coverLetter: coverLetter,
          additionalInformation: additionalInfo,
        };
    
        const response = await axios.post('http://localhost:5000/appliedjobs/create', formData);
        console.log('Applied job created:', response.data);
        // Handle success or redirect to a success page
      } catch (error) {
        console.error('Error creating applied job:', error);
        // Handle error or display error message
      }
      navigate("/")
  };

  return (
    <>
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container mx-auto px-4 py-8 flex justify-center">
          <div className="rounded-lg bg-gray-200 shadow p-6 w-1/2 mr-8">
            <h2 className="text-3xl font-bold mb-4 text-center">Job Details</h2>
            <div className="flex justify-center items-center">
              <div className="bg-blue-900 text-white flex items-center justify-center rounded-full w-12 h-12 mr-4">
                <FaBriefcase className="text-2xl" />
              </div>
            </div>
            <div className="flex items-center justify-center mb-4">
              <div>
                <h3 className="text-2xl font-bold mt-5">{title}</h3>
                <p className="text-xl text-gray-500 text-center">{company}</p>
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2 text-center">
              Location: {location}
            </h3>
            <h3 className="text-lg font-bold mb-2 text-center">
              Salary: {salary}
            </h3>
            <h3 className="text-lg font-bold mb-2 text-center">Description:</h3>
            <p className="text-gray-700 text-center">{description}</p>
          </div>
          <div className="rounded-lg bg-gray-200 shadow p-6 w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Job Application
            </h2>
            <div className="flex justify-center items-center">
              <form
                onSubmit={handleSubmit}
                style={{ width: "500px" }}
                className="justify-center"
              >
                <div className="mb-4">
                  <label
                    htmlFor="resumeLink"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Resume Link
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="resumeLink"
                    type="text"
                    value={resumeLink}
                    onChange={(e) => setResumeLink(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="coverLetter"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Cover Letter
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="coverLetter"
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="additionalInfo"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Additional Information
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="additionalInfo"
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                    required
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobApplicationForm;
