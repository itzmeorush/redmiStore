import React from 'react'
import {Carousel} from 'react-bootstrap';
// import 'bootstrap/dist/css/min.css'
const Banner = ({end}) => {
  return (
    <Carousel fade indicators={false} controls={false}>
      {
        end.map((item,index)=>(
            <Carousel.Item key={item.image}  id='banner'  interval={1000} keyboard={true}>
                <img src={item.image} className='d-block w-100' id='bannerImage' alt={`${index} end`}/>
                <Carousel.Caption>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.source}</p>
                </Carousel.Caption>
            </Carousel.Item>
           
        ))
      }
    </Carousel>
  )
}

export default Banner
