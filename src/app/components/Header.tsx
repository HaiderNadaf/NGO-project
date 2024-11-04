import Link from 'next/link';
import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Header = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[450px] md:h-[800px] overflow-hidden">
        {/* Background Image with Full Cover */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-black bg-opacity-50"
          style={{
            backgroundImage: "url('/charity.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        
        {/* Content Overlay */}
        <div className="relative text-center text-white mt-56 px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-8xl lg:mt-6 font-bold">
            Empowering Change, One <br /> Step at a Time
          </h1>
          <p className="mt-8 lg:mt-12 text-xl lg:text-3xl">
            Every small act of kindness creates a ripple of positive change. <br /> Join us in making a difference in lives together.
          </p>
          <button className="bg-lime-600 rounded-lg w-52 h-16 px-6 py-3 text-lg lg:text-xl font-bold text-black mt-12 lg:mt-16 hover:bg-lime-700 transition-all duration-300">
            Donate Now
          </button>
        </div>
      </section>

      {/* Information Cards Section */}
      <div className="bg-[#f5f8f4] py-16 px-4 lg:px-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Causes Card */}
          <div className="bg-white p-8 rounded-xl shadow-md h-auto">
            <h2 className="text-5xl font-bold text-[#c3c8b7]">01.</h2>
            <h3 className="text-3xl font-bold text-[#2c3a2b] mt-4">Causes</h3>
            <p className="mt-6 text-lg text-gray-500">
              We support education, healthcare, and poverty reduction.
            </p>
            <Link href="#" className="text-[#2c3a2b] font-semibold flex gap-2 mt-8 text-xl">
              See Proof <FaLongArrowAltRight className="text-black mt-1" />
            </Link>
          </div>

          {/* Get Involved Card */}
          <div className="bg-white p-8 shadow-md h-auto">
            <h2 className="text-5xl font-bold text-[#c3c8b7]">02.</h2>
            <h3 className="text-3xl font-bold text-[#2c3a2b] mt-4">Get Involved</h3>
            <p className="mt-6 text-lg text-gray-500">
              Volunteer or donate your skills to make a difference.
            </p>
            <Link href="#" className="text-[#2c3a2b] font-semibold flex gap-2 mt-8 text-xl">
              View Financials <FaLongArrowAltRight className="text-black mt-1" />
            </Link>
          </div>

          {/* Donation Card */}
          <div className="bg-white p-8 rounded-xl shadow-md h-auto ">
            <h2 className="text-5xl font-bold text-[#c3c8b7]">03.</h2>
            <h3 className="text-3xl font-bold text-[#2c3a2b] mt-4">Donation</h3>
            <p className="mt-6 text-lg text-gray-500">
              Contribute today and help us change lives and build a better future.
            </p>
            <Link href="#" className="text-[#2c3a2b] font-semibold flex gap-2 mt-8 text-xl">
              Learn More <FaLongArrowAltRight className="text-black mt-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

