import { Link } from 'react-router-dom';
import logo from '../../src/logo.png';

function Navbar() {
    return (
        <>

        <nav class="navbar">
            <div class="container">
           
            <img src={logo} className="logo" alt="Spindler Academy logo"/>
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
                    <a href="#donate">Donate</a>
                </li>
                <li class="nav-item">
                    <a href="#links">Links</a>
                </li>
            </ul>
            </div>
        </nav>

        </>
    )
}

export default Navbar
