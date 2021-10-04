import React from "react";
import { Card, Col } from "react-bootstrap";

const Service = (props) => {
    // console.log(props.service)
    // destructuring
    const {title,img,details,price}=props.service;
  return (
    <div>

      <Col>
      {/* services card  */}
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body className="card-body">
            <h3 className="title card-title">{title}</h3>
            <Card.Text>
              <h5>Price: ${price}</h5>
              <p>{details.slice(0, 70)}</p>
            </Card.Text>
          </Card.Body>
          <button className="card-btn">Purchase Now</button>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
