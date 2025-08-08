import React from 'react';

interface WelcomeProps {
    onExampleClick: (prompt: string) => void;
}

const examplePrompts = [
    "Vibrant autumn forest",
    "Serene beach at sunrise",
    "Cozy cabin in a blizzard",
    "Gothic cathedral stained glass",
    "Bustling Tokyo street at night"
];

const Welcome: React.FC<WelcomeProps> = ({ onExampleClick }) => {
  return (
    <div className="text-center p-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-white mb-2">Welcome to ColorSplash AI</h2>
      <p className="text-gray-400 mb-6">Start by describing a scene, or try one of these examples:</p>
      <div className="flex flex-wrap justify-center gap-3">
        {examplePrompts.map((prompt) => (
          <button
            key={prompt}
            onClick={() => onExampleClick(prompt)}
            className="px-4 py-2 bg-base-200 text-gray-300 rounded-full hover:bg-base-300 hover:text-white transition-colors duration-200"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Welcome;