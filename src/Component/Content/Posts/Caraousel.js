import React from 'react'
import Carousel from "react-multi-carousel";
import './Carousel.css'
import "react-multi-carousel/lib/styles.css";
import { carousel } from './Data';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 2 // optional, default to 1.
  },
  ipad: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const Caraousel = () => {
  return (
    <>
      <Carousel responsive={responsive}>
        {
          carousel.map((item) => {
            return (
              <div className="car-data">
                <div className="img">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="title">{item.title}</div>
                <div className="info flex">
                  <div className="price">${item.price}</div>
                  <div className="rating">
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                  </div>
                </div>
              </div>
            )
          })
        }
      </Carousel>
    </>
  )
}

export default Caraousel