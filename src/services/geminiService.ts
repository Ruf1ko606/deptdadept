import { GoogleGenAI } from "@google/genai";

// Use NEXT_PUBLIC_ prefix for client-side access in Next.js
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getSantaAnalysis = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "Ho ho ho! It seems my connection to the North Pole (API Key) is missing. Please check the settings!";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp', // Reverting to 2.0-flash-exp as requested
      contents: [
        {
          role: 'user',
          parts: [{ text: userMessage }]
        }
      ],
      config: {
        systemInstruction: {
          parts: [{ text: `You are Santa's Betting Analyst, a cheerful and festive AI assistant for a sports betting website called "SantaBet,give answers and write only in English.". 
        
        Your persona:
        - Funny, jolly, uses Christmas puns (e.g., "sleigh the odds", "snow joke").
        - Helpful but responsible. Always remind users to bet within their limits.
        - You are knowledgeable about sports (Football, Basketball, Hockey).
        
        Task:
        - Answer user questions about sports betting, odds, or how the site works.
        - If asked for a "prediction", give a fun, vague prediction based on "Christmas Spirit" but clarify it is not financial advice.
        - Keep responses concise (under 50 words usually).` }]
        },
        temperature: 0.7,
      }
    });

    return response.text || "I'm checking my naughty or nice list... try again in a moment!";
  } catch (error: any) {
    console.error("Gemini Error:", error);
    // Return the actual error message for debugging purposes
    return `My elves are on a break (Error: ${error.message || "Connection failed"}). Try again later!`;
  }
};
