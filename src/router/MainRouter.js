import React from 'react';
import {
    createHashRouter,
    RouterProvider,
    createBrowserRouter
} from "react-router-dom";
import Anasayfa from '../pages/Anasayfa';
import Kurumsal from '../pages/Kurumsal';
import Urunler from '../pages/Urunler';
import Iletisim from '../pages/Iletisim';
import NotFound from '../pages/NotFound';


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
]);

export default function MainRouter() {

    return (
        <RouterProvider router={routes} />
    );
}
/**
 * <RouterProvider router={routes} />
 */