import React, { useContext, useState } from 'react';
import { Context } from '../index';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

import { cn } from '@bem-react/classname';
import './styles/Auth.scss';
import urlVisibleEye from '../svg/eye-visible.svg';
import urlNotVisibleEye from '../svg/not-visible-eye.svg';
import { login, registration } from '../http/userAPI';

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async (e) => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE);
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const form = cn('Form')

    const fieldPassword = React.useRef(null);
    const showPassword = (e) => {
        e.preventDefault();
        let input = fieldPassword.current;

        if (input.type === 'password') {
            input.type = 'text';
            e.target.style.backgroundImage = `url(${urlVisibleEye})`
        } else if (input.type === 'text') {
            input.type = 'password';
            e.target.style.backgroundImage = `url(${urlNotVisibleEye})`
        }   
    };

    return (
        <section className='container Auth-container'>
            <div className='card-div'>
                <h2 className='Auth-title'>{
                    isLogin ? 
                    'Авторизация' : 
                    'Регистрация'
                }</h2>
                <form className={`${form()}`}>
                    <input 
                    className={form('Input')} 
                    placeholder='Введите email...' 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <div className='input-type-password-container'>
                        <input 
                        className={form('Input')} 
                        placeholder='Введите пароль...'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password' ref={fieldPassword} 
                        style={{paddingRight: '5rem'}}
                        />
                        <button onClick={showPassword} className='btn-show-password'><span className='visually-hidden'>Показать пароль</span></button>
                    </div>
                    <ul className={form({ul: 'list-buttons'})}>
                        <li>
                            {
                                isLogin ?
                                <p className={form({text: 'left-btn'})}>
                                    Нет аккаунта? 
                                    <NavLink to={REGISTRATION_ROUTE}>
                                        <span> Зарегистрироваться!</span>
                                    </NavLink>
                                </p> :
                                <p className={form({text: 'left-btn'})}>
                                    Есть аккаунт? 
                                    <NavLink to={LOGIN_ROUTE}>
                                        <span> Войти!</span>
                                    </NavLink>
                                </p>
                            }
                        </li>
                        <li>
                            <button className={form({button: 'auth-btn'})} onClick={click} type='button'>
                                {
                                    isLogin ? 
                                    'Войти' : 
                                    'Зарегистрироваться' 
                                }
                            </button>
                        </li>
                    </ul>
                </form>
            </div>
        </section>
    );
});

export default Auth;