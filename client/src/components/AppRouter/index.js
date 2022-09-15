import React from 'react';
import { useRoutes } from 'react-router-dom';
import Admin from '../../pages/Admin';
import Auth from '../../pages/Auth';
import Basket from '../../pages/Basket';
import DevicePage from '../../pages/DevicePage';
import Shop from '../../pages/Shop';
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import './style.scss';

const AppRouter = () => {
    const isAuth = false;
    let publicRoutes = useRoutes([
        {
          path: SHOP_ROUTE,
          element: <Shop />,
        },
        {
            path: '*',
            element: <Shop />,
          },
        {
          path: LOGIN_ROUTE,
          element: <Auth />,
        },
        {
            path: REGISTRATION_ROUTE,
            element: <Auth />,
        },
        {
            path: DEVICE_ROUTE + '/:id',
            element: <DevicePage />,
        }
      ]);
    let authRoutes = useRoutes([
        {
            path: ADMIN_ROUTE,
            element: <Admin />,
        },
        {
            path: BASKET_ROUTE,
            element: <Basket />,
        }
    ]);
    return (
        <>
        {publicRoutes} {isAuth && authRoutes}
        </>
    );
};

export default AppRouter;