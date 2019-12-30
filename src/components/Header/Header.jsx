import React from 'react';
import logo from '../../assets/logo.png'
import cls from './Header.module.scss'

const Header = () => (
    <header className={cls.header}>
        <a href='#'>
        <div className={cls.app_logo_container}>
            <img src={logo} alt="logo"/>
        </div>
        </a>
    </header>
);

export default Header;