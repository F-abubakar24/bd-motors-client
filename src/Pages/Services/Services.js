import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from './Service';
import './Services.css';

const Services = () => {
    const [hotels, setHotels] = useState([])
    useEffect(() => {
        fetch('https://stormy-shore-74082.herokuapp.com/hotels')
            .then(res => res.json())
            .then(data => setHotels(data))
    }, [])

    return (
        <div id="services" className="container mb-5">
            <h2 className="text-center mt-5 bottom_underline">Recommended Hotels</h2>
            <Row xs={1} md={2} lg={3} className="g-4 mt-3">
                {
                    hotels.map(hotel => <Service key={hotel._id} hotel={hotel}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;