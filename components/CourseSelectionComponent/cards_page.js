import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'; // Import FaStar and FaStarHalfAlt
import Image from 'next/image';

const Cards = ({ course }) => {
  return (
    <div className="border p-4 w-[250px]">
      <Image 
        src={course.image} 
        alt={course.title} 
        width={250} 
        height={160} 
        className="object-cover border-gray-500"
      />
      <h2 className="font-bold mt-2">{course.title}</h2>
      <p className="text-sm text-gray-600">{course.author}</p>

      <div className="flex items-center gap-x-2 mt-2">
        <p>{course.rating}</p>
        <div className="flex items-center text-yellow-500">
          {[...Array(Math.floor(course.rating))].map((_, i) => (
            <FaStar key={i} />
          ))}
          {course.rating % 1 !== 0 && <FaStarHalfAlt />}
        </div>
      </div>

      <p className="text-lg font-bold mt-2">{course.price}</p>
    </div>
  );
};

export default Cards;
