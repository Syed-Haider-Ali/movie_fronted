import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { createMovie } from '../features/movies/movieSlice'

import Spinner from '../components/Spinner'

const MoviesList = () => {
    
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user, isLoading} = useSelector((state)=> state.auth)
  
  useEffect(()=>{
    if(!user){
      navigate('/login')
    }
  }, [user, dispatch])
  
  return (
    <>
    </>
  )
}

export default MoviesList