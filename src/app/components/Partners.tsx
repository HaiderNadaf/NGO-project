import React from 'react'
import { FaHandHoldingHeart, FaHandsHelping } from 'react-icons/fa'
import { FaPeopleLine } from 'react-icons/fa6'
import { GiWorld } from 'react-icons/gi'
import { SiWorldhealthorganization } from 'react-icons/si'
import { TfiWorld } from 'react-icons/tfi'


const Partners = () => {
  return (
    <div className="px-6 bg-[#f5f8f4] text-white h-[400px]">
  <div className="w-full h-24 px-4 flex items-center justify-center">
    <h1 className="text-2xl font-bold text-gray-800">OUR PARTNERS</h1>
  </div>

  <div className="text-lime-900 grid justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-10 px-6 md:px-12 lg:px-14 font-bold text-xl lg:text-3xl mt-10 md:mt-14">
    <div className="flex items-center gap-2">
      <SiWorldhealthorganization className="text-5xl" />
      <span>lipsum</span>
    </div>
    <div className="flex items-center gap-2">
      <FaHandsHelping className="text-5xl" />
      <span>Lipsum</span>
    </div>
    <div className="flex items-center gap-2">
      <FaHandHoldingHeart className="text-5xl" />
      <span>zopto</span>
    </div>
    <div className="flex items-center gap-2">
      <TfiWorld className="text-5xl" />
      <span>logo</span>
    </div>
    <div className="flex items-center gap-2">
      <GiWorld className="text-5xl" />
      <span>Nginx</span>
    </div>
    <div className="flex items-center gap-2">
      <FaPeopleLine className="text-5xl" />
      <span>logo</span>
    </div>
  </div>
</div>

  
  )
}

export default Partners