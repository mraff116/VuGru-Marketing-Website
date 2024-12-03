import React from 'react';
import { HeroContent } from './HeroContent';
import { HeroVideo } from './HeroVideo';

export function Hero() {
  return (
    <div className="relative min-h-screen bg-white flex items-center overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-16 items-center">
        <HeroContent />
        <HeroVideo />
      </div>
    </div>
  );
}