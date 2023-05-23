import React, {useState,useEffect} from 'react'
import axios from 'axios'
// import {Link} from 'react-router-dom'
import Card from '../components/Card'
// import VideoPlayer from '../components/VideoPlayer'
const BASE_URL = "https://movie-backend-sepia.vercel.app/"



const ActionMovies = () => {

    const [results, setResults] = useState([])

    useEffect(()=>{
      // axios.get('/api/action').then(res=>{
      //   setResults(res.data)
      // }).catch(err=> console.log(`error occred.. ${err}`))

      const getResults = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/movies/comedy`);
            setResults(res.data);
        } catch (err) {
            console.log(`error occred.. in ActionMovies.. ${err}`);
        }
    };
      getResults();
      console.log(results)

      }, []);

      
     

      const toDisplay = results.map((i, index)=>{
        // {image, title, desc}
        return(
          <>
             <Card key={index}  name={i.title}  hero={i.hero} heroine={i.heroine} thumbnail={i.thumbnail} />
             {/* console.log(result.thumbnail) */}
          </>
        )
      })
      console.log(results.thumbnail)


  return (
    <div className='sliderContainer ps-5 my-3 py-3'>
      <div className='row'>
          {toDisplay}
        </div>
    </div>
  )
}

export default ActionMovies
