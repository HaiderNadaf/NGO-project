import Image from 'next/image';
import React from 'react';

const Involved = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 lg:px-16 bg-[#f5f8f4] py-12 md:py-20 text-lime-900">
      
      {/* Image Section */}
      <div className="flex justify-center mt-8 md:mt-0">
        <Image 
          src="/volunteer.jpg" 
          alt="Volunteer activities" 
          width={1050} 
          height={700} 
          className="w-full h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px] rounded-xl object-cover shadow-2xl" 
        />
      </div>
      
      {/* Text Section */}
      <div className="flex flex-col justify-center mt-8 md:mt-0 md:px-6 lg:px-10">
        <h2 className="text-base md:text-lg text-gray-700">GET INVOLVED</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 lg:mt-6">
          Join our movement for change
        </h1>
        <p className="text-gray-700 text-base sm:text-lg lg:text-xl mt-4 md:mt-6 lg:mt-8">
          Join our non-profit organization and be a part of our movement for positive change. We empower communities, support vulnerable individuals, and strive towards building an equitable society. Together, we can create a better world. Join us now!
        </p>
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg mt-4 md:mt-6 lg:mt-8">
          Become part of a transformative movement by supporting our non-profit organization. Together we can make lasting change.
        </p>
        <button className=" py-2 border border-black text-black rounded-md hover:bg-black hover:text-white font-bold mt-6 lg:mt-8 w-32 sm:w-64 md:w-40 lg:w-48 h-10 sm:h-24 md:h-14 text-base sm:text-lg lg:text-xl transition-all duration-300 ">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Involved;
