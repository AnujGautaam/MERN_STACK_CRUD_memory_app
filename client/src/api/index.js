// this is the intermediate file where the integration or the fetching of the backend data is done

// for the fetching axios is used instead of fetch 

// our url is 
import axios from 'axios'





const url = `http://localhost:5000/posts`


export const fetchPosts =()=> axios.get(url)


//this is for the creation of a post 
export const createPosts = (newPost)=>axios.post(url,newPost) 

// this is for the updating of the posts 
export const updatePosts = (id,post)=>axios.patch(`${url}/${id}`,post)
