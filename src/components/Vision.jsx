import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

const Vision = () => {
  const slideImages = [
    "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3825368/pexels-photo-3825368.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1200"
  ];

  return (
    <div id="vision" className="w-full relative h-[850px] md:h-[850px] overflow-hidden bg-[#0a192f]">
      
      {/* ১. স্লাইডিং ব্যাকগ্রাউন্ড ইমেজ (Infinite Autoplay) */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect={'fade'}
          speed={2000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full h-full"
        >
          {slideImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-[5000ms] scale-110 group-hover:scale-100"
                style={{ backgroundImage: `url(${img})` }}
              >
                {/* ডার্ক গ্রেডিয়েন্ট ওভারলে */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/60 to-[#0a192f]"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ২. মেইন কন্টেন্ট (Floating Glass Box) */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-[900px] w-full bg-white/[0.03] backdrop-blur-xl border border-white/10 p-10 md:p-20 rounded-[3rem] text-center shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan-400 font-black tracking-[0.5em] text-xs md:text-sm uppercase block mb-6"
          >
            Pioneering the Future
          </motion.span>

          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">
            HEALTHCARE FOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              EVERY TOMORROW
            </span>
          </h2>

          <p className="text-gray-300 text-lg md:text-xl mb-12 font-medium max-w-2xl mx-auto">
            Our vision is to redefine global healthcare through scientific innovation, ensuring quality medicines reach every corner of the world.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
            {['QUALITY', 'AFFORDABILITY', 'GLOBAL STANDARDS'].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/5 px-6 py-2 rounded-full border border-white/10">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_#22d3ee]"></div>
                <span className="text-xs md:text-sm font-bold tracking-widest text-gray-200">{item}</span>
              </div>
            ))}
          </div>

          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(6,182,212,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-500 text-[#0a192f] px-12 py-5 rounded-full font-black text-lg tracking-tighter uppercase transition-all"
          >
            Explore Our Mission
          </motion.button>
        </motion.div>
      </div>

      {/* ডেকোরেটিভ ডিজাইন এলিমেন্ট (Circles) */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
    </div>
  );
};

export default Vision;