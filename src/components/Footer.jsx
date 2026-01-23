import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <div name="contact" className="w-full bg-[#0a192f] text-gray-300 py-12 px-4 border-t-2 border-cyan-800">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* কলাম ১: ঠিকানা ও ম্যাপ */}
        <div className="col-span-1">
          <h1 className="text-2xl font-bold text-cyan-400 mb-4">BEACON PHARMA</h1>
          <p className="flex items-start mb-2">
            <MdLocationOn className="mr-2 text-xl mt-1" />
            <span>
              Hut No. 212, South Raynagar,<br/>
              Kolkata-700070, West Bengal.
            </span>
          </p>
          {/* ছোট গুগল ম্যাপ ফ্রেম */}
          <div className="mt-4 w-full h-32 rounded-lg overflow-hidden border border-gray-600">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.99!2d88.36!3d22.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02710000000001%3A0x0!2zMjLCsDI3JzM2LjAiTiA4OMKwMjEnMzYuMCJF!5e0!3m2!1sen!2sin!4v1611818181818!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen="" 
               loading="lazy"
               title="Office Map"
             ></iframe>
          </div>
        </div>

        {/* কলাম ২: কুইক লিংকস */}
        <div className="col-span-1">
          <h6 className="font-bold text-white uppercase pt-2 mb-4">Quick Links</h6>
          <ul>
            <li className="py-1 hover:text-cyan-400 cursor-pointer">Home</li>
            <li className="py-1 hover:text-cyan-400 cursor-pointer">About Us</li>
            <li className="py-1 hover:text-cyan-400 cursor-pointer">Our Products</li>
            <li className="py-1 hover:text-cyan-400 cursor-pointer">Career</li>
            <li className="py-1 hover:text-cyan-400 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* কলাম ৩: যোগাযোগ */}
        <div className="col-span-1">
          <h6 className="font-bold text-white uppercase pt-2 mb-4">Contact Us</h6>
          <div className="flex items-center py-2">
            <MdPhone className="mr-2 text-cyan-400" />
            <p>+91 78900 22120</p>
          </div>
          <div className="flex items-center py-2">
            <MdEmail className="mr-2 text-cyan-400" />
            <p>info@beaconpharma.io</p>
          </div>
          <div className="flex items-center py-2">
            <MdEmail className="mr-2 text-cyan-400" />
            <p>bconpharma@gmail.com</p>
          </div>
          
          {/* সোশ্যাল আইকন */}
          <div className="flex justify-start space-x-4 mt-6">
            <FaFacebook className="text-2xl hover:text-cyan-400 cursor-pointer" />
            <FaLinkedin className="text-2xl hover:text-cyan-400 cursor-pointer" />
            <FaInstagram className="text-2xl hover:text-cyan-400 cursor-pointer" />
            <FaTwitter className="text-2xl hover:text-cyan-400 cursor-pointer" />
          </div>
        </div>

        {/* কলাম ৪: নিউজলেটার */}
        <div className="col-span-1">
          <h6 className="font-bold text-white uppercase pt-2 mb-4">Newsletter</h6>
          <p className="py-4">Subscribe to our newsletter for latest updates.</p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input 
              className="w-full p-2 mr-2 rounded-md text-gray-800 focus:outline-none" 
              type="email" 
              placeholder="Enter email..." 
            />
            <button className="p-2 bg-cyan-600 hover:bg-cyan-700 rounded-md font-bold text-white w-full sm:w-auto">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* কপিরাইট বার */}
      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500 mt-12 border-t border-gray-700">
        <p className="py-4">© 2026 Beacon Pharmaceuticals Pvt. Ltd. All rights reserved.</p>
        <p className="py-4 text-cyan-500 font-semibold cursor-pointer hover:text-cyan-400">
          Developed By Novum Labs
        </p>
      </div>
    </div>
  );
};

export default Footer;