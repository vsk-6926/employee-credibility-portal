import React from 'react'

const Newsletter = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mt-8">
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Subscribe to Our Newsletter</h2>
      <p className="text-gray-600 mb-6 text-center">Stay up-to-date with the latest news and updates from TalentCred by subscribing to our newsletter.</p>
      <form className="flex flex-col sm:flex-row  justify-center">
        <input className="w-full sm:w-1/2 rounded-lg px-4 py-2 mb-2 sm:mr-2" type="email" placeholder="Enter your email address" />
        <button className="bg-blue-900 text-white rounded-lg px-4 py-2 hover:bg-blue-800 sm:w-1/4">Subscribe</button>
      </form>
    </div>
  </div>
  
  )
}

export default Newsletter
