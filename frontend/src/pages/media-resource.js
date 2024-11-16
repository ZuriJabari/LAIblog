import React, { useState } from 'react';
import Layout from '../components/Layout'; // Importing the constant Layout
import { FaFileAlt, FaVideo, FaCameraRetro, FaDownload, FaTimes, FaChevronRight, FaChevronLeft } from 'react-icons/fa'; // Resource icons
import heroImage from '../assets/images/media-hero.jpg'; // Updated hero image path

const MediaResource = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    "https://via.placeholder.com/300x200?text=Photo+1",
    "https://via.placeholder.com/300x200?text=Photo+2",
    "https://via.placeholder.com/300x200?text=Photo+3",
    "https://via.placeholder.com/300x200?text=Photo+4",
    "https://via.placeholder.com/300x200?text=Photo+5",
    "https://via.placeholder.com/300x200?text=Photo+6"
  ];

  const openPhoto = (index) => {
    setSelectedPhoto(index);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    setSelectedPhoto((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevPhoto = () => {
    setSelectedPhoto((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[65vh]" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">ALG Media & Resource Centre</h1>
          <p className="text-lg sm:text-xl max-w-3xl text-center">
            Access a wide range of resources, including publications, videos, and photos from past Annual Leaders Gatherings.
          </p>
        </div>
      </section>
      <div className='prefooter'></div>
      {/* Media Resource Section */}
      <section className="space-y-16">
        
        {/* Publications Section */}
        <div className="bg-gray-100 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-6">
              <FaFileAlt className="text-[#f6941e] w-8 h-8 mr-4" />
              <h2 className="text-3xl font-bold">Publications</h2>
            </div>
            <div className="space-y-8">
              {/* Publication Item */}
              <div className="flex items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src="https://via.placeholder.com/150" alt="Publication 1" className="w-32 h-48 object-cover rounded-lg shadow-md mr-6" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Publication Title 1</h3>
                  <p className="text-gray-700 mb-4">A detailed insight into leadership strategies in Africa, this publication delves into key aspects of governance and institution building.</p>
                  <a href="/path/to/publication.pdf" download className="text-[#f6941e] font-semibold flex items-center space-x-2 hover:underline">
                    <FaDownload /> <span>Download Publication</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src="https://via.placeholder.com/150" alt="Publication 2" className="w-32 h-48 object-cover rounded-lg shadow-md mr-6" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Publication Title 2</h3>
                  <p className="text-gray-700 mb-4">An in-depth look into African economic growth drivers and how leadership can play a transformative role.</p>
                  <a href="/path/to/publication.pdf" download className="text-[#f6941e] font-semibold flex items-center space-x-2 hover:underline">
                    <FaDownload /> <span>Download Publication</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Videos Section - Side by Side */}
        <div className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-6">
              <FaVideo className="text-[#f6941e] w-8 h-8 mr-4" />
              <h2 className="text-3xl font-bold">Videos</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/gPnm3UIY1DY?si=NSmKOEYW1C9eOWNc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="group relative">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/qEyf5X0WcgY?si=Ou30XSqP9h5KPVpJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Photos Section - Gallery with clickable images */}
        <div className="bg-gray-100 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-6">
              <FaCameraRetro className="text-[#f6941e] w-8 h-8 mr-4" />
              <h2 className="text-3xl font-bold">Photos</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map((photo, index) => (
                <div key={index} className="group relative">
                  <img
                    src={photo}
                    alt={`Photo ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                    onClick={() => openPhoto(index)}
                  />
                </div>
              ))}
            </div>

            {/* View More Button */}
            <div className="mt-8 flex justify-center">
              <a
                href="https://www.flickr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f6941e] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#0a4445] transition-all"
              >
                View More on Flickr
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Modal for Enlarged View */}
      {selectedPhoto !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
          <button className="absolute top-8 right-8 text-white text-4xl" onClick={closePhoto}>
            <FaTimes />
          </button>
          <button className="absolute left-8 text-white text-4xl" onClick={prevPhoto}>
            <FaChevronLeft />
          </button>
          <button className="absolute right-8 text-white text-4xl" onClick={nextPhoto}>
            <FaChevronRight />
          </button>
          <img
            src={photos[selectedPhoto]}
            alt={`Photo ${selectedPhoto + 1}`}
            className="w-3/4 h-auto max-w-4xl max-h-[80vh] object-contain"
          />
        </div>
      )}
    </Layout>
  );
};

export default MediaResource;
