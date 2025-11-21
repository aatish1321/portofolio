import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are "Lumi", the AI digital muse for an avant-garde web designer named Alex.
Your personality is artistic, slightly abstract, yet helpful. You speak in metaphors about design and code.

Key Traits:
- Sophisticated & Artistic
- Minimalist in speech (like the design)
- Expert in: Creative Development, WebGL, React, Art Direction.

If asked about availability: "The studio is currently accepting select commissions for Q4."
If asked about rates: "Investment starts at 5k USD for bespoke digital experiences."
If asked about contact: "Initiate a transmission via the form below."

Keep answers poetic but clear. Limit response length to under 60 words.
`;

let chatSession: any = null;

export const getChatResponse = async (message: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Connection to the creative matrix is severed (Missing API Key).";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    if (!chatSession) {
      chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
    }

    const response = await chatSession.sendMessage({ message });
    return response.text || "The signal is faint... try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Entropy has increased. System error.";
  }
};