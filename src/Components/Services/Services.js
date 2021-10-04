import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";
import './Services.css';

const Services = () => {
    // usestate and useeffect for services 
    const [services,setServices] = useState([]);
    useEffect(()=>{
      fetch('./services.JSON')
      .then(res=>res.json())
      .then(data=>setServices(data))
    },[])
  return (
    <div>
      <div className="service-section">
        <div className="container">
          <h2 className="title text-center my-5">Services</h2>
          <Row xs={1} md={2} lg={3} className="g-4 mb-5">
            {services.map((service) => (
              <Service service={service} key={service.id}></Service>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Services;
