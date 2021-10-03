import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                        <h1 className="footer-name"><b>Blue Ocean Swimming school</b></h1>
                        <div className="small-text">
                        <p><i class="fas fa-map-marker-alt"></i> Dolphin Road 36/a, Cox's Bazar</p>
                        <p><i class="fas fa-phone-alt"></i> 01738283828</p>
                        <p><i class="fas fa-envelope"></i> blueocean@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h3>Subscribe Now</h3>
                        <p className="small-text">Subscribe to our page for more Update</p>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button class="" type="button" className="email-btn" id="button-addon2">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;