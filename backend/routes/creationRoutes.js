const express = require("express");
const  auth  = require("../middleware/auth");
const blogTitleRouter = express.Router();
const creationController = require("../controllers/creationController.js")


/**
 * @Routes /api/ai/blog-title
 * @description to generate the blog title
 * @access public
 */
blogTitleRouter.post("/generate-article",auth,creationController.generateArticle);

/**
 * @Routes /api/ai/generate-title
 * @description to generate the blog title
 * 
 * @access public
 */
blogTitleRouter.post("/generate-title",auth,creationController.generateBlogTitle);


module.exports = blogTitleRouter