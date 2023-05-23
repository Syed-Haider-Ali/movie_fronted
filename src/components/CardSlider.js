import React from 'react'
// import { Component } from "react";
import Card from './Card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {

  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",color:'black', background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",color:'black', background: "green" }}
      onClick={onClick}
    />
  );
}

        // main function
  const CardSlider = ({category,data})=>{

  const database = data.map((i,index)=>{
    return(
      <div className='mb-5'>
        <Card name={i.title} hero={i.hero} heroine={i.heroine} thumbnail={i.thumbnail} />
      </div>
    )
  })

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 785,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

    return (
      <div className='sliderContainer'>
        <h2 > {category}</h2>        
        <Slider {...settings}> 
          {database}
        </Slider>
      </div>
    );

}

export default CardSlider
