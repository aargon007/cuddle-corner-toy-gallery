import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';

const Home = () => {
    return (
        <div className='space-y-10'>
            <Banner/>
            <Gallery/>
        </div>
    );
};

export default Home;