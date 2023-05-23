import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
// import axios from 'axios'
// import '../CSS/index.css'
// import img1 from '../images/22.png'

const VideoCards = ({results}) => {

    // const [results, setResults] = useState([])
    // useEffect(()=>{
    //   // axios.get('/api/action').then(res=>{
    //   //   setResults(res.data)
    //   // }).catch(err=> console.log(`error occred.. ${err}`))

    //   const getResults = async () => {
    //     try {
    //         const res = await axios.get("http://localhost:5000/movies_api/action");
    //         setResults(res.data);
    //     } catch (err) {
    //         console.log(`error occred.. ${err}`);
    //     }
    // };
    //   getResults();

    //   }, [results]);

      const resultsArr = results.map((movie,index)=>{
        return(
            <div key={index} className='row mx-3 ' style={{color:'white'}}>
                <div className="card mb-3 videoCard" style={{maxwidth: '900px', border:'1px solid gray'}}>
                <div className="row no-gutters">
                <div className="col">
                <Link to={`/movie/${movie.title}`}>
                    <img src={`/${movie.thumbnail}`} className="card-img" alt="movie image"/>
                </Link>
                </div>
                <div className="col">
                <div className="card-body videoCard">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.hero} and {movie.heroine}</p>
                    {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
            </div>
        </div>
    </div>
</div>
        )
      })


  return (
    <>
    {resultsArr}
    </>
  )
}

export default VideoCards