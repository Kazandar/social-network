import React from 'react';
import cls from './Brief.module.scss'
import Avatar from '../Avatar/Avatar';

const Brief = () => (
    <>
        <img src="https://pbs.twimg.com/media/EAeHVoWXYAAkdbZ.jpg" alt="Картинка профиля" className={cls.main_img}/>
        <Avatar styles={{width: '120px', top: '-105px'}}/>
        <div className={cls.user_info_container}>
            <div className={cls.full_name}>James Spiegel</div>
            <div className={cls.address}>San Francisco, CA</div>
        </div>
    </>
);

export default Brief;