import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../..';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import {observer} from 'mobx-react-lite';
import { cn } from '@bem-react/classname';
import './style.scss';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const nav = cn('Nav')

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }

    return (
        <nav className={nav()}> 
        <div className={`container ${nav('container')}`}>
            <NavLink to={SHOP_ROUTE}>
                <span className={nav('Logo')}>TechShop</span>
            </NavLink>
            {
               user.isAuth ? 
               <ul className={nav('List')}>
                    <li className={nav('item')}>
                        <NavLink to={ADMIN_ROUTE}>
                            <button className={nav('button')}>Админ панель</button>
                        </NavLink>
                    </li>
                    <li className={nav('item')}>
                        <NavLink to={LOGIN_ROUTE}>
                            <button className={nav('button')} type='button' onClick={logOut}>Выйти</button>
                        </NavLink>
                    </li>
                </ul> :
                <ul className={nav('List')}>
                    <li className={nav('item')}>
                        <NavLink to={LOGIN_ROUTE}>
                            <button className={nav('button')} type='button'>Авторизация</button>
                        </NavLink>
                    </li>
                </ul>
            }
            </div>
        </nav>
    );
});

export default NavBar;