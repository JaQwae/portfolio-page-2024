import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { disableElements } from '../../utils/disableElements';
import { DarkMode } from '../dark-mode/DarkMode';
import "./Navbar.css"

const Navbar = () => {
    // const [isNavOpen, setIsNavOpen] = useState(false);

    // function disableButtons() {
    //     setIsNavOpen(!isNavOpen);

    //     if(isNavOpen) {
    //         disableBtn(0);
    //     } else {
    //         disableBtn(-1);
    //     }
    // }

    return (
        <nav>
            <button 
                id="nav-toggle-btn"
                className="btn" 
                type="button" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#staticBackdrop" 
                aria-controls="staticBackdrop"
                onClick={() => disableElements(-1)}
                >
                <i className="fa-solid fa-bars"></i>
            </button>
            <div 
                id="nav-container" 
                className="offcanvas offcanvas-start" 
                data-bs-dismiss="offcanvas" 
                data-bs-backdrop="static" 
                tabIndex="-1" 
                id="staticBackdrop" 
                aria-labelledby="staticBackdropLabel"
                onClick={() => disableElements(0)}
            >
                <div className="offcanvas-header">
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