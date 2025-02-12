import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from './../utils/api';

const AddEvent = () => {
  const { token } = "wewewew"; // Replace with actual token

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    category: "",
    paid: "free", 
    mode: "online",
    price: "",
    image: null, // For image upload
    locationFile: null, // For location file upload
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] }); // Only taking the first file
  };

  const addEvent = async () => {
    try {
      const dataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key]) {
          dataToSend.append(key, formData[key]);
        }
      });

      await axios.post(`${api}/addevent`, dataToSend, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "multipart/form-data", // Required for file uploads
        },
      });

      toast.success("Event added successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      console.error("Error adding event:", err);
      toast.error("Failed to add Event. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEvent();
    setFormData({
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
      category: "",
      paid: "free", 
      mode: "online",
      price: "",
      image: null,
    });
  };

  return (
    <div className="bg-black min-h-screen p-4">
      <div className="container w-[50%] mx-auto p-4 sm:p-6">

        <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-white text-center">
          Create an Event
        </h1>

        <form
          onSubmit={handleSubmit}
          className="border-2 border-purple-500 p-4 sm:p-5   rounded-xl grid grid-cols-1 gap-6"
        >
          {/* Title */}
          <div className="relative z-0 w-full mb-2 group">
            <input
              type="text"
              name="title"
              id="title"
              placeholder=" "
              value={formData.title}
              onChange={handleChange}
              className="block py-2 sm:py-2 px-0 w-full text-base sm:text-xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label
              htmlFor="title"
              className="peer-focus:font-medium absolute text-sm sm:text-lg text-gray-50 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 sm:top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-blue-400 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Title
            </label>
          </div>

          {/* Description */}
          <div className="relative z-0 w-full mb-2 group">
            <input
              type="text"
              name="description"
              id="description"
              placeholder=" "
              value={formData.description}
              onChange={handleChange}
              className="block py-2 sm:py-2 px-0 w-full text-base sm:text-xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label
              htmlFor="description"
              className="peer-focus:font-medium absolute text-sm sm:text-lg text-gray-50 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 sm:top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-blue-400 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Description
            </label>
          </div>
          <div className="relative z-0 w-full mb-2 group">
            <input
              type="text"
              name="location"
              id="location"
              placeholder=" "
              value={formData.location}
              onChange={handleChange}
              className="block py-2 sm:py-2 px-0 w-full text-base sm:text-xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label
              htmlFor="location"
              className="peer-focus:font-medium absolute text-sm sm:text-lg text-gray-50 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 sm:top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-blue-400 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              location
            </label>
          </div>

          {/* Upload Image */}
          <div className="relative z-0 w-full mb-2 group">
            <input
              type="file"
              name="image"
              id="image"
              onChange={handleFileChange}
              className="block py-2 sm:py-2 px-0 w-full text-base sm:text-xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label
              htmlFor="image"
              className="peer-focus:font-medium absolute text-sm sm:text-lg text-gray-50 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 sm:top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-blue-400 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Upload Image
            </label>
          </div>


          {/* Paid or Free */}
          <div className="relative z-0 w-full mb-2 group">
            <select
              name="paid"
              id="paid"
              value={formData.paid}
              onChange={handleChange}
              className="block py-2 sm:py-2 px-0 w-full text-base sm:text-xl text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            >
              <option value="free">Free</option>
              <option value="paid">Paid</option>
            </select>
            <label
              htmlFor="paid"
              className="peer-focus:font-medium absolute text-sm sm:text-lg text-gray-50 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 sm:top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-blue-400 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Paid or Free
            </label>
          </div>

          {/* Mode (Online/Offline) */}
          <div className="relative z-0 w-full mb-2 group">
            <select
              name="mode"
              id="mode"
              value={formData.mode}
              onChange={handleChange}
              className="block py-2 sm:py-2 px-0 w-full text-base sm:text-xl text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            >
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
            <label
              htmlFor="mode"
              className="peer-focus:font-medium absolute text-sm sm:text-lg text-gray-50 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 sm:top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-blue-400 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Mode
            </label>
          </div>

          {/* Date */}
          <div className="relative z-0 w-full mb-2 group">
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              className="block py-2 sm:py-2 px-0 w-full text-base sm:text-xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label
              htmlFor="date"
              className="peer-focus:font-medium absolute text-sm sm:text-lg text-gray-50 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 sm:top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-blue-400 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Date
            </label>
          </div>

          {/* Time */}
          <div className="relative z-0 w-full mb-2 group">
            <input
              type="time"
              name="time"
              id="time"
              value={formData.time}
              onChange={handleChange}
              className="block py-2 sm:py-2 px-0 w-full text-base sm:text-xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label
              htmlFor="time"
              className="peer-focus:font-medium absolute text-sm sm:text-lg text-gray-50 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 sm:top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-blue-400 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Time
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded-lg"
          >
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
