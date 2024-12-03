import React from 'react';
import { Play } from 'lucide-react';

export function HeroContent() {
  return (
    <div className="relative z-10 max-w-3xl">
      <h1 className="text-6xl md:text-7xl font-bold leading-tight text-gray-900">
        The fastest way to review and approve video
      </h1>
      <p className="mt-6 text-xl text-gray-600 leading-relaxed">
        Frame-accurate commenting, real-time collaboration, and seamless video review workflows for creative teams.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button className="px-8 py-4 text-lg font-semibold rounded-full text-white bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 hover:from-primary-700 hover:via-accent-700 hover:to-secondary-700 transition-all duration-300">
          Start free trial
        </button>
        <button className="px-8 py-4 text-lg font-semibold rounded-full bg-white text-gray-900 hover:text-primary-600 border border-gray-200 hover:border-primary-200 transition-all duration-300 flex items-center gap-2">
          <Play className="w-5 h-5" />
          Watch demo
        </button>
      </div>
    </div>
  );
}