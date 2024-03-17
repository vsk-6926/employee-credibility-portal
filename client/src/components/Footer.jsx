import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-8 p-8 bg-blue-900">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <h2 className="text-2xl text-teal-200 font-bold mb-4">About Us</h2>
            <p className=" text-white leading-loose">
            Streamlining the recruitment process for both employers and employees with integrity and credibility.
            </p>
          </div>
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <h2 className="text-2xl text-teal-200 font-bold mb-4">Contact Us</h2>
            <p className=" text-white leading-loose mb-2">
              Phone: +1 (123) 456-7890
            </p>
            <p className=" text-white leading-loose mb-2">
              Email: info@example.com
            </p>
            <p className=" text-white leading-loose">
              Address: 1234 Main St, Suite 100, Anytown, USA
            </p>
          </div>
          <div className="w-full lg:w-1/3">
            <h2 className="text-2xl text-teal-200 font-bold mb-4">Follow Us</h2>
            <div className="flex items-center">
              <a href="/" className="mr-4">
                <FaFacebook className="text-3xl  text-white hover:text-blue-500 transition duration-300" />
              </a>
              <a href="/" className="mr-4">
                <FaTwitter className="text-3xl  text-white hover:text-blue-500 transition duration-300" />
              </a>
              <a href="/" className="mr-4">
                <FaInstagram className="text-3xl  text-white hover:text-blue-500 transition duration-300" />
              </a>
              <a href="/" className="mr-4">
                <FaLinkedin className="text-3xl  text-white hover:text-blue-500 transition duration-300" />
              </a>
            </div>
            <div className="mt-4">
              <a href="/" className="mr-4  text-white hover:text-blue-500 transition duration-300">
                Privacy Policy
              </a>
              <a href="/" className="mr-4  text-white hover:text-blue-500 transition duration-300">
                Terms of Service
              </a>
              <a href="/" className=" text-white hover:text-blue-500 transition duration-300">
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-8 py-4">
        <div className="container px-4 mx-auto text-center text-gray-500">
          &copy; 2023 ECP. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
