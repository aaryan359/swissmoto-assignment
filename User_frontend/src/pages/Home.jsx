import React from 'react'
import Category from '../components/HomePageComponents/Catagory'
import Card from '../components/Card'
import OrganisersSection from '../components/HomePageComponents/Orgnisers'



function Home() {


    
  return (
    <div>
        < Category />
        <div className='px-20 mx-15 my-5 flex flex-row gap-5'>
            
        <Card 
            data={{
            src: "/public/img (9).png",
            title: "Learn content creating efficiently",
            time: "Friday, Jun 8\n07:38 am",
            location: "Lansing, Illinois",
            author: "Albert Flores",
            followers: "57.3k Followers",
            price: "Free/Paid",
            handleClick: () => alert("Booking confirmed!"),
          }}  
        />

         <Card 
             data={{
            src: "/public/img (9).png",
            title: "Learn content creating efficiently",
            time: "Friday, Jun 8\n07:38 am",
            location: "Lansing, Illinois",
            author: "Albert Flores",
            followers: "57.3k Followers",
            price: "Free/Paid",
            handleClick: () => alert("Booking confirmed!"),
          }}  
        />

         <Card 
            data={{
            src: "/public/img (9).png",
            title: "Learn content creating efficiently",
            time: "Friday, Jun 8\n07:38 am",
            location: "Lansing, Illinois",
            author: "Albert Flores",
            followers: "57.3k Followers",
            price: "Free/Paid",
            handleClick: () => alert("Booking confirmed!"),
          }}  
        />
    
        

        </div>
        <OrganisersSection/>

       
    </div>
  )
}

export default Home