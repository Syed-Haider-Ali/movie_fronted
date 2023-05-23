import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

import VideoCards from './VideoCards'
const BASE_URL = "https://movie-backend-sepia.vercel.app/"



const MovieDetails = () => {

    const {title} = useParams()
    const [movie, setMovie] = useState([])  
    const [results, setResults] = useState([])

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        
        const res = await axios.get(`${BASE_URL}movie/${title}`)
        const res2 = await axios.get(`${BASE_URL}movies`);
        setMovie(res.data)
        setResults(res2.data);
    console.log(movie)

      }
      catch(err){
        console.log(`error occured ${err}`)
      }
    }
    fetchData();
  },[title])


  return (
    <div className='container-fluid mt-0 pt-0'>
      <h2 >{title}</h2>
        <div className='row row-cols-10'>
             <div className='col-lg-8'>

    {/* video player  */}
                <div className='col-lg-10 mt-3 mb-5' key={`/movie/video/${title}`}>
                  <video width='800' height='500' muted controls autoPlay>
                    <source src={`/movie/video/${title}`} style={{backgroundColor: 'gray'}} type='video/mp4'></source>
                    Your browser does not support the video tag.
                  </video>
        
                  <h4>from videoPlayer</h4>
                  <h5>{movie.title}</h5>
                  <p>Hero: <b>{movie.hero}</b></p> <p>Heroine: <b>{movie.heroine}</b></p>
                </div>
    {/* video player ended */}
            </div>
            <div className='col-lg-3 mx-3'>
                <VideoCards results={results}/>
            </div>
        </div>
    </div>
  )
}

export default MovieDetails

