import React from 'react'

const FeatureStories = () => {
  return (
    <div className="bg-gray-50 p-4 sm:p-6 md:p-5">
      <div className="max-w-screen-lg mx-auto w-full sm:w-[100%] md:w-full">
        <h1 className="text-2xl font-semibold font-serif mb-6">
          Featured topics by category
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="space-y-5">
            <h2 className="text-xl font-bold mt-4">Development</h2>
            <div className="cursor-pointer">
              <h3 className="text-purple-800 underline text-lg font-bold">Python</h3>
              <p className="text-sm">36,354,994 learners</p>
            </div>
            <div className="cursor-pointer">
              <h3 className="text-lg font-bold text-purple-800 underline">Web Development</h3>
              <p className="text-sm">11,415,615 learners</p>
            </div>
            <div className="cursor-pointer">
              <h3 className="text-lg font-bold text-purple-800 underline">Machine Learning</h3>
              <p className="text-sm">7,070,015 learners</p>
            </div>
          </div>

          <div className="space-y-5">
            <h2 className="text-xl font-bold mt-4">Business</h2>
            <div>
              <h3 className="text-purple-800 underline text-lg font-bold">Financial Analysis</h3>
              <p className="text-sm">1,195,282 learners</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-purple-800 underline">SQL</h3>
              <p className="text-sm">5,977,561 learners</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-purple-800 underline">PMP</h3>
              <p className="text-sm">1,733,398 learners</p>
            </div>
          </div>

          <div className="space-y-5">
            <h2 className="text-xl font-bold mt-4">IT and Software</h2>
            <div>
              <h3 className="text-purple-800 underline text-lg font-bold">Amazon AWS</h3>
              <p className="text-sm">6,123,456 learners</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-purple-800 underline">Ethical Hacking</h3>
              <p className="text-sm">10,931,066 learners</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-purple-800 underline">Cyber Security</h3>
              <p className="text-sm">3,998,037 learners</p>
            </div>
          </div>

          <div className="space-y-5">
            <h2 className="text-xl font-bold mt-4">Design</h2>
            <div>
              <h3 className="text-purple-800 underline text-lg font-bold">Photoshop</h3>
              <p className="text-sm">10,909,736 learners</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-purple-800 underline">Graphic Design</h3>
              <p className="text-sm">3,381,052 learners</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-purple-800 underline">Drawing</h3>
              <p className="text-sm">2,410,849 learners</p>
            </div>
          </div>
        </div>
        <button className="mt-6 border border-gray-700 p-2 font-semibold hover:bg-gray-200">
          Explore more topics
        </button>
      </div>
    </div>
  );
};



export default FeatureStories
