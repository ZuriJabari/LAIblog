import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import kasLogo from '../assets/images/KAS_Logo_Original.png';
import SegalLogo from '../assets/images/sff-logo-alt-box.png';

const PartnerWithUs = () => {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-[#e5f7f9] to-[#f5f5f5] text-[#1e8e92] relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Main Title */}
        <h2 className="text-3xl font-extrabold text-left text-[#1e8e92] drop-shadow-sm">
          Partner with Us
        </h2>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Our Partners Section */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 space-y-4">
            <h3 className="text-2xl font-bold text-[#1e8e92]">Our Partners</h3>
            <p className="text-sm text-[#545454] leading-relaxed">
              We’re honored to work with partners who share our vision for an empowered Africa.
            </p>

            {/* Partner Logos */}
            <div className="flex space-x-4 justify-start">
              <div className="flex flex-col items-center space-y-1">
                <img src={kasLogo} alt="KAS Logo" className="h-12 w-auto" />
              </div>
              <div className="flex flex-col items-center space-y-1">
                <img src={SegalLogo} alt="Segal Family Foundation Logo" className="h-12 w-auto" />
              </div>
            </div>
          </div>

          {/* How to Partner Section */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 space-y-4">
            <h3 className="text-2xl font-bold text-[#1e8e92]">How to Partner</h3>
            <p className="text-sm text-[#545454] leading-relaxed">
              Collaborate with us to empower Africa’s future leaders.
            </p>
            <a 
              href="mailto:partnerships@leoafricainstitute.org" 
              className="text-[#1e8e92] font-semibold underline hover:text-[#89272a] transition-colors"
            >
              Become a Partner Today!
            </a>
          </div>
        </div>

        {/* Contribute Section */}
        <div className="bg-[#f5f5f5] py-6 px-6 rounded-lg flex items-center space-x-4">
          <p className="text-sm text-[#1e8e92] font-semibold">
            Explore other ways to contribute, support our work or part of the community.
          </p>
          <a 
            href="/contribute" 
            className="bg-[#f6911e] text-white py-2 px-6 rounded-full font-semibold transition-transform duration-300 hover:scale-105 hover:bg-[#1e8e92] inline-flex items-center space-x-2"
          >
            <span>Learn More</span>
            <FiArrowRight className="text-lg" />
          </a>
        </div>

        {/* Decorative Circles */}
        <div className="absolute -top-8 -left-8 bg-[#f6911e] h-20 w-20 rounded-full opacity-20"></div>
        <div className="absolute -bottom-8 -right-8 bg-[#89272a] h-24 w-24 rounded-full opacity-20"></div>
      </div>
    </section>
  );
};

export default PartnerWithUs;
