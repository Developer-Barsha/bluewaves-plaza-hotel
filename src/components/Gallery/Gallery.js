import React from 'react';
import service2 from '../../images/service/service2.jpg'
import service3 from '../../images/service/service3.jpg'
import service4 from '../../images/service/service4.jpg'

const Gallery = () => {
    return (
        <div className='container'>
            <div className="row d-flex">
                {/* <img src={service1} className='img-fluid' alt="" /> */}
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <img src={service2} className='img-fluid' style={{height:'610px'}} alt="" />
                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-6 d-flex flex-column gap-5'>
                    <img src={service3} className='img-fluid' alt="" />
                    <img src={service4} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;