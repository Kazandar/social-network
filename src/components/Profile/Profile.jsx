import React from 'react';
import cls from './Profile.module.scss'
import AddPost from '../AddPost/AddPost';
import Brief from '../Brief/Brief';
import Content from '../Content/Content';
import Grid from '../Grid/Grid';

const Profile = () => (
    <Content>
        <div className={cls.profile}>
            <Brief/>
            <Grid>
                <div>[Старые посты]</div>
                <AddPost/>
                <div>[Старые посты]</div>
            </Grid>
        </div>
    </Content>
);

export default Profile;