import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className=" shadow-md bg-white sticky  top-0 left-0 ">
			<div className="flex items-center justify-between px-6 py-3">
				{/* Logo */}
				<div className="text-2xl font-bold text-indigo-900">
					EventS
				</div>

				{/* Right Section */}
				<div className="flex items-center space-x-6">
					{/* Search Bar */}
					<div className="flex items-center flex-1 mx-4">
						<input
							type="text"
							placeholder="Search"
							className="w-full py-2 px-4 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					</div>

					{/* Navigation Links */}
					<div className="flex items-center space-x-6">
						<Link
							to={'/addevent'}
							className="text-sm text-gray-700 hover:text-indigo-700">
							Create Event
						</Link>
						<a
							href="#"
							className="text-sm text-gray-700 hover:text-indigo-700">
							My Events
						</a>
						<a
							href="#"
							className="text-sm text-gray-700 hover:text-indigo-700 ">
							All Events
						</a>
					</div>

					{/* Profile Section */}
					<div className="flex items-center space-x-4">
						
						<button className="bg-indigo-700 text-white px-4 py-2 rounded-md text-sm flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 mr-2"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M15 17h5l-1.405-1.405A9.963 9.963 0 0020 12c0-5.523-4.477-10-10-10S0 6.477 0 12s4.477 10 10 10a9.963 9.963 0 003.595-.605L15 17z"
								/>
							</svg>
							<span className="hidden md:inline-block">
								Sign In
							</span>

							
							
						</button>
						<Link
							to={'/profile'}>

							<span>
								pr
							</span>
							</Link>	
					</div>
				</div>
			</div>

			{/* Bottom Gradient */}
			<div className="w-full h-1 bg-gradient-to-r from-indigo-700 via-pink-500 to-yellow-500"></div>
		</div>
	);
};

export default Header;
