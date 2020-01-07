import React from 'react';
import cls from './Content.module.scss'

const Content = props => (
    <div className={cls.content}>
        {props.children}
    </div>
);

export default Content;