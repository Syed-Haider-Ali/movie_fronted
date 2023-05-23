import React, {useState, useEffect} from 'react'
import ReactPlayer from 'react-player'
// import Crypto from 'crypto-js'
import axios from 'axios'


const EncVideo = () => {
    const videoName = 'Sultan'
    const [videoUrl, setVideoURL] = useState('');

    const fetchVideoData = async () => {
      try {
        const response = await axios.get(`/movie/video/${videoName}`, {
          responseType: 'arraybuffer',
          headers: {
            'Range': 'bytes=0-'
          }
        });
      const blob = new Blob([response.data], { type: 'video/mp4' });
      const videoURL = URL.createObjectURL(blob);
      setVideoURL(videoURL);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoName]);

  return (
    <>
        <h2>Video from React Player</h2>
        <video controls>
      <source src={videoUrl} type="video/mp4" />
    </video>
        {/* <ReactPlayer muted controls url={url} /> */}
    </>
  )
}

export default EncVideo;