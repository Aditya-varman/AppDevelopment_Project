import React from 'react';
import Map from './Map';
import Steps from './Steps';
import CaresuranceHero from './CaresuranceHero';
import Testimonials from './Testimonials';
import CTA from './CTA';

const About = () => {
  return (
    <div className="about-container">
      <CaresuranceHero />
      <Steps />
      <Testimonials />
      <Map />
      <CTA />
    </div>
  );
}

export default About;
