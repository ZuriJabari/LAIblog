import * as React from "react"
import '../Styles/global.css'; // Import global CSS here
import Layout from '../components/Layout'
import HeroSection from "../components/Herosection";
import Objectives from "../components/Objectives";
import Insights from '../components/Insights'; // Import Insights here
import UpcomingEvents from "../components/UpcomingEvents";
import PartnerWithUs from "../components/PartnerWithUs";
import Initiatives from "../components/Initiatives";
import OurPeople from "../components/OurPeople";
import SubscriptionForm from "../components/SubscriptionForm";




export default function Home() {
  return (
    <Layout>
       <main>
      {/* Hero Section */}
      <HeroSection />
      <div className='prefooter-gray'></div>
      {/* Objectives Section in the Content Area */}
      <Insights/>
      <Initiatives />
    
    
      <UpcomingEvents/>
      <OurPeople/>
      <PartnerWithUs/>
      <SubscriptionForm/>
    </main>
    </Layout>
  )
}
