import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';


const Slider = ({start}) => {
    return (
        <Carousel fade indicators={false} controls={false}>
       

       {start.map((item)=>(
            <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={item}
              alt="First slide"
            />
          </Carousel.Item>
       ))}
       
      </Carousel>
    )
}

export default Slider
