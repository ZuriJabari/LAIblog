import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaYoutube, FaFlickr } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamic year

  return (
    <footer 
      className="bg-[#1d8f92] text-white py-16" 
      style={{
        backgroundImage: `url(${require('../assets/images/ALG-Patterns.png')})`, 
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'top'
      }}
    >
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        
        {/* About Us and Other Sections */}
        <div className="grid sm:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f6941e]">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/our-mission" className="hover:text-[#f6941e] transition-colors">Our Mission</a></li>
              <li><a href="/institutional-framework" className="hover:text-[#f6941e] transition-colors">Our Institutional Framework</a></li>
              <li><a href="/history" className="hover:text-[#f6941e] transition-colors">History</a></li>
              <li><a href="/leadership-governance" className="hover:text-[#f6941e] transition-colors">Leadership and Governance</a></li>
              <li><a href="/impact" className="hover:text-[#f6941e] transition-colors">Our Impact</a></li>
            </ul>
          </div>

          {/* More from the Forum Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f6941e]">More from the Forum</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://huduma.leoafricainstitute.org/" target="_blank" rel="noopener noreferrer" className="hover:text-[#f6941e] transition-colors">Huduma Fellowship</a></li>
              <li><a href="https://yelp.leoafricainstitute.org/" target="_blank" rel="noopener noreferrer" className="hover:text-[#f6941e] transition-colors">YELP</a></li>
              <li><a href="https://leoafricareview.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#f6941e] transition-colors">LéO Africa Review</a></li>
              <li><a href="https://alg.leoafricainstitute.org/" target="_blank" rel="noopener noreferrer" className="hover:text-[#f6941e] transition-colors">Annual Leaders Gathering</a></li>
            </ul>
          </div>

          {/* Engage with Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f6941e]">Engage with Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/signin" className="hover:text-[#f6941e] transition-colors">Sign In</a></li>
              <li><a href="/partner" className="hover:text-[#f6941e] transition-colors">Partner with Us</a></li>
              <li><a href="/membership" className="hover:text-[#f6941e] transition-colors">Become a Member</a></li>
              <li><a href="/press-releases" className="hover:text-[#f6941e] transition-colors">Sign Up for Press Releases</a></li>
              <li><a href="/newsletter" className="hover:text-[#f6941e] transition-colors">Subscribe to Newsletters</a></li>
              <li><a href="/contact" className="hover:text-[#f6941e] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Subscription Form Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f6941e]">Stay Updated</h3>
            <p className="text-sm mb-4">Join our mailing list to receive the latest news and updates from the LéO Africa Institute.</p>
            <form action="https://mailchimp.com/subscribe" method="POST" className="flex flex-col space-y-2">
              <input 
                type="email" 
                name="email" 
                placeholder="Your email address" 
                className="p-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2bbecb]"
              />
              <button type="submit" className="bg-[#f6941e] text-white p-2 rounded-md hover:bg-[#2bbecb] transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            {/* Sitemap and Social Icons */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-0">
              <a href="/sitemap" className="text-sm hover:text-[#f6941e] transition-colors">Sitemap</a>
              <a href="/privacy-policy" className="text-sm hover:text-[#f6941e] transition-colors">Privacy Policy</a>
            </div>
            <div className="flex space-x-6">
              <a href="https://x.com/LeoAfricaInst" target="_blank" rel="noopener noreferrer" className="hover:text-[#f6941e] transition-all transform hover:scale-110">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/LeOAfricaInstitute/" target="_blank" rel="noopener noreferrer" className="hover:text-[#f6941e] transition-all transform hover:scale-110">
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/leoafricainst/" target="_blank" rel="noopener noreferrer" className="hover:text-[#f6941e] transition-all transform hover:scale-110">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/18203194/admin/page-posts/published/" target="_blank" rel="noopener noreferrer" className="hover:text-[#f6941e] transition-all transform hover:scale-110">
                <FaLinkedinIn className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@leoafricainstitute" target="_blank" rel="noopener noreferrer" className="hover:text-[#f6941e] transition-all transform hover:scale-110">
                <FaYoutube className="w-6 h-6" />
              </a>
              <a href="https://flickr.com/people/africaforum/" target="_blank" rel="noopener noreferrer" className="hover:text-[#f6941e] transition-all transform hover:scale-110">
                <FaFlickr className="w-6 h-6" />
              </a>
              <a href="mailto:communications@leoafricainstitute.org" className="hover:text-[#f6941e] transition-all transform hover:scale-110">
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm border-t border-gray-300 pt-6 mt-6">
          <p>&copy; {currentYear} LéO Africa Institute. All rights reserved.</p>
          <a href="https://index.ug" target="_blank" rel="noopener noreferrer" className="hover:text-[#f6941e] transition-colors">
            A creation of Index Digital
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
