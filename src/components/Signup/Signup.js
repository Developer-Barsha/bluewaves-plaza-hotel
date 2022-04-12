import React from 'react';
import { useState } from 'react';
import './Signup.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    //getting email
    const getEmail = (event) => {
        setEmail(event.target.value);
    }

    //getting password
    const getPassword = (event) => {
        setPassword(event.target.value);
    }

    //create user
    const signUp = () => {
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className="container my-5">
            <h3 className='title'><span>S</span>ignup</h3>
            <form className="row g-3 d-flex flex-column" onSubmit={(e) => { e.preventDefault() }}>
                <div className="col-10 col-sm-12 col-md-8 col-lg-6">
                    <label htmlFor="formGroupExampleInput" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter your name" />
                </div>
                <div className="col-10 col-sm-12 col-md-8 col-lg-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder='Enter your email' onBlur={getEmail} />
                </div>
                <div className="col-10 col-sm-12 col-md-8 col-lg-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder='Enter Your password' onBlur={getPassword} />
                </div>
                <div className="col-10 col-sm-12 col-md-8 col-lg-6 d-flex">
                    <p>Already have one?</p>
                    <Link to={'/login'}>Login here</Link>
                </div>
                <div className="col-10 col-sm-12 col-md-8 col-lg-6">
                    <p>{error && error.message}</p>
                    <button type="submit" onClick={signUp} className="btn btn-primary">Sign Up</button>
                </div>
                {
                    loading &&
                    <div className="spinner-grow text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
            </form>
        </div>
    );
};

export default Signup;