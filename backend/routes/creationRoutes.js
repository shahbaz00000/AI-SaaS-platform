const express = require("express");
const  auth  = require("../middleware/auth");
const blogTitleRouter = express.Router();
const creationController = require("../controllers/creationController.js")


/**
 * @Routes /api/ai/blog-title
 * @description to generate the blog title
 * @access public
 */
blogTitleRouter.post("/article-generater",auth,creationController.generateArticle);


module.exports = blogTitleRouter