import React, { useState } from 'react';
import Layout from '../components/Layout';
import aboutALG from '../assets/images/about-alg-2.jpg';
import aboutImage from '../assets/images/hero-about1.jpg';
import Objectives from '../components/Objectives';
import { OurHistory } from '../components/about/OurHistory';
import { MissionVision } from '../components/about/MissionVision';
import { TheTeam } from '../components/about/TheTeam';
import { OurPartners } from '../components/about/OurPartners';
import { AwardsAccolades } from '../components/about/AwardsAccolades';
import { FAQ } from '../components/about/FAQ';
import SubscriptionForm from '../components/SubscriptionForm'

const AboutALG = () => {
  const [formData, setFormData] = useState({
    email: '',
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // AJAX form submission using fetch
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mailchimp URL for AJAX submission
    const url = 'https://leoafricainstitute.us3.list-manage.com/subscribe/post-json?u=cecb072ded342121a9e74ffb0&id=82be85988f&c=?';

    // Prepare form data as a query string
    const formDataString = new URLSearchParams({
      EMAIL: formData.email,  // Mailchimp expects this field name for email
    }).toString();

    // Send data using fetch
    try {
      const response = await fetch(`${url}&${formDataString}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'omit',
      });

      // Parse the JSONP response by extracting the JSON payload
      const textResponse = await response.text();
      const jsonResponse = JSON.parse(textResponse.substring(1, textResponse.length - 1));

      if (jsonResponse.result === 'success') {
        setStatusMessage('Thank you for subscribing! Check your inbox to confirm your subscription.');
      } else {
        setStatusMessage('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatusMessage('There was an error with the submission. Please try again later.');
    }

    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${aboutImage})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">About LéO Africa Institute</h1>
          <p className="text-lg sm:text-xl max-w-2xl">
            Bringing together networks of leaders for conversations, networking, and deliberation to address today's challenges.
          </p>
        </div>
      </section>
      <div className='prefooter'></div>

      <Objectives />

      <OurHistory />
      <MissionVision />
      <TheTeam />
      <OurPartners />
      <AwardsAccolades />
      <FAQ />
      <SubscriptionForm/>
    </Layout>
  );
};

export default AboutALG;
