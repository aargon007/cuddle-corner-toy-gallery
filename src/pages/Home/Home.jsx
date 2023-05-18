import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import Playset from './Playset';

const Home = () => {
    return (
        <div className='space-y-10'>
            <Banner/>
            <div className='px-5 md:px-28 space-y-10'>
                <Gallery/>

                 <Playset/>
            </div>
        </div>
    );
};

export default Home;