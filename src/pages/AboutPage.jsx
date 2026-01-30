import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[#002B49] text-white">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=2069')] bg-cover bg-center"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
          >
            About Us
          </motion.h1>
          <div className="h-1 w-24 bg-cyan-500 mx-auto mb-4"></div>
          <p className="text-xl md:text-2xl text-cyan-100 font-light max-w-2xl mx-auto italic">
            "Enhancing patients' lives through impactful medical solutions."
          </p>
        </div>
      </section>

      {/* 2. Company Profile with Image */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn} className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-100 rounded-full z-0"></div>
            <img 
              src="/src/assets/conference.jpg" // আপনার কনফারেন্সের ছবি এখানে দিন
              alt="Beacon Conference 2024" 
              className="relative z-10 rounded-2xl shadow-2xl border-8 border-white"
            />
            <div className="absolute -bottom-6 -right-6 bg-cyan-600 text-white p-6 rounded-xl hidden md:block">
              <p className="text-3xl font-bold">25+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              Leading the Way in <span className="text-cyan-600">Biopharmaceutical</span> Innovation
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg text-justify">
              Beacon Pharmaceuticals Pvt. Ltd., headquartered in Bengal, is committed to providing a comprehensive portfolio covering Antibiotics, Cough Relief, Pain Management, and Gastrointestinal Solutions. We prioritize affordability without compromising on quality.
            </p>
            <div className="bg-slate-50 p-8 rounded-2xl border-l-8 border-cyan-600 shadow-sm">
              <p className="text-slate-800 font-medium italic text-lg">
                "Our motto, 'Healthcare for Every Tomorrow', reflects our commitment to delivering sustainable wellness solutions through innovation and compassion."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Directors Profile */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Directors' Profile</h2>
          <p className="text-slate-500">The visionary leadership behind our success</p>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          {/* Mr. Shankar Singh */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100"
          >
            <div className="h-3 bg-cyan-600"></div>
            <div className="p-8">
              <div className="flex flex-col items-center mb-6">
                <img src="/src/assets/shankar.jpg" className="w-32 h-32 rounded-full object-cover border-4 border-cyan-50 shadow-md mb-4" alt="Mr. Shankar Singh" />
                <h3 className="text-2xl font-bold text-slate-800">Mr. Shankar Singh</h3>
                <p className="text-cyan-600 font-semibold uppercase tracking-widest text-sm">Director</p>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed text-justify mb-4">
                Joined in 2017, Shankar led the organization’s transition from a sick pharmaceutical company to a diverse product portfolio powerhouse. He believes hard work and dedication are the greatest strengths of human beings.
              </p>
            </div>
          </motion.div>

          {/* Mr. Sekhar Datta */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100"
          >
            <div className="h-3 bg-cyan-600"></div>
            <div className="p-8">
              <div className="flex flex-col items-center mb-6">
                <img src="/src/assets/sekhar.jpg" className="w-32 h-32 rounded-full object-cover border-4 border-cyan-50 shadow-md mb-4" alt="Mr. Sekhar Datta" />
                <h3 className="text-2xl font-bold text-slate-800">Mr. Sekhar Datta</h3>
                <p className="text-cyan-600 font-semibold uppercase tracking-widest text-sm">Director</p>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed text-justify mb-4">
                Founded Beacon in 1995, Mr. Datta's journey is a testament to perseverance. He realized the crucial role of pharmaceutical companies in improving healthcare access in the 1980s and has since focused on ethical practices.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;