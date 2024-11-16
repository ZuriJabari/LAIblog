import React, { useState, useRef, useEffect } from 'react';
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const profiles = {
  fellows: [
    { name: "Jane Doe", title: "Environmental Scientist", photo: "/path/to/jane.jpg", socials: { twitter: "#", linkedin: "#", facebook: "#" } },
    { name: "John Smith", title: "Economic Policy Analyst", photo: "/path/to/john.jpg", socials: { twitter: "#", linkedin: "#", instagram: "#" } },
    { name: "Alice Brown", title: "Youth Advocate", photo: "/path/to/alice.jpg", socials: { twitter: "#", linkedin: "#" } },
    { name: "Mike Wilson", title: "Digital Entrepreneur", photo: "/path/to/mike.jpg", socials: { linkedin: "#", facebook: "#" } },
    { name: "Sophia Green", title: "Climate Activist", photo: "/path/to/sophia.jpg", socials: { linkedin: "#", twitter: "#" } },
  ],
  champions: [
    { name: "Sarah White", title: "Philanthropist", photo: "/path/to/sarah.jpg", socials: { twitter: "#", linkedin: "#", facebook: "#" } },
    { name: "Tom Gray", title: "Corporate Partner", photo: "/path/to/tom.jpg", socials: { twitter: "#", linkedin: "#", instagram: "#" } },
    { name: "Emma Thompson", title: "Public Service Supporter", photo: "/path/to/emma.jpg", socials: { linkedin: "#", instagram: "#" } },
    { name: "Liam Johnson", title: "Academic Advocate", photo: "/path/to/liam.jpg", socials: { twitter: "#", facebook: "#" } },
    { name: "Olivia Clark", title: "Community Builder", photo: "/path/to/olivia.jpg", socials: { facebook: "#", twitter: "#" } },
  ]
};

const OurPeople = () => {
  const [activeTab, setActiveTab] = useState("fellows");
  const [fade, setFade] = useState(true);
  const scrollRef = useRef(null);
  const autoScrollInterval = useRef(null);

  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 300);
    return () => clearTimeout(timeout);
  }, [activeTab]);

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(autoScrollInterval.current);
  }, [activeTab]);

  const startAutoScroll = () => {
    clearInterval(autoScrollInterval.current);
    autoScrollInterval.current = setInterval(() => scroll('right'), 5000);
  };

  const pauseAutoScroll = () => clearInterval(autoScrollInterval.current);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 300;

    current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const descriptions = {
    fellows: "Our Fellows represent a diverse group of emerging leaders who are actively shaping Africa's future by driving positive change in their communities.",
    champions: "Our Champions are influential supporters and partners whose contributions have been pivotal in advancing our mission and impacting African leaders."
  };

  return (
    <section className="py-20 bg-[#1e8e92] text-white w-full relative">
      <div className="max-w-7xl mx-auto px-8 space-y-8">
        
        {/* Title and Tabs */}
        <div className="flex items-baseline justify-between space-x-6">
          <h2 className="text-5xl font-extrabold tracking-tighter text-left text-[#f6911e] drop-shadow-md">
            Fellows and Champions
          </h2>
          <div className="flex space-x-4 px-4 py-2 bg-white bg-opacity-50 rounded-full shadow-lg">
            <button 
              onClick={() => setActiveTab("fellows")} 
              className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 
                ${activeTab === "fellows" ? 'bg-white text-[#1e8e92] shadow-lg' : 'text-white hover:bg-white hover:bg-opacity-40'}`}
            >
              Our Fellows
            </button>
            <button 
              onClick={() => setActiveTab("champions")} 
              className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 
                ${activeTab === "champions" ? 'bg-white text-[#1e8e92] shadow-lg' : 'text-white hover:bg-white hover:bg-opacity-40'}`}
            >
              Our Champions
            </button>
          </div>
        </div>

        {/* Description for Active Tab */}
        <p className={`text-lg text-left max-w-4xl text-[#f0f0f0] leading-relaxed transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
          {descriptions[activeTab]}
        </p>

        {/* Carousel Container */}
        <div 
          className="relative w-screen left-1/2 right-1/2 -ml-[50vw] overflow-hidden"
          onMouseEnter={pauseAutoScroll}
          onMouseLeave={startAutoScroll}
        >
          <div ref={scrollRef} className="flex overflow-x-scroll space-x-8 px-8 no-scrollbar snap-x snap-mandatory">
            {profiles[activeTab].map((person, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 bg-white text-[#1e8e92] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 w-64 md:w-72 lg:w-80 snap-center"
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  <img src={person.photo} alt={person.name} className="w-24 h-24 rounded-full mb-4" />
                  <h3 className="text-2xl font-bold">{person.name}</h3>
                  <p className="text-md text-[#545454]">{person.title}</p>

                  {/* Social Media Icons */}
                  <div className="flex justify-center space-x-3 mt-3">
                    {person.socials.twitter && (
                      <a href={person.socials.twitter} aria-label="Twitter" className="hover:text-[#1e8e92]">
                        <FaTwitter />
                      </a>
                    )}
                    {person.socials.linkedin && (
                      <a href={person.socials.linkedin} aria-label="LinkedIn" className="hover:text-[#1e8e92]">
                        <FaLinkedinIn />
                      </a>
                    )}
                    {person.socials.facebook && (
                      <a href={person.socials.facebook} aria-label="Facebook" className="hover:text-[#1e8e92]">
                        <FaFacebookF />
                      </a>
                    )}
                    {person.socials.instagram && (
                      <a href={person.socials.instagram} aria-label="Instagram" className="hover:text-[#1e8e92]">
                        <FaInstagram />
                      </a>
                    )}
                  </div>

                  {/* Link to Success Stories / Contributions */}
                  {activeTab === "fellows" ? (
                    <a href="/success-stories" className="text-[#f6911e] font-semibold hover:underline text-center block mt-4">
                      Success Stories & Achievements
                    </a>
                  ) : (
                    <a href={`/contributions/${person.name.toLowerCase().replace(' ', '-')}`} className="text-[#f6911e] font-semibold hover:underline text-center block mt-4">
                      Contributions to the Institute
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Arrows Positioned with Tooltip */}
      <div className="absolute top-24    right-8 flex space-x-2 pb-6">
        <div className="relative flex items-center space-x-2">
          <button onClick={() => scroll('left')} className="p-4 bg-[#f6911e] rounded-full hover:bg-[#89272a] transition-colors shadow-md">
            <FiArrowLeft className="text-white" size={20} />
          </button>
          <span className="text-xs font-semibold text-[#f6911e] bg-white bg-opacity-80 rounded-full px-3 py-1 animate-bounce">
            Scroll
          </span>
          <button onClick={() => scroll('right')} className="p-4 bg-[#f6911e] rounded-full hover:bg-[#89272a] transition-colors shadow-md">
            <FiArrowRight className="text-white" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurPeople;
