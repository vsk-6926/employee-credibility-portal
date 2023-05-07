import React, { useEffect, useState } from "react";
import bgImage from "../assets/bg.jpg";
import axios from "axios";
import { useNavigate } from "react-router";
import { ethers } from "ethers";
import contractABI from "../utils/contractABI.json";

//Signup Page integrated with Metamask
const contractAddress = "0x41a0a3CAC729a477A155A08Da9c1c0442594cac2";

const Signup = () => {

  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }
      
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const registerCompanyName = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
          contractAddress,
          contractABI.abi,
          signer
        );
        console.log("Going to pop wallet now to pay gas...");
        let nftTxn = await connectedContract.registerCompanyName(
          formData.name)
        await nftTxn.wait();
        console.log("Mined -- ", nftTxn);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);



  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username:"",
    password: "",
    email: "",
    phone: "",
    userType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    await connectWallet();
    if (formData.userType === "company") {
      await registerCompanyName();
    }
    axios.post("http://localhost:5000/register", formData).then((res) => {
      console.log(res);
      navigate("/login");
    }
    );
  };

  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex justify-center items-center h-screen" >
        <div className="bg-gray-200 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col">
          <h2 className="text-2xl font-bold mb-4 text-center">Sign up</h2>
          <form onSubmit={handleSubmit} style={{width:"500px"}}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name
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
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                name="username"
                value={formData.username}
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
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="phone"
              >
                Phone number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="userType"
              >
                Are you a company or an employee?
              </label>
              <div className="flex items-center">
                <input
                  className="mr-2 leading-tight"
                  type="radio"
                  id="company"
                  name="userType"
                  value="company"
                  onChange={handleChange}
                />
                <label
                  className="block text-gray-700 font-bold mb-2 mr-2"
                  htmlFor="company"
                >
                  Company
                </label>
              </div>
              <div className="flex items-center">
                <input
                  className="mr-2 leading-tight"
                  type="radio"
                  id="employee"
                  name="userType"
                  value="employee"
                  onChange={handleChange}
                />
                <label
                  className="block text-gray-700 font-bold mb-2 mr-2"
                  htmlFor="employee"
                >
                  Employee
                </label>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                type="submit"
              >
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
