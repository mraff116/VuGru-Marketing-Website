import React, { useState, useEffect } from 'react';
import { FileStack, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <FileStack className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Vugru</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="nav-link">Features</a>
            <a href="#workflow" className="nav-link">Workflow</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <button className="btn-primary">
              Get Started
            </button>
          </div>
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm border-b border-gray-200">
          <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Features</a>
          <a href="#workflow" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Workflow</a>
          <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Pricing</a>
          <button className="w-full mt-2 btn-primary">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}