import express from "express";
import { ai, model } from "./01-sdk-client.js";

const app = express();
app.use(express.json());

app.post("/chat", async (req, res) => {
  const { prompt } = req.body ?? {};

  if (typeof prompt !== "string" || !prompt.trim()) {
    return res.status(400).json({ error: "A non-empty prompt is required" });
  }

  try {
    const result = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return res.json({ response: result.text ?? "" });
  } catch (error) {
    console.error("Gemini call failed:", error.message);
    return res.status(502).json({ error: "AI service failed" });
  }
});

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => console.log("Gemini chatbot on port", PORT));