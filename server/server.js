import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

console.log("=================================");
console.log(
  "API Key Loaded:",
  process.env.OPENAI_API_KEY
    ? "YES ✅"
    : "NO ❌"
);
console.log(
  "Port:",
  process.env.PORT || 5000
);
console.log("=================================");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/* HEALTH CHECK */
app.get("/", (req, res) => {
  res.json({
    status: "Server Running ✅",
    ai: "Jarvis AI Backend",
  });
});

/* AI CHAT ENDPOINT */
app.post("/ask", async (req, res) => {
  try {
    console.log(
      "\n📩 Incoming Request:",
      req.body
    );

    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        reply: "Message is required.",
      });
    }

    const completion =
      await openai.chat.completions.create({
        model: "gpt-4.1-mini",

        messages: [
          {
            role: "system",
            content: `
You are Jarvis, Shagun's personal AI assistant.

Rules:
- Be friendly.
- Be concise.
- Answer questions clearly.
- Tell jokes when asked.
- Explain coding concepts.
- Help with portfolio projects.
- Respond naturally like an AI assistant.
`,
          },
          {
            role: "user",
            content: message,
          },
        ],

        temperature: 0.7,
        max_tokens: 500,
      });

    const reply =
      completion.choices[0].message.content;

    console.log("🤖 AI Reply:", reply);

    res.json({ reply });
  } catch (error) {
    console.log(
      "\n❌ ========= OPENAI ERROR ========="
    );

    console.error(error);

    console.log(
      "===================================\n"
    );

    res.status(500).json({
      reply:
        error?.message ||
        "Something went wrong.",
    });
  }
});

app.listen(
  process.env.PORT || 5000,
  () => {
    console.log(
      `🚀 Server running on port ${
        process.env.PORT || 5000
      }`
    );
  }
);