import React, { useEffect } from "react";
import { FiUser } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/slices";
import { loginUser } from "../redux/slices";

function Navbar() {
  const loggedIn = useSelector((state) => state.login.loggedIn);
  const userId = useSelector((state) => state.login.userId);
  const userType = useSelector((state) => state.login.userType);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch the logout action
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    dispatch(logoutUser());
  };

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

  const renderNavLinks = () => {
    if (loggedIn) {
      // Render links based on the userType
      if (userType === "employee") {
        return (
          <>
            <li className="block mt-8 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 px-3 py-2">
              <Link to="/about">About</Link>
            </li>
            <li className="block mt-8 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 px-3 py-2">
              <Link to="/jobs">Jobs</Link>
            </li>
            <li className="block mt-8 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 px-3 py-2">
              <Link to="/offers">Offers</Link>
            </li>
            <li className="block mt-8 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 px-3 py-2">
              <Link to="/employee">Dashboard</Link>
            </li>
          </>
        );
      } else if (userType === "company") {
        return (
          <>
            <li className="block mt-8 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 px-3 py-2">
              <Link to="/about">About</Link>
            </li>
            <li className="block mt-8 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 px-3 py-2">
              <Link to="/jobs">Jobs</Link>
            </li>
            <li className="block mt-8 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 px-3 py-2">
              <Link to="/company">Company</Link>
            </li>
          </>
        );
      }
    } else {
      // Render default links for non-logged in users
      return (
        <>
          <li className="block mt-8 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 px-3 py-2">
            <Link to="/about">About</Link>
          </li>
          <li className="block mt-8 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 px-3 py-2">
            <Link to="/jobs">Jobs</Link>
          </li>
            <li className="block mt-8 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 px-3 py-2">
              <Link to="/company">Company</Link>
            </li>
        </>
      );
    }
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-900 p-4 mb-0">
      <a
        href="/"
        className="flex items-center flex-shrink-0 text-white mr-6 ml-8"
      >
        <span className="font-bold text-4xl font-serif tracking-wider ml-auto">
          ECP
        </span>
      </a>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <ul className="text-md lg:flex-grow lg:flex lg:justify-center">
          {renderNavLinks()}
        </ul>
      </div>
      <div className="mr-8">
        {loggedIn ? (
           <div className="flex items-center">
           <div className="flex items-center mr-6">
             <div className="bg-blue-900 text-white flex items-center justify-center rounded-full w-10 h-10 mr-2">
              <Link to="/updateDetails">
              <FiUser className="text-2xl" /></Link>
               
             </div>
             <span className="text-white text-lg font-bold">Hi, {userId}</span>
           </div>
           <button onClick={handleLogout}>
             <Link
               to="/"
               className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-900 hover:bg-white mt-4 lg:mt-0 mr-4"
             >
               Logout
             </Link>
           </button>
         </div>
        ) : (
          <>
            <Link
              to="/login"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-900 hover:bg-white mt-4 lg:mt-0 mr-4"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-900 hover:bg-white mt-4 lg:mt-0"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
