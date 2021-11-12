import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Services.css';

const Service = ({ hotel }) => {
    const { description, img, title, _id, price } = hotel;

    return (
        <div>
            <Col>
                <Card className="hotel_img">
                    <Card.Img className="service_img mx-auto" variant="top" src={img} />
                    <Card.Body className="card_body">
                        <Card.Title className="">{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Link className="readmore_btn" to={`/hotelDetails/${_id}`}>Book</Link>
                        <p className="d-inline float-end fw-bold hotel-price">{"$"+price}</p>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;
