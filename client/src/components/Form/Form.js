import React, { useEffect, useState } from 'react'
import { TextField, Button, Typography, Paper } from "@mui/material"
import FileBase from "react-file-base64"

import { useDispatch, useSelector } from "react-redux"
import { createPost, updatePost } from '../../actions/posts'



const Form = ({currentId, setCurrentId}) => {
  const data = useSelector(store=>currentId?store.coasts.find(p=>p._id===currentId):null)
  // $$$ if there is some data, do the editing else dont 


  console.log(currentId)
  
 
  
  
  
  const [postData, setPostData] = useState({
    creator:"",
    title:"",
    message:"",
    tags:"",
    selectedFile:""
  })


useEffect(() => {

  if(data){
    setPostData(data)
  }
  
  }, [data])

  const dispatch = useDispatch()

  const handlesubmit = (e)=>{
    // this is to prevent any kinds of submission or refreshment of the page when the submit button is clicked
    e.preventDefault()

    if(currentId){
      dispatch(updatePost(currentId, postData))
    }
    else{
      //time for the use of the created function 
    dispatch(createPost(postData)) 
    }

    

  }

  const clear=()=>{
    
  }
  return (
    <Paper elevation={10}>
      <form autoComplete='off' noValidate onSubmit={handlesubmit}>
    <Typography variant='h6'>Generating a Memory</Typography>
    <TextField 
    name='creator' 
    variant='outlined' 
    label="Creator" 
    fullWidth
    value={postData.creator}
    onChange={(e)=>setPostData({...postData,creator:e.target.value})}
    
    />
 <TextField 
    name='title' 
    variant='outlined' 
    label="Title" 
    fullWidth
    value={postData.title}
    onChange={(e)=>setPostData({...postData,title:e.target.value})}
    
    />


<TextField 
    name='message' 
    variant='outlined' 
    label="Message" 
    fullWidth
    value={postData.message}
    onChange={(e)=>setPostData({...postData,message:e.target.value})}
    
    />



<TextField 
    name='tags' 
    variant='outlined' 
    label="Tags" 
    fullWidth
    value={postData.tags}
    onChange={(e)=>setPostData({...postData,tags:e.target.value})}
    
    />

  
<div>
<FileBase

type="file"
multiple={false}
onDone={({base64})=>setPostData({...postData,selectedFile:base64})}

/>
<Button variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
<Button variant='contained' color='secondary' size='small' type='clear' fullWidth onClick={clear}>Clear</Button>


</div>



      </form>

    </Paper>
  )
}

export default Form