import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer mt-5 pb-4 pt-4">
                <div className="container footer_container">
                    <div className="row">
                        <div className="footer-aboutUs col-12 col-sm-12 col-md-6 col-lg-4">
                            <p className="title">About Us</p>
                            <p>Ugiat nulla pariatur. Edeserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natu</p>
                            <div className="address">
                                <p><i className="fas fa-home"></i> Mugdha, Dhaka, Bangladesh</p>
                                <p><i className="fas fa-envelope"></i> elearn@gmail.com</p>
                                <p><i className="fas fa-phone-alt"></i> +98 558 547 589</p>
                            </div>
                        </div>


                        <div className="footer-nav col-12 col-sm-12 col-md-6 col-lg-4">
                            <p className="title">Usefull Link</p>
                            <div className="link">
                                <p>- Home</p>
                                <p>- Course</p>
                                <p>- Teachers</p>
                                <p>- Reviews</p>
                                <p>- Contruct</p>
                            </div>
                        </div>


                        <div className="footer-socila col-12 col-sm-12 col-md-6 col-lg-4">
                            <p className="title">Join With Us</p>
                            <div className="footer_subscribe">
                                <p>Ugiat nulla pariatur. Edeserunt mollit anim id est laborum. </p>
                                <input type="text" placeholder="Your E-mail"/>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>© Website - 2022 | All Right Reserved. Designed By Website</p>
            </div>
        </>
    );
};

export default Footer;