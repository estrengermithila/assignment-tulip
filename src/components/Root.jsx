import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Root = () => {
    return (
        <div>
            <div className='max-w-[1152px] mx-auto my-5'>
            <Navbar />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;