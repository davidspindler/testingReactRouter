import { Link } from 'react-router-dom';
import logo from '../../src/logo.png';
import React, {useState, useEffect} from 'react';

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    let alreadyOpen = false;

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
        

    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);

        }

        window.addEventListener('resize',changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])


    return (
        <>

        <nav id="myTopnav" class="navbar">
            <div class="container">
           
            <img src={logo} className="logo" alt="Spindler Academy logo"/>

            {(screenWidth > 768 ) && (
                <ul class="nav-links">
                    <li class="nav-item">
                        <a href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/resources">Resources</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/donate">Donate</Link>
                    </li>
                    
                </ul>
            )}
            

            <span onClick={toggleNav} class="navTrigger" >
                    <i></i>
                    <i></i>
                    <i></i>
            </span>
            </div>
        </nav>

        {(toggleMenu && screenWidth < 768) && (
                <ul class="nav-links">
                    <li class="nav-item">
                        <a href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/resources">Resources</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/donate">Donate</Link>
                    </li>
                    
                </ul>
            )}

        </>
    )
}

export default Navbar
