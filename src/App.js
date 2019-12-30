import React from 'react';
import './styles/App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Friendbar from './components/Friendbar/Friendbar';

const App = () => (
    <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='content'>
            <Profile/>
        </div>
        <Friendbar/>
    </div>
);


export default App;
