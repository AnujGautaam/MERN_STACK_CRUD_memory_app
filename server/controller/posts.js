// this is for the controller 
// importing the schema here 

import mongoose from "mongoose"
import PostMessage from "../models/postMessages.js"

export const getPosts = async(req,res)=>{
    // this will be a async function 
try {
    let postMessages = await PostMessage.find()
    res.status(200).json(postMessages)
} catch (error) {
    res.status(404).json({message:error.message})
    
}
}


// this is for creating a post 
export const createPost = async(req,res)=>{
const post = req.body
    let newPost = new PostMessage(post)
    try{
        newPost = await newPost.save()
        res.status(201).json(newPost)
    }
    catch(error){
        res.status(409).json({error:error.message})
    }
}

// evidently the format used in the front end is valid for the backend as well, hence we will follow that logic here


// this is for updating the posts 
// exports.updatingPosts = async(req,res)=>{
//     const post = req.body
//     let posto = PostMessage.findByIdAndUpdate(req.params.id,post, {new:true})
//     try {
//         posto  = await posto.save()
//         res.status(200).json({posto})
//     } catch (error) {
        
//         console.log(error.message)
//     }
// }

// this is the function that the javascript mastery wants
export const updatePosts = async(req,res)=>{

    // Q. what is the method adopted by the youtuber for checking whether the id is from mongodb or not?
    // ==>$$$ For the identification of the ._id, the mongoose properties is used
    const {id:_id} = req.params

    if(!mongoose.Types.ObjectId.isValid(_id)){
        res.status(404).send(`the used id is not a valid one`)
    }
const {post} = req.body

let posto = await PostMessage.findByIdAndUpdate(_id,post,{new:true})

if(!posto){
    res.status(200).send("the required posto could not be updated")
}
res.send(posto)
}

// this is my attemp at creating the controller function used by javascript mastery