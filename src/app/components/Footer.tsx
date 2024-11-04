import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700">
      <hr className="border-0 h-px bg-black" />
      <div className="px-6 py-12">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <Image src="/logo.png" width={70} height={70} alt="Charity Logo" className="w-24 h-auto" />
            <p className="text-lg mt-5 text-lime-900">
              The power of giving: Support a cause and make a difference through charity.
            </p>
          </div>
          
          {/* About Us Section */}
          <div>
            <h3 className="font-bold text-xl mb-4">About Us</h3>
            <ul className="space-y-2 text-lime-900">
              <li><a href="#" className="hover:underline">Our History</a></li>
              <li><a href="#" className="hover:underline">What We Believe</a></li>
              <li><a href="#" className="hover:underline">Our Programs</a></li>
              <li><a href="#" className="hover:underline">Partners</a></li>
            </ul>
          </div>
          
          {/* Ways to Give Section */}
          <div>
            <h3 className="font-bold text-xl mb-4">Ways To Give</h3>
            <ul className="space-y-2 text-lime-900">
              <li><a href="#" className="hover:underline">Fundraise</a></li>
              <li><a href="#" className="hover:underline">Planned Giving</a></li>
              <li><a href="#" className="hover:underline">Brand Partnership</a></li>
              <li><a href="#" className="hover:underline">Legacy Giving</a></li>
            </ul>
          </div>
          
          {/* Contact Info Section */}
          <div>
            <h3 className="font-bold text-xl mb-4">Contact Info</h3>
            <ul className="text-lime-900 space-y-2">
              <li>1234 Thornridge Cir, Syracuse, Connecticut 56789</li>
              <li>(406) 555-0121</li>
              <li>mail@example.com</li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-6 mt-8 text-center md:text-left">
          <p className="text-lg mb-4 md:mb-0">
            © 2024 Non-Profit Organization. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <FaFacebook className="text-2xl text-lime-900 hover:text-lime-700 cursor-pointer" />
            <FaInstagram className="text-2xl text-lime-900 hover:text-lime-700 cursor-pointer" />
            <FiYoutube className="text-2xl text-lime-900 hover:text-lime-700 cursor-pointer" />
            <FaTwitter className="text-2xl text-lime-900 hover:text-lime-700 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
