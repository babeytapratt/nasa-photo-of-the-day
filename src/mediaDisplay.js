import React from 'react'
import ReactPlayer from 'react-player'

const MediaDisplay = ({ url, title }) => {
    if (!url){
        return <p>loading...</p>
    } else{
        if(url.includes('.jpg')){
            return <img src={url} alt={title} />
        } else {
            return <ReactPlayer url={url} />
        }
    }
}

export default MediaDisplay
