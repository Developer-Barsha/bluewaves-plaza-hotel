import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Checkout = () => {
    const [user] = useAuthState(auth);

    return (
        <div className='container p-3'>
        <h3 className='title'>Please <span>C</span>heckout</h3>
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="formGroupExampleInput" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter your name" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" value={user?.email} readOnly className="form-control" id="inputEmail4" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Agreed to terms
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Checkout</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;