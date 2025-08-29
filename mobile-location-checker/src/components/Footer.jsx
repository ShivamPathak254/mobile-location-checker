import React from 'react';
import { MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <MapPin className="w-5 h-5" />
          <span className="text-xl font-bold">Mobile Location Checker</span>
        </div>
        <p className="text-gray-400 mb-4">Built with React.js and modern web technologies</p>
      </div>
    </footer>
  );
};

export default Footer;
