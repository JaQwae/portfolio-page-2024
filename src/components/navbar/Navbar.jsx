import React from 'react'
import { Link } from 'react-router-dom';
import { DarkMode } from '../dark-mode/DarkMode';
import "./Navbar.css"


const Navbar = () => {
    return (
        <nav>
            <button 
                id="nav-toggle-btn"
                className="btn" 
                type="button" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#staticBackdrop" 
                aria-controls="staticBackdrop"
                >
                <i className="fa-solid fa-bars"></i>
            </button>

            <div className="offcanvas offcanvas-start nav-container" data-bs-dismiss="offcanvas" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    {/* <h5 className="offcanvas-title" id="staticBackdropLabel">Welcome</h5> */}
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body nav-content">
                    <Link to='/' className='nav-item-container'>
                        <i className="fa-solid fa-house nav-icon"></i><h3 className='nav-words'>Home</h3>
                    </Link>
                    <Link to='/about'className='nav-item-container'>
                        <i className="fa-solid fa-user nav-icon"></i><h3 className='nav-words'>About</h3>
                    </Link>
                    <Link to='/experience' className='nav-item-container'>
                        <i className="fa-solid fa-briefcase nav-icon"></i><h3 className='nav-words'>Experience</h3>
                    </Link>
                    <Link to='/connect' className='nav-item-container'>
                        <i className="fa-solid fa-link nav-icon"></i><h3 className='nav-words'>Connect</h3>
                    </Link>
                    <div>
                        <DarkMode id="light-dark-toggle" className='nav-item-container'/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar