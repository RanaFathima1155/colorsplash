import React, { useState } from 'react';
import { Color } from '../types';

interface ColorPaletteProps {
  colors: Color[];
}

interface ColorSwatchProps {
  color: Color;
  index: number;
}

// Sub-component for individual color swatches to manage its own state
const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, index }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div 
      className="flex-1 min-h-[300px] flex flex-col justify-end p-6 transition-all duration-500 ease-in-out group"
      style={{ backgroundColor: color.hex, animation: `slideIn 0.5s ease-out ${index * 0.1}s both` }}
    >
      <div 
        className="text-center bg-black/40 backdrop-blur-sm p-3 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0"
      >
        <p className="font-bold text-white text-lg">{color.name}</p>
        <button
          onClick={() => handleCopy(color.hex)}
          className="mt-1 text-sm font-mono text-gray-200 bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition-colors"
        >
          {copied ? 'Copied!' : color.hex}
        </button>
      </div>
    </div>
  );
};


const ColorPalette: React.FC<ColorPaletteProps> = ({ colors }) => {
  return (
    <div className="mt-12 w-full">
      <div className="flex flex-col md:flex-row overflow-hidden rounded-xl shadow-2xl shadow-black/30 w-full animate-fade-in">
        {colors.map((color, index) => (
          <ColorSwatch key={color.hex + index} color={color} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;