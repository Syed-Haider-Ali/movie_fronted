import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactGa from 'react-ga'
// import './CSS/index.css
import BackgroundImage from '../components/BackgroundImage'
import CardSlider from '../components/CardSlider'
const BASE_URL = "https://movie-backend-sepia.vercel.app/"
const trackingId = "UA-269325083-1"

ReactGa.initialize(trackingId)
// import Dropdown from '../components/Dropdown'

  // const data= [
  //   {
  //     image : img1,
  //     title: 'Hellow',
  //     desc: 'WHat are you doing, are you fine dude, WHat are you doing, are you fine dude'
  //   },
  //   {
  //     image : img2,
  //     title: 'Hellow',
  //     desc: 'WHat are you doing, are you fine dude, WHat are you doing, are you fine dude'
  //   },
  //   {
  //     image : img3,
  //     title: 'Hellow',
  //     desc: 'WHat are you doing, are you fine dude, WHat are you doing, are you fine dude'
  //   },
  //   {
  //     image : img2,
  //     title: 'Hellow',
  //     desc: 'WHat are you doing, are you fine dude, WHat are you doing, are you fine dude'
  //   },
  //   {
  //     image : img2,
  //     title: 'Hellow',
  //     desc: 'WHat are you doing, are you fine dude, WHat are you doing, are you fine dude'
  //   },
  //   {
  //     image : img3,
  //     title: 'Hellow',
  //     desc: 'WHat are you doing, are you fine dude, WHat are you doing, are you fine dude'
  //   }
  // ]

const Home = () => {

  // const [results,setResults] = useState([])
  const [action,setAction] = useState([])
  const [comedy,setComedy] = useState([])
  const [drama,setDrama] = useState([])


  useEffect(()=>{
    const fetch = async ()=>{
      try{
        // const res = await axios.get(`http://localhost:5000/movies`);
        const resDrama = await axios.get(`${BASE_URL}movies/drama`);
        const resAction = await axios.get(`${BASE_URL}movies/action`);
        const resComedy = await axios.get(`${BASE_URL}movies/comedy`);

        ReactGa.pageview(window.location.pathname)
        // setResults(res.data)
        setAction(resAction.data)
        setComedy(resComedy.data)
        setDrama(resDrama.data)

      }
      catch(err){
        console.log(`oho error occured ${err}`)
      }
    }
    fetch();
  },[])

  return (
    <div className='clientBody'>
      <BackgroundImage/>
      <br/>
       <CardSlider category='Action' data={action}/>
       <CardSlider category='Comedy' data={comedy}/>
       <CardSlider category='Drama' data={drama}/>
    </div>
  )
}

export default Home
