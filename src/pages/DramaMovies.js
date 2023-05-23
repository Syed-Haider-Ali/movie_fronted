import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Card from '../components/Card'
// import VideoPlayer from '../components/VideoPlayer'
const BASE_URL = "https://movie-backend-sepia.vercel.app/"



const DramaMovies = () => {

    const [results, setResults] = useState([])

    useEffect(()=>{

      const getResults = async () => {
        try {
            const res = await axios.get(`${BASE_URL}movies/drama`);
            if(!res){
                setResults('')
            }
            setResults(res.data);
        } catch (err) {
            console.log(`error occred.. in ActionMovies.. ${err}`);
        }
    };
      getResults();
      console.log(results)

      }, []);

      
      const toDisplay = results.map((i, index)=>{
        return(
          <>
             <Card key={index}  name={i.title}  hero={i.hero} heroine={i.heroine} thumbnail={i.thumbnail} />
          </>
        )
      })
      console.log(results.thumbnail)

if(results == ''){
    return(
    <>
        <h2>Sorry currently Drama movies are not available</h2>
    </>)
}
else{
    return (
        <div className='sliderContainer ps-5 my-3 py-3'>
        <div className='row'>
            {toDisplay}
            </div>
        </div>
    )
    }
}

export default DramaMovies
