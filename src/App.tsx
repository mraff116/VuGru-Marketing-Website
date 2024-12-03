import React from 'react';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/hero/Hero';
import { Workflow } from './components/workflow/Workflow';
import { Features } from './components/features/Features';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Workflow />
      <Testimonials />
      <Pricing />
      <CTA />
    </div>
  );
}

export default App;