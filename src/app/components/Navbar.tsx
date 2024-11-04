"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname(); // Get the current pathname
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full z-10 mt-6">
      <div className="container mx-auto p-5 flex justify-between items-center px-6 md:px-24">
      <div className="text-3xl text-white">
      <h1 className="text-4xl font-bold text-white italic shadow-lg" style={{ fontFamily: "'Pacifico', cursive" }}>
        Charity
      </h1>
    </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-white">
          <Link href="/" className={`text-xl font-bold ${pathname === '/' ? 'text-lime-600' : 'hover:text-lime-600'}`}>
            Home
          </Link>
          <Link href="/about" className={`text-xl font-bold ${pathname === '/about' ? 'text-lime-600' : 'hover:text-lime-600'}`}>
            About Us
          </Link>
          <Link href="/work" className={`text-xl font-bold ${pathname === '/work' ? 'text-lime-600' : 'hover:text-lime-600'}`}>
            Our Work
          </Link>
          <Link href="/stories" className={`text-xl font-bold ${pathname === '/stories' ? 'text-lime-600' : 'hover:text-lime-600'}`}>
            Stories
          </Link>
          <Link href="/contact" className={`text-xl font-bold ${pathname === '/contact' ? 'text-lime-600' : 'hover:text-lime-600'}`}>
            Contact
          </Link>
        </nav>

        <button className="hidden md:inline bg-white rounded-lg px-4 py-2 w-36 h-16 font-bold text-black hover:bg-lime-600">
          Donate
        </button>

        <button onClick={toggleSidebar} className="md:hidden text-white text-3xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 w-full h-[450px] bg-white text-black transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out z-20`}>
        <div className="p-5 flex justify-between items-center bg-transparent">
          <div className="text-2xl font-bold">Charity</div>
          <button onClick={toggleSidebar} className="text-3xl text-black">
            <FiX />
          </button>
        </div>
        
        {/* Sidebar Navigation */}
        <nav className="flex flex-col space-y-4 mt-3 text-xl px-7">
          <hr />
          <Link href="/" onClick={toggleSidebar} className={`${pathname === '/' ? 'text-lime-600' : 'text-black'} font-semibold`}>Home</Link>
          <hr />
          <Link href="/about" onClick={toggleSidebar} className={`${pathname === '/about' ? 'text-lime-600' : 'text-black'} font-semibold`}>About Us</Link>
          <hr />
          <Link href="/work" onClick={toggleSidebar} className={`${pathname === '/work' ? 'text-lime-600' : 'text-black'} font-semibold`}>Our Work</Link>
          <hr />
          <Link href="/stories" onClick={toggleSidebar} className={`${pathname === '/stories' ? 'text-lime-600' : 'text-black'} font-semibold`}>Stories</Link>
          <hr />
          <Link href="/contact" onClick={toggleSidebar} className={`${pathname === '/contact' ? 'text-lime-600' : 'text-black'} font-semibold`}>Contact</Link>
          <hr />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
