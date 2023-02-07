import React from 'react'
import {Link} from "react-router-dom"
import {Typography, Card, CardContent, CardMedia} from  "@mui/material"
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from './utils/constants'
const VideoCard = (props, marginLeft) => {
    const snippet = props.item.snippet
    const videoId = props.item.videoId
  return (
    <Card sx={{width : {xs : '100%', md : '320px'}, marginLeft : props.marginLeft , boxShadow : 'none', borderRadius : 0}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia 
            alt = {snippet?.title}
            sx = {{width : {xs : '100%', sm: '358px' , md : '320px'}, height : 180}}
            image={snippet?.thumbnails?.high?.url} />
        </Link>
        <CardContent sx={{backgroundColor : '#1e1e1e',  height : '106px'}}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight="bold" color="#fff">
                            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ?  `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' fontWeight="bold" color="grey">
                            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
                            <CheckCircle sx = {{fontSize : 12, color : "gray", ml : '5px'}}/>
                    </Typography>
                </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard
