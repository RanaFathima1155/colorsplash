
import React, { useState, useCallback } from 'react';
import { Color } from './types';
import { generateColors } from './services/geminiService';
import Header from './components/Header';
import ColorInputForm from './components/ColorInputForm';
import ColorPalette from './components/ColorPalette';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorDisplay from './components/ErrorDisplay';
import Footer from './components/Footer';
import Welcome from './components/Welcome';

function App() {
  const [colors, setColors] = useState<Color[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async (prompt: string) => {
    setIsLoading(true);
    setError(null);
    setColors(null);
    try {
      const generatedColors = await generateColors(prompt);
      setColors(generatedColors);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(`Failed to generate palette. ${errorMessage}`);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-white bg-base-100">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl mx-auto">
          <ColorInputForm onGenerate={handleGenerate} isLoading={isLoading} />
          
          <div className="mt-8">
            {isLoading && <LoadingSpinner />}
            {error && <ErrorDisplay message={error} />}
            {colors && <ColorPalette colors={colors} />}
            {!isLoading && !error && !colors && <Welcome onExampleClick={handleGenerate} />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
