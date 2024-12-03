import React from 'react';

export function HeroVideo() {
  return (
    <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://assets.frame.io/marketing/hero-reel-compressed.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40" />
    </div>
  );
}