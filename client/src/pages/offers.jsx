import React from 'react';
import { Link } from 'react-router-dom';

const OffersPage = () => {
  // Mock data for offers
  const offers = [
    {
      id: 1,
      jobTitle: 'Software Engineer',
      company: 'ABC Technologies',
      location: 'New York',
      salary: '$100,000 per year',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      jobTitle: 'Product Manager',
      company: 'XYZ Corporation',
      location: 'San Francisco',
      salary: '$120,000 per year',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // Add more offers as needed
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 mt-5">Offers</h1>
      <div className="w-full max-w-screen-lg">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white rounded-lg shadow-lg flex flex-col p-6 mb-4"
          >
            <h2 className="text-xl font-bold mb-2">{offer.jobTitle}</h2>
            <p className="text-gray-600 mb-4">{offer.company}</p>
            <p className="text-gray-600">{offer.location}</p>
            <p className="text-gray-600">{offer.salary}</p>
            <p className="text-gray-600 mt-4">{offer.description}</p>
            <Link to='/'>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4">
              Accept Offer
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersPage;