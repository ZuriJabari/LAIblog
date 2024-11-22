import React from "react";
import { FiArrowRight, FiYoutube, FiCamera } from "react-icons/fi";

const upcomingEvent = {
  title: "Annual Leaders Gathering",
  date: "14th - 16th November 2024, All Day",
  location: "Sheraton Kampala Hotel, Kampala, Uganda",
  description:
    "The Annual Leaders Gathering is LéO Africa Institute’s premier event, bringing together visionary leaders for discussions, networking, and collaborations aimed at reshaping Africa’s future.",
  image: "/path/to/alg-image.jpg",
};

const otherEvents = [
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
    title: "Leadership Conversation with Usama Mukwaya",
    date: "August 12, 2024",
    location: "Kigali, Rwanda",
    theme: "Innovative Leadership in Africa",
    image: "/path/to/image3.jpg",
    flickr: "https://flickr.com/link",
    youtube: "https://youtube.com/link",
  },
];

const Events = () => {
  return (
    <section className="py-20 bg-[#f5f5f5] text-[#762e2f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 space-y-12 relative">
        {/* Main Title */}
        <h2 className="text-5xl font-extrabold tracking-tight text-[#762e2f] drop-shadow-md">
          Our Events
        </h2>

        {/* Highlighted Flagship Event */}
        <div className="flex flex-col lg:flex-row items-center bg-white shadow-xl rounded-lg overflow-hidden p-6 lg:p-12">
          <div className="lg:w-1/2">
            <img
              src={upcomingEvent.image}
              alt={upcomingEvent.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12 text-left space-y-6">
            <h3 className="text-3xl font-extrabold text-[#762e2f] leading-tight">
              {upcomingEvent.title}
            </h3>
            <p className="text-lg leading-relaxed text-[#545454]">
              {upcomingEvent.description}
            </p>
            <p className="font-semibold text-[#762e2f]">
              Date & Time:{" "}
              <span className="text-[#545454] font-normal">
                {upcomingEvent.date}
              </span>
            </p>
            <p className="font-semibold text-[#762e2f]">
              Venue:{" "}
              <span className="text-[#545454] font-normal">
                {upcomingEvent.location}
              </span>
            </p>
            <a
              href="/register"
              className="inline-flex items-center bg-[#762e2f] text-white py-3 px-8 rounded-full font-semibold shadow-md transition-transform duration-300 hover:bg-[#f6911e] hover:scale-105"
            >
              Reserve Your Spot
              <FiArrowRight className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1 group-hover:scale-110" />
            </a>
          </div>
        </div>

        {/* Other Events */}
        <div className="space-y-8">
          <h3 className="text-4xl font-extrabold tracking-tight text-[#762e2f]">
            Other Events
          </h3>
          <div className="grid gap-8 lg:grid-cols-3">
            {otherEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-left">
                  <h4 className="text-2xl font-bold mb-2 text-[#762e2f]">
                    {event.title}
                  </h4>
                  <p className="text-sm font-semibold text-[#f6911e]">
                    {event.date} | {event.location}
                  </p>
                  <p className="text-md mt-2 leading-relaxed text-[#545454]">
                    Theme: <span className="font-semibold">{event.theme}</span>
                  </p>
                  <div className="mt-4 flex space-x-4">
                    <a
                      href={event.flickr}
                      className="flex items-center text-[#762e2f] hover:text-[#f6911e]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiCamera className="mr-1" /> Flickr Album
                    </a>
                    <a
                      href={event.youtube}
                      className="flex items-center text-[#762e2f] hover:text-[#f6911e]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiYoutube className="mr-1" /> Watch on YouTube
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-8 left-8 bg-[#762e2f] h-32 w-32 rounded-full opacity-20"></div>
      <div className="absolute -bottom-10 right-8 bg-[#762e2f] h-40 w-40 rounded-full opacity-20"></div>
    </section>
  );
};

export default Events;
