import React from 'react';
import './About.css';

const About = () => {
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
                </div>
            </div>
        </div>
    );
};

export default About;