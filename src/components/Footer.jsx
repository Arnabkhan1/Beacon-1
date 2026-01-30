import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <div id="contact" className="w-full bg-[#0a192f] text-gray-300 py-20 px-4 border-t border-cyan-900/30 overflow-hidden relative">
      
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[120px] rounded-full"></div>

      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 relative z-10">
        
        {/* কলাম ১: কোম্পানির তথ্য ও ম্যাপ (৪ কলাম) */}
        <div className="lg:col-span-4 flex flex-col space-y-6">
          <div>
            <h1 className="text-4xl font-black text-cyan-400 tracking-tighter mb-2">BEACON</h1>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em]">Excellence in Pharma</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3 text-sm leading-relaxed group">
              <MdLocationOn className="text-cyan-400 text-2xl shrink-0 group-hover:scale-110 transition-transform" />
              <p className="group-hover:text-white transition-colors">
                Hut No. 212, South Raynagar,<br/>
                Kolkata-700070, West Bengal, India.
              </p>
            </div>

            {/* গুগল ম্যাপ (লাইভ লোকেশনসহ) */}
            <div className="w-full h-48 rounded-[2rem] overflow-hidden border border-cyan-900/50 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.123456789!2d88.363892!3d22.492212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI5JzMyLjAiTiA4OMKwMjEnNTAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000" 
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen="" 
                 loading="lazy"
                 title="Beacon Pharma Location"
               ></iframe>
            </div>
          </div>
        </div>

        {/* কলাম ২: নেভিগেশন (২ কলাম) */}
        <div className="lg:col-span-2">
          <h6 className="font-black text-white uppercase tracking-widest text-xs mb-8 border-l-4 border-cyan-500 pl-3">
            Quick Links
          </h6>
          <ul className="flex flex-col space-y-4 font-bold text-sm">
            {['Home', 'About Us', 'Products', 'Vision', 'Career'].map((item) => (
              <li key={item} className="group flex items-center gap-2 cursor-pointer transition-all duration-300 hover:text-cyan-400 hover:translate-x-2">
                <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full group-hover:bg-cyan-400 group-hover:scale-125 transition-all"></span> 
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* কলাম ৩: যোগাযোগ ও সোশ্যাল (৩ কলাম) */}
        <div className="lg:col-span-3">
          <h6 className="font-black text-white uppercase tracking-widest text-xs mb-8 border-l-4 border-cyan-500 pl-3">
            Get In Touch
          </h6>
          <div className="space-y-6">
            <a href="tel:+917890022120" className="flex items-center gap-4 hover:text-cyan-400 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-cyan-900/20 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-[#0a192f] transition-all duration-300 shadow-inner">
                <MdPhone size={22} />
              </div>
              <p className="font-bold text-sm tracking-wide">+91 78900 22120</p>
            </a>
            <a href="mailto:info@beaconpharma.io" className="flex items-center gap-4 hover:text-cyan-400 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-cyan-900/20 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-[#0a192f] transition-all duration-300 shadow-inner">
                <MdEmail size={22} />
              </div>
              <p className="font-bold text-sm break-all tracking-wide">info@beaconpharma.io</p>
            </a>
            
            {/* সোশ্যাল আইকন সেট */}
            <div className="flex gap-4 pt-4">
              {[FaFacebook, FaLinkedin, FaInstagram, FaTwitter].map((Icon, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-11 h-11 rounded-full border border-cyan-900/50 flex items-center justify-center hover:bg-cyan-500 hover:text-[#0a192f] hover:border-cyan-500 transition-all duration-300 cursor-pointer shadow-lg"
                >
                  <Icon size={20} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* কলাম ৪: নিউজলেটার (৩ কলাম) */}
        <div className="lg:col-span-3">
           <div className="bg-white/[0.03] p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700"></div>
              
              <h6 className="font-black text-white uppercase tracking-widest text-xs mb-4">Newsletter</h6>
              <p className="text-xs text-gray-500 mb-6 leading-relaxed">Stay updated with our latest pharmaceutical research and offers.</p>
              
              <form className="flex flex-col gap-4">
                <input 
                  className="w-full px-5 py-4 rounded-2xl bg-[#0a192f] border border-cyan-900/50 focus:border-cyan-500 text-white outline-none transition-all text-xs font-bold" 
                  type="email" 
                  placeholder="Enter your email" 
                />
                <button className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-[#0a192f] font-black rounded-2xl transition-all shadow-xl shadow-cyan-600/20 uppercase text-xs tracking-[0.2em]">
                  Subscribe
                </button>
              </form>
           </div>
        </div>

      </div>

      {/* কপিরাইট বার */}
      <div className="max-w-[1240px] mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black tracking-[0.25em] uppercase text-gray-600">
        <p>© 2026 BEACON PHARMACEUTICALS PVT. LTD. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8 mt-6 md:mt-0 items-center">
           <span className="hover:text-cyan-400 cursor-pointer transition-colors">Privacy</span>
           <span className="hover:text-cyan-400 cursor-pointer transition-colors">Terms</span>
           <div className="h-4 w-[1px] bg-gray-800"></div>
           <p>
             Crafted By <span className="text-cyan-500 cursor-pointer hover:text-cyan-300 transition-colors">Novum Labs</span>
           </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;