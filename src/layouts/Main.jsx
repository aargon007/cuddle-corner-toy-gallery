import React from 'react';
import NavBar from '../pages/shared/NavBar';
import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import SpinnerGlobal from '../pages/shared/SpinnerGlobal';

const Main = () => {

    const navigation = useNavigation();

    return (
        <div className='space-y-10'>
            <NavBar/>
            <div>
                {
                    navigation.state === 'loading' && <SpinnerGlobal/>
                }
            </div>
            <Outlet/>
            <Footer/>
            <ScrollRestoration/>
        </div>
    );
};

export default Main;