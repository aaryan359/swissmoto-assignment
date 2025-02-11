import React from "react";

const categories = [
  { image: "/public/Img (1).png", label: "Music" },
  { image: "/public/Img (2).png", label: "Business" },
  { image: "/public/Img (3).png", label: "Nightlife", highlight: true },
  { image: "/public/Img (4).png", label: "Holidays" },
  { image: "/public/Img (5).png", label: "Food & Drink" },
  { image: "/public/Img (6).png", label: "Education" },
  { image: "/public/Img (7).png", label: "Gaming" },
  { image: "/public/Img (8).png", label: "Politics" }
];

const Category = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="text-center cursor-pointer">
            <div className="relative">
              <img
                src={category.image}
                alt={category.label}
                className="rounded-xl w-full h-40 object-cover"
              />

              {category.highlight && (
                <span className="absolute top-0 right-0 bg-pink-500 h-1 w-8 rounded-full transform -translate-y-3"></span>
              )}

            </div>
            <p className="mt-4 text-gray-700 font-medium">{category.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;