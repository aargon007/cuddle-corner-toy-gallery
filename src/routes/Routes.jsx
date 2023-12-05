import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../pages/shared/ErrorPage';
import Home from '../pages/Home/Home';
import Blog from '../pages/shared/Blog';
import Login from '../pages/user/Login';
import Register from '../pages/user/Register';
import AllToys from '../pages/PublicToys/AllToys';
import MyToy from '../pages/Toy/MyToy';
import PrivateRoute from './PrivateRoute';
import AddToy from '../pages/Toy/AddToy';
import ViewToyDetails from '../pages/Toy/ViewToyDetails';

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
                element : <AllToys/>,
                loader : () => fetch('https://api.workhub.tech/cuddle-corner/all-toys')
            },
            {
                path : '/my-toys',
                element : <PrivateRoute><MyToy/></PrivateRoute>,
            },
            {
                path : '/add-toy',
                element : <PrivateRoute><AddToy/></PrivateRoute>
            },
            {
                path : '/toy/:id',
                element : <PrivateRoute><ViewToyDetails/></PrivateRoute>,
                loader : ({params}) => fetch(`https://api.workhub.tech/cuddle-corner/toy/${params.id}`)
            }
        ]
    }
])

export default router;