import React from 'react'

// stuffs to import from mui
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Card } from '@mui/material';
// import Typography from '@mui/material';
import {Typography} from '@mui/material';
import {Button} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from "@mui/icons-material/Delete"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"

import "./Post.css"

import moment from "moment"

const Post = ({props, setCurrentId}) => {
  console.log(props)
  // console.log(setCurrentId)

  // for some of these i am leaving out the styling portions as there seems to be a conflict and i need to reslve it
  return (
    // the props is going to be opened here, 
    <Card >
      {/* <CardMedia image={props.creator} title={props.title}/>
      <CardMedia image={props.selectedFile} title = {props.title}/> */}

      {/* for some reason the above written code in mui did not work but the usual method worked fine */}
      <div>
        <h5>{
        props.title
        }</h5>
        <img src={props.selectedFile} height="100px"/>
      </div>

      <div>
        <Typography variant="h6">{props.creator}</Typography> 
        <Typography variant="body2">{moment(props.createdAt).fromNow()}</Typography>
        <Typography>this is what you wanted </Typography>
      </div>

      <div>
        {/* Q. what to put in the button? */}
        {/* $$$ the button is for the insertation of icons */}
        <Button style={{ "color":"blue"}} size='small' onClick={()=>setCurrentId(props._id)}>
          {/* this button when clicked the id of the post is transferred to the state function */}
          <MoreHorizIcon fontSize='default' className='panchyat'/>
        </Button>

      </div>

      <div>
        {/* remember that in the schema of all things, tags have been mentioned to be an array of strings */}
        {/* hence the space between the words will create tags and these are kept as hastags due to mapping */}
        <Typography>{props.tags.map(element=>`#${element}`)}</Typography>
      </div>

<CardContent>
  <Typography variant='h6' gutterBottom>{props.message}</Typography>
</CardContent>

<CardActions>
  <Button onClick={()=>{}} color="primary">
  heart it  
    <FavoriteIcon/>
    
      {props.likeCount}
  </Button>

  <Button onClick={()=>{}} color="primary">
    <DeleteIcon/>
    Delete
  </Button>
</CardActions>

    </Card>




  )
}

export default Post