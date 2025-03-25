//require('dotenv').config({path: './.env'})

import dotenv from "dotenv";

import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path : "./.env"
})


connectDB()
.then(()=>{

    app.on("Error", (error)=>{
        console.log("ERROR: ",error);
        throw error;
    })


    app.listen(process.env.PORT ||8000, ()=>{
        console.log(`server is running at port :  ${process.env.PORT}`);
    }) 
})
.catch((error)=>{
    console.error("MONGO DB connection failed !!",error)
    throw error;
})








/*
import express from "express";
const app = express();

//approacch 1
// function connectDB() {    }
// connectDB();

//approach 2 : IIFE
;(  async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}` );
        
        app.on("Error", (error)=>{
            console.log("ERROR: ",error);
            throw error;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`APP is listening on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.error("ERROR",error)
        throw err;
    }
})()
*/