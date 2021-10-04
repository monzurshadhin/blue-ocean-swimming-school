import React, { useEffect, useState } from "react";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from '../../Images/carusel-image/1.jpg';
import img2 from '../../Images/carusel-image/2.jpg';
import img3 from '../../Images/carusel-image/5.jpg';
import './Home.css';

const Home = () => {
  // usestate for sevices 
  const [services,setServices] = useState([]);
  // useEffect for services 
  useEffect(()=>{
    fetch('./services.JSON')
    .then(res=>res.json())
    .then(data=>setServices(data))
  },[])
  return (
    // home section 
    <div>
      <div className="home-top ">
        {/* carousel slider  */}
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
            <h1>Swimming is best Survival skill</h1>
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
            <h1>Learn Swim to self Protect in the water</h1>
              <p>Swimming is very imortant skill to survive.<br/>Let's Learn swim togther.</p>
              <button className="carousel-btn">See More</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* home service section  */}
      <div className="services-section">
        <div className="container">
        <h3 className="title text-center my-5">Services</h3>
        <Row xs={1} md={2}  className="g-4 mb-5">
          {
            services.slice(0, 4).map(service=>(<Col>
              <Card className="card">
                <Card.Img variant="top" src={service.img} />
                <Card.Body className="card-body">
                  <h3 className="title card-title">{service.title}</h3>
                  <Card.Text>
                    <h5>Price: ${service.price}</h5>
                  
                  </Card.Text>
                </Card.Body>
                <Link to="./services">
                <button className="card-btn w-100">See Details</button>
                </Link>
              </Card>
            </Col>))
          }
        </Row>
        </div>
      </div>
    </div>
  );
};

export default Home;
