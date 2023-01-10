import React, { useEffect } from 'react';
import {
    createHashRouter,
    RouterProvider,
    createBrowserRouter
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { loadConfig } from '../redux/actions/ConfigAction';
import Anasayfa from '../pages/Anasayfa';
import Kurumsal from '../pages/Kurumsal';
import Urunler from '../pages/Urunler';
import Iletisim from '../pages/Iletisim';
import ProductDetails from '../pages/ProductDetails';
import NotFound from '../pages/NotFound';
import preloader from '../assets/preloader.webp';

import {
    CONFIG_CHANGE_OCCUR,
    LOAD_CONFIG_JSON
} from '../redux/actions/ConfigAction';


const routes = createHashRouter([
    {
        path: "/",
        element: <Anasayfa />,
        errorElement: <NotFound />,
    },
    {
        path: "/kurumsal",
        element: <Kurumsal />,
        errorElement: <NotFound />,
    },
    {
        path: "/urunler",
        element: <Urunler />,
        errorElement: <NotFound />,
    },
    {
        path: "/iletisim",
        element: <Iletisim />,
        errorElement: <NotFound />,
    },
    {
        path: "/detaylar",
        element: <ProductDetails />,
        errorElement: <NotFound />,
    }
]);

export default function MainRouter() {
    const configListener = useSelector(state => state.configListener.changed);
    const configLoadingListener = useSelector(state => state.config.loading);

    const dispatch = useDispatch();

    useEffect(() => {
        if (configListener) {
            dispatch(loadConfig())
            dispatch({ type: CONFIG_CHANGE_OCCUR, payload: false });
        }
    }, [configListener, dispatch]);
    useEffect(() => {
        dispatch(loadConfig())
    }, [dispatch]);

    return configLoadingListener ?
        <div className='preloader'>
            <img src={preloader} alt="preloader" />
        </div>
        : <RouterProvider router={routes} />
}
/**
 * <RouterProvider router={routes} />
 */