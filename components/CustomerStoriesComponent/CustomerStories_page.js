'use client'; // Mark this component as a Client Component

import React, { useState } from "react";

// react icon
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const customerStories = [
  {
    id: 1,
    text: "Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its data scientists, with highly relevant and in-demand tech skills that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.",
    name: "Jim Hemgen",
    title: "Principal",
    company: "Booz Allen Hamilton",
    imgSrc: "https://s.udemycdn.com/home/ub-case-studies/James_Hemgen.jpeg",
  },
  {
    id: 2,
    text: "With Udemy Business employees were able to marry the two together, technology and consultant soft skills. We're thankful that once they got in and took their key IT courses on AWS, Azure, Google Cloud, Big Data, and DevOps that they efficiently moved over to Consulting courses to help drive their career forward.",
    name: "Ian Stevens",
    title: "Global Head of Capability Development North America",
    company: "Publicis Sapient",
    imgSrc: "https://s.udemycdn.com/home/ub-case-studies/Ian_Stevens.png",
  },
  {
    id: 3,
    text: "To stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset. With Udemy Business, I can give my team the space to learn and take the initiative. It means we can produce higher quality work more quickly.",
    name: "Karen Hunter",
    title: "Team Lead Learning & Development",
    company: "Steelcase",
    imgSrc: "https://s.udemycdn.com/home/ub-case-studies/Karen_hunter.png",
  },
];

const CustomerStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < customerStories.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="w-[100%] md:w-[80%] bg-gray-100 mx-auto p-6">
      <div className="relative flex flex-col md:flex-row items-center w-[90%] md:w-[80%] sm:w-[100%] m-auto bg-white justify-between border rounded-lg p-6">
        
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          className={`bg-gray-800 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md absolute left-0 top-1/2 transform -translate-y-1/2 ${
            currentSlide === 0 ? "invisible" : "visible"
          }`}
        >
          <FaChevronLeft />
        </button>

        {/* Story Content */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-6">
          {/* Left Paragraph */}
          <div className="flex flex-col items-start text-left w-full md:w-[65%] mb-4 md:mb-0">
            <blockquote className="text-sm md:text-md text-gray-800 mb-4">
              {customerStories[currentSlide].text}
            </blockquote>
            <button className="text-purple-600 hover:text-purple-800 mb-4 underline font-bold text-sm md:text-base">
              Read full story
            </button>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start w-full md:w-[50%]">
            <img
              src={customerStories[currentSlide].imgSrc}
              alt={customerStories[currentSlide].name}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 md:mb-0 md:mr-4"
            />
            <div className="text-center md:text-left">
              <h3 className="text-md md:text-lg font-semibold text-gray-800">
                {customerStories[currentSlide].name}
              </h3>
              <p className="text-xs md:text-sm text-gray-800">
                {customerStories[currentSlide].title}
              </p>
              <p className="text-xs md:text-sm text-gray-800">
                {customerStories[currentSlide].company}
              </p>
            </div>
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          className={`bg-gray-800 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md absolute right-0 top-1/2 transform -translate-y-1/2 ${
            currentSlide === customerStories.length - 1
              ? "invisible"
              : "visible"
          }`}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* View More Button */}
      <div className="text-center mt-4">
        <button className="text-purple-600 hover:text-purple-800">
          View more customer stories
        </button>
      </div>
    </div>
  );
};

export default CustomerStories;
