import { GoogleGenAI, Type } from "@google/genai";
import { Color } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const paletteSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      hex: {
        type: Type.STRING,
        description: 'The hexadecimal color code, e.g., "#RRGGBB".',
      },
      name: {
        type: Type.STRING,
        description: 'A creative and descriptive name for the color.',
      },
    },
    required: ["hex", "name"],
  },
};

export const generateColors = async (prompt: string): Promise<Color[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Generate a vibrant and cohesive color palette of 5 colors based on the following theme: "${prompt}". The colors should work well together in a user interface design.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: paletteSchema,
      },
    });
    
    const responseText = response.text.trim();
    
    // Sometimes the model might wrap the JSON in markdown, so we clean it.
    const cleanedJsonString = responseText.replace(/^```json\s*|```\s*$/g, '');

    const parsedData = JSON.parse(cleanedJsonString);
    
    if (!Array.isArray(parsedData) || parsedData.some(item => !item.hex || !item.name)) {
        throw new Error("Invalid data structure received from API.");
    }
    
    return parsedData as Color[];

  } catch (error) {
    console.error("Error generating colors from Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Gemini API Error: ${error.message}`);
    }
    throw new Error("An unexpected error occurred while communicating with the Gemini API.");
  }
};