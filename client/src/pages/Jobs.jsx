import React from 'react'
import TopJobOpenings from '../components/jobCard'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Jobs = () => {
  const userType = useSelector((state) => state.login.userType);
  const renderCreateJob = ()=>{
    if(userType==="company"){
      return(
        <button className="bg-blue-900 text-white  font-bold py-2 px-4 rounded-full hover:bg-white hover:text-blue-900">
  <Link to="/createJob">Create New Job Opening</Link>
</button>
      )
    }
  }
  return (
    <div>
      <TopJobOpenings/>
      {renderCreateJob()}
    </div>
  )
}

export default Jobs
