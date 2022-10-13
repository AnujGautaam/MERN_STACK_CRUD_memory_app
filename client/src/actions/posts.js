import * as api from "../api"

// const getPosts = ()=>{
//     const action = {type:"FETCH", payload:[]}
//     return action 
// }

// the upper function would have been the case had we not initiated thunk into the mix

// hence the function becomes 



export const getPosts = ()=>async(dispatch)=>{

    try {
        const {data} = await api.fetchPosts()
        dispatch({type:"FETCH", payload:data})

    } catch (error) {
        console.log(error.message)
        
    }

}

export const createPost = (post)=>async(dispatch)=>{
    try {
        const {data} = await api.createPosts(post)
        dispatch({type:"CREATE", payload:data})
    } catch (error) {
        console.log(error)
        
    }
}

export const updatePost = (id,post)=>async(dispatch)=>{
    try {
        const {data} = await api.updatePosts(id,post)
        dispatch({type:"UPDATE",payload:data})
    } catch (error) {
        console.log(error.message)
    }
}