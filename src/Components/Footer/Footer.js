import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        // footer section 
        <div className="footer-section">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                        <h1 className="footer-name"><b>Blue Ocean Swimming School</b></h1>
                        <div className="small-text">
                        <p><i className="fas fa-map-marker-alt"></i> Dolphin Road 36/a, Cox's Bazar</p>
                        <p><i className="fas fa-phone-alt"></i> 01738283828</p>
                        <p><i className="fas fa-envelope"></i> blueocean@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h3>Subscribe Now</h3>
                        <p className="small-text">Subscribe to our page for more Update</p>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button  type="button" className="email-btn" id="button-addon2">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;