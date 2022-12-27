import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Anasayfa from '../pages/Anasayfa';
import Hakkımızda from '../pages/Hakkımızda';
import Urunler from '../pages/Urunler';
import Iletisim from '../pages/Iletisim';
import NotFound from '../pages/NotFound';

const routes = createBrowserRouter([
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
], [
    {
        basename: 'https://aliugurlafci.github.io/reyap/'
    }
]);

export default function MainRouter() {
    return (
        <RouterProvider router={routes} />
    );
}
/**
 * <RouterProvider router={routes} />
 */