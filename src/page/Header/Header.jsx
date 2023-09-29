import React from 'react';
import bg from '../../assets/bg.jpg'
const Header = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='bg-no-repeat w-full h-20 flex items-center px-5'>
            <h1 className='text-5xl  text-white font-bowlby'>SongTrax</h1>
        </div>
    );
};

export default Header;