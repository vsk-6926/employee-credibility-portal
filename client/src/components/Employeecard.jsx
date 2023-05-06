import React from "react";

const EmployeeCard = ({
  image,
  name,
  experience,
  skills,
  currentCompany,
  credibilityScore,
  location,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      <p className="text-gray-700 text-sm mb-2">
        Experience: {experience} years
      </p>
      <p className="text-gray-700 text-sm mb-2">
        Current Company: {currentCompany}
      </p>
      <p className="text-gray-700 text-sm mb-2">
        Credibility Score: {credibilityScore}
      </p>
      <p className="text-gray-700 text-sm mb-2">Location: {location}</p>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-200 text-gray-700 text-sm py-1 px-2 rounded-full mr-2 mb-2"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="flex justify-center mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                type="submit"
              >
               More Details
              </button>
            </div>
    </div>
  );
};

export default EmployeeCard;
