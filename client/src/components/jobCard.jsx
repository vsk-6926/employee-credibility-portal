import axios from "axios";
import React, { useEffect, useState } from "react";

import { FaBriefcase } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";


const JobCard = ({ job }) => {  
  const navigate = useNavigate();
  const clickHandler=()=>{
    navigate('/jobdetails')
  }

  return (
    <div className="flex flex-row w-6/6 items-center justify-start mb-4 p-4 rounded-lg border border-gray-300">
      <div className="bg-blue-900 text-white flex items-center justify-center rounded-full w-12 h-12 mr-4">
        <FaBriefcase className="text-2xl" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-medium">{job.title}</h3>
        <p className="text-sm text-gray-500">{job.company}</p>
        <p className="text-sm text-gray-500">{job.location}</p>
        <p className="text-sm font-medium">{job.salary}</p>
        <p className="text-sm text-gray-500 mt-2">{job.description}</p>
      </div>
      <button className="bg-blue-900 text-white font-bold py-2 px-4 rounded-full hover:bg-white hover:text-blue-900" onClick={clickHandler}>
       More Details
      </button>
    </div>
  );
};

const TopJobOpenings = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Front-end Developer",
      company: "ABC Inc.",
      location: "New York, NY",
      salary: "$80k - $100k",
      description:
        "We are looking for an experienced Front-end Developer to join our team and help us build modern, responsive web applications using cutting-edge technologies.",
    },
    {
      id: 2,
      title: "Marketing Manager",
      company: "XYZ Corp.",
      location: "Los Angeles, CA",
      salary: "$90k - $120k",
      description:
        "We are seeking a skilled Marketing Manager to develop and implement marketing strategies that will drive revenue growth and increase brand awareness for our company.",
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "123 Corp.",
      location: "Chicago, IL",
      salary: "$70k - $90k",
      description:
        "We are looking for a Data Analyst to collect, analyze, and interpret large datasets in order to identify insights and trends that will inform business decisions.",
    },
  ];

  const alljobOpenings = [
    {
      id: 1,
      title: "Front-end Developer",
      company: "ABC Inc.",
      location: "New York, NY",
      salary: "$80k - $100k",
      description:
        "We are looking for an experienced Front-end Developer to join our team and help us build modern, responsive web applications using cutting-edge technologies.",
    },
    {
      id: 2,
      title: "Marketing Manager",
      company: "XYZ Corp.",
      location: "Los Angeles, CA",
      salary: "$90k - $120k",
      description:
        "We are seeking a skilled Marketing Manager to develop and implement marketing strategies that will drive revenue growth and increase brand awareness for our company.",
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "123 Corp.",
      location: "Chicago, IL",
      salary: "$70k - $90k",
      description:
        "We are looking for a Data Analyst to collect, analyze, and interpret large datasets in order to identify insights and trends that will inform business decisions.",
    },
  ];
  
  const [jobs,setJobs] = useState([]);

  const userId = useSelector((state) => state.login.userId);
  const userType = useSelector((state) => state.login.userType);

  const getJobs = async (userType) => {
    if (userType === "company") {
      const jobs = await axios.post("http://localhost:5000/job/company", { company: userId });
      await jobs.data.forEach(job=> {
        const data = {
          id: job._id,
          title:job.title,
          company: job.company,
          location: job.location,
          salary: job.salary,
          description:job.description
        }
      jobOpenings.push(data);
      });
      console.log(jobOpenings);
      setJobs(jobOpenings);
    }else{
      const job = await axios.post("http://localhost:5000/job/all");
      await job.data.forEach(job=> {
        const data = {
          id: job._id,
          title:job.title,
          company: job.company,
          location: job.location,
          salary: job.salary,
          description:job.description
        }
      alljobOpenings.push(data);
      });
      setJobs(alljobOpenings);
    }
  };

  useEffect(()=>{
    getJobs(userType);
  },[]);

  
  return (
    <div className="py-8 w-5/6 mx-auto">
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Top Job Openings
        </h2>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default TopJobOpenings;
