"use client"
import React from 'react';
import CountUp from 'react-countup'

const Impact = () => {
  return (
    <section className="bg-green-50 p-8 md:p-10 lg:p-12 rounded-lg">
      
      {/* Text Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-lime-900">
        <div className="flex flex-col justify-center px-2 lg:px-6 ">
          <h2 className="text-base md:text-lg text-gray-700">OUR IMPACT</h2>
          <h1 className="text-3xl md:text-5xl lg:text-6xl  mt-6 lg:mt-10">
            The impact we have made in our community
          </h1>
        </div>
        <div>
  <p className="text-lime-900 text-base md:text-lg lg:text-xl mt-6 md:mt-10 lg:mt-20  px-4 lg:px-8 lg:pr-9 ">
    We have made a significant impact in our community through our non-profit organization. By providing services and support to those in need, we have created a positive change. Our efforts have helped to improve the lives of many, and we are committed to continuing to make a difference.
  </p>
</div>

      </div>

      <div>
      {/* Impact Statistics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mt-12 md:mt-20 text-lime-900">
        <div>
          <h3 className="font-bold text-4xl md:text-5xl lg:text-6xl">
            <CountUp end={20} duration={6} separator="," />M+
          </h3>
          <p className="text-gray-700 text-sm md:text-lg lg:text-xl mt-2 md:mt-4">People served worldwide</p>
        </div>
        <div>
          <h3 className="font-bold text-4xl md:text-5xl lg:text-6xl">
            <CountUp end={142790} duration={2} separator="," />
          </h3>
          <p className="text-gray-700 text-sm md:text-lg lg:text-xl mt-2 md:mt-4">Projects funded</p>
        </div>
        <div>
          <h3 className="font-bold text-4xl md:text-5xl lg:text-6xl">
            <CountUp end={1.8} duration={6} separator="," />M
          </h3>
          <p className="text-gray-700 text-sm md:text-lg lg:text-xl mt-2 md:mt-4">People to take action</p>
        </div>
        <div>
          <h3 className="font-bold text-4xl md:text-5xl lg:text-6xl">
            <CountUp end={5246} duration={2} separator="," />
          </h3>
          <p className="text-gray-700 text-sm md:text-lg lg:text-xl mt-2 md:mt-4">Partner organizations</p>
        </div>
      </div>
    </div>

      {/* Call to Action */}
      <div className="bg-lime-600 mt-12 lg:mt-20 rounded-3xl p-8 lg:p-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              We can create a better tomorrow
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-white mt-4">
              Every dollar counts and helps us bring hope and essential resources to those in need.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <button className="bg-white text-black font-bold text-lg md:text-xl lg:text-2xl py-3 px-6 lg:py-4 lg:px-8 rounded-md hover:bg-lime-900 hover:text-white transition-all duration-300">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
