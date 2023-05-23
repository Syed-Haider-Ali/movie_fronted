import React from 'react'
import MainImg from '../images/main.jpg'

const BackgroundImage = () => {
  return (
    <div className='mb-5'>
      <img src={MainImg} alt='Realtor Cinema House' style={{height:'550px', width:'100%'}}/>
    </div>
  )
}

export default BackgroundImage