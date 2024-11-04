import Image from 'next/image';
import React from 'react';
import { FaCheckCircle, FaLongArrowAltRight } from 'react-icons/fa';

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[450px] md:h-[600px] bg-[url('/about-02.jpg')]">
      <div className="absolute flex flex-col px-6 md:px-16">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mt-40 lg:mt-64">About Us</h1>
          <p className="text-gray-200 text-lg md:text-2xl mt-4 lg:pr-[600px]">
          Learn more about our non-profit organization and our mission to make a positive impact on the world through our charitable initiatives
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="p-6 md:p-10 lg:p-16 bg-[#f4f4eb] grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mt-10 md:mt-16 lg:mt-36 space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">Making the world a better place</h1>
          <p className="text-gray-700 text-lg md:text-2xl">
            Join Non-profit Organisation in our mission of making the world a better place. We strive to create positive change through various charitable initiatives and community outreach programs.
          </p>
          <div className="space-y-4 md:space-y-6">
            <div>
              <h1 className="text-xl md:text-2xl font-bold">Changing Lives</h1>
              <p className="text-gray-700 text-lg md:text-xl">Improving lives one step at a time with our non-profit organization.</p>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold">Building Futures</h1>
              <p className="text-gray-700 text-lg md:text-xl">Creating opportunities and a better future with our non-profit organization.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-lg mt-6">
          <Image src="/flower.jpg" width={440} height={440} alt="Hands holding a flower" className="rounded-lg shadow-md" />
          <Image src="/donation-1.jpg" width={440} height={440} alt="People packing donations" className="rounded-lg shadow-md" />
          <Image src="/donation-2.jpg" width={440} height={440} alt="Donation box" className="rounded-lg shadow-md" />
          <Image src="/donation-3.jpg" width={440} height={440} alt="People collaborating" className="rounded-lg shadow-md" />
        </div>
      </section>

      {/* Our Values Section */}
      <div className="bg-[#f4f4eb] px-6 md:px-20 py-12 md:py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { number: '01', title: 'Prove every project', description: 'Our Non-profit Organisation delivers transparent and accountable results for every project we undertake.', link: 'See Proof' },
            { number: '02', title: 'Open book', description: 'We firmly believe in transparency and strive to maintain an open book approach with all stakeholders.', link: 'View Financials' },
            { number: '03', title: 'Local partnerships', description: 'Building strong relationships with the community is vital and we work closely with local partners.', link: 'Learn More' },
          ].map((item, index) => (
            <div key={index} className={`bg-white p-6 rounded-lg shadow-md ${index === 0 ? 'rounded-l-xl' : ''} ${index === 2 ? 'rounded-r-lg' : ''}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-[#c3c8b7] mt-7">{item.number}.</h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#2c3a2b] mt-4">{item.title}</h3>
              <p className="mt-6 md:mt-9 text-lg md:text-xl text-gray-500">{item.description}</p>
              <a href="#" className="text-[#2c3a2b] font-semibold flex gap-2 mt-8 md:mt-10 text-lg md:text-xl">{item.link} <FaLongArrowAltRight className="mt-1" /></a>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center px-6 md:px-48 py-16 bg-white">
        <h2 className="text-xl text-gray-600">MAKE A DIFFERENCE TODAY</h2>
        <h1 className="text-3xl md:text-6xl font-bold my-4">Your contribution matters. Support our cause by making a donation.</h1>
        <p className="text-gray-600 text-lg md:text-2xl my-8">
          Every dollar counts and helps us bring hope, joy, and essential resources to those in need. Together, we can create a better tomorrow.
        </p>
        <button className="rounded-lg bg-lime-600 text-white px-8 py-4 text-lg md:text-xl font-bold">Donate Now</button>
      </div>

      {/* Vision & Mission Section */}
      <section className="flex flex-col md:flex-row items-center w-full py-16 px-6 md:px-20 bg-[#f4f4eb]">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image src="/about-02.jpg" width={700} height={700} alt="Donate Box" className="rounded-lg shadow-xl" />
        </div>
        <div className="w-full md:w-1/2 md:pl-10 lg:pl-20">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 md:mb-14">Our Vision & Mission</h2>
          <p className="text-gray-600 mb-6 md:mb-12 text-lg md:text-xl">
            Non-profit Organisation's vision is to create a world where all people have equal access to education and healthcare.
          </p>
          <ul className="space-y-4 md:space-y-7 text-lg md:text-xl">
            {[
              { title: 'Changing lives', description: 'improving lives one step at a time with our non-profit organization.' },
              { title: 'Building futures', description: 'creating opportunities and a better future with our non-profit organization.' },
              { title: 'Movement for change', description: 'creating impact, promoting change through non-profit work.' },
              { title: 'Lasting impact', description: 'our charity strives for long-term impact in communities we serve.' },
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <FaCheckCircle className="mr-2 text-lime-600 mt-1" />
                <span className="text-gray-700">
                  <strong>{item.title}</strong> {item.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Page;
