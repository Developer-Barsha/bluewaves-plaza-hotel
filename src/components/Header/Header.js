import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand ms-3" href="/">Bluewaves Plaza</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">About</a>
                        </li>
                        <button>Login</button>
                        <button>Signup</button>
                    </ul>
                </div>
            </div>
        </nav>
        // <div className='header'>

        //         <h1 className="my-1"> 
        //         <span>Bluewaves</span> Plaza</h1>

        //         <nav>
        //             <div onClick={() => setOpen(!open)} className='menu-icon'>
        //                 {open ? <XIcon style={{width:'30px', height:'30px'}}></XIcon> : <MenuAlt1Icon style={{width:'30px', height:'30px'}}></MenuAlt1Icon>}
        //             </div>

        //             <div className={`links ${open ? 'top-24 g-5' : 'top-[-200px]'}`} >
        //                 {/* {
        //                     routes.map(route => <Link to={route.to} key={route.id}>{route.name}</Link>)
        //                 } */}
        //                 <Link to={'/'}>Home</Link>
        //                 <button>Login</button>
        //                 <button>Signup</button>
        //                 <button>Signup</button>
        //             </div>
        //         </nav>


        //     </div>
    );
};

export default Header;