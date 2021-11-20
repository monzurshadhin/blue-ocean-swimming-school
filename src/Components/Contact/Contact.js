import React from "react";
import img from "../../Images/carusel-image/2.jpg";
import "./Contact.css";

const Contact = () => {
  return (
    // contact section
    <div>
      <div className="container contact-section">
        <div className="row contact-row">
          <div className="col-lg-6 col-12 conatct-image">
            <img className="img-fluid about-img" src={img} alt="" />
          </div>
          <div className="col-lg-6 col-12 contact-form">
            <h3 className="title  mb-3">CONTACT FORM</h3>
            <div className="contact-form">
              <div className="row ">
                <div className="col-6">
                  <input type="text" placeholder="Full Name" />
                </div>
                <div className="col-6">
                  <input type="text" placeholder="Subject" />
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <input type="text" placeholder="Email Address" />
                </div>
                <div className="col-6">
                  <input type="text" placeholder="Phone Number" />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <textarea
                    name=""
                    id=""
                    
                    cols="30"
                    rows="3"
                    placeholder="Your Message"
                  ></textarea>
                </div>
              </div>
              <button className="submit-btn">Submit</button>
            </div>
          </div>

        </div>

        
        <h3 className="text-center contact-info-title">
            Our Institute is Available From 9:00 AM to 10:00 PM (Sunday -
            Thursday) and Contact is Available 24/7
          </h3>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                <i className="fas fa-clock contact-icon"></i>
                  <p className="card-text text-center">Sun - Thu : 9:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                <i className="fas fa-map-marker-alt contact-icon"></i>
                  <p className="card-text text-center">
                  Dolphin Road 36/a, Cox's Bazar
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                <i className="fas fa-phone-alt contact-icon"></i>
                  <p className="card-text text-center">
                 +8801728937873
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Contact;
