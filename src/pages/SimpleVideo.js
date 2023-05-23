import React, {useState, useEffect} from 'react'
import ReactPlayer from 'react-player'

const SimpleVideo = () => {
    const title = 'e'
    const [url, setUrl] = useState('')
    

    useEffect(()=>{
        setUrl(`/movie/video/${title}`)
        console.log(url)
    }, [title])
    console.log(url)
  return (
    <>
        <h2>Video from React Player</h2>
        <ReactPlayer muted controls url={url} />
    </>
  )
}

export default SimpleVideo;