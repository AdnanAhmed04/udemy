// /pages/index.js
import React from 'react';

import Business from '@/components/BusinessComponent/Business_page';
import CategoriesPage from '@/components/CategoriesComponent/CategoriesPage';
import CompaniesLogo from '@/components/CompaniesLogoComponent/CompaniesLogo_page';
import CourseSelection from '@/components/CourseSelectionComponent/CourseSelection_page';
import CustomerStories from '@/components/CustomerStoriesComponent/CustomerStories_page';
import FeatureStories from '@/components/FeatureStoriesComponent/FeatureStories_page';
import Instructor from '@/components/InstructorComponent/Instructor_page';
import Reviews from '@/components/ReviewsComponent/Reviews_page';
import Slider from '@/components/SilderComponent/Silder_page';
// import Navbar from '@/components/Navbar';
import Footer from '@/components/footerComponent/footer';


const LandingPage = () => {


  return (
    <div>
      {/* <Navbar/> */}

      <Slider />
      <CompaniesLogo />
      <CourseSelection />
      <Reviews />
      <CategoriesPage />
      <FeatureStories/>
      <Business />
      <CustomerStories/>
      

      <Instructor/>
      
    </div>
  );
};

export default LandingPage;
