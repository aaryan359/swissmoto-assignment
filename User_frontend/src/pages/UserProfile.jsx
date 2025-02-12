import { useState } from "react";
import { FaEdit } from "react-icons/fa";
// import { IoIosMore } from "react-icons/io";
// import { IoIosSend } from "react-icons/io";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("My Events");

  const tabs = [ "My Bookings", "My Events"];

  const events = [
    {
      id: 1,
      title: "Start a blog to reach your creative peak",
      time: "01:34 pm",
      date: "Saturday, Jul 12",
      location: "Syracuse, Connecticut",
      type: "Free",
      image: "../../public/img (8).png",
    },
    {
      id: 2,
      title: "Caring is the new marketing",
      time: "01:34 pm",
      date: "Friday, Jun 8",
      location: "Coppell, Virginia",
      type: "paid",
      image: "../../public/img (7).png",
    },
  ];



  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Profile Section */}
      <div className="flex items-center gap-4 border-b p-4 mb-5">
        <div className="relative w-24 h-24">
          <img
            src="../../public/img (9).png"
            alt="Profile"
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold ">Emily Thompson</h2>
          <p className="p-1">Date of Birth: 23/04/2000</p>
          
          <p className="p-1">Email ID: Somethinghere@server.com</p>
          <p className="p-1">Contact number: 1234567890</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-start space-x-6 my-4 text-gray-500 border-b pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 ${
              activeTab === tab ? "text-black font-bold border-b-2 border-blue-600" : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Sorting & Filtering */}
      <div className="flex justify-between items-center my-4">
        <div>
          <span className="text-gray-700 font-semibold">Filter By :</span> Status
        </div>
        <div className="flex space-x-2">
          <span className="text-gray-700 font-semibold">Sort By :</span>
          <button className="px-3 py-1 border rounded-md">Date</button>
          <button className="px-3 py-1 border rounded-md">Location</button>
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="flex bg-gray-100 p-4 rounded-lg shadow-md">
            <img src={event.image} alt={event.title} className="w-32 h-20 rounded-md" />
            <div className="ml-4 flex-1">
              <h3 className="font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-500">{event.time}</p>
              <p className="text-sm">{event.date}</p>
              <p className="text-sm text-gray-500">{event.location}</p>
              <p className="text-sm">{event.type}</p>
            </div>
            <div className="flex flex-col items-center">
              {/* <IoIosMore className="text-xl cursor-pointer" /> */}
              <button className="flex items-center text-blue-600 font-semibold">
                Invite 
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
