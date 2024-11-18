import React from "react";
import Layout from "../components/Layout";
import eventHeroImage from "../assets/images/hero.jpg"; // Ensure this image exists
import albumCover1 from "../assets/images/about-alg-2.jpg"; // Ensure this image exists
import albumCover2 from "../assets/images/editions.jpg"; // Ensure this image exists
import albumCover3 from "../assets/images/hero2.jpg"; // Ensure this image exists

const EventsAndGatherings = () => {
  const pastEvents = [
    {
      id: 1,
      title: "Annual Leaders Gathering 2023",
      description: "Highlights from the ALG 2023 event, capturing key moments and discussions.",
      image: albumCover1 || "https://via.placeholder.com/300", // Fallback to placeholder
      link: "https://www.flickr.com/photos/africaforum/albums/72177720304155533",
    },
    {
      id: 2,
      title: "YELP Grand Finale 2022",
      description: "A celebration of young emerging leaders at the YELP 2022 Grand Finale.",
      image: albumCover2 || "https://via.placeholder.com/300",
      link: "https://www.flickr.com/photos/africaforum/albums/72177720304156234",
    },
    {
      id: 3,
      title: "Women's Leadership Forum 2021",
      description: "Empowering women leaders during the 2021 Women’s Leadership Forum.",
      image: albumCover3 || "https://via.placeholder.com/300",
      link: "https://www.flickr.com/photos/africaforum/albums/72177720304157894",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${eventHeroImage || "https://via.placeholder.com/1200x400"})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
            Events & Gatherings
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl">
            Explore the impactful events and gatherings organized by LéO Africa
            Institute. Click to relive the highlights of each event.
          </p>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="container mx-auto px-6 lg:px-20 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Past Events
        </h2>
        <p className="text-lg text-gray-600 mb-10 text-center">
          Relive the moments from our past events and gatherings through these
          curated albums.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
              </a>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1e8e92] font-semibold hover:underline"
                >
                  View Album →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default EventsAndGatherings;
