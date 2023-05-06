import React from "react";
import EmployeeCard from "../components/Employeecard.jsx"; // import the employee card component
import { useState } from "react";

const Company = () => {
  // sample employee data
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    phone: "",
    userType: "",
  });

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
    <div className="container mx-auto px-4 py-8 bg-gray-200 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Trusted Employees On Our Platform!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.name}
            image={employee.profilePic}
            name={employee.name}
            experience={employee.experience}
            skills={employee.skills}
            currentCompany={employee.currentCompany}
            credibilityScore={employee.credibilityScore}
            location={employee.location}
            profilePic={employee.profilePic}
          />
        ))}
      </div>
    </div>
  );
};



export default Company;