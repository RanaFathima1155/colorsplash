
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-4 mt-8">
      <div className="text-center text-gray-500 text-sm">
        <p>Powered by <a href="https://deepmind.google/technologies/gemini/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-400 hover:text-brand-primary transition">Google Gemini</a>.</p>
        <p>Designed and built for creative exploration.</p>
      </div>
    </footer>
  );
};

export default Footer;
