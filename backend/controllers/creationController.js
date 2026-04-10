const OpenAI = require("openai");
const sql = require("../utils/dbConnection");
const generateTitleArticle = require("../services/title_articleServices");
const { default: axios } = require("axios");
const cloudinary = require('cloudinary').v2;
const FormData = require('form-data');


/**
 * @post client get prompt 
 * @description to generate article using propt
 */
exports.generateArticle = async (req, res, next) => {
    console.log("request was recived")
    try {
        const user_id = "12332765";
        const { prompt } = req.body;

        const content = await generateTitleArticle(prompt);

        await sql`INSERT INTO creation (user_id, prompt, content, type)VALUES (${user_id}, ${prompt}, ${JSON.stringify(content)}, ${'article'})`;

        res.status(201).json({ message: "generate article successfully", content })
    } catch (error) {
        res.status(500).json({ errorMessage: error.message })
    }
};
 
/**
 * @route POST /api/generate-image
 * @description Generate an blog title based on user prompt
 * @access Public
 */
exports.generateBlogTitle = async (req, res, next) => {
    try {
        const { user_id } = req.userId;
        const { prompt } = req.body;

        const content = generateTitleArticle(prompt);

        await sql`INSERT INTO creation (user_id, prompt, content, type)VALUES (${user_id}, ${prompt}, ${JSON.stringify(content)}, ${'article'})`;

        res.status(201).json({ message: "generate Blog Title successfully", content })
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}

/**
 * @route POST /api/generate-image
 * @description Generate an AI image based on user prompt
 * @access Public
 */
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.generateImage = async (req, res, next) => {
    try {
        const user_id = req.userId; // Fixed: No destructuring
        const { prompt } = req.body;

        const result = await openai.images.generate({
            model: "gpt-image-1",
            prompt: prompt,
            size: "1024x1024",
        });

        const image_base64 = result.data[0].b64_json;


        const { secure_url } = await cloudinary.uploader.upload(image_base64);

        await sql`INSERT INTO creation (user_id, prompt, content, type) 
                  VALUES (${user_id}, ${prompt}, ${secure_url}, ${'image'})`;

        res.status(201).json({ message: "Image generated successfully", content:secure_url });
    } catch (error) {
        console.log(error)
        res.status(500).json({ errorMessage: error.message });
    }
}

/**
 * @route POST /api/remove-image-background
 * @description Remove background base on user prompt
 * @access Public
 */
exports.removeBackground = async (req, res, next) => {
    try {
        const user_id = req.userId; 
        const {prompt} = req.body;
        const {image} = req.file

      
        const { secure_url } = await cloudinary.uploader.upload(image.path,{
             transformation:[
                {
                    effect:"background_removal",
                    background_removal:'remove_the_background'
                }
             ]
        });

        await sql`INSERT INTO creation (user_id, prompt, content, type) 
                  VALUES (${user_id}, ${prompt}, ${secure_url}, ${'image'})`;

        res.status(201).json({ message: "Image generated successfully", content:secure_url });
    } catch (error) {
        console.log(error)
        res.status(500).json({ errorMessage: error.message });
    }
}


