import React from 'react';
import { Link } from 'gatsby';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const OurHistory = () => {
  return (
    <div className="our-history">
      <Navbar />
      <div className="bg-gray-800 text-white py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our History</h1>
          <p className="text-lg">
            Founded in 2012, LéO Africa Institute began as a vision to create a platform for emerging leaders across Africa. What started as small gatherings of thought leaders has grown into a continental movement for change.
          </p>
          <nav className="breadcrumb mt-4">
            <Link to="/" className="text-[#2bbecb] hover:underline">Home</Link> / 
            <Link to="/about" className="text-[#2bbecb] hover:underline">About</Link> / 
            <span>Our History</span>
          </nav>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our journey began with the inaugural Young and Emerging Leaders Project (YELP), which brought together 20 young leaders from East Africa. Today, we've expanded to include multiple programs and initiatives that reach across the continent.
        </p>
        <div className="timeline space-y-8">
          <div className="timeline-item flex items-start space-x-4">
            <div className="timeline-date text-2xl font-bold text-[#2bbecb] mb-2">2012</div>
            <div className="timeline-content">
              <h3 className="text-xl font-semibold mb-1">Foundation of LéO Africa Institute</h3>
              <p className="text-lg text-gray-700">LéO Africa Institute was founded with the mission to create a platform for emerging leaders across Africa.</p>
            </div>
          </div>
          <div className="timeline-item flex items-start space-x-4">
            <div className="timeline-date text-2xl font-bold text-[#2bbecb] mb-2">2015</div>
            <div className="timeline-content">
              <h3 className="text-xl font-semibold mb-1">Launch of the Annual Leaders Gathering</h3>
              <p className="text-lg text-gray-700">The Annual Leaders Gathering was launched to bring together thought leaders and emerging leaders from across the continent.</p>
            </div>
          </div>
          <div className="timeline-item flex items-start space-x-4">
            <div className="timeline-date text-2xl font-bold text-[#2bbecb] mb-2">2018</div>
            <div className="timeline-content">
              <h3 className="text-xl font-semibold mb-1">Introduction of Huduma Fellowship</h3>
              <p className="text-lg text-gray-700">The Huduma Fellowship was introduced to support young leaders in their journey towards impactful leadership.</p>
            </div>
          </div>
          <div className="timeline-item flex items-start space-x-4">
            <div className="timeline-date text-2xl font-bold text-[#2bbecb] mb-2">2020</div>
            <div className="timeline-content">
              <h3 className="text-xl font-semibold mb-1">Launch of LeO Africa Review</h3>
              <p className="text-lg text-gray-700">LeO Africa Review was launched to provide a platform for thought-provoking articles and insights from leaders across Africa.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurHistory;