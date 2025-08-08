
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full p-4 bg-base-200/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary mr-3" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v2a1 1 0 01-1 1h-2.155a6.502 6.502 0 00-11.69 0H2a1 1 0 01-1-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
          <path d="M10 18a6.5 6.5 0 110-13 6.5 6.5 0 010 13zM8.5 10.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" />
        </svg>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          ColorSplash <span className="text-brand-secondary">AI</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
