import { Stack, Box } from '@mui/material'
import React from 'react'
import {VideoCard , ChannelCard} from "./"

const Videos = (props) => {
    return(<Stack
    direction={ props.direction || "row"}
    flexWrap="wrap"
    justifyContent="start"
    gap={2}
    >
        {props.videos.map((item, idx)=>{
            return(
            <Box key={idx}>
                {item.id.videoId && <VideoCard item ={item}/> }
                {item.id.channelId && <ChannelCard channelDetail ={item}/> }
            </Box>)
        })}
    </Stack>)
}

export default Videos
