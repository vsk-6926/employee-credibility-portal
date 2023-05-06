import React from "react";

const Hero = () => {
  return (
    <div className="bg-navy-blue text-black">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h2 className="text-5xl font-bold mb-4">Welcome to TalentCred!</h2>
            <p className="text-xl mb-6 mr-5">
              TalentCred is a one stop solution to all your hiring problems and
              also a great place for all the young minds to look for great job
              listings...
            </p>
            <div className="flex items-center justify-start">
              <a href="/signup">
                <button className="bg-blue-900 text-white font-bold py-3 px-6 rounded-full mr-6 hover:bg-white hover:text-blue-900">
                  Sign Up
                </button>
              </a>
              <a href="/about">
                <button className="bg-transparent border-2 border-white text-black font-bold py-3 px-6 rounded-full hover:bg-white hover:text-blue-900">
                  Learn More
                </button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              className="w-full h-auto rounded border"
              src={require("../assets/hero.jpg")}
              alt="Office"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
