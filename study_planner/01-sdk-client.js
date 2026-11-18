import "dotenv/config"

import { GoogleGenAI } from "@google/genai"

const llm = new GoogleGenAI({
	apiKey: process.env.GEMINI_API_KEY,
	httpsOptions: {timeout: 15000}
});

console.log("LLM Client initialized.");

const model = "gemini-3.5-flash-lite";

console.log("Model:", model);

export { model, llm };
