import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import heroVideo from '../assets/banner.mp4'; 

const Hero = () => {
  return (
    <div id="home" className="w-full h-screen relative overflow-hidden">
      
      {/* ১. ভিডিও ব্যাকগ্রাউন্ড ও ডাইনামিক ওভারলে */}
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* টেক্সট স্পষ্ট করার জন্য ডাবল লেয়ার গ্রেডিয়েন্ট */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#0a192f]/60 backdrop-brightness-75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-[#0a192f]/30"></div>
      </div>

      {/* ২. কন্টেন্ট সেকশন */}
      <div className="max-w-[1240px] mx-auto w-full h-full relative flex flex-col justify-center items-center text-center text-white px-4 mt-8">
        
        {/* ছোট এনিমেটেড ট্যাগলাইন */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-cyan-500/10 border border-cyan-500/20 px-8   py-2 rounded-full mb-6 backdrop-blur-sm"
        >
          <p className="text-cyan-400 font-bold text-xs md:text-sm tracking-[0.3em] uppercase ">
            Dedicated to Your Well-being, Always
          </p>
        </motion.div>
        
        {/* মেইন হেডলাইন উইথ টাইপরাইটার ইফেক্ট */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight min-h-[160px] md:min-h-[200px]">
          <span className="text-white">Committed to</span> <br />
          <span className='text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]'>
            <Typewriter
              words={[
                'Quality & Affordability.',
                'Care.',
              ]}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        
        {/* ডেসক্রিপশন টেক্সট */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gray-300 text-lg md:text-2xl max-w-3xl mb-12 font-medium leading-relaxed"
        >
          With 29 years of scientific excellence, we provide world-class pharmaceutical solutions that transcend borders.
        </motion.p>
        
        {/* কল টু অ্যাকশন বাটনস */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <button className="group relative bg-cyan-600 hover:bg-cyan-500 text-[#0a192f] px-10 py-4 flex items-center rounded-full font-black text-lg transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(6,182,212,0.5)]">
            Explore Products
            <span className="group-hover:translate-x-2 transition-transform duration-300">
              <HiArrowNarrowRight className="ml-3 text-2xl" />
            </span>
          </button>
          
          <button className="px-10 py-4 flex items-center rounded-full border-2 border-white/30 hover:border-cyan-400 hover:bg-cyan-400/10 text-white transition-all duration-300 text-lg font-bold backdrop-blur-md">
            Our Legacy
          </button>
        </motion.div>

      </div>

      {/* আধুনিক স্ক্রল ইন্ডিকেটর */}
      <div className="absolute bottom-[-10px] w-full flex justify-center items-center flex-col gap-2">
        <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] font-bold">Scroll</p>
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[2px] h-12 bg-gradient-to-b from-cyan-500 to-transparent"
        />
      </div>

    </div>
  );
};

export default Hero;