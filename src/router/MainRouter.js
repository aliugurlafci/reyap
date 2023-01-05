import React from 'react';
import {
    createHashRouter,
    RouterProvider,
    createBrowserRouter
} from "react-router-dom";
import Anasayfa from '../pages/UI/Anasayfa';
import Hakkımızda from '../pages/UI/Hakkımızda';
import Urunler from '../pages/UI/Urunler';
import Iletisim from '../pages/UI/Iletisim';
import NotFound from '../pages/NotFound';

const routes = createHashRouter([
    {
        path: "/",
        element: <Anasayfa />,
        errorElement: <NotFound />,
    },
    {
        path: "/hakkimizda",
        element: <Hakkımızda />,
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