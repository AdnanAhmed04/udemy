import React from "react";
import { CiGlobe } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="text-white bg-[#2d2f31] pb-12">
      <div className="container mx-auto px-4 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between pt-12">
          <div className="flex flex-col md:flex-row md:space-x-12 mb-8 md:mb-0">
            <div className="space-y-2 mb-6 md:mb-0">
              <p>Udemy Business</p>
              <p className="cursor-pointer	">Teach on Udemy</p>
              <p className="cursor-pointer	">Get the app</p>
              <p className="cursor-pointer	">About us</p>
              <p className="cursor-pointer	">Contact us</p>
            </div>
            <div className="space-y-2 mb-6 md:mb-0">
              <p className="cursor-pointer	">Careers</p>
              <p className="cursor-pointer	">Blog</p>
              <p className="cursor-pointer	">Help and Support</p>
              <p className="cursor-pointer	">Affiliate</p>
              <p className="cursor-pointer	">Investors</p>
            </div>
            <div className="space-y-2">
              <p className="cursor-pointer	">Terms</p>
              <p className="cursor-pointer	">Privacy policy</p>
              <p className="cursor-pointer	">Sitemap</p>
              <p className="cursor-pointer	">Accessibility statement</p>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <button className="flex items-center justify-center space-x-2 border border-white p-2 w-32 h-14">
              <CiGlobe className="w-6 h-6" />
              <span className="text-lg">English</span>
            </button>
          </div>
        </div>
        <div className="flex justify-start">
          <img
            className="w-24 mt-12 cursor-pointer"
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
            alt="Udemy Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
