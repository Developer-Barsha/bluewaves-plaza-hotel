import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
    const navigate=useNavigate();
    const [user] = useAuthState(auth);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand ms-3" to="/">Bluewaves Plaza</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/gallery">Gallery</Link>
                        </li>
                        {
                            user ? 
                            <button onClick={()=>signOut(auth)}>Log Out</button> 
                            :
                            <button onClick={()=>navigate('/login')}>Login</button>
                        }
                        <button onClick={()=>navigate('/signup')}>Signup</button>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;