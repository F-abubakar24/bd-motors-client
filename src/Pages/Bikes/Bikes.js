import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useHistory } from "react-router";
import Bike from "./Bike";
import "./Services.css";

const Bikes = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch("https://bd-motors.herokuapp.com/bikes")
            .then((res) => res.json())
            .then((data) => setBikes(data));
    }, []);

    const history = useHistory();
    const path = history.location.pathname;

    let homeData;
    if (path === "/home" || path === "/") {
        homeData = bikes.slice(0, 6);
    } else {
        homeData = bikes;
    }

    return (
        <div id="services" className="container mb-5">
            <h2 className="underline-style text-center mt-5 bottom_underline">
                Our Bikes
            </h2>
            <Row xs={1} md={2} lg={3} className="g-4 mt-3">
                {homeData.map((product) => (
                    <Bike key={product._id} product={product}></Bike>
                ))}
            </Row>
        </div>
    );
};

export default Bikes;
