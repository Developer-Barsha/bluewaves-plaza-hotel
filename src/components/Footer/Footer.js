import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='mt-5'>
            ©Copyright {year} Developer-Barsha
        </div>
    );
};

export default Footer;