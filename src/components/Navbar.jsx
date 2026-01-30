import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion'; // এনিমেশনের জন্য

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 80) setShadow(true);
      else setShadow(false);
    };
    window.addEventListener('scroll', handleShadow);
    return () => window.removeEventListener('scroll', handleShadow);
  }, []);

  const links = [
    { id: 1, link: '/', text: 'Home' },
    { id: 2, link: '/about', text: 'About Us' },
    { id: 3, link: '/products', text: 'Products' },
    { id: 4, link: '/vision', text: 'Vision' },
    { id: 5, link: '/contact', text: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full h-20 z-[99] px-6 flex justify-between items-center transition-all duration-300 ${
      shadow ? 'bg-[#0a192f] shadow-2xl' : 'bg-[#0a192f]/90 backdrop-blur-md'
    }`}>
      
      {/* 1. Logo */}
      <div className="z-[1001]">
        <Link to="/" className="text-3xl font-black text-cyan-400 cursor-pointer tracking-tighter">
          BEACON
        </Link>
      </div>

      {/* 2. Desktop Menu (অপরিবর্তিত) */}
      <ul className="hidden md:!flex items-center">
        {links.map(({ id, link, text }) => (
          <li key={id} className="px-5 font-semibold">
            <NavLink 
              to={link}
              className={({ isActive }) => 
                `relative pb-1 transition-all duration-300 capitalize text-lg hover:text-cyan-400 ${
                  isActive ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-300'
                }`
              }
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* 3. Hamburger Icon (মোবাইলের জন্য এনিমেটেড) */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-[1001] text-gray-300 md:hidden p-2 hover:bg-white/10 rounded-full transition-all"
      >
        {nav ? <FaTimes size={28} className="text-cyan-400" /> : <FaBars size={28} />}
      </div>

      {/* 4. Improved Mobile Menu Overlay */}
      <AnimatePresence>
        {nav && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-full h-screen bg-[#0a192f]/95 backdrop-blur-xl flex flex-col justify-center items-center md:hidden z-[1000]"
          >
            {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
            <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

            <ul className="flex flex-col items-center space-y-8">
              {links.map(({ id, link, text }, index) => (
                <motion.li 
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-4xl font-bold tracking-tight"
                >
                  <NavLink 
                    onClick={() => setNav(false)} 
                    to={link}
                    className={({ isActive }) => 
                      `transition-all duration-300 ${
                        isActive ? 'text-cyan-400 scale-110 shadow-cyan-500/20' : 'text-gray-300 hover:text-cyan-400'
                      }`
                    }
                  >
                    {text}
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            {/* সোশ্যাল আইকন ছোট করে নিচে (Optional but looks good) */}
            <div className="absolute bottom-12 flex gap-6">
                <div className="w-1 h-12 bg-cyan-500/30 rounded-full"></div>
                <p className="text-gray-500 text-sm uppercase tracking-widest self-center">Healthcare Excellence</p>
                <div className="w-1 h-12 bg-cyan-500/30 rounded-full"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;