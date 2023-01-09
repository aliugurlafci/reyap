import React, { useEffect } from 'react';
import {
    createHashRouter,
    RouterProvider,
    createBrowserRouter
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Anasayfa from '../pages/Anasayfa';
import Kurumsal from '../pages/Kurumsal';
import Urunler from '../pages/Urunler';
import Iletisim from '../pages/Iletisim';
import ProductDetails from '../pages/ProductDetails';
import NotFound from '../pages/NotFound';

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
    const dispatch = useDispatch();
    /*
     * configListener tetiklendiğinde yani admin panelinde kaydet butonuna basıldıgında 
     * config dosyasının güncel halini apiden alıyoruz.
     */
    useEffect(() => {
        if (configListener) {
            dispatch({ type: LOAD_CONFIG_JSON });
            dispatch({ type: CONFIG_CHANGE_OCCUR, payload: false });
        }
    }, [configListener, dispatch]);
    return (
        <RouterProvider router={routes} />
    );
}
/**
 * <RouterProvider router={routes} />
 */