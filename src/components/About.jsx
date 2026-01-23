import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        <div className="relative group">
            <img 
              className="w-full h-auto rounded-lg shadow-xl group-hover:scale-105 duration-300 transition-transform object-cover" 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Lab Research" 
            />
            <div className="absolute -z-10 top-4 -left-4 w-full h-full border-4 border-cyan-500 rounded-lg hidden md:block"></div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-2">
            Company Profile
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
            Driving Excellence in Pharmaceuticals Since 1995
          </h2>
          <p className="text-gray-600 text-lg mb-4 text-justify">
            Beacon Pharmaceuticals Pvt. Ltd. is a Bengal-based biopharmaceutical company focused on enhancing patients' lives through the development and commercialization of impactful medical products. Our diverse portfolio covers key areas such as Antibiotics, Cough Relief, Spasm Management, Pain and Inflammation Relief, Vertigo and Nausea Management, Calcium and Minerals Deficiency, and Gastrointestinal Solutions. We prioritize affordability without compromising on the quality of our medicines, ensuring that patients have access to effective treatments at reasonable prices.
          </p>
          <p className="text-gray-600 text-base mb-6 text-justify">
            In line with our commitment to scientific excellence, we continually invest in research and development to pioneer innovative solutions in healthcare. Our vision extends beyond the present, as we aspire to set new standards and improve patient outcomes globally. At Beacon Pharmaceuticals, we cultivate a strong patient-focused culture, driving our employees to make integral contributions towards our common goal of improving patients' lives.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="border-l-4 border-cyan-500 pl-3">
              <h4 className="font-bold text-[#0a192f]">Global Standard</h4>
              <p className="text-sm text-gray-500">WHO-GMP Certified</p>
            </div>
            <div className="border-l-4 border-cyan-500 pl-3">
              <h4 className="font-bold text-[#0a192f]">Innovation</h4>
              <p className="text-sm text-gray-500">Advanced R&D Lab</p>
            </div>
          </div>

          <button className="w-[160px] bg-[#0a192f] text-white py-3 px-6 rounded-md font-medium hover:bg-cyan-600 transition-colors duration-300">
            Read More
          </button>
        </div>

      </div>
    </div>
  );
};

export default About;