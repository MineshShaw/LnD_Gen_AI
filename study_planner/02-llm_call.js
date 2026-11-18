import { llm, model } from "./01-sdk-client.js"

async function main() {
    try {
        const prompt = "Explain Fenwick tree in simple terms.";
        
        console.log("Prompt:", prompt);

        const response = await llm.models.generateContent({
            model,
            contents: prompt
        });
        
        console.log("Response:", response.text);
    } catch (error) {
        console.error("Error:", error);
    }
}

main();