// components/Course_sel.js
import React from "react";
import Image from "next/image";
import courImage1 from "../CourseSelectionComponent/images/ai.jpeg";
import courImage2 from '../CourseSelectionComponent/images/ai2.jpeg';
import courImage3 from '../CourseSelectionComponent/images/c1.jpeg';
import courImage4 from '../CourseSelectionComponent/images/c3.jpeg';
import courImage5 from '../CourseSelectionComponent/images/c5.jpeg'; // Added courImage5


import Cards from '../CourseSelectionComponent/cards_page'
const courses = [
  {
    image: courImage1,
    title: "Python for Beginners",
    author: "John Doe",
    rating: 4.5,
    price: "$19.99",
  },
  {
    image: courImage2,
    title: "Advanced Microsoft Excel",
    author: "Jane Smith",
    rating: 4.7,
    price: "$29.99",
  },
  {
    image: courImage3,
    title: "Web Development Bootcamp",
    author: "Robert Williams",
    rating: 4.8,
    price: "$39.99",
  },
  {
    image: courImage4,
    title: "Mastering JavaScript",
    author: "Emily Johnson",
    rating: 4.6,
    price: "$24.99",
  },
  {
    image: courImage5,
    title: "Data Science with Python",
    author: "Michael Brown",
    rating: 4.9,
    price: "$49.99",
  },
];

const Course_sel = () => {
  return (
    <div className="px-4 md:px-12 py-12 font-serif ">
      <h2 className="text-2xl md:text-3xl font-semibold text-start md:text-left">
        A broad selection of courses
      </h2>
      <p className="text-base md:text-lg text-center md:text-left mt-2">
        Choose from over 250,000 online video courses with new additions published every month
      </p>
      <ul className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-5 font-semibold mt-5">
        <li>Python</li>
        <li>Microsoft Excel</li>
        <li>Web Development</li>
        <li>JavaScript</li>
        <li>Data Science</li>
        <li>Amazon AWS</li>
        <li>Drawing</li>
      </ul>

      <div className="p-4 border border-gray-500 mt-8 max-w-full sm:max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
        <h1 className="text-lg md:text-xl font-bold font-sans text-center md:text-left">
          Expand your career opportunities with Python
        </h1>
        <p className="w-full text-sm md:text-base mt-2 text-center md:text-left">
          Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability make Python perfect for Flask, Django, data science, and machine learning.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="border border-gray-500 p-2 mt-2">
            Explore Python
          </button>
        </div>
      </div>

      {/* Center the cards */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-8 gap-5">
          {courses.map((course, index) => (
            <Cards key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course_sel;
