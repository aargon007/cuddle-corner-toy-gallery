import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../pages/shared/ErrorPage';
import Home from '../pages/Home/Home';
import Blog from '../pages/shared/Blog';

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
            }
        ]
    }
])

export default router;