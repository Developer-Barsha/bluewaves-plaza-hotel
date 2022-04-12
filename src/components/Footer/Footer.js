import React from 'react';
import footer from '../../images/footer.jpg'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='mt-5 text-center mb-4'>
            <div className='my-4'>
                <img src={footer} alt="" style={{width:'100%',height:'300px'}} />
            </div>
            <p>©Copyright {year} Developer-Barsha</p>
        </footer>
    );
};

export default Footer;