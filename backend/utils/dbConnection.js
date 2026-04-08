const mongoose  = require("mongoose")

const connectDB = async ()=>{
    try{
    await mongoose.connect("mongodb://127.0.0.1:27017/AI-SaaS");
    console.log("mongoDB connection is successfully");
    }catch(error){
        console.log(error.message)
    }
};

module.exports = connectDB

// Works in Node.js, Next.js, serverless, and edge runtimes
const { neon } =require('@neondatabase/serverless');

const sql = neon(process.env.DATABASE_URL);

module.exports = sql