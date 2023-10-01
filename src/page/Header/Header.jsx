import React from 'react';
import bg from '../../assets/bg.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='bg-no-repeat w-full h-20 flex items-center px-5'>
            <Link to='/' className='text-5xl  text-white font-bowlby'>SongTrax</Link>
        </div>
    );
};

export default Header;