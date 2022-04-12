import React from 'react';
import { useEffect, useState } from 'react';
import Room from '../Room/Room';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        fetch('rooms.json')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, []);
    return (
        <div className='container'>
            <h2 className='text-center mt-5 mb-3 title'>Our Hotel <span>R</span>ooms</h2>
            <div className="row">
                {
                    rooms.map(room => <Room key={room.id} room={room}></Room>)
                }
            </div>
        </div>
    );
};

export default Rooms;