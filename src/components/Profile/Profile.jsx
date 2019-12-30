import React from 'react';
import cls from './Profile.module.scss'

const Profile = () => (
    <div className={cls.profile}>
        <img src="https://pbs.twimg.com/media/EAeHVoWXYAAkdbZ.jpg" alt="Картинка профиля" className={cls.main_img}/>
        <div className={cls.avatar_container}>
            <img
                className={cls.avatar}
                src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a7/a78e396b243ab73602a1aa3e1622e4fc7e52cb65_full.jpg"
                alt="Аватарка пользователя"/>
        </div>
        <div className={cls.user_info_container}>
            <div className={cls.full_name}>James Spiegel</div>
            <div className={cls.address}>San Francisco, CA</div>
        </div>
        <div>
            <div>Мои посты</div>
            <div>Новый пост</div>
            <div>[Старые посты]</div>
        </div>
    </div>
);

export default Profile;