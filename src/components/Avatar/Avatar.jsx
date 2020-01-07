import React from 'react';
import cls from './Avatar.module.scss'

const Avatar = props => (
    <div className={cls.avatar_container}>
        <img
            className={cls.avatar}
            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a7/a78e396b243ab73602a1aa3e1622e4fc7e52cb65_full.jpg"
            alt="Аватарка пользователя"
            style={props.styles}
        />
    </div>
);

export default Avatar;