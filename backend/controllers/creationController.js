const OpenAI = require("openai");
const sql = require("../utils/dbConnection");



/**
 * @post client get prompt 
 * @description to generate article using propt
 */
exports.generateArticle = async (req, res, next) => {
    try {
        const user_id = req.userId;
        const { prompt } = req.body;

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
        console.log(content)

        await sql`INSERT INTO creation (user_id,prompt,content,type)
           VALUES (${user_id},${prompt},${content})`;

        res.status(201).json({ message: "generate article successfully", content })


    } catch (error) {
       res.status(500).json({errorMessage:error.message})
    }
}

