// /components/Business.js
import React from 'react';
// import styles from '../styles/Business.module.css';

const Business = () => {
    return (
      <div className="flex flex-col lg:flex-row justify-center p-6 lg:p-12 text-2d2f31">
        {/* Left Section: Text */}
        <div className="lg:w-[50%] space-y-5 order-2 lg:order-1 ">
          <img
            className="w-32 lg:w-48"
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg"
            alt="Udemy Business Logo"
          />
          <h2 className="text-2xl lg:text-4xl font-bold font-serif">
            Upskill your team with Udemy Business
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li className="text-sm lg:text-lg">
              Unlimited access to 27,000+ top Udemy courses, anytime, anywhere
            </li>
            <li className="text-sm lg:text-lg">
              International course collection in 14 languages
            </li>
            <li className="text-sm lg:text-lg">
              Top certifications in tech and business
            </li>
          </ul>
          <div className="flex space-x-3">
            <button className="bg-2d2f31 text-white font-bold p-2">
              Get Udemy Business
            </button>
            <button className="border border-2d2f31 p-2 font-bold">
              Learn More
            </button>
          </div>
        </div>
  
        {/* Right Section: Image */}
        <div className=" flex justify-center mb-6 lg:mb-0 lg:justify-end lg:w-[30%] order-1 lg:order-2">
          <img
            className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[400px] h-auto"
            src="https://s.udemycdn.com/home/non-student-cta/UB_Promo_800x800.jpg"
            alt="Udemy Business Promotion"
          />
        </div>
      </div>
    );
  };

export default Business;
