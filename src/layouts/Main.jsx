import React, { useEffect } from 'react';
import NavBar from '../pages/shared/NavBar';
import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import SpinnerGlobal from '../pages/shared/SpinnerGlobal';
import useTitle from '../Hooks/useTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {

    useEffect( () => {
		AOS.init({
            // animatedClassName: 'aos-animate',
            once: true,
            offset: 200,
            delay: 50,
            duration: 1000,
            easing: 'ease',
        });
    // AOS.refresh();
	}, [])

    const navigation = useNavigation();
    useTitle("Cuddle Corner - animal toys for kidz");

    return (
        <div className=''>
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