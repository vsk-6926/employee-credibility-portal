import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import Company from "./pages/Company";
import Jobs from "./pages/Jobs"
import About from "./pages/About";
import Footer from './components/Footer';
import Signup from './pages/Signup';
import Login from './pages/Login';
import CreateJobListing from './pages/createJob';
import FeedbackForm from './pages/takeScore';
import { useDispatch } from 'react-redux';
import { loginUser } from './redux/slices';
import JobDetails from './pages/jobDetails';
import UpdateDetails from './pages/updateDetails';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if the user is logged in on component mount
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser && storedUser.userId && storedUser.userType) {
        dispatch(loginUser({ userId: storedUser.userId, userType: storedUser.userType }));
      }
    }
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/company" element={<Company />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/createjob" element={<CreateJobListing/>}/>
        <Route path="/takescore" element={<FeedbackForm/>}/>
        <Route path="/jobdetails" element={<JobDetails/>}/>
        <Route path="/updateDetails" element={<UpdateDetails/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

