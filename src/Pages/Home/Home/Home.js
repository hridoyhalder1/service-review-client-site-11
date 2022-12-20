import React from 'react';
import About from '../../AboutUs/About';
import Get from '../../Get/Get';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className=' mx-auto'>
            <Banner></Banner>
            <Get></Get>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;