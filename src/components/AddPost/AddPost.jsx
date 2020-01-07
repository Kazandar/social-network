import React from 'react';
import cls from './AddPost.module.scss'
import Avatar from '../Avatar/Avatar';

const AddPost = () => (
    <div className={cls.add_post_container}>
        <div className={cls.new_post}>
            <div className={cls.avatar}>
                <Avatar styles={{width: '50px'}}/>
            </div>
            <textarea className={cls.new_post_form}/>
            <div className={cls.label}>Share what are you thinking here...</div>
        </div>
        <div className={cls.control_form_container}>
            <button className={cls.btn_post}>Post Status</button>
        </div>
    </div>
);

export default AddPost;