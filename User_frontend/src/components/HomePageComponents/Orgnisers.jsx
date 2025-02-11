import React from "react";

const organisers = [
  {
    name: "Robert Fox",
    followers: "78.9k Followers",
    image: "https://source.unsplash.com/100x100/?person1",
  },
  {
    name: "Annette Black",
    followers: "34.9k Followers",
    image: "https://source.unsplash.com/100x100/?person2",
  },
  {
    name: "Kristin Watson",
    followers: "63.9k Followers",
    image: "https://source.unsplash.com/100x100/?person3",
  },
  {
    name: "Albert Flores",
    followers: "98.9k Followers",
    image: "https://source.unsplash.com/100x100/?person4",
  },
];

const OrganisersSection = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-6 py-12">
      
      {/* Section Title */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Popular Organiser's</h1>
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {organisers.map((organiser, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md p-4 text-center"
          >
            {/* Profile Image */}
            <img
              src={organiser.image}
              alt={organiser.name}
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            {/* Name and Followers */}
            <h2 className="text-lg font-semibold text-gray-900">
              {organiser.name}
            </h2>
            <p className="text-sm text-gray-500">{organiser.followers}</p>
            {/* Follow Button */}
            <button className="mt-4 w-full bg-blue-700 text-white py-2 rounded-md font-medium hover:bg-blue-800">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganisersSection;