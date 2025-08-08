import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 animate-fade-in">
       <div className="relative flex justify-center items-center h-24 w-24">
            <div className="absolute h-16 w-16 animate-spin rounded-full border-4 border-solid border-brand-primary border-t-transparent"></div>
            <div className="absolute h-8 w-8 animate-spin rounded-full border-2 border-solid border-brand-secondary border-t-transparent [animation-direction:reverse]"></div>
        </div>
      <p className="mt-4 text-lg text-gray-300">Brewing your colors...</p>
    </div>
  );
};

export default LoadingSpinner;