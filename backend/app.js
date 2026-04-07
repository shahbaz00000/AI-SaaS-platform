const dotenv = require("dotenv")
dotenv.config();

const express = require("express");
const connectDB = require("./utils/dbConnection");
const app = express();
const cors = require("cors");

const generateBlogTitle = require("./services/blogTitleServices")


// mongoDB connection
connectDB()

// generate blogTitl
generateBlogTitle("cooking")

// middleware
app.use(express.json());
app.use(cors());

/**
 * @method get
 * @description this is test routes
 * @access public
 */
app.get("/test",(req,res,next)=>{
    console.log("request was recived on this port");
    res.send("this is test pages");
});

//  server running on port number 3000
const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`server is runnig on port no ${port}`)
});


