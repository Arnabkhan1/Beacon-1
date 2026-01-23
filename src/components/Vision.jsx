import React from 'react';

const Vision = () => {
  return (
    <div className="w-full">
      {/* প্যারাল্যাক্স ব্যাকগ্রাউন্ড ইমেজ */}
      <div 
        className="w-full h-[400px] bg-fixed bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
        }}
      >
        {/* কালো রঙের শেড (Overlay) যাতে লেখা স্পষ্ট হয় */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
        
        {/* টেক্সট কন্টেন্ট */}
        <div className="relative z-10 p-4 text-center text-white max-w-[800px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-sans">
            HEALTHCARE FOR EVERY TOMORROW
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-xl md:text-2xl font-semibold text-cyan-400">
            <span>QUALITY</span>
            <span className="hidden md:block text-gray-400">•</span>
            <span>AFFORDABILITY</span>
            <span className="hidden md:block text-gray-400">•</span>
            <span>SUSTAINABILITY</span>
          </div>
          
          <button className="mt-8 px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md font-bold transition-colors duration-300">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vision;