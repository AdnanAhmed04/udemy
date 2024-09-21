import React from "react";

const Categories = ({ image, title, description }) => {
  return (
    <div className="p-4 max-w-xs">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-72 h-72 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>
      <h2 className="text-lg font-bold mt-4">{title}</h2>
      {description && <p className="mt-2 text-gray-500">{description}</p>}
    </div>
  );
};

export default Categories;
