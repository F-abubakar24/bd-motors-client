import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AboutBike from '../AboutBike/AboutBike';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <AboutBike></AboutBike>
            <Footer></Footer>
        </div>
    );
};

export default Home;