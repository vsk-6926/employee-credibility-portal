import React from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { FaBriefcase, FaCheckCircle, FaUserGraduate, FaRegHandshake, FaRegAddressCard } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import Progress from "../components/totalChart";

const data = [
  { name: "Experience", value: 27, icon: <FaBriefcase size={30} /> },
  { name: "Skills", value: 8, icon: <FaCheckCircle size={30} /> },
  { name: "Qualifications", value: 10.5, icon: <FaUserGraduate size={30} /> },
  { name: "Offers and Acceptances", value: 18, icon: <FaRegHandshake size={30} /> },
  { name: "Interviews", value: 13.5, icon: <FaRegAddressCard size={30} /> },
];


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

const pieChartWidth = 700;
const pieChartHeight = 400;

const barChartWidth = 600;
const barChartHeight = 400;

const Employee = () => {
  const totalScore = data.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.value;
  }, 0);

  return (
    <div className="container mx-auto py-8">
  <h1 className="text-4xl font-bold mb-8 text-center">Employee Dashboard</h1>
  <div className="flex flex-col justify-between items-center">
    <div className="w-full md:w-1/2 p-4 my-4 mx-auto justify-center">
    <h4 className="text-2xl  mb-8 text-center">Pie Chart For Credibility Score</h4>
      <PieChart width={pieChartWidth} height={pieChartHeight} >
        <Pie
          data={data}
          cx={pieChartWidth / 2}
          cy={pieChartHeight / 2}
          innerRadius={60}
          outerRadius={120}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
    <h4 className="text-2xl  mb-8 text-center">Bar Charts For Parameters</h4>
    <div className="w-full md:w-1/2 p-4 my-4 mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Total Credibility Score: {totalScore}</h2>
      <BarChart width={barChartWidth} height={barChartHeight} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  </div>
  <h4 className="text-2xl  mb-8 text-center">Parameters</h4>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
  
    {data.map((param) => (
      <div key={param.name} className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-center my-4">
        <div className="bg-gray-200 rounded-lg p-4">{param.icon}</div>
        <div className="ml-4">
          <h3 className="font-bold">{param.name}</h3>
          <div className="flex items-center mt-2">
            <div className="w-16 mr-4">
              <BarChart width={60} height={40} data={[param]}>
                <Bar dataKey="value" fill={COLORS[4]} />
              </BarChart>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <BsFillPersonFill size={20} className="mr-2" />
                <p className="text-gray-700 font-bold">{param.value}%</p>
              </div>
              <div className="flex items-center">
                <p className="text-sm text-gray-500 font-bold">out of 100%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  <h4 className="text-2xl  mb-8 text-center">Total Credibility Score</h4>
  <div >
    <Progress totalScore={77}/>
  </div>
</div>
);
};

export default Employee;