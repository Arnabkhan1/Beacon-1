import React from 'react';
import { FaPills, FaStethoscope, FaHeartbeat, FaVial, FaCapsules, FaDna } from 'react-icons/fa';

const Products = () => {

  const products = [
    { id: 1, title: 'Antibiotics', icon: <FaPills size={50} />, desc: 'High-quality antibiotics for bacterial infections.' },
    { id: 2, title: 'Cough Relief', icon: <FaStethoscope size={50} />, desc: 'Effective solutions for respiratory health.' },
    { id: 3, title: 'Pain Management', icon: <FaHeartbeat size={50} />, desc: 'Relief from acute and chronic pain conditions.' },
    { id: 4, title: 'Gastrointestinal', icon: <FaVial size={50} />, desc: 'Care for your digestive health and wellness.' },
    { id: 5, title: 'Nutraceuticals', icon: <FaCapsules size={50} />, desc: 'Supplements for a balanced and healthy life.' },
    { id: 6, title: 'Biotech', icon: <FaDna size={50} />, desc: 'Innovative biotech solutions for critical care.' },
  ];

  return (
    <div name="products" className="w-full bg-gray-100 py-20 px-4">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center w-full h-full">
        
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-[#0a192f]">
            Our Products
          </p>
          <p className="py-6 text-gray-600">Check out our wide range of pharmaceutical solutions</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map(({ id, title, icon, desc }) => (
            <div key={id} className="shadow-lg rounded-lg p-8 bg-white hover:scale-105 duration-300 flex flex-col items-center text-center cursor-pointer border-t-4 border-transparent hover:border-cyan-500">
              
              <div className="text-cyan-600 mb-4 p-4 bg-cyan-50 rounded-full">
                {icon}
              </div>
              
              <h3 className="text-2xl font-bold text-[#0a192f] mb-2">{title}</h3>
              <p className="text-gray-500">{desc}</p>
              
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Products;