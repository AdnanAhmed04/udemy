import React from "react";

// Reviews
// TestimonialCard Component
const Reviews = ({ name, initial, message, courseLink, courseTitle }) => {
  return (
    <div className="border border-gray-200 shadow-lg p-6 rounded-lg max-w-[22rem]">
      <blockquote className="text-gray-700 h-28 mb-4">
        <p>{message}</p>
      </blockquote>
      <hr />
      <div className="flex items-center mt-4">
        <div className="bg-gray-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
          {initial}
        </div>
        <div className="ml-3">
          <p className="text-gray-900 font-medium">{name}</p>
        </div>
      </div>
      <div className="mt-4">
        <a
          href={courseLink}
          className="text-purple-700 font-bold hover:underline"
        >
          {courseTitle}
        </a>
      </div>
    </div>
  );
};

// Array of data for testimonials
const testimonials = [
  {
    name: "Will A",
    initial: "WA",
    message:
      "I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
    courseLink: "#",
    courseTitle: "[NEW] Ultimate AWS Certified Cloud Practitioner - 2022",
  },
  {
    name: "Ron F",
    initial: "RF",
    message:
      "This course helped me freshen up on my product manager skills and land a job at Facebook! Thanks guys :)",
    courseLink: "#",
    courseTitle: "Become a Product Manager | Learn the Skills & Get the Job",
  },
  {
    name: "Phillip W",
    initial: "PW",
    message:
      "One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable. Would help anyone become a better manager.",
    courseLink: "#",
    courseTitle: "Leadership: Practical Leadership Skills",
  },
  {
    name: "Phillip W",
    initial: "PW",
    message:
      "One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable. Would help anyone become a better manager.",
    courseLink: "#",
    courseTitle: "Leadership: Practical Leadership Skills",
  },
];

// Main Component
const TestimonialList = () => {
  return (
    <div className="flex flex-col gap-4 flex-wrap bg-gray-50 pt-12 pb-12">
      <h2 className="text-start ml-12 text-xl font-bold font-sans ">
        How learners like you are achieving their goals
      </h2>

      <div className="flex flex-wrap gap-2 justify-center">
        {testimonials.map((testimonial, index) => (
          <Reviews // Corrected this line to use Reviews
            key={index}
            name={testimonial.name}
            initial={testimonial.initial}
            message={testimonial.message}
            courseLink={testimonial.courseLink}
            courseTitle={testimonial.courseTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialList;
