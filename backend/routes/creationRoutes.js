const express = require("express");
const authenticate = require('../middleware/auth.js')
const blogTitleRouter = express.Router();
const creationController = require("../controllers/creationController.js");
const upload = require("../middleware/multer.js");


/**
 * @Routes /api/ai/blog-title
 * @description to generate the blog title
 * @access public
 */
blogTitleRouter.post("/generate-article",authenticate,creationController.generateArticle);

/**
 * @Routes /api/ai/generate-title
 * @description to generate the blog title
 * @access public
 */
blogTitleRouter.post("/generate-title",authenticate,creationController.generateBlogTitle);

/**
 * @Routes /api/ai/generate-title
 * @description to generate the blog title
 * @access public
 */ 
blogTitleRouter.post("/generate-image",authenticate,creationController.generateImage);

/**
 * @Routes /api/ai/generate-title
 * @description to generate the blog title
 * @access public
 */ 
blogTitleRouter.post("/remove-image-background",authenticate,upload.single('image'),creationController.removeBackground);


module.exports = blogTitleRouter