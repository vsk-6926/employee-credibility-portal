import React from 'react'
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

const App = () => {
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
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

