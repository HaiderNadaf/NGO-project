import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section className="p-6 md:p-10 rounded-lg bg-[#f5f8f4]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Text Section */}
        <div className="flex flex-col justify-center px-4 md:px-6 lg:px-8">
          <h2 className="text-sm md:text-lg text-gray-700">ABOUT US</h2>
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-2 lg:mt-4 text-lime-950">
            Our journey of compassion and hope
          </h1>
          <p className="text-lime-800 text-sm md:text-lg lg:text-xl mt-4 md:mt-6 lg:mt-8 pr-4 md:pr-16 lg:pr-24 xl:pr-40">
            Join us on a journey towards compassion and hope. Through our non-profit organization, we strive to make a positive impact on the world. Give back to your community and be a part of something greater than yourself.
          </p>
          <p className="text-lime-800 text-sm md:text-lg lg:text-xl mt-4 md:mt-6 pr-4 md:pr-16 lg:pr-24 xl:pr-40">
            A transformational journey towards bringing hope and compassion to the world.
          </p>
          <button className="w-36 md:w-40 lg:w-44 h-12 md:h-14 lg:h-16 rounded-lg font-bold text-lg lg:text-xl mt-6 md:mt-8 lg:mt-10 border border-black hover:bg-black hover:text-white transition-all duration-300">
            Read More
          </button>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-2 gap-4 mt-8 lg:mt-0">
          <div className="col-span-2 sm:col-span-1">
            <Image src="/flower.jpg" width={600} height={600} alt="Hands holding a flower" className="rounded-lg shadow-md w-full h-auto" />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <Image src="/donation-1.jpg" width={600} height={600} alt="People packing donations" className="rounded-lg shadow-md w-full h-auto" />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <Image src="/donation-2.jpg" width={600} height={600} alt="Donation box" className="rounded-lg shadow-md w-full h-auto" />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <Image src="/donation-3.jpg" width={600} height={600} alt="People collaborating" className="rounded-lg shadow-md w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
