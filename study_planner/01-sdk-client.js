import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

if (!process.env.GEMINI_API_KEY) {
  throw new Error("Missing GEMINI_API_KEY in .env");
}
console.log("STEP 1: API key is configured");

export const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: { timeout: 15000 },
});
console.log("STEP 2: Gemini client initialized");

export const model = process.env.GEMINI_MODEL || "gemini-3.5-flash-lite";
console.log("STEP 3: Selected model:", model);