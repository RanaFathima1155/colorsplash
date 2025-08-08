import React, { useState } from 'react';

interface ColorInputFormProps {
  onGenerate: (prompt: string) => void;
  isLoading: boolean;
}

const ColorInputForm: React.FC<ColorInputFormProps> = ({ onGenerate, isLoading }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onGenerate(prompt);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      <p className="text-center text-lg text-gray-300 mb-4">
        Describe a theme or mood, and let AI create the perfect color palette.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., 'Retro cyberpunk cityscape at night'"
          className="flex-grow px-5 py-3 bg-base-200 border-2 border-base-300 rounded-full focus:ring-2 focus:ring-brand-primary focus:border-brand-primary focus:outline-none transition-all duration-300 text-white placeholder-gray-500"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !prompt.trim()}
          className="px-8 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center"
        >
          {isLoading ? (
             <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            'Generate'
          )}
        </button>
      </form>
    </div>
  );
};

export default ColorInputForm;