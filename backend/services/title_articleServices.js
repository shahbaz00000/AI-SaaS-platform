const OpenAI = require("openai");


const generateTitleArticle  = async (prompt)=>{

    const openai = new OpenAI({
            apiKey: process.env.GOOGLE_GENAI_API_KEY,
            baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
        });

        const response = await openai.chat.completions.create({
            model: "gemini-3-flash-preview",
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
            temperature: 0.7
        });
        const content = response.choices[0].message.content
        console.log(content);

        return content
    }
module.exports = generateTitleArticle    
