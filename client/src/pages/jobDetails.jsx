import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaBriefcase } from 'react-icons/fa';
import EmployeeCard from '../components/Employeecard';

const JobDetails = () => {
    const userType = useSelector((state) => state.login.userType);
    const [jobDetails, setJobDetails] = useState([]);
    const [appliedEmployees, setAppliedEmployees] = useState([]);
    const [employeeDetails, setEmployeeDetails] = useState([]);
    const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        useEffect(() => {
          const fetchJobDetails = async () => {
            try {
              const response = await axios.post(`http://localhost:5000/job/jobdetails`, { id: id });
              setJobDetails(response.data[0]);
            } catch (error) {
              console.error('Error fetching job details:', error);
            }
          };
      
          fetchJobDetails();
        }, [id]);
      
        useEffect(() => {
          if (jobDetails && userType === 'company') {
            const fetchAppliedEmployees = async () => {
              try {
                const response = await axios.post('http://localhost:5000/appliedjobs/get', {
                  company: jobDetails.company,
                  jobTitle: jobDetails.title,
                });
                setAppliedEmployees(response.data);
              } catch (error) {
                console.error('Error fetching applied employees:', error);
              }
            };
      
            fetchAppliedEmployees();
          }
        }, [jobDetails, userType]);
      
        useEffect(() => {
          const fetchEmployeeDetails = async () => {
            try {
              const employees = await Promise.all(
                appliedEmployees.map(async (employee) => {
                  const response = await axios.post('http://localhost:5000/employee/get', { name: employee.employee });
                  return response.data;
                })
              );
              setEmployeeDetails(employees);
            } catch (error) {
              console.error('Error fetching employee details:', error);
            }
          };
      
          if (appliedEmployees.length > 0) {
            fetchEmployeeDetails();
          }
        }, [appliedEmployees]);
      

      const { title, company, location,salary, description } = jobDetails;
      const employees = [
        {
          name: "John Doe",
          experience: 5,
          skills: ["JavaScript", "React", "Node.js"],
          currentCompany: "ABC Inc.",
          credibilityScore: 85,
          location: "New York, NY",
          profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
          name: "Jane Smith",
          experience: 3,
          skills: ["HTML", "CSS", "JavaScript"],
          currentCompany: "XYZ Corp.",
          credibilityScore: 75,
          location: "San Francisco, CA",
          profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
        },
        {
          name: "Bob Johnson",
          experience: 8,
          skills: ["Python", "Django", "PostgreSQL"],
          currentCompany: "PQR LLC.",
          credibilityScore: 90,
          location: "Chicago, IL",
          profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
        },
      ];
      return (
        <div className="container  mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Job Details</h2>
      <div className=" rounded-lg bg-gray-200 shadow p-6">
        <div className="flex items-center mb-4">
          <div className="bg-blue-900 text-white flex items-center justify-center rounded-full w-12 h-12 mr-4">
            <FaBriefcase className="text-2xl" />
          </div>
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-sm text-gray-500">{company}</p>
          </div>
        </div>
        <h3 className="text-lg font-bold mb-2">Location: {location}</h3>
        <h3 className="text-lg font-bold mb-2">Salary: {salary}</h3>
        <h3 className="text-lg font-bold mb-2">Description:</h3>
        <p className="text-gray-700">{description}</p>
        {userType === 'company' ? (
          <div>
            <h3 className="text-xl font-bold text-center mt-4 mb-2">Applied Employees</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {console.log(employeeDetails)}
        {employeeDetails.map((employee) => (
          <EmployeeCard
            key={employee[0].name}
            image="https://randomuser.me/api/portraits/men/1.jpg"
            name={employee[0].name}
            experience={employee[0].experience}
            skills={employee[0].skills}
            currentCompany={employee[0].currentCompany}
            credibilityScore="80"
            location={employee[0].location}
            title={title}
            company={company}
          />
        ))}
      </div>
          </div>
        ) : (
          <div className="flex justify-center mt-4">
            <Link
              to={`/apply?id=${id}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Apply
            </Link>
          </div>
        )}
      </div>
    </div>
      );
}

export default JobDetails;
