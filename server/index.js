import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";


// i made one change in the package.json file to incorporate import methods instead of 
// const express = require("express")
// after the setting up time to work on setting up of the components 

const app = express()


// this is for the middlewares 
app.use(bodyParser.json({limit:"30mb", "extended":true}))
// since images will also be uploaded in here, it is better to set the size of the bodyparser to a higher value
app.use(bodyParser.urlencoded({limit:"30mb", "extended":true}))
app.use(cors())

// next task is to connect to a mongodbb server by creating a free cluster
// 
const mongo_url = "mongodb+srv://supreme_emperor:supreme_emperor@cluster0.s3xf8tr.mongodb.net/?retryWrites=true&w=majority"

// for now there is going to be an or statement so that when it is time for deployment, the port value will change 
const PORT = process.env.PORT||5000


// first let me check if  a message can be broadcasted directly or not using app.listen

// app.listen(PORT, ()=>{
//     console.log("this is a direct message from the great emperror himself")
// })
// this code has been commented out since it uses the same port number as the mongoose one and there seems to be an error when both of these codes are written on the index.js file

// the below written code for connecting to a database can be written in another folder as well
mongoose.connect(mongo_url,{ useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{app.listen(5000, ()=>{console.log(`this message has been broadcasted from the emperor himself from the ${PORT} port` )})})
.catch((error)=>{console.log(error.message)})

// mongoose.set("useFindAndModify",false)
// for some reason the above written code for removing other warnings did not work for me *




// time for calling and using router in the index file 

import RouterPost from "./routes/posts.js"

app.use("/posts",RouterPost)