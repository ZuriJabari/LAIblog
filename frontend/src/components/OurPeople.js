import React, { useState } from "react";
import { FaUsers, FaAward } from "react-icons/fa";
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const profiles = {
  fellows: [
    { name: "Jane Doe", title: "Environmental Scientist", photo: "/path/to/jane.jpg", socials: { twitter: "#", linkedin: "#", facebook: "#" } },
    { name: "John Smith", title: "Economic Policy Analyst", photo: "/path/to/john.jpg", socials: { twitter: "#", linkedin: "#", instagram: "#" } },
    { name: "Alice Brown", title: "Youth Advocate", photo: "/path/to/alice.jpg", socials: { twitter: "#", linkedin: "#" } },
    { name: "Mike Wilson", title: "Digital Entrepreneur", photo: "/path/to/mike.jpg", socials: { linkedin: "#", facebook: "#" } },
  ],
  champions: [
    { name: "Sarah White", title: "Philanthropist", photo: "/path/to/sarah.jpg", socials: { twitter: "#", linkedin: "#", facebook: "#" } },
    { name: "Tom Gray", title: "Corporate Partner", photo: "/path/to/tom.jpg", socials: { twitter: "#", linkedin: "#", instagram: "#" } },
    { name: "Emma Thompson", title: "Public Service Supporter", photo: "/path/to/emma.jpg", socials: { linkedin: "#", instagram: "#" } },
    { name: "Liam Johnson", title: "Academic Advocate", photo: "/path/to/liam.jpg", socials: { twitter: "#", facebook: "#" } },
  ],
};

const OurPeople = () => {
  const [activeTab, setActiveTab] = useState("fellows");

  const descriptions = {
    fellows:
      "Our Fellows are a diverse group of leaders actively shaping Africa's future through impactful initiatives.",
    champions:
      "Our Champions are influential supporters making significant contributions to our mission and community.",
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[rgb(1,189,204)] to-[#0d6163] text-white w-full relative">
      <div className="max-w-7xl mx-auto px-8 space-y-8">
        
        {/* Title */}
        <h2 className="text-5xl font-extrabold tracking-tighter text-center text-[#f6911e] drop-shadow-md mb-8">
          Fellows and Champions
        </h2>

        {/* Tabs */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setActiveTab("fellows")}
            className={`flex items-center px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 space-x-2 ${
              activeTab === "fellows"
                ? "bg-white text-[rgb(1,189,204)] shadow-lg scale-105"
                : "text-white hover:bg-white hover:text-[rgb(1,189,204)] hover:shadow-lg"
            }`}
          >
            <FaUsers size={20} />
            <span>Our Fellows</span>
          </button>
          <button
            onClick={() => setActiveTab("champions")}
            className={`flex items-center px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 space-x-2 ${
              activeTab === "champions"
                ? "bg-white text-[rgb(1,189,204)] shadow-lg scale-105"
                : "text-white hover:bg-white hover:text-[rgb(1,189,204)] hover:shadow-lg"
            }`}
          >
            <FaAward size={20} />
            <span>Our Champions</span>
          </button>
        </div>

        {/* Description */}
        <p className="text-lg text-center max-w-4xl mx-auto text-[#f0f0f0] leading-relaxed">
          {descriptions[activeTab]}
        </p>

        {/* Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles[activeTab].slice(0, 4).map((person, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white text-[rgb(1,189,204)] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
            >
              <img
                src={person.photo}
                alt={person.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-2xl font-bold">{person.name}</h3>
              <p className="text-md text-[#545454]">{person.title}</p>
              <div className="flex justify-center space-x-3 mt-3">
                {person.socials.twitter && (
                  <a href={person.socials.twitter} aria-label="Twitter" className="hover:text-[rgb(1,189,204)]">
                    <FaTwitter />
                  </a>
                )}
                {person.socials.linkedin && (
                  <a href={person.socials.linkedin} aria-label="LinkedIn" className="hover:text-[rgb(1,189,204)]">
                    <FaLinkedinIn />
                  </a>
                )}
                {person.socials.facebook && (
                  <a href={person.socials.facebook} aria-label="Facebook" className="hover:text-[rgb(1,189,204)]">
                    <FaFacebookF />
                  </a>
                )}
                {person.socials.instagram && (
                  <a href={person.socials.instagram} aria-label="Instagram" className="hover:text-[rgb(1,189,204)]">
                    <FaInstagram />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="flex justify-end mt-8">
          <a
            href={`/${activeTab === "fellows" ? "fellows" : "champions"}`}
            className="bg-[#f6911e] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#89272a] transition-transform duration-300 transform hover:scale-105"
          >
            View All {activeTab === "fellows" ? "Fellows" : "Champions"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurPeople;
