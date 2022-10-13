import logo from './logo.svg';
import './App.css';
import { Container, AppBar, Typography,Grow, Grid } from "@mui/material"
import memories from "./imgae/happy-memories.jpg"
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from "./style"
import { useDispatch } from "react-redux"
import { useEffect, useState } from 'react';
import { getPosts } from './actions/posts';



function App() {
  // const classes = useStyles()
  // console.log(classes)

  // this is for getting the currentID of the post and is done to show how without the use of redux in the 
  // prilimary phase, the states work in order to transfer the data
  const [currentId,setCurrentId] = useState(null)
  // both the state and its function will be transported elsewhere as props

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPosts)

  },[dispatch])
  return (  
    
    <div>
      <Container maxwidth="lg">
        <AppBar position="static" color="inherit" align="center">
          <Typography variant="h2">Memories in this planet</Typography>
          <img src={memories} alt='memories' height="300"/>
        </AppBar>
        <Grow in>
          {/* grow component is for simpler animations  */}
          <Container>
            <Grid container justify="space-between" align-items="stretch">

            <Grid xs={12} sm={7}>
              <Posts currentId = {currentId}/>
              {/* these are sent as props as both forms and posts are linked to each other */}
            </Grid>
            <Grid xs={12} sm={4}>
            <Form currentId = {currentId} setCurrentId = {setCurrentId}/>
            </Grid>

              
              {/* there are to be created now */}
            </Grid>
          </Container>
        </Grow>

      </Container>
      <h1>This will verify the existence of the App</h1>
      {/* this has worked 101/101 */}
    </div>
  );
}

export default App;
