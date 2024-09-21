import React from 'react'

const Instructor = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center  sm:gap-0 items-center p-2 md:p-10">
      {/* Image section */}
      <div className="w-full md:w-[25%] mb-6 md:mb-0">
        <img
          src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
          alt="Instructor Promotion"
          className="rounded-lg w-full h-auto sm:w-72"
        />
      </div>

      {/* Text section */}
      <div className="w-full md:w-[50%] sm:w-72 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl text-gray-800 font-bold mb-4">
          Become an instructor
        </h2>
        <p className="mb-6 text-lg md:text-xl text-gray-800">
          Instructors from around the world teach millions of learners on Udemy.
          We provide the tools and skills to teach what you love.
        </p>
        <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700">
          Start teaching today
        </button>
      </div>
    </div>
  );
};


export default Instructor
