import React from 'react';
import './styles/App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Friendbar from './components/Friendbar/Friendbar';
import Profile from './components/Profile/Profile';

const App = () => (
    <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <Profile/>
        <Friendbar/>
    </div>
);


export default App;
