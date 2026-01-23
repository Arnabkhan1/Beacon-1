import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const links = [
    { id: 1, link: '/', text: 'Home' },
    { id: 2, link: '/about', text: 'About Us' },
    { id: 3, link: '/products', text: 'Products' },
    { id: 4, link: '/vision', text: 'Vision' },
    { id: 5, link: '/contact', text: 'Contact' },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-[#0a192f] fixed z-50 shadow-md">
      
      {/* 1. Logo */}
      <div>
        <h1 className="text-3xl font-bold font-signature ml-2 text-cyan-400">
          <Link to="/" onClick={() => setNav(false)}>BEACON</Link>
        </h1>
      </div>

      {/* 2. Desktop Menu (Desktop View) */}
      {/* এখানে আমরা logic উল্টে দিয়েছি: সব সময় দেখাবে (flex), শুধু মোবাইলে লুকাবে (max-md:hidden) */}
      <ul className="flex max-md:hidden"> 
        {links.map(({ id, link, text }) => (
          <li
            key={id}
            className={`px-4 cursor-pointer font-medium hover:scale-105 duration-200 capitalize ${
              location.pathname === link ? 'text-cyan-400' : 'text-gray-300'
            }`}
          >
            <Link to={link}>{text}</Link>
          </li>
        ))}
      </ul>

      {/* 3. Hamburger Icon (Mobile View) */}
      {/* ডেস্কটপে লুকাবে (md:hidden), মোবাইলে দেখাবে */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* 4. Mobile Menu Overlay */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300">
          {links.map(({ id, link, text }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-cyan-400"
            >
              <Link 
                onClick={() => setNav(false)}
                to={link}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;