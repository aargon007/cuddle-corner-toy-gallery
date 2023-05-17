import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../pages/shared/ErrorPage';
import Home from '../pages/Home/Home';
import Blog from '../pages/shared/Blog';
import Login from '../pages/user/Login';
import Register from '../pages/user/Register';
import AllToys from '../pages/PublicToys/AllToys';

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main/>,
        errorElement : <ErrorPage/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : '/blog',
                element : <Blog/>
            },
            {
                path : '/login',
                element : <Login/>
            },
            {
                path: '/register',
                element : <Register/>
            },
            {
                path : '/all-toys',
                element : <AllToys/>
            }
        ]
    }
])

export default router;