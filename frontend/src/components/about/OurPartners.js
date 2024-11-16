import React from 'react';

export const OurPartners = () => {
  const partners = [
    {
      name: "Partner Organization 1",
      logo: "https://via.placeholder.com/200x100", // Replace with actual logo
      description: "Strategic partner in leadership development"
    },
    {
      name: "Partner Organization 2",
      logo: "https://via.placeholder.com/200x100", // Replace with actual logo
      description: "Supporting youth initiatives across Africa"
    },
    {
      name: "Partner Organization 3",
      logo: "https://via.placeholder.com/200x100", // Replace with actual logo
      description: "Collaboration on research and policy"
    },
    {
      name: "Partner Organization 4",
      logo: "https://via.placeholder.com/200x100", // Replace with actual logo
      description: "Technical support and innovation partner"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img src={partner.logo} alt={partner.name} className="w-full h-20 object-contain mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
              <p className="text-gray-600">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 