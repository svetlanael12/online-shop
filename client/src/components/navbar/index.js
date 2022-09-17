import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../..';
import { LOGIN_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import {observer} from 'mobx-react-lite';
import { cn } from '@bem-react/classname'
import './style.scss';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const nav = cn('Nav')
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
                        <button className={nav('button')}>Админ панель</button>
                    </li>
                    <li className={nav('item')}>
                        <button className={nav('button')}>Выйти</button>
                    </li>
                </ul> :
                <ul className={nav('List')}>
                    <li className={nav('item')}>
                        <NavLink to={LOGIN_ROUTE}>
                            <button className={nav('button')} onClick={console.log('click')}>Авторизация</button>
                        </NavLink>
                    </li>
                </ul>
            }
            </div>
        </nav>
    );
});

export default NavBar;