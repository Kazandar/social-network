import React from 'react';
import cls from './Friendbar.module.scss'

const Friendbar = () => (
    <nav className={cls.friend_bar}>
        <div className={cls.friend_item_container}>
            <a className={cls.friend_item}>&bull;</a>
        </div>
        <div className={cls.friend_item_container}>
            <a className={cls.friend_item}>&bull;</a>
        </div>
        <div className={cls.friend_item_container}>
            <a className={cls.friend_item}>&bull;</a>
        </div>
        <div className={cls.friend_item_container}>
            <a className={cls.friend_item}>&bull;</a>
        </div>
        <div className={cls.friend_item_container}>
            <a className={cls.friend_item}>&bull;</a>
        </div>
        <div className={cls.friend_item_container}>
            <a className={cls.friend_item}>&bull;</a>
        </div>
        <div className={cls.friend_item_container}>
            <a className={cls.friend_item}>&bull;</a>
        </div>
        <div className={cls.friend_item_container}>
            <a className={cls.friend_item}>&bull;</a>
        </div>
        <div className={cls.friend_item_container}>
            <a className={cls.friend_item}>&bull;</a>
        </div>
    </nav>
);

export default Friendbar;