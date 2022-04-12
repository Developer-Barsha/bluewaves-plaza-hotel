import React from 'react';
import './Room.css';
import { ArrowRightIcon } from '@heroicons/react/solid'

const Room = ({ room }) => {
    const { name, img, details } = room;

    return (
            <div className="card room mx-auto col-12 col-sm-12 col-md-6 col-lg-4" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{details}</p>
                </div>
                <div className="card-footer bg-white">
                    <button>Book Now <ArrowRightIcon style={{width:"20px"}}></ArrowRightIcon> </button>
                </div>
            </div>
    );
};

export default Room;