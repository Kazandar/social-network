import React from 'react';
import cls from './Grid.module.scss'

const Grid = (props) => (
    <div className={cls.grid}>
        {props.children}
    </div>
);

export default Grid;