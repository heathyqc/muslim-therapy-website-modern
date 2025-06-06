
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Resources from '../components/Resources';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <Hero />
      <Services />
      <About />
      <Team />
      <Testimonials />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
