import React from 'react';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    //getting email
    const getEmail = (event) => {
        setEmail(event.target.value);
    }

    //getting password
    const getPassword = (event) => {
        setPassword(event.target.value);
    }

    //create user
    const login = () => {
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className="container my-5">
            <h3 className='title'><span>L</span>ogin</h3>
            <form className="row g-3 d-flex flex-column" onSubmit={(e) => { e.preventDefault() }}>
                <div className="col-10 col-sm-12 col-md-8 col-lg-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder='Enter your email' onBlur={getEmail} />
                </div>
                <div className="col-10 col-sm-12 col-md-8 col-lg-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder='Enter Your password' onBlur={getPassword} />
                </div>
                <div className="col-10 col-sm-12 col-md-8 col-lg-6 d-flex">
                    <p>New here?</p>
                    <Link to={'/signup'}>Create an account</Link>
                </div>
                <div className="col-10 col-sm-12 col-md-8 col-lg-6">
                    <p>{error && error.message}</p>
                    <button type="submit" onClick={login} className="btn btn-primary">Log in</button>
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

export default Login;