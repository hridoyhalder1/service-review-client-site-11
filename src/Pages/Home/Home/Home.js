import React from 'react';
import About from '../../AboutUs/About';
import Get from '../../Get/Get';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Get></Get>
            <About></About>
        </div>
    );
};

export default Home;