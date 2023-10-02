import React from 'react';
import Header from '../page/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../page/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <Header />
                <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;