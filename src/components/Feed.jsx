import React from 'react'
import {useState, useEffect} from 'react'
import {Stack, Typography} from '@mui/material'
import { Box } from '@mui/system'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromAPI } from './utils/fetchFromAPI'

const Feed = () =>{

const [selectedCategory , setSelectedCategory] = useState('New');
const[videos, setVideos] = useState([])

useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${"react"}`)
    .then(data => setVideos(data.items))
    .catch((err)=> console.log(err))
},[selectedCategory])


  return (
  <Stack
  sx ={{flexDirection : {sx : "column", md : "row"}}}
  >
    <Box
    sx = {{height :{sx : 'auto', md: '92vh'},backgroundColor : "#000", borderRight : '1px solid #3d3d3d', px : {sx: 0, md:2}}}
    >
      <Sidebar selectedCategory = {selectedCategory} setSelectedCategory = {setSelectedCategory}/>
      <Typography className='copyright' variant = "body2" sx ={{color : "#fff"}}>
        Copyright 2023 Youtube
      </Typography>
    </Box>
    <Box p={2} sx ={{overflowY : 'auto', height : '90vh', flex : 2, backgroundColor : "#000"}}>
      <Typography variant = "h4" fontWeight="bold" mb = {2} sx ={{color : 'white'}}>
          {selectedCategory} <span style={{color : '#F31503'}}>videos</span>
      </Typography>
      <Videos videos = {videos}/>
    </Box>
  </Stack>
)
}

export default Feed
