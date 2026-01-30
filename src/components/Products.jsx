import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowNarrowRight, HiOutlinePlus } from 'react-icons/hi';

const Products = () => {
  const products = [
    { 
      id: 1, 
      title: 'Advanced Antibiotics', 
      image: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=800',
      desc: 'Precision-engineered antibiotics developed to combat resistant bacterial strains effectively.',
      tag: 'Certified',
      color: 'bg-blue-500'
    },
    { 
      id: 2, 
      title: 'Respiratory Health', 
      image: 'https://images.pexels.com/photos/415825/pexels-photo-415825.jpeg?auto=compress&cs=tinysrgb&w=800',
      desc: 'Advanced inhalers and syrups designed for rapid relief and long-term lung health.',
      tag: 'New',
      color: 'bg-green-500'
    },
    { 
      id: 3, 
      title: 'Pain Management', 
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800',
      desc: 'Targeted analgesic solutions providing fast relief for acute and chronic pain conditions.',
      tag: 'Effective',
      color: 'bg-red-500'
    },
    { 
      id: 4, 
      title: 'Gastrointestinal', 
      image: 'https://images.pexels.com/photos/3652103/pexels-photo-3652103.jpeg?auto=compress&cs=tinysrgb&w=800',
      desc: 'Specialized medications for digestive wellness, ensuring gut health and fast recovery.',
      tag: 'Top Rated',
      color: 'bg-orange-500'
    },
    { 
      id: 5, 
      title: 'Nutraceuticals', 
      image: 'https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg?auto=compress&cs=tinysrgb&w=800',
      desc: 'Supplements enriched with essential vitamins and minerals for a balanced lifestyle.',
      tag: 'Vitamins',
      color: 'bg-purple-500'
    },
    { 
      id: 6, 
      title: 'Biotech & Care', 
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
      desc: 'Innovative biological products developed in our state-of-the-art research laboratories.',
      tag: 'Research',
      color: 'bg-cyan-500'
    },
  ];

  return (
    <div id="products" className="w-full bg-[#f8fafc] py-28 px-4 relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-100/20 rounded-full -mr-64 -mt-64 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/20 rounded-full -ml-64 -mb-64 blur-[100px]"></div>

      <div className="max-w-[1240px] mx-auto relative z-10">
        
        {/* হেডার সেকশন */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="bg-cyan-100 text-cyan-700 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-sm">
              Our Portfolio
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-[#0a192f] mt-8 mb-6 tracking-tight leading-tight">
            Scientific <span className='text-cyan-600 underline decoration-cyan-200 decoration-8 underline-offset-8'>Excellence</span> in Pharma
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed mt-10">
            Crafting a healthier tomorrow with research-driven solutions and uncompromising quality standards.
          </p>
        </div>

        {/* কার্ড গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {products.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-[3rem] p-5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_80px_-30px_rgba(6,182,212,0.25)] transition-all duration-500 border border-slate-50"
            >
              {/* ইমেজ বক্স */}
              <div className="relative h-72 rounded-[2.5rem] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* ভাসমান ব্যাজ */}
                <div className={`absolute top-5 right-5 ${item.color} text-white text-[10px] font-black px-5 py-2 rounded-full uppercase shadow-xl transform group-hover:-translate-y-1 transition-transform tracking-widest`}>
                  {item.tag}
                </div>
              </div>

              {/* কন্টেন্ট বক্স */}
              <div className="px-4 py-8">
                <h3 className="text-2xl font-black text-[#0a192f] mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium h-[60px] line-clamp-3">
                  {item.desc}
                </p>
                
                <div className="flex items-center justify-between border-t border-slate-50 pt-8">
                  <button className="flex items-center gap-3 text-[#0a192f] font-black text-sm group/btn hover:text-cyan-600 transition-all uppercase tracking-widest">
                    Details 
                    <HiOutlineArrowNarrowRight className="text-cyan-500 text-xl group-hover/btn:translate-x-3 transition-transform duration-300" />
                  </button>
                  
                  <motion.div 
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 cursor-pointer text-[#0a192f] shadow-sm"
                  >
                    <HiOutlinePlus size={22} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* মেইন অ্যাকশন বাটন */}
        <div className="mt-28 text-center">
          <motion.button 
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="inline-flex items-center gap-5 bg-[#0a192f] text-white px-12 py-6 rounded-[2.5rem] font-black text-lg hover:bg-cyan-600 transition-all duration-300 shadow-[0_25px_50px_-12px_rgba(10,25,47,0.4)] hover:shadow-cyan-500/40"
          >
            Explore All Products
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20">
                <HiOutlineArrowNarrowRight size={20} />
            </div>
          </motion.button>
        </div>

      </div>
    </div>
  );
};

export default Products;