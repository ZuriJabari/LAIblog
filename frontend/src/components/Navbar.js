import React, { useState } from 'react';
import { FiSearch, FiArrowRight, FiMenu, FiX } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { navigate } from 'gatsby';
import LOGO from '../assets/images/Leo-logo-primary.png';
import ALGLogo from '../assets/images/alg-color.svg';
import HudumaLogo from '../assets/images/huduma-logo.svg';
import ReviewLogo from '../assets/images/LAR-logo.png';
import YelpLogo from '../assets/images/YELP-Logo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleMenuToggle = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/searchResults?query=${searchQuery}`);
  };


  return (
    <nav className="bg-white border-gray-200 shadow-md">
      {/* Top Bar */}
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-3 px-4">
        <div className="hidden md:flex space-x-4">
          <a href="https://facebook.com" className="hover:text-[#2bbecb] transition duration-300">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" className="hover:text-[#2bbecb] transition duration-300">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" className="hover:text-[#2bbecb] transition duration-300">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com" className="hover:text-[#2bbecb] transition duration-300">
            <FaInstagram />
          </a>
        </div>
        <div className="flex items-center space-x-6">
          <button onClick={handleSearchToggle} className="hover:text-[#2bbecb] transition duration-300">
            <FiSearch className="w-5 h-5" />
          </button>
          <a href="/get-involved" className="hover:text-[#2bbecb] transition duration-300">
            Get Involved
          </a>
          <a href="/get-involved" className="hover:text-[#2bbecb] transition duration-300">
          Partner with Us
          </a>
          <a href="/get-involved" className="hover:text-[#2bbecb] transition duration-300">
             Contact Us
          </a>
          
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="bg-gray-100 py-2 px-4">
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="flex-1 bg-white border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2bbecb]"
            />
            <button type="submit" className="ml-2 bg-[#2bbecb] text-white px-4 py-2 rounded-md">
              Search
            </button>
          </form>
        </div>
      )}

      {/* Full-Width Horizontal Line */}
      <div className="w-full h-px bg-gray-300"></div>

      {/* Main Navigation */}
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      <a href="/" className="flex items-center space-x-3">
  <img 
    src={LOGO} 
    className="h-10" 
    alt="Leo Africa Institute Logo" 
    style={{ height: 'calc(8rem * 0.4)' }} // Inline styles for precise 20% scaling
  />
</a>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition duration-300"
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
        </button>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full md:flex md:w-auto md:order-1 transition-transform duration-500 ease-in-out`}
        >
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8">
  {['About Us', 'Events & Gatherings', 'Fellows & Champions', 'News & Media', 'Initiatives'].map(
    (menu) => (
      <li key={menu}>
        <button
          onClick={() => handleMenuToggle(menu)}
          className="flex items-center justify-between w-full py-2 px-3 text-lg font-bold text-gray-900 md:w-auto hover:text-[#2bbecb] md:p-0 transition duration-300"
        >
          {menu}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
      </li>
    )
  )}
</ul>

        </div>
      </div>

      {/* News & Media Dropdown */}
      {activeMenu === 'News & Media' && (
        <div className="mt-1 bg-white border-gray-200 shadow-sm border-y">
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 md:grid-cols-3 md:px-6 gap-6">
            <ul>
              <h2 className="uppercase font-bold">BY TYPE</h2>
              <li><a href="/news/articles" className="hover:underline hover:text-[#2bbecb]">Articles</a></li>
              <li><a href="/news/founders-blog" className="hover:underline hover:text-[#2bbecb]">Founder's Blog</a></li>
              <li><a href="/news/research-reports" className="hover:underline hover:text-[#2bbecb]">Research Reports</a></li>
              <li><a href="/news/podcasts" className="hover:underline hover:text-[#2bbecb]">Podcasts</a></li>
              <li><a href="/news/videos" className="hover:underline hover:text-[#2bbecb]">Videos</a></li>
              <a href="/news" className="inline-flex items-center mt-4 text-[#f6911e] hover:underline">
                View All Insights & Research <FiArrowRight className="ml-2" />
              </a>
            </ul>
            <ul>
              <h2 className="uppercase font-bold">BY CATEGORY</h2>
              <li><a href="/news/coaching" className="hover:underline hover:text-[#2bbecb]">Coaching & Conversation Skills</a></li>
              <li><a href="/news/dei" className="hover:underline hover:text-[#2bbecb]">DEI / EDI</a></li>
              <li><a href="/news/supporting-development" className="hover:underline hover:text-[#2bbecb]">Supporting & Scaling Development</a></li>
              <li><a href="/news/team-leadership" className="hover:underline hover:text-[#2bbecb]">Team Leadership</a></li>
              <li><a href="/news/women-leadership" className="hover:underline hover:text-[#2bbecb]">Women in Leadership</a></li>
              <a href="/news/categories" className="inline-flex items-center mt-4 text-[#f6911e] hover:underline">
                View All Categories <FiArrowRight className="ml-2" />
              </a>
            </ul>
            <div>
              <h2 className="uppercase font-bold">LATEST FROM THE BLOG</h2>
              {[1, 2, 3].map((blog) => (
                <div key={blog} className="mb-4">
                  <h3 className="font-bold hover:text-[#2bbecb]">Blog Title {blog}</h3>
                  <p className="text-sm text-gray-500">Brief description of the blog post.</p>
                </div>
              ))}
              <a href="/blog" className="inline-flex items-center mt-4 text-[#f6911e] hover:underline">
                Browse Our Blogs <FiArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      )}

       {/* About Us Mega Menu */}
      {activeMenu === 'About Us' && (
        <div className="mt-1 bg-white border-gray-200 shadow-sm border-y">
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 md:grid-cols-3 md:px-6 gap-6">
            {/* First Column */}
            <ul className="mb-4 space-y-4">
              <h2 className="uppercase font-bold">Our Story</h2>
              <li><a href="/about/history" className="hover:underline hover:text-[#2bbecb]">Our History</a></li>
              <li><a href="/about/mission" className="hover:underline hover:text-[#2bbecb]">Mission & Vision</a></li>
              <li><a href="/about/team" className="hover:underline hover:text-[#2bbecb]">The Team</a></li>
              <li><a href="/about/partners" className="hover:underline hover:text-[#2bbecb]">Our Partners</a></li>
              <li><a href="/about/awards" className="hover:underline hover:text-[#2bbecb]">Awards & Accolades</a></li>
              <li><a href="/about/faq" className="hover:underline hover:text-[#2bbecb]">Frequently Asked Questions</a></li>
              <a href="/about" className="inline-flex items-center mt-4 text-[#f6911e] hover:underline">
                Learn More About Us <FiArrowRight className="ml-2" />
              </a>
            </ul>
            {/* Second Column */}
            <ul className="mb-4 space-y-4">
              <h2 className="uppercase font-bold">Connect</h2>
              <li><a href="/contact" className="hover:underline hover:text-[#2bbecb]">Contact Us</a></li>
              <li><a href="/get-involved" className="hover:underline hover:text-[#2bbecb]">Get Involved</a></li>
              <li><a href="/partners" className="hover:underline hover:text-[#2bbecb]">Partner with Us</a></li>
              <div className="flex space-x-4 mt-4">
                <a href="https://facebook.com" className="hover:text-[#2bbecb]"><FaFacebookF /></a>
                <a href="https://twitter.com" className="hover:text-[#2bbecb]"><FaTwitter /></a>
                <a href="https://linkedin.com" className="hover:text-[#2bbecb]"><FaLinkedinIn /></a>
                <a href="https://instagram.com" className="hover:text-[#2bbecb]"><FaInstagram /></a>
              </div>
              <form className="mt-4">
                <input
                  type="email"
                  placeholder="Subscribe to our newsletter"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2bbecb]"
                />
                <button
                  type="submit"
                  className="mt-2 w-full bg-[#2bbecb] text-white py-2 rounded-md hover:bg-[#f6911e] transition"
                >
                  Subscribe
                </button>
              </form>
            </ul>
            {/* Third Column */}
            <div>
              <h2 className="uppercase font-bold">Latest News</h2>
              {[1, 2, 3].map((news) => (
                <div key={news} className="mb-4">
                  
                  <a href={`/news/${news}`} className="block hover:text-[#2bbecb] font-bold">
                    News Title {news}
                  </a>
                  <p className="text-sm text-gray-500">Date: [Publish Date]</p>
                  <p className="text-gray-600 text-sm">
                    Brief description of the news.
                  </p>
                  <a
                    href={`/news/${news}`}
                    className="text-sm text-[#2bbecb] hover:underline"
                  >
                    Read More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

       {/* Initiatives Menu */}
      {activeMenu === 'Initiatives' && (
        <div className="mt-1 bg-white border-gray-200 shadow-sm border-y">
          <div className="text-center py-4">
            <h2 className="text-lg font-bold uppercase text-gray-800">What We Are Doing</h2>
          </div>
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 md:grid-cols-4 md:px-6 gap-6">
            {/* Columns for initiatives */}
            {[ALGLogo, HudumaLogo, ReviewLogo, YelpLogo].map((logo, idx) => (
              <div key={idx} className="text-center">
                <img src={logo} alt={`Initiative ${idx + 1}`} className="mb-4 w-full h-32 object-cover rounded-lg" />
                <h3 className="font-bold text-gray-800">Initiative {idx + 1}</h3>
                <p className="text-gray-600">Brief description about the initiative.</p>
                <a
                  href="#"
                  className="inline-flex items-center mt-4 text-[#f6911e] hover:underline"
                >
                  Learn More <FiArrowRight className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

       {/* Fellows & Champions Dropdown */}
      {activeMenu === 'Fellows & Champions' && (
        <div className="mt-1 bg-white border-gray-200 shadow-sm border-y">
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 md:grid-cols-3 md:px-6 gap-6">
            {/* Column 1 */}
            <div>
              <h2 className="uppercase font-bold">FEATURED FELLOWS</h2>
              {[1, 2, 3].map((fellow) => (
                <div key={fellow} className="mb-4 flex space-x-4">
                  <img
                    src={`/images/fellow-${fellow}.jpg`}
                    alt={`Fellow ${fellow}`}
                    className="h-16 w-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-bold hover:text-[#2bbecb]">Fellow Name {fellow}</h3>
                    <p className="text-sm text-gray-500">Brief description about this fellow and their impact.</p>
                    <a href={`/fellows/${fellow}`} className="text-[#f6911e] hover:underline">Read More</a>
                  </div>
                </div>
              ))}
              <a href="/fellows" className="inline-flex items-center mt-4 text-[#f6911e] hover:underline">
                Meet All Fellows <FiArrowRight className="ml-2" />
              </a>
            </div>

            {/* Column 2 */}
            <ul>
              <h2 className="uppercase font-bold">MENTORSHIP & CHAMPIONS</h2>
              <li><a href="/champions" className="hover:underline hover:text-[#2bbecb]">Our Champions</a></li>
              <li><a href="/mentorship" className="hover:underline hover:text-[#2bbecb]">Mentorship Programs</a></li>
              <li><a href="/leadership-programs" className="hover:underline hover:text-[#2bbecb]">Leadership Initiatives</a></li>
              <a href="/champions-and-mentors" className="inline-flex items-center mt-4 text-[#f6911e] hover:underline">
                Explore Mentorship & Champions <FiArrowRight className="ml-2" />
              </a>
            </ul>

            {/* Column 3 */}
            <div>
              <h2 className="uppercase font-bold">LATEST STORIES</h2>
              {[1, 2, 3].map((story) => (
                <div key={story} className="mb-4 flex space-x-4">
                  <img
                    src={`/images/story-${story}.jpg`}
                    alt={`Story ${story}`}
                    className="h-16 w-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-bold hover:text-[#2bbecb]">Story Title {story}</h3>
                    <p className="text-sm text-gray-500">Teaser text for this story, providing an overview of the content.</p>
                    <a href={`/stories/${story}`} className="text-[#f6911e] hover:underline">Read More</a>
                  </div>
                </div>
              ))}
              <a href="/stories" className="inline-flex items-center mt-4 text-[#f6911e] hover:underline">
                View All Stories <FiArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Events & Gatherings Mega Menu */}
      {activeMenu === 'Events & Gatherings' && (
        <div className="mt-1 bg-white border-gray-200 shadow-sm border-y">
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 md:grid-cols-3 md:px-6 gap-6">
            {/* Column 1 */}
            <ul>
              <h2 className="uppercase font-bold">Our Next Major Event</h2>
              <li><a href="/events/alg" className="hover:underline hover:text-[#2bbecb]">Annual Leaders Gathering</a></li>
              <li><a href="/events/yelp" className="hover:underline hover:text-[#2bbecb]">YELP Fellowship</a></li>
              <li><a href="/events/huduma" className="hover:underline hover:text-[#2bbecb]">Huduma Fellowship</a></li>
              <li><a href="/events/talks" className="hover:underline hover:text-[#2bbecb]">LéO Talks</a></li>
              <li><a href="/events/debates" className="hover:underline hover:text-[#2bbecb]">LéO Debates</a></li>
              <a href="/events" className="inline-flex items-center mt-4 text-[#f6911e] hover:underline">
                Browse All Events <FiArrowRight className="ml-2" />
              </a>
            </ul>

            {/* Column 2 */}
            <ul>
              <h2 className="uppercase font-bold">Upcoming Events</h2>
              <li><a href="/events/leadership" className="hover:underline hover:text-[#2bbecb]">Leadership Development</a></li>
              <li><a href="/events/policy" className="hover:underline hover:text-[#2bbecb]">Policy & Governance</a></li>
              <li><a href="/events/innovation" className="hover:underline hover:text-[#2bbecb]">Innovation & Technology</a></li>
              <li><a href="/events/culture" className="hover:underline hover:text-[#2bbecb]">Arts & Culture</a></li>
              <li><a href="/events/business" className="hover:underline hover:text-[#2bbecb]">Business & Entrepreneurship</a></li>
              <a href="/events" className="inline-flex items-center mt-4 text-[#f6911e] hover:underline">
                Learn How You Can Be Part of Our Events <FiArrowRight className="ml-2" />
              </a>
            </ul>

            {/* Column 3 */}
            <div>
              <h2 className="uppercase font-bold">Browse Our Past Events</h2>
              {[1, 2, 3].map((event) => (
                <div key={event} className="mb-4">
                  <h3 className="font-bold hover:text-[#2bbecb]">
                    Event Title {event}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Theme: Brief description of the past event.
                  </p>
                  <p className="text-sm text-gray-500">Date: [Event Date]</p>
                </div>
              ))}
              
              <a href="/past-events" className="inline-flex items-center text-[#f6911e] hover:underline">
                View All Past Events <FiArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      )}
     
      
      </nav>
  );
};

export default Navbar;