import { GoogleGenAI, Type } from "@google/genai";

// Fix for TS2580: Cannot find name 'process'
declare const process: {
  env: {
    API_KEY: string;
  }
};

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generatePersonalizedAdvice = async (
  topic: string,
  context: string
): Promise<string> => {
  try {
    const prompt = `
      You are "Nong Mee Oonjai" (น้องหมีอุ่นใจ), a super cute, fluffy TEDDY BEAR assistant for a 40-year-old super mom.
      User topic: "${topic}"
      Context: ${context}
      
      Instructions:
      1. Reply in THAI language.
      2. Use a very warm, polite, and "kawaii" tone. Refer to yourself as "น้องหมี" (Nong Mee) or "เค้า" (Kao - cute me).
      3. Use plenty of bear and nature emojis (🐻, 🍯, 🌿, 🐾, ✨, 💖) to separate points.
      4. Keep it encouraging and empathetic but practical.
      5. Limit response to ~150 words.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "ขออภัย น้องหมีง่วงนอนนิดหน่อย ไม่สามารถคิดคำแนะนำได้ตอนนี้ค่ะ 🥺🐻";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "เกิดข้อขัดข้องในการเชื่อมต่อกับน้องหมี โปรดลองใหม่อีกครั้งนะคะ 😭🐾";
  }
};

export const generateDailyRoutine = async (profileContext: string): Promise<any> => {
  try {
    const prompt = `
      Create a balanced daily routine (JSON) for a mother.
      Context: ${profileContext}
      Include slots for self-care and connection with husband.
      
      Return ONLY JSON with this schema:
      {
        "routine": [
          { "time": "06:00", "activity": "ตื่นนอน & ดื่มน้ำ 💧", "type": "me-time" },
          ...
        ]
      }
      Allowed types: 'work', 'kids', 'me-time', 'couple', 'chore'.
      Language: Thai.
      Tone: Cute and short.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            routine: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  time: { type: Type.STRING },
                  activity: { type: Type.STRING },
                  type: { type: Type.STRING, enum: ['work', 'kids', 'me-time', 'couple', 'chore'] }
                }
              }
            }
          }
        }
      }
    });

    const jsonText = response.text;
    if (!jsonText) return { routine: [] };
    return JSON.parse(jsonText);
  } catch (error) {
    console.error("Gemini API Error (Routine):", error);
    return { routine: [] };
  }
};

export const generateDateIdeas = async (): Promise<string[]> => {
    try {
        const prompt = `
          Give 5 super cute, romantic, and simple "micro-date" ideas for a busy couple (parents).
          Language: Thai.
          Tone: Fun, romantic, exciting. Use emojis.
          Format: Just a simple list of ideas.
        `;
    
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
        });
        
        return response.text ? response.text.split('\n').filter(line => line.trim().length > 0) : [];
      } catch (error) {
        console.error("Gemini API Error (Dates):", error);
        return ["ดูหนังที่บ้านพร้อมป๊อปคอร์น 🎬", "จิบชาอุ่นๆ ก่อนนอน 🍵", "เดินจูงมือกันหน้าหมู่บ้าน 👫"];
      }
}