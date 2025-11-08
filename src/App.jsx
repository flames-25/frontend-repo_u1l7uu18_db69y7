import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturedClasses from './components/FeaturedClasses';
import PopularClasses from './components/PopularClasses';
import AccessSteps from './components/AccessSteps';
import TestimonialsCTA from './components/TestimonialsCTA';
import SiteFooter from './components/SiteFooter';

function App() {
  return (
    <div className="min-h-screen bg-[#F7F8FF] text-[#1C1D1F]">
      <HeroSection />
      <FeaturedClasses />
      <PopularClasses />
      <AccessSteps />
      <TestimonialsCTA />
      <SiteFooter />
    </div>
  );
}

export default App;
