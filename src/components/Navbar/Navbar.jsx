import React from 'react';
import {ReactComponent as SettingIcon} from '../../assets/Icons/setting_icon.svg'
import {ReactComponent as MusicIcon} from '../../assets/Icons/music_icon.svg'
import {ReactComponent as NewsIcon} from '../../assets/Icons/news_icon.svg'
import {ReactComponent as MessagesIcon} from '../../assets/Icons/messages_icon.svg'
import {ReactComponent as HomeIcon} from '../../assets/Icons/home_icon.svg'
import cls from './Navbar.module.scss'

const Navbar = () => (
    <nav className={cls.nav_bar}>
        <div className={cls.menu_icon_container}>
            <a><HomeIcon className={cls.menu_icon}/></a>
        </div>
        <div className={cls.menu_icon_container}>
            <a><MessagesIcon className={cls.menu_icon}/></a>
        </div>
        <div className={cls.menu_icon_container}>
            <a><NewsIcon className={cls.menu_icon}/></a>
        </div>
        <div className={cls.menu_icon_container}>
            <a><MusicIcon className={cls.menu_icon}/></a>
        </div>
        <div className={cls.menu_icon_container}>
            <a><SettingIcon className={cls.menu_icon}/></a>
        </div>
    </nav>
);

export default Navbar;