"use client"; // Add this line to ensure the component is rendered on the client

import React, { useState } from "react";
import Image from "next/image"; // Import Image component from Next.js
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Image paths should be from the public directory
  const slides = [
    {
      imageUrl: "/images/slider_img1.jpeg", // Public folder path
      heading: "Skills that drive you forward",
      content:
        "Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.",
      btn1: "Plan for individuals",
      btn2: "Plans for organizations",
    },
    {
      imageUrl: "/images/slider_img2.jpg", // Public folder path
      heading: "Stuck in neutral?",
      content: "Accelerate your future with lessons from McLaren Racing.",
      btn1: "Take Course",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative w-full h-auto">
      {/* For smaller screens */}
      <div className="block md:hidden">
        <div className="w-full h-[300px] sm:h-[400px] transition-all duration-500">
          <Image
            src={slides[currentSlide].imageUrl}
            alt="Slider image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <div className="w-full bg-white py-6 px-4 sm:px-8 text-center">
          {slides[currentSlide].heading && (
            <h2 className="font-bold mb-2 text-2xl sm:text-3xl md:text-4xl font-serif">
              {slides[currentSlide].heading}
            </h2>
          )}
          <p className="mb-4 text-sm sm:text-base md:text-lg">
            {slides[currentSlide].content}
          </p>
          <div className="flex flex-col items-center space-y-3">
            {slides[currentSlide].btn1 && (
              <button className="w-full sm:w-auto bg-black text-white px-6 py-3 text-xs sm:text-sm md:text-base font-bold hover:bg-gray-700">
                {slides[currentSlide].btn1}
              </button>
            )}
            {slides[currentSlide].btn2 && (
              <button className="w-full sm:w-auto border-2 border-black text-black px-6 py-3 text-xs sm:text-sm md:text-base font-bold hover:bg-gray-200">
                {slides[currentSlide].btn2}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* For larger screens */}
      <div className="hidden md:block w-full h-[600px]">
        <div className="relative w-full h-full transition-all duration-500">
          <Image
            src={slides[currentSlide].imageUrl}
            alt="Slider image"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute top-40 left-32 min-h-fit w-[480px] bg-white text-black p-4 text-lg">
            {slides[currentSlide].heading && (
              <h2 className="font-bold mb-2 text-4xl font-serif">
                {slides[currentSlide].heading}
              </h2>
            )}
            <p className="mb-4">{slides[currentSlide].content}</p>
            {slides[currentSlide].btn1 && (
              <button className="bg-black text-white px-4 py-2 mr-2 font-bold text-sm hover:bg-gray-700">
                {slides[currentSlide].btn1}
              </button>
            )}
            {slides[currentSlide].btn2 && (
              <button className="bg-black text-white px-4 py-2 font-bold text-sm hover:bg-gray-700">
                {slides[currentSlide].btn2}
              </button>
            )}
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black px-3 py-2 sm:px-4 rounded-full hover:bg-opacity-75"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black px-3 py-2 sm:px-4 rounded-full hover:bg-opacity-75"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
