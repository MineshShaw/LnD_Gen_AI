import { ai, model } from "./01-sdk-client.js";

async function main() {
  try {
    const prompt = "Explain Fenwick tree data structure in 2 simple sentences.";

    console.log("Sending prompt:", prompt);
    const result = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    console.log("\nModel response:\n", result.text ?? "(No text returned)");

  } catch (error) {
    console.error("Generation failed:", error.message);
    process.exitCode = 1;
  }
}

main();