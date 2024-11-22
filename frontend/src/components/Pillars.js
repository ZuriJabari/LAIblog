import React from "react";

const pillars = [
  {
    title: "Climate Change",
    subtitle: "Empowering Young Leaders in Climate Action",
    description:
      "Climate change poses significant risks to Africa, manifesting in disasters and energy crises. Léo Africa Institute empowers young leaders to ensure sincere climate discussions.",
    link: "/climate-change",
    bgColor: "#F89131",
  },
  {
    title: "Economic Empowerment",
    subtitle: "Driving Inclusive Growth Across the Continent",
    description:
      "The Institute fosters entrepreneurship and innovation to tackle poverty and unemployment, building a sustainable, inclusive economic future.",
    link: "/economic-empowerment",
    bgColor: "#01BDCC",
  },
  {
    title: "Cultural Heritage",
    subtitle: "Preserving and Celebrating Africa's Legacy",
    description:
      "Léo Africa supports preserving Africa's rich cultural traditions and narratives as a source of strength and identity.",
    link: "/cultural-heritage",
    bgColor: "#910810",
  },
  {
    title: "Good Governance",
    subtitle: "Promoting Accountability and Leadership",
    description:
      "The Institute nurtures leaders who uphold democratic principles and ethical governance for lasting societal change.",
    link: "/good-governance",
    bgColor: "#545456",
  },
];

const Pillars = () => {
  return (
    <section className="py-20 bg-[#545456] text-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold tracking-tight text-center text-[#F89131] mb-12">
          <span className="font-light">The Next Africa:</span>{" "}
          <span className="font-semibold">Pillars of African Renaissance</span>
        </h2>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="relative p-6 rounded-lg shadow-lg group transform transition-transform duration-300 hover:scale-105"
              style={{ backgroundColor: pillar.bgColor }}
            >
              {/* Pillar Title */}
              <h3 className="text-2xl font-bold mb-2">{pillar.title}</h3>
              <hr className="border-t-2 border-white opacity-40 my-2" />
              {/* Subtitle */}
              <p className="text-lg font-medium italic mb-4">{pillar.subtitle}</p>
              {/* Description */}
              <p className="text-base leading-relaxed mb-5 text-[#F0F0F0]">
                {pillar.description}
              </p>
              {/* Learn More Button */}
              <a
                href={pillar.link}
                className="inline-block mt-auto text-[#F89131] bg-white py-2 px-5 rounded-full font-semibold transition-transform duration-300 transform group-hover:-translate-y-1 group-hover:scale-105"
              >
                Learn more...
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
