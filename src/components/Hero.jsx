import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import heroVideo from '../assets/banner.mp4'; // 👈 ১. ভিডিওটি ইমপোর্ট করুন (নাম ফাইল অনুযায়ী দেবেন)

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen relative">
      
      {/* ভিডিও ব্যাকগ্রাউন্ড */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src={heroVideo} // 👈 ২. এখানে ইমপোর্ট করা ভেরিয়েবলটি দিন
          autoPlay
          loop
          muted // 👈 ৩. অটো-প্লে হওয়ার জন্য muted থাকতেই হবে
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#0a192f]/70"></div>
      </div>

      {/* বাকি কন্টেন্ট (যা ছিল তাই থাকবে) */}
      <div className="w-full h-full relative flex flex-col justify-center items-center text-center text-white px-4">
        <p className="text-cyan-400 font-bold text-lg md:text-xl mb-4 tracking-widest">
          Dedicated to Your Well-being, Always
        </p>
        <h1 className="text-4xl md:text-7xl font-bold font-sans mb-6">
          Dedicated to <span className='text-cyan-400'>Healthcare Service</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mb-8">
          29 Years of Dedicated Healthcare Service. Providing world-class pharmaceutical solutions across borders.
        </p>
        <div>
          <button className="text-white border-2 border-white px-8 py-3 my-2 flex items-center rounded-full hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300 group text-lg font-semibold">
            Explore Products
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;