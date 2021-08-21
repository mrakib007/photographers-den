import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ServiceDetail.css';

const ServiceDetail = (props) => {
  const { _id,title,service,imageURL,amount } = props.services;
  const serviceText = service.slice(0,80);
  return (
    <div className="col-md-4 text-center">
      <Card style={{ width: "18rem" }}  className="mt-3 service-info">
        <Card.Img variant="top" src={imageURL} />
        <Card.Body style={{ background: "#dadfe1" }}>
          <Card.Title>{title}</Card.Title>
          <h6>Price: {amount}</h6>
          <Card.Text>
            {serviceText}
          </Card.Text>
          <Button as={Link} to={`book/${_id}`} variant="primary" className="mx-2">Book Service</Button>
          <Button as={Link} to={`showMore/${_id}`} variant="primary">Show More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceDetail;


