import React, { useState } from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ManageProducts.css";

const ProductManage = ({ product, products, setProducts }) => {
    const { description, pic, name, _id, price } = product;

    // manage DELETE
    const handleDelete = (id) => {
        const isSure = window.confirm("Are You sure, You want to delete");
        if (isSure) {
            fetch(`https://bd-motors.herokuapp.com/bikes/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        const remaining = products.filter(
                            (service) => service._id !== id
                        );
                        setProducts(remaining);
                        alert("Deleted Successfully");
                    } else {
                        alert("Failed to Delete!!!");
                    }
                });
        }
    };

    return (
        <div>
            <Col>
                <Card className="product_img">
                    <Card.Img
                        className="service_img mx-auto"
                        variant="top"
                        src={pic}
                    />
                    <Card.Body className="card_body">
                        <Card.Title className="">{name}</Card.Title>
                        <Card.Text>
                            {description}
                            <p className="my-3 fw-bold product-price">
                                <span style={{ color: "black" }}>Price:</span>{" "}
                                {"$" + price}
                            </p>
                        </Card.Text>
                        <div
                            className="mb-3 d-flex justify-content-evenly"
                            style={{ textAlign: "center" }}
                        >
                            <button className="btn btn-warning">Update</button>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="btn btn-danger"
                            >
                                Delete
                            </button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ProductManage;
