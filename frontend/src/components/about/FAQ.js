import React, { useState } from 'react';

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is LéO Africa Institute?",
      answer: "LéO Africa Institute is a pan-African organization dedicated to developing transformative leaders across the continent through various leadership development programs, knowledge sharing initiatives, and networking opportunities."
    },
    {
      question: "How can I join your programs?",
      answer: "Our programs have specific application periods throughout the year. Visit our Programs page or sign up for our newsletter to stay informed about upcoming opportunities."
    },
    {
      question: "Do you offer scholarships?",
      answer: "Yes, we offer partial and full scholarships for selected programs based on merit and need. Each program has its own scholarship criteria and application process."
    },
    {
      question: "Where do your programs take place?",
      answer: "Our programs take place across various locations in Africa, with some offerings available virtually. Specific program locations are announced during the application period."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <button
                className="w-full px-8 py-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <span className="text-[#2bbecb] text-xl">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              <div className={`px-8 py-6 bg-gray-50 transition-all duration-200 ${activeIndex === index ? 'block' : 'hidden'}`}>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 