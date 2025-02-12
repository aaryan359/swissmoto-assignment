import React from "react";
import Category from "../components/HomePageComponents/Catagory";
import Card from "../components/Card";
import OrganisersSection from "../components/HomePageComponents/Orgnisers";

function Home() {
	return (
		<div>
			<Category />
      <div className=" min-w-screen px-20 gap-5  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        
        
        <Card
					data={{
						src: "/public/img (9).png",
						title: "Learn content creating efficiently",
						time: "Friday, Jun 8\n07:38 am",
						location: "Lansing, Illinois",
						author: "Albert Flores",
						followers: "57.3k Followers",
						price: "Free/Paid",
						handleClick: () =>
							alert(
								"Booking confirmed!"
							),
					}}
				/>
				<Card
					data={{
						src: "/public/img (9).png",
						title: "Master Web Development",
						time: "Saturday, Jun 9\n08:15 am",
						location: "New York, NY",
						author: "Jane Smith",
						followers: "42k Followers",
						price: "Paid",
						handleClick: () =>
							alert(
								"Booking confirmed!"
							),
					}}
				/>
				<Card
					data={{
						src: "/public/img (9).png",
						title: "Creative Writing for Beginners",
						time: "Monday, Jun 10\n10:30 am",
						location: "Los Angeles, CA",
						author: "Mark Johnson",
						followers: "35.2k Followers",
						price: "Free",
						handleClick: () =>
							alert(
								"Booking confirmed!"
							),
					}}
				/>
				
			</div>

			<OrganisersSection />
		</div>
	);
}

export default Home;
