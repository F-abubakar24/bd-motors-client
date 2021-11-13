import React from 'react';
import Bikes from '../../Bikes/Bikes';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AboutBike from '../AboutBike/AboutBike';
import Banner from '../Banner/Banner';
import Reviews from '../Review/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <AboutBike></AboutBike>
            <Bikes></Bikes>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;