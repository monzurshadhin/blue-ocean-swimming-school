import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from '../../Images/carusel-image/1.jpg';
import img2 from '../../Images/carusel-image/2.jpg';
import img3 from '../../Images/carusel-image/5.jpg';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className="home-top ">
        <Carousel>
          <Carousel.Item className='carousel-item'>
            <img
              className="carusel-img d-block w-100"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption className="caption">
              <h1>Blue Ocean Swimming School</h1>
              <p>Swimming is very imortant skill to survive.<br/>Let's Learn swim togther.</p>
              <button className="carousel-btn">See More</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel-item'>
            <img
              className="carusel-img d-block w-100"
              src={img2}
              alt="Second slide"
            />

            <Carousel.Caption className="caption">
            <h1>Blue Ocean Swimming School</h1>
              <p>Swimming is very imortant skill to survive.<br/>Let's Learn swim togther.</p>
              <button className="carousel-btn">See More</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel-item'>
            <img
              className="carusel-img d-block w-100"
              src={img3}
              alt="Third slide"
            />

            <Carousel.Caption className="caption">
            <h1>Blue Ocean Swimming School</h1>
              <p>Swimming is very imortant skill to survive.<br/>Let's Learn swim togther.</p>
              <button className="carousel-btn">See More</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
