import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Bikes from './Bikes';

const BikesMain = () => {
    return (
        <div>
            <Header></Header>
            <Bikes></Bikes>
            <Footer></Footer>
        </div>
    );
};

export default BikesMain;