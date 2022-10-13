// thisis to speciify the routes for posts made 
import express from "express"
import { createPost, getPosts, updatePosts } from "../controller/posts.js"
// for some reason it should be .js at the end of the url while importing

const router = express.Router()

router.get("/", (req,res)=>{
    res.send("This definitely works fine")
})

router.get("/getp",getPosts )

router.post("/",createPost)
// a very good finding on why the initial code was not working in the first place at all?

// for the updating of the  posts, i had thoght of using the put method, the yutuber decided t do otherwise
router.patch("/:id", updatePosts)
export default router