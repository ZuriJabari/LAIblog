import React, { useState } from 'react';
import { FiArrowRight, FiYoutube, FiCamera } from 'react-icons/fi';

const upcomingEvent = {
  title: "Annual Leaders Gathering",
  date: "14th - 16th November 2024, All Day",
  location: "Sheraton Kampala Hotel, Kampala, Uganda",
  description: "The Annual Leaders Gathering is LéO Africa Institute’s premier event, bringing together visionary leaders for discussions, networking, and collaborations aimed at reshaping Africa’s future.",
};

const pastEvents = [
  {
    title: "Huduma Class of 2024 Workshop One",
    date: "March 10, 2024",
    location: "Nairobi, Kenya",
    theme: "Public Service & Leadership",
    image: "/path/to/image1.jpg",
    flickr: "https://flickr.com/link",
    youtube: "https://youtube.com/link",
  },
  {
    title: "Heritage Seminar 2024",
    date: "April 20, 2024",
    location: "Kampala, Uganda",
    theme: "Preserving Africa's Heritage",
    image: "/path/to/image2.jpg",
    flickr: "https://flickr.com/link",
    youtube: "https://youtube.com/link",
  },
  {
    title: "Kwezi Tabaro Farewell Dinner",
    date: "May 15, 2024",
    location: "Kampala, Uganda",
    theme: "Honoring Leadership",
    image: "/path/to/image3.jpg",
    flickr: "https://flickr.com/link",
    youtube: "https://youtube.com/link",
  },
  {
    title: "Huduma Class of 2024 Workshop Two",
    date: "June 5, 2024",
    location: "Mombasa, Kenya",
    theme: "Transformational Leadership",
    image: "/path/to/image4.jpg",
    flickr: "https://flickr.com/link",
    youtube: "https://youtube.com/link",
  },
  {
    title: "Leadership Conversation with Usama Mukwaya",
    date: "August 12, 2024",
    location: "Kigali, Rwanda",
    theme: "Innovative Leadership in Africa",
    image: "/path/to/image5.jpg",
    flickr: "https://flickr.com/link",
    youtube: "https://youtube.com/link",
  },
  {
    title: "Annual Leaders Gathering 2023",
    date: "November 10, 2023",
    location: "Kampala, Uganda",
    theme: "Empowering Young Leaders",
    image: "/path/to/image6.jpg",
    flickr: "https://flickr.com/link",
    youtube: "https://youtube.com/link",
  },
  {
    title: "YELP Class of 2023 Graduation",
    date: "December 1, 2023",
    location: "Kampala, Uganda",
    theme: "Youth Empowerment",
    image: "/path/to/image7.jpg",
    flickr: "https://flickr.com/link",
    youtube: "https://youtube.com/link",
  },
];

const Events = () => {
  const [activeTab, setActiveTab] = useState("nextEvent");

  return (
    <section className="py-20 bg-[#f5f5f5] text-[#1e8e92] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 space-y-12">
        
        {/* Main Title */}
        <div className="flex items-baseline justify-between space-x-6">
          <h2 className="text-5xl font-extrabold tracking-tighter text-left text-[#f6911e] drop-shadow-md">
            Our Events
          </h2>
          <div className="flex space-x-4 px-4 py-2 bg-white bg-opacity-50 rounded-full shadow-lg">
            <button
              onClick={() => setActiveTab("nextEvent")}
              className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 
                ${activeTab === "nextEvent" ? 'bg-white text-[#1e8e92] shadow-lg' : 'text-[#1e8e92] hover:bg-white hover:bg-opacity-40'}`}
            >
              Our Next Event
            </button>
            <button
              onClick={() => setActiveTab("upcomingEvents")}
              className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 
                ${activeTab === "upcomingEvents" ? 'bg-white text-[#1e8e92] shadow-lg' : 'text-[#1e8e92] hover:bg-white hover:bg-opacity-40'}`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab("pastEvents")}
              className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 
                ${activeTab === "pastEvents" ? 'bg-white text-[#1e8e92] shadow-lg' : 'text-[#1e8e92] hover:bg-white hover:bg-opacity-40'}`}
            >
              Past Events
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {(activeTab === "nextEvent" || activeTab === "upcomingEvents") && (
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold tracking-tight text-[#1e8e92]">
              {activeTab === "nextEvent" ? "Up Next..." : "Upcoming Events"}
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start bg-white text-[#1e8e92] shadow-xl rounded-lg overflow-hidden p-8 md:p-12 space-y-8 md:space-y-0 md:space-x-10">
              <div className="flex flex-col items-center justify-center bg-[#f0f0f0] text-[#1e8e92] p-8 rounded-lg shadow-lg">
                <span className="text-6xl font-bold">14</span>
                <div className="w-full h-[1px] bg-[#1e8e92] opacity-40 my-2"></div>
                <span className="text-xl font-semibold">NOV</span>
                <span className="text-md mt-1">2024</span>
              </div>
              <div className="text-left space-y-4">
                <h3 className="text-3xl font-extrabold leading-tight">{upcomingEvent.title}</h3>
                <p className="text-lg leading-relaxed text-[#545454]">{upcomingEvent.description}</p>
                <p className="font-semibold text-[#1e8e92]">Date & Time: <span className="text-[#545454] font-normal">{upcomingEvent.date}</span></p>
                <p className="font-semibold text-[#1e8e92]">Venue: <span className="text-[#545454] font-normal">{upcomingEvent.location}</span></p>
                <a href="/register" className="group inline-flex items-center bg-[#1e8e92] text-white py-3 px-8 rounded-full font-semibold shadow-md transition-transform duration-300 transform hover:bg-[#f6911e] hover:scale-105 mt-4">
                  Reserve Your Spot
                  <FiArrowRight className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1 group-hover:scale-110" />
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === "pastEvents" && (
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold tracking-tight text-[#1e8e92]">Past Events</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {pastEvents.map((event, index) => (
                <div key={index} className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                  <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                  <div className="p-6 text-[#1e8e92]">
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-sm font-semibold text-[#f6911e]">{event.date} | {event.location}</p>
                    <p className="text-md leading-relaxed text-[#545454] mt-2">Theme: <span className="font-semibold">{event.theme}</span></p>
                    <div className="mt-4 flex space-x-4">
                      <a href={event.flickr} className="flex items-center text-[#1e8e92] hover:text-[#f6911e]" target="_blank" rel="noopener noreferrer">
                        <FiCamera className="mr-1" /> Flickr Album
                      </a>
                      <a href={event.youtube} className="flex items-center text-[#1e8e92] hover:text-[#f6911e]" target="_blank" rel="noopener noreferrer">
                        <FiYoutube className="mr-1" /> Watch on YouTube
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Decorative Circles */}
      <div className="absolute -top-8 -left-8 bg-[#f6911e] h-32 w-32 rounded-full opacity-20"></div>
      <div className="absolute -bottom-10 -right-10 bg-[#89272a] h-40 w-40 rounded-full opacity-20"></div>
    </section>
  );
};

export default Events;
