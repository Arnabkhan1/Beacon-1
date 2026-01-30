import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineBadgeCheck, HiOutlineBeaker } from 'react-icons/hi';

const About = () => {
  return (
    <div id="about" className="w-full bg-[#fcfdfe] py-28 px-4 overflow-hidden">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* ১. ইমেজ সেকশন উইথ প্রিমিয়াম ফ্রেম */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative px-4 md:px-0"
        >
          <div className="relative z-10 group">
            <img 
              className="w-full h-auto rounded-[2.5rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]" 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Beacon Research Lab" 
            />
            {/* ইমেজ ওভারলে শাইন ইফেক্ট */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* ডেকোরেটিভ ডট গ্রিড */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[radial-gradient(#22d3ee_2px,transparent_2px)] [background-size:20px_20px] opacity-30 -z-10"></div>
          
          {/* সাইড বর্ডার ডিজাইন */}
          <div className="absolute top-12 -left-8 w-full h-full border-[3px] border-dashed border-cyan-200 rounded-[2.5rem] hidden lg:block -z-10"></div>
          
          {/* ফ্লোটিং এক্সপেরিয়েন্স কার্ড */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-8 -right-4 bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-20 border-b-8 border-cyan-500 min-w-[200px]"
          >
            <div className="flex items-center gap-4">
              <h3 className="text-5xl font-black text-[#0a192f]">29</h3>
              <div>
                <p className="text-cyan-600 font-bold text-xl leading-none">Years</p>
                <p className="text-gray-400 text-sm font-medium">of Trust</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ২. টেক্সট কন্টেন্ট সেকশন */}
        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[3px] bg-cyan-500 rounded-full"></span>
            <p className="text-cyan-600 font-black uppercase tracking-[0.3em] text-xs">
              Who We Are
            </p>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-[#0a192f] mb-8 leading-[1.1]">
            Pioneering <span className="text-cyan-600">Healthcare</span> <br />
            Excellence Globally
          </h2>
          
          <div className="space-y-6 mb-10">
            <p className="text-gray-600 text-lg leading-relaxed text-justify font-medium">
              Beacon Pharmaceuticals Pvt. Ltd. is a Bengal-based biopharmaceutical powerhouse dedicated to transforming lives. We focus on developing impactful medical products that set new benchmarks in the industry.
            </p>
            <p className="bg-cyan-50 border-l-4 border-cyan-500 p-6 text-gray-700 font-semibold italic rounded-r-xl shadow-sm">
              "Our mission is simple: high-quality healthcare that everyone can afford, without compromise."
            </p>
          </div>

          {/* স্মার্ট ফিচার গ্রিড */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 group">
              <div className="p-3 bg-cyan-100 rounded-lg text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                <HiOutlineBadgeCheck size={28} />
              </div>
              <div>
                <h4 className="font-bold text-[#0a192f] text-lg">Global Standard</h4>
                <p className="text-sm text-gray-500">WHO-GMP Certified</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 group">
              <div className="p-3 bg-cyan-100 rounded-lg text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                <HiOutlineBeaker size={28} />
              </div>
              <div>
                <h4 className="font-bold text-[#0a192f] text-lg">Innovation Hub</h4>
                <p className="text-sm text-gray-500">Advanced R&D Unit</p>
              </div>
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative w-[220px] bg-[#0a192f] text-white py-5 px-8 rounded-2xl font-black tracking-wider overflow-hidden transition-all shadow-xl shadow-cyan-900/20"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              LEARN MORE STORY
            </span>
            <div className="absolute top-0 left-[-100%] group-hover:left-0 w-full h-full bg-cyan-600 transition-all duration-500 -z-0"></div>
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
};

export default About;