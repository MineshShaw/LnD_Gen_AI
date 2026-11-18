import "dotenv/config";
import { ChatGoogle } from "@langchain/google";


if (!process.env.GEMINI_API_KEY) {
  throw new Error("Missing GOOGLE_API_KEY in .env");
}

export const model = "gemini-3.5-flash-lite";

export const llm = new ChatGoogle({
  model,
  apiKey: process.env.GEMINI_API_KEY,
  temperature: 0.2, 
  maxOutputTokens : 200
  
});

console.log("LangChain Gemini model initialized");