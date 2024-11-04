import Image from 'next/image';
import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Inspiration = () => {
  return (
    <div className="bg-[#f5f8f4] w-full py-16 lg:py-20">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-0">
        <hr className="w-full max-w-md my-6" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-lime-900 mt-8">
          Inspiring Tales of Transformation
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-lime-900 mt-6 max-w-2xl">
          Get inspired by the remarkable stories of transformation through our non-profit organization.
          Join us in making a positive impact today.
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-lime-900 mt-3 max-w-2xl">
          No need for manual setup of development environments!
        </p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 px-6 md:px-12 lg:px-24">
        
        {/* Story 1 */}
        <div className="flex flex-col items-center md:items-start">
          <Image 
            src="/inspiration-1.jpg" 
            alt="Inspiration story 1" 
            width={500} 
            height={500} 
            className="rounded-lg w-full max-w-sm sm:max-w-md md:max-w-full h-auto object-cover"
          />
          <h2 className="mt-6 text-2xl font-bold text-lime-900">The Special One</h2>
          <p className="mt-4 text-base sm:text-lg text-lime-900">
            Join our non-profit organization to help create a brighter future for those in need. Every donation counts
            towards making a difference in the lives of those less fortunate.
          </p>
          <div className="mt-6 flex items-center gap-2 text-lg font-bold text-lime-900 cursor-pointer">
            Read More
            <FaLongArrowAltRight className="text-black mt-1" />
          </div>
        </div>

        {/* Story 2 */}
        <div className="flex flex-col items-center md:items-start">
          <Image 
            src="/inspiration-2.jpg" 
            alt="Inspiration story 2" 
            width={500} 
            height={500} 
            className="rounded-lg w-full max-w-sm sm:max-w-md md:max-w-full h-auto object-cover"
          />
          <h2 className="mt-6 text-2xl font-bold text-lime-900">A Better Education for Everyone</h2>
          <p className="mt-4 text-base sm:text-lg text-lime-900">
            Our non-profit organization is dedicated to improving access to education for all. With your support, we can
            help provide the resources and opportunities needed for success.
          </p>
          <div className="mt-6 flex items-center gap-2 text-lg font-bold text-lime-900 cursor-pointer">
            Read More
            <FaLongArrowAltRight className="text-black mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
