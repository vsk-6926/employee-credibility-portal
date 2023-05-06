import React, { useState } from "react";
import bgImage from "../assets/bg.jpg";
import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux';
import axios from "axios";
import { loginUser } from "../redux/slices";

//Login Integrated

const Login = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/login", formData).then((res) => {
      const { userId, userType } = res.data;
      console.log(userType);
        dispatch(loginUser({ userId, userType }));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("user", JSON.stringify({ userId: userId, userType: userType }))
        navigate("/")
      });
  };

  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex justify-center items-center h-screen" >
        <div className="bg-gray-200 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <form onSubmit={handleSubmit} style={{width:"500px"}}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
           
            <div className="flex justify-center mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                type="submit"
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
