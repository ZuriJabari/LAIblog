import React from "react";
import Layout from "../components/Layout";
import eventHeroImage from "../assets/images/hero2.jpg"; // Replace with a relevant hero image
import albumCover1 from "../assets/images/future.jpg"; // Replace with actual album cover images
import albumCover2 from "../assets/images/hero.jpg";
import albumCover3 from "../assets/images/hero3.jpg";
import upcomingEvent1 from "../assets/images/future.jpg"; // Replace with upcoming event cover
import upcomingEvent2 from "../assets/images/future1.jpg";


const EventsAndGatherings = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Leaders Gathering 2024",
      description: "Join influential leaders in shaping Africa’s future.",
      image: upcomingEvent1,
      date: "November 14–16, 2024",
      location: "Sheraton Kampala Hotel, Uganda",
    },
    {
      id: 2,
      title: "YELP Kickoff 2024",
      description: "Empowering young emerging leaders for impactful change.",
      image: upcomingEvent2,
      date: "March 10, 2024",
      location: "Kigali Convention Center, Rwanda",
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Annual Leaders Gathering 2023",
      description: "Highlights from the ALG 2023 event, capturing key moments and discussions.",
      image: albumCover1,
      link: "https://www.flickr.com/photos/africaforum/albums/72177720304155533",
    },
    {
      id: 2,
      title: "YELP Grand Finale 2022",
      description: "A celebration of young emerging leaders at the YELP 2022 Grand Finale.",
      image: albumCover2,
      link: "https://www.flickr.com/photos/africaforum/albums/72177720304156234",
    },
    {
      id: 3,
      title: "Women's Leadership Forum 2021",
      description: "Empowering women leaders during the 2021 Women’s Leadership Forum.",
      image: albumCover3,
      link: "https://www.flickr.com/photos/africaforum/albums/72177720304157894",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${eventHeroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-4">
            Events & Gatherings
          </h1>
          <p className="text-xl sm:text-2xl max-w-4xl">
            Join us in celebrating impactful discussions, collaborations, and
            milestones from our past and upcoming events.
          </p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="container mx-auto px-6 lg:px-20 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Upcoming Events</h2>
          <p className="text-lg text-gray-600 mt-4">
            Don’t miss out on our upcoming gatherings that shape the future of
            leadership and collaboration.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden flex-1 transition-transform hover:scale-105"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
                <p className="text-sm text-gray-500">
                  {event.date} - {event.location}
                </p>
                <button className="px-6 py-2 bg-[#1e8e92] text-white font-semibold rounded-full hover:bg-[#f6941e] transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Past Events</h2>
            <p className="text-lg text-gray-600 mt-4">
              Relive the moments from our impactful events through curated
              albums and highlights.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105"
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
                  <p className="text-gray-600">{event.description}</p>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1e8e92] font-semibold hover:underline mt-4 block"
                  >
                    View Album →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EventsAndGatherings;
