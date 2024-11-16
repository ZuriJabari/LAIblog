import React from 'react';
import { FiMail, FiArrowRight } from 'react-icons/fi';

const SubscriptionForm = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#1e8e92] to-[#f6911e] py-16">
      <div className="max-w-6xl mx-auto px-8 text-white space-y-8">
        
        {/* Title */}
        <h2 className="text-4xl font-extrabold tracking-tight text-center">
          Stay Connected
        </h2>

        {/* Description */}
        <p className="text-lg leading-relaxed max-w-3xl mx-auto text-center">
          Join our community and get the latest updates, events, and insights from LéO Africa Institute delivered straight to your inbox. Be the first to know about our initiatives and opportunities to engage.
        </p>

        {/* Subscription Form */}
        <form 
          action="https://mailchimp.com/subscribe" 
          method="POST" 
          className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 w-full max-w-3xl mx-auto"
        >
          {/* Email Input */}
          <div className="flex items-center bg-white rounded-full shadow-md p-4 w-full md:w-auto">
            <FiMail className="text-[#1e8e92] mr-2" />
            <input 
              type="email" 
              name="email" 
              placeholder="Your email address" 
              className="text-gray-800 w-full focus:outline-none" 
              required 
            />
          </div>

          {/* Submit Button with Signature Arrow */}
          <button 
            type="submit" 
            className="group bg-[#f6911e] text-white font-semibold py-3 px-8 rounded-full transition-transform duration-300 hover:bg-white hover:text-[#f6911e] shadow-lg transform hover:scale-105 flex items-center"
          >
            Subscribe Now
            <FiArrowRight className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1 group-hover:scale-110" />
          </button>
        </form>
        
      </div>
    </section>
  );
};

export default SubscriptionForm;
