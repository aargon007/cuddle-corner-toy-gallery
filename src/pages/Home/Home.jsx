import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import Playset from './Playset';
import ToyTrip from './ToyTrip';
import Review from './Review';
import useTitle from '../../Hooks/useTitle';

const Home = () => {
    useTitle("Cuddle Corner - animal toys for kidz")
    return (
        <div className='space-y-10 py-10 px-5 md:px-28'>
            <Banner/>
                <Gallery/>

                 <Playset/>
                 <ToyTrip/>
                 <Review/>
        </div>
    );
};

export default Home;