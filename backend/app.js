const dotenv = require("dotenv")
dotenv.config();

// External Modules
const express = require("express");
const connectDB = require("./utils/dbConnection");
const app = express();
const cors = require("cors");
const {clerkMiddleware,requireAuth} = require("@clerk/express")

// internal modules
// const generateBlogTitle = require("./services/blogTitleServices");
const creationRouter = require("./routes/creationRoutes.js");


// //DATABASE  connection
// connectDB()



// generate blogTitl
// generateBlogTitle("cooking")

// middleware
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());
// app.use(requireAuth());

// routes
app.use("/api/ai",creationRouter)


/**
 * @route /api/test
 * @description this is test routes
 * @access public
 */
app.get("/api/test",(req,res,next)=>{
    console.log("request was recived on this port");
    res.send("this is test pages");
});

//  server running on port number 3000
const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`server is runnig on port no ${port}`)
});


