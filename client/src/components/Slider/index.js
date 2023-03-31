import React from 'react'
import Slider from "react-slick";
import "./index.scss";
import "./slider.scss"


const data = [
  "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='slider'>
      <Slider {...settings}>
        {data.map((img,index)=>{
          return <div className='img-container' key={index}>
          <img src={img} alt="img"/>
          </div>
        })}
      </Slider>
    </div>
  )
}

export default SliderComponent