import React from 'react';

export const TheTeam = () => {
  const team = [
    {
      name: "Awel Uwihanganye",
      position: "Founder / Director",
      bio: "20+ years experience in leadership development and organizational management.",
      image: "https://via.placeholder.com/150" // Replace with actual image
    },
    {
      name: "Jane Smith",
      position: "Program Director",
      bio: "Leading our flagship leadership programs with 15 years of experience.",
      image: "https://via.placeholder.com/150" // Replace with actual image
    },
    {
      name: "Michael Johnson",
      position: "Communications Manager",
      bio: "Driving our digital presence and community engagement initiatives.",
      image: "https://via.placeholder.com/150" // Replace with actual image
    },
    {
      name: "Sarah Williams",
      position: "Operations Manager",
      bio: "Ensuring smooth running of all institute operations and programs.",
      image: "https://via.placeholder.com/150" // Replace with actual image
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-[#2bbecb] mb-4">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 