
import React from 'react';

interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <div className="my-8 p-4 bg-red-900/50 border border-red-700 rounded-lg text-center animate-fade-in">
      <div className="flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-red-300 font-semibold">An Error Occurred</p>
      </div>
      <p className="text-red-400 mt-2 text-sm">{message}</p>
    </div>
  );
};

export default ErrorDisplay;
