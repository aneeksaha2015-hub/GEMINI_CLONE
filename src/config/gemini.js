// src/config/gemini.js

import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  console.error("❌ Gemini API key missing");
}

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "models/text-bison-001", // pick a valid model
});

async function runChat(prompt) {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error getting response from Gemini";
  }
}

// ✅ Make this the default export
export default runChat;




