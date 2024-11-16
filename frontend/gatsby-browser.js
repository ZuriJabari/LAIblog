// gatsby-browser.js
import React from 'react';
import 'core-js';
import './src/styles/global.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { MDXProvider } from "@mdx-js/react";
import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';
import HeroSection from './src/components/Herosection';
import SubscriptionForm from './src/components/SubscriptionForm';

// Import your custom components that you want to use in MDX

// Define the components you want available in MDX files
const components = {
  Navbar,
  Footer,
  SubscriptionForm,
  // Add more components here if needed
  HeroSection,
};

// Wrap the root element in Router for client-side navigation and MDXProvider for custom MDX components
export const wrapRootElement = ({ element }) => {
  return (
    <Router>
      <MDXProvider components={components}>
        {element}
      </MDXProvider>
    </Router>
  );
};

