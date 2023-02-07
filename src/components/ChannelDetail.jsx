import React from 'react'
import {useState , useEffect} from 'react'
import {useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { Videos, ChannelCard} from './'
import { fetchFromAPI } from './utils/fetchFromAPI'

const ChannelDetail = () =>{
  const [channelDetails , setChannelDetails] = useState(null)
  const [videos, setvideos] = useState([]);
  const { id } = useParams();
  console.log(channelDetails, videos)
  useEffect(()=>{
    fetchFromAPI(`channels?part="snippet&id=${id}`)
    .then((data)=> setChannelDetails(data?.items[0]));
    
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=> setvideos(data?.items));

  }, [id])

  return (
    <Box minHeight = '95vh'>
      <Box>
      <div style={
        {background : 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
        zIndex : 10,
        height : '300px'
      }}
      />
      <ChannelCard channelDetail = {channelDetails}  marginTop = "-93px"/>
      </Box>
      <Box display = 'flex' p = '2'>
        <Box sx={{mr : {sm : '100px'}}}/>
            <Videos videos = {videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail
