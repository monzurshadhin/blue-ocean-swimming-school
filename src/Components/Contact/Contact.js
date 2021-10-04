import React from 'react';
import img from '../../Images/carusel-image/2.jpg';
import './Contact.css';

const Contact = () => {
    return (
        // contact section 
        <div>
            <div className="container contact-section">
                <div className="row contact-row">
                <div className="col-lg-6 col-12">
                <img className="img-fluid about-img" src={img} alt="" />
                </div>
                    <div className="col-lg-6 col-12">
                        <h3 className="title  mb-3">CONTACT FORM</h3>
                        <div className="contact-form">
                            <div className="row ">
                                <div className="col-6"><input type="text" placeholder="Full Name" />
                            </div>
                            <div className="col-6"><input type="text" placeholder="Subject" />
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-6"><input type="text" placeholder="Email Address" />
                            </div>
                            <div className="col-6"><input type="text" placeholder="Phone Number" />
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <textarea name="" id=""
                                    width="100%" 
                                    cols="30" rows="3"
                                    placeholder="Your Message"></textarea>
                                </div>
                            </div>
                            <button className="submit-btn">Submit</button>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Contact;