"use client"
import Image from 'next/image'
import React from 'react'
import Inspiration from '../components/Inspiration'
import { FaLongArrowAltRight } from 'react-icons/fa'
import CountUp from 'react-countup'

const stories = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[450px] md:h-[600px] bg-[url('/about-02.jpg')]">
        <div className="absolute  bg-opacity-40 flex flex-col px-4 md:px-16">
          <h1 className="text-5xl md:text-8xl font-bold text-white mt-40 md:mt-64">Stories</h1>
          <p className="text-gray-200 text-lg md:text-2xl mt-4 lg:pr-[600px]">
          Learn about inspiring stories of change and hope from our Non-profit Organisation and how we impact communities through our work.
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <div className='flex flex-col md:flex-row w-full h-auto md:h-[400px] mt-8 md:mt-0'>
        <div className='w-full md:w-[600px] px-4 md:px-20'>
          <h1 className='mt-12 md:mt-28 text-center md:text-left'>OUR IMPACT</h1>
        </div>
        <div className='px-4 md:px-24 text-center md:text-left'>
          <h1 className='mt-4 md:mt-28 text-3xl md:text-5xl font-semibold text-lime-900'>The impact we have made in our community</h1>
          <p className='mt-4 md:mt-8 text-gray-500'>
            Join us on a journey towards compassion and hope. Through our non-profit organisation, we strive to make a positive impact on the world.
          </p>
          <p className='mt-3 text-gray-500'>Give back to your community and be a part of something greater than yourself.</p>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className='flex flex-col md:flex-row px-4 gap-4 mt-4'>
        <div className='w-full md:w-[60%] lg:w-[50%] rounded-xl overflow-hidden'>
          <Image src="/stories-01.jpg" width={800} height={510} alt="Charity work 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-[20%] lg:w-[25%] rounded-xl overflow-hidden">
          <Image src="/stories-02.jpg" width={400} height={510} alt="Charity work 2" className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-[20%] lg:w-[25%] rounded-xl overflow-hidden">
          <Image src="/stories-03.jpg" width={400} height={510} alt="Charity work 3" className="w-full h-full object-cover" />
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

      {/* Call-to-Action Section */}
      <div className="bg-lime-600 mt-12 lg:mt-24 rounded-3xl">
        <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-4 py-12 px-4 md:px-10">
          <div className="text-center md:text-left md:w-2/3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">We can create a better tomorrow</h1>
            <p className="text-lg md:text-2xl text-white mt-4">Every dollar counts and helps us bring hope and essential resources to those in need.</p>
          </div>
          <div className="flex justify-center items-center w-full md:w-auto">
            <button className="font-bold hover:bg-black hover:text-white text-lg lg:text-2xl w-full md:w-48 lg:w-56 h-12 lg:h-16 rounded-md bg-white">Donate Now</button>
          </div>
        </div>
      </div>

      <Inspiration />

      {/* Story Highlights */}
      <div className='bg-[#f4f4eb] py-12 px-4'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="px-4 md:px-16">
            <Image src="/stories-04.jpg" alt="Donation" width={500} height={500} className='rounded-lg w-full' />
            <h1 className='mt-5 font-bold text-2xl'>The Special One</h1>
            <p className='mt-7 text-lg'>Join our non-profit organisation to help create a brighter future for those in need. Every donation counts towards making a difference in the lives of those less fortunate.</p>
            <a className='mt-7 text-lg font-bold flex gap-2 text-lime-700' href="#">
              Read More <FaLongArrowAltRight className='mt-1' />
            </a>
          </div>
          <div className="px-4 md:px-16">
            <Image src="/stories-05.jpg" alt="Education initiative" width={500} height={500} className='rounded-lg w-full' />
            <h1 className='mt-5 font-bold text-2xl'>A Better Education for Everyone</h1>
            <p className='mt-7 text-lg'>Our non-profit organisation is dedicated to improving access to education for all. With your support, we can help provide the resources and opportunities needed for success.</p>
            <a className='mt-7 text-lg font-bold flex gap-2 text-lime-700' href="#">
              Read More <FaLongArrowAltRight className='mt-1' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default stories
