import React from "react";

function Card({ data }) {
	return (
		<div className=" w-[250px] h-[400px] bg-white rounded-xl shadow-md border border-gray-900 overflow-hidden p-1">

			{/* Image Section */}
			<div className="relative">
				<img
					src={data.src}
					alt={data.title}
					className="w-full h-40 object-cover p-1 rounded-lg"
				/>

				<button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 text-gray-700"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M5.121 19.793a1 1 0 010-1.414l7.071-7.071a1 1 0 011.414 0l7.071 7.071a1 1 0 01-1.414 1.414L12 12.707l-6.879 6.879a1 1 0 01-1.414 0z"
						/>
					</svg>
				</button>
			</div>


			{/* Content Section */}
			<div className="p-4">
				<h2 className="text-lg font-semibold text-gray-900">
					{data.title}
				</h2>

				<p className="text-sm text-gray-500 mt-1">
					{data.time}
				</p>

				<p className="text-sm text-gray-500">
					{data.location}
				</p>

				<div className="flex justify-between items-center mt-4">
					<div>
						<p className="text-sm text-gray-900">
							{data.author}
						</p>
						<p className="text-sm text-gray-400">
							{data.followers}
						</p>
					</div>
					<p className="text-sm text-gray-500">
						{data.price}
					</p>
				</div>


			</div>

			{/* Button Section */}
			<div className="px-4 pb-4">
				<button
					onClick={data.handleClick}
					className="w-full bg-blue-700 text-white py-2 rounded-md font-medium hover:bg-blue-800">
					Book Now
				</button>
			</div>
             
		</div>
	);
}

export default Card;
