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

      
    </div>
  );
};

export default OrganisersSection;