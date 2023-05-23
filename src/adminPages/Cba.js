import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'


const Cba = () => {

const navigate = useNavigate()
  const {user} = useSelector((state)=> state.auth)

  useEffect(()=>{
    if(!user){
      navigate('/login')
    }
  },[navigate, user])
  
  return (
    <div><h1> Hellow from CBA.js</h1></div>
  )
}

export default Cba