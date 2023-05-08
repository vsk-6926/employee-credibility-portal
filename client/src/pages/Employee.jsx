import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { FaBriefcase, FaCheckCircle, FaUserGraduate, FaRegHandshake, FaRegAddressCard } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import Progress from "../components/totalChart";
import axios from 'axios'
import { useNavigate } from "react-router";
import ProgressBar from "../components/totalChart";
import { useSelector } from "react-redux";




const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#FFC658"];

const pieChartWidth = 700;
const pieChartHeight = 400;

const barChartWidth = 600;
const barChartHeight = 400;

const Employee = () => {
  const userId = useSelector((state) => state.login.userId);
  const userType = useSelector((state) => state.login.userType);
  const [score, setScore] = useState(null);
  const navigate=useNavigate()
  
  const urlParams = new URLSearchParams(window.location.search);
  var name = urlParams.get("name");
  const title=urlParams.get('title');
  const company=urlParams.get('company');
  if(userType==="employee"){
    name=userId;
  }
  useEffect(() => {
    const fetchScoreDetails = async () => {
      try {
        const response = await axios.post('http://localhost:5000/score/get', {name});
        setScore(response.data.score);
      } catch (error) {
        console.error('Error fetching score details:', error);
      }
    };


    fetchScoreDetails();
  }, [name]);
  const clickHandler=async()=>{
    try {
      const response = await axios.post('http://localhost:5000/offer/create', {
        role: title,
        employee: name,
        company: company
      });
      navigate(`/takescore?name=${name}&title=${title}`)
    } catch (error) {
      console.error(error);
    }
  }
  if(score){
    const data = [
      { name: "Experience", value: score.experience, icon: <FaBriefcase size={30} /> },
      { name: "Technical Skills", value: score.technicalSkills, icon: <FaCheckCircle size={30} /> },
      { name: "Interpersonal Skills", value: score.interPersonalSkills, icon: <FaUserGraduate size={30} /> },
      { name: "Problem Solving Ability", value: score.problemSolving, icon: <FaRegHandshake size={30} /> },
      { name: "Interview Score", value: score.interviews, icon: <FaRegAddressCard size={30} /> },
      { name: "Offers and acceptances", value: score.offersAcceptance, icon: <BsFillPersonFill size={30} /> },
    ];
    var totalScore=score.totalScore
  
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Employee Dashboard</h1>
      <h3 className="text-2xl font-bold mb-8 text-center">{name}</h3>
      <div className="flex flex-col justify-between items-center">
        <div className="w-full md:w-1/2 p-4 my-4 mx-auto justify-center">
          <h4 className="text-2xl mb-8 text-center">Pie Chart For Credibility Score</h4>
          <PieChart width={pieChartWidth} height={pieChartHeight}>
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
        <h4 className="text-2xl mb-8 text-center">Bar Charts For Parameters</h4>
        <div className="w-full md:w-1/2 p-4 my-4 mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Total Credibility Score: {totalScore}</h2>
          <BarChart width={barChartWidth} height={barChartHeight} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8"/>
</BarChart>
</div>
</div>
<h4 className="text-2xl mb-8 text-center">Parameters</h4>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
{data.map((param) => (
<div key={param.name} className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-center my-4">
<div className="bg-gray-200 rounded-lg p-4">{param.icon}</div>
<div className="ml-4">
<h3 className="font-bold">{param.name}</h3>
<div className="flex items-center mt-2">
<div className="w-16 mr-4">
<BarChart width={60} height={40} data={[param]}>
<Bar dataKey="value" fill={COLORS[5]} />
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
<h4 className="text-2xl mb-8 text-center">Total Credibility Score</h4>
<div>
<ProgressBar totalScore={totalScore}/>
</div>
{userType==="company"?<div className="flex items-center justify-center mt-10">
  <button className="bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold py-4 px-8 rounded-lg shadow-lg" onClick={clickHandler}>
    Make Offer
  </button>
</div>:null}


</div>

);
};}

export default Employee;