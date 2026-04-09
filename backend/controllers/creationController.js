const OpenAI = require("openai");
const sql = require("../utils/dbConnection");
const generateTitleArticle = require("../services/title_articleServices");


/**
 * @post client get prompt 
 * @description to generate article using propt
 */
exports.generateArticle = async (req, res, next) => {
    console.log("request was recived")
    try {
        const user_id = "10100101";
        const { prompt } = req.body;

        const content = await generateTitleArticle(prompt);

       await sql`INSERT INTO creation (user_id, prompt, content, type)VALUES (${user_id}, ${prompt}, ${JSON.stringify(content)}, ${'article'})`;

        res.status(201).json({ message: "generate article successfully", content })
    } catch (error) {
        res.status(500).json({ errorMessage: error.message })
    }
};

/**
 * @post client get prompt 
 * @description to generate blog Title using propt
 */
exports.generateBlogTitle = async(req,res,next)=>{
    try {
        const {user_id} = req.userId;
        const {prompt} = req.body;

        const content = generateTitleArticle(prompt);

        await sql`INSERT INTO creation (user_id, prompt, content, type)VALUES (${user_id}, ${prompt}, ${JSON.stringify(content)}, ${'article'})`;

        res.status(201).json({ message: "generate Blog Title successfully", content })
    } catch (error) {
        res.status(500).json({errorMessage:error.message});
    }
}

