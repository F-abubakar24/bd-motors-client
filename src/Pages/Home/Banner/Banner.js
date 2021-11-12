import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import banar1 from "../../../images/banner/banner-1.jpg";
import banar2 from "../../../images/banner/banner-2.jpg";
import banar3 from "../../../images/banner/banner-3.jpg";
import banar4 from "../../../images/banner/banner-4.jpg";
import banar5 from "../../../images/banner/banner-5.jpg";


const Banner = () => {
    return (
        <div className="banner-main-wrap">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banar1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="banar_text text-start">
                            <h4>Find the Best Motorbike</h4>
                            <p>Browse our range of Gore-Tex motorcycle clothing including Rukka, and more</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banar2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="banar_text text-start">
                            <h4>Find the Best Motorbike</h4>
                            <p>Browse our range of Gore-Tex motorcycle clothing including Rukka, and more</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banar3}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="banar_text text-start">
                            <h4>Find the Best Motorbike</h4>
                            <p>Browse our range of Gore-Tex motorcycle clothing including Rukka, and more</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banar4}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="banar_text text-start">
                            <h4>Find the Best Motorbike</h4>
                            <p>Browse our range of Gore-Tex motorcycle clothing including Rukka, and more</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banar5}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="banar_text text-start">
                            <h4>Find the Best Motorbike</h4>
                            <p>Browse our range of Gore-Tex motorcycle clothing including Rukka, and more</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;