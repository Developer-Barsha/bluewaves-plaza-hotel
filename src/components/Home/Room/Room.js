import React from 'react';
import './Room.css';
import { ArrowRightIcon } from '@heroicons/react/solid'

const Room = ({ room }) => {
    const { name, img, details } = room;

    return (
            <div class="card room mx-auto col-12 col-sm-12 col-md-6 col-lg-4" style={{ width: "18rem" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{details}</p>
                </div>
                <div class="card-footer bg-white">
                    <button>Book Now <ArrowRightIcon style={{width:"20px"}}></ArrowRightIcon> </button>
                </div>
            </div>
    );
};

export default Room;