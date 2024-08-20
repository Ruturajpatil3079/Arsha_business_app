import React from 'react';
import logo from '../assets/images/logo.png';


function Header(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container"> 
                    <a className="navbar-brand navbar-logo" href="#"> 
                        <img src={logo} alt="logo" className="logo-1"/> 
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 
                        <span className="fas fa-bars"></span> 
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"> 
                                <a className="nav-link" href="#home" data-scroll-nav="0">Home</a> 
                            </li>
                            <li className="nav-item"> 
                                <a className="nav-link" href="#about" data-scroll-nav="1">About</a> 
                            </li>
                            <li className="nav-item"> 
                                <a className="nav-link" href="#features" data-scroll-nav="2">Features</a> 
                            </li>
                            <li className="nav-item"> 
                                <a className="nav-link" href="#team" data-scroll-nav="3">Team</a> 
                            </li>
                            <li className="nav-item"> 
                                <a className="nav-link" href="#testimonials" data-scroll-nav="4">Testimonials</a> 
                            </li>
                            <li className="nav-item"> 
                                <a className="nav-link" href="#faq" data-scroll-nav="5">FAQ</a> 
                            </li>
                            <li className="nav-item"> 
                                <a className="nav-link" onClick={props.footer} href="#contact" data-scroll-nav="6">Contact</a> 
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
