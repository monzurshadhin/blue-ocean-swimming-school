import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
     // usestate for sevices 
  const [instructors,setInstructors] = useState([]);
  // useEffect for services 
  useEffect(()=>{
    fetch('./instructor.JSON')
    .then(res=>res.json())
    .then(data=>setInstructors(data))
  },[])
    return (
        
        // about section 
        <div className="about-section">
            <div className="container">
                <div className="row about-row">
                    <div className="col-lg-6 col-sm-12 image-section">
                        
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/QZ94pRB8obU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="col-lg-6 col-sm-12 discription-section">
                       <div className="discription">
                       <h1 className="title">ABOUT BLUE OCEAN SWIM SCHOOL</h1>
                       <p>We are proud to serve individuals looking for hingh-quantity, professional swimming education. Blue Ocean is a premium learn-to-swim and performance-based swim school that teaches all skill levels ranging from the fundamentals of water safety to competitive instruction so that our swimmers love water, are safe and swim for life.</p>
                       </div> 
                    </div>

                    <div className="instructor-section">
                    <h3 className="title text-center my-5">Our Instructor</h3>

                    <Row xs={1} md={3}  className="g-4 mb-5">
          {
            instructors?.map(instructor=>(<Col key={instructor.id}>
              <Card className="card" >
                <Card.Img variant="top" src={instructor.img} />
                <Card.Body className="card-body">
                  <h3 className="title card-title text-center">{instructor.name}</h3>
                  <p className="text-center"><b>Instructor</b></p>
                  <Card.Text className="text-center social-icon">
                  <i className="fab fa-facebook-square px-3"></i>
                  <i className="fab fa-twitter-square px-3"></i>
                  <i className="fab fa-instagram-square px-3"></i>
                  
                  </Card.Text>
                </Card.Body>
               
              </Card>
            </Col>))
          }
        </Row>

                    
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default About;