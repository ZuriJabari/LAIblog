import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import heroImage1 from '../assets/images/hero.jpg';
import heroImage2 from '../assets/images/hero2.jpg';
import heroImage3 from '../assets/images/hero3.jpg';
import heroImage4 from '../assets/images/hero4.jpg';

const slides = [
  { 
    image: heroImage1, 
    title: "The 2024 Annual Leaders Gathering", 
    date: "14th & 16th Nov 2024 | Sheraton Kampala Hotel",
    description: "The Annual Leaders Gathering is LéO Africa Institute’s flagship event, uniting our growing network of leaders for impactful conversations, networking, and essential dialogues to address the challenges of our times.",
    h3: "Our Next Major Event",
    ctaText: "Reserve Your Seat",
    ctaLink: "/register"
  },
  { 
    image: heroImage2, 
    title: "We're Empowering Africa's Future Leaders", 
    description: "The LéO Africa Institute empowers young African leaders to envision and create a sustainable, inclusive future through transformative programs, networking, and impactful dialogues. Our institute focuses on leadership development, ethical entrepreneurship, and thought leadership, fostering a dedicated community of change-makers committed to reshaping Africa's narrative. Through our collaborative and innovative approach, we are advancing Africa's next generation of transformative leaders.",
    h3: "Who we are",
    ctaText: "Learn More",
    ctaLink: "/about"
  },
  { 
    image: heroImage3, 
    title: "The Huduma Fellowship", 
    description: "Huduma is an initiative by the LéO Africa Institute and Konrad Adenauer Stiftung to provide thought leadership training for emerging civic & public sector champions in Uganda. Every year, the programme enrolls 15 outstanding champions who already work in civic & public service or aspire to do so.",
    h3: "Our Interventions",
    ctaText: "Learn More",
    ctaLink: "https://huduma.leoafricainstitute.org/about/"
  },
  { 
    image: heroImage4, 
    title: "Young and Emerging Leaders Project", 
    description: "The Young and Emerging Leaders Project (YELP) is an initiative of the LéO Africa Institute that annually inducts outstanding thought leaders into a fellowship program designed to train and orient values of self-advancement, integrity, social responsibility, and socioeconomic transformation.",
    h3: "Our Interventions",
    ctaText: "Learn More",
    ctaLink: "https://yelp.leoafricainstitute.org/"
  }
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeEffect, setFadeEffect] = useState(true);

  const nextSlide = () => {
    setFadeEffect(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setFadeEffect(true);
    }, 200);
  };

  const prevSlide = () => {
    setFadeEffect(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
      setFadeEffect(true);
    }, 200);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className={`relative h-screen bg-cover bg-center flex items-center overflow-hidden transition-opacity duration-500 ${fadeEffect ? 'opacity-100' : 'opacity-0'}`}
      style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
    >
      {/* Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Main Content Positioned 20% Down */}
      <div className="relative z-10 flex flex-col items-start text-white max-w-4xl mx-auto space-y-6 mt-[20vh]" style={{ marginLeft: '13%' }}>
        
        {/* H3 Tag */}
        <h3 className='text-xs font-semibold text-[#fff] tracking-wider uppercase cursor-default no-margin'>
          {slides[currentIndex].h3}
        </h3>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-wider drop-shadow-lg uppercase text-left">
          {slides[currentIndex].title}
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl leading-relaxed opacity-90 tracking-wide text-left">
          {slides[currentIndex].description}
        </p>

        {/* Event Date and Location (Optional) */}
        {slides[currentIndex].date && (
          <p className="text-sm font-semibold bg-[#1d8f92] py-2 px-6 rounded-md tracking-wider uppercase shadow-md">
            {slides[currentIndex].date}
          </p>
        )}

        {/* Call-to-Action Button */}
        <a 
          href={slides[currentIndex].ctaLink} 
          className="bg-[#f6941e] text-white hover:bg-white hover:text-[#f6941e] py-3 px-10 rounded-full transition-transform duration-300 hover:scale-110 shadow-lg font-semibold uppercase tracking-wider"
        >
          {slides[currentIndex].ctaText}
        </a>
      </div>

      {/* Navigation Arrows */}
      <button 
        className="absolute inset-y-0 left-0 flex items-center justify-center p-4 cursor-pointer text-white" 
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <FiArrowLeft size={24} />
      </button>
      <button 
        className="absolute inset-y-0 right-0 flex items-center justify-center p-4 cursor-pointer text-white" 
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <FiArrowRight size={24} />
      </button>
    </section>
  );
};

export default HeroSection;
