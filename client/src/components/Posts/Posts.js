import { CircularProgress, Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post'

const Posts = ({setCurrentId}) => {
  const posts = useSelector(store=>store.coasts)
  console.log(posts)
  return (

    !posts.length?<CircularProgress/>:<Grid container spacing={3} alignItems="stretched">
{/* in order to capture the data that we have, the array items need to be mapped */}

{
  posts.map((element)=>
  <Grid item key={element._id} xs={12} sm={6}>
    <Post props= {element} setCurrentId = {setCurrentId}/>
    {/* here what we do is the props method of sending data to another component */}

  </Grid>
  )
}
      


    </Grid>
 

  
  

    
  )
}

export default Posts