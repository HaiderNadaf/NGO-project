import Image from 'next/image';
import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[450px] md:h-[600px] bg-[url('/work.jpg')]">
        <div className="absolute  flex flex-col px-6 md:px-16">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mt-40 lg:mt-64">Our Work</h1>
          <p className="text-gray-200 text-lg md:text-2xl mt-4 lg:pr-[600px]">
            Discover how our non-profit organisation works towards building a better world through our impactful programs and initiatives.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <div className="bg-[#f4f4eb] w-full py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-16">
          <div className="font-bold text-3xl md:text-5xl space-y-3 md:space-y-5 mt-20">
            <h1>Every small act of kindness</h1>
            <h1>creates a ripple of positive change.</h1>
          </div>
          <div className="md:mt-20 md:text-xl px-4 md:px-24 space-y-1 text-lg text-gray-500">
            <hr className="w-24 md:w-32 text-black" />
            <p className="md:mt-9">
              Join us in creating a positive change with our non-profit organization. Even the smallest act of kindness can make a significant impact on the lives of those in need. Come be a part of our cause today!
            </p>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="flex flex-col md:flex-row gap-4 px-6 md:px-16 mt-8">
        <div className="w-full md:w-1/3">
          <Image
            src="/our-work-01.jpg"
            width={400}
            height={510}
            alt="Charity work 01"
            className="w-full h-[510px] rounded-xl object-cover"
          />
        </div>
        <div className="w-full md:w-2/3">
          <Image
            src="/our-work-02.jpg"
            width={800}
            height={510}
            alt="Charity work 02"
            className="w-full h-[510px] rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <Image
            src="/our-work-03.jpg"
            width={400}
            height={250}
            alt="Charity work 03"
            className="w-[400px] h-[250px] rounded-xl object-cover"
          />
          <Image
            src="/our-work-04.jpg"
            width={400}
            height={250}
            alt="Charity work 04"
            className="w-[400px] h-[250px] rounded-xl object-cover"
          />
        </div>
      </div>

      {/* How We Work Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16 bg-[#f4f4eb] py-12">
        <div className="mt-12">
          <h1 className="font-bold text-2xl md:text-3xl">How we work</h1>
          <p className="mt-4 md:mt-7 text-lg md:text-xl text-gray-500">
            We collaborate with local communities, volunteers, and donors to achieve our goal of making a meaningful impact on people's lives.
          </p>
          <a href="#" className="mt-6 text-xl font-bold flex gap-2">
            Learn More <FaLongArrowAltRight className="text-black mt-1" />
          </a>
        </div>

        <div className="mt-12">
          <h1 className="font-bold text-2xl md:text-3xl">Proving our impact</h1>
          <p className="mt-4 md:mt-7 text-lg md:text-xl text-gray-500">
            We are committed to transparency and accountability, sharing impact reports with our donors.
          </p>
          <a href="#" className="mt-6 text-xl font-bold flex gap-2">
            See Proof <FaLongArrowAltRight className="text-black mt-1" />
          </a>
        </div>
      </div>

      {/* Mission Statement Section */}
      <section className=" md:px-16 py-12 bg-[#f4f4eb]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-16 mt-28  pr-32">
            <h1 className="text-4xl md:text-5xl font-bold mt-4">Making the world a better place</h1>
            <p className="text-gray-700 text-lg md:text-xl font-sans">
            Our Non-profit Organisation is dedicated to making the world a better place through various initiatives, such as providing education, healthcare, and disaster relief, to those in need. Join us in creating a brighter future for all.
            </p>
            <p className="text-gray-700 text-lg md:text-xl mt-8 font-sans">
            Join us in our mission to create a positive impact in the world. Every little donation makes a huge difference.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/flower.jpg"
              width={440}
              height={440}
              alt="Hands holding a flower"
              className="rounded-lg shadow-md"
            />
            <Image
              src="/donation-1.jpg"
              width={440}
              height={440}
              alt="People packing donations"
              className="rounded-lg shadow-md"
            />
            <Image
              src="/donation-2.jpg"
              width={440}
              height={440}
              alt="Donation box"
              className="rounded-lg shadow-md"
            />
            <Image
              src="/donation-3.jpg"
              width={440}
              height={440}
              alt="People collaborating"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
