import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import Navbar from './Navbar';

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-3">
        
        {/* Logo Section */}
        <h1 className="flex justify-start">
          <a href="/" className="logo">
            <img src={logo} alt="Logo" width={40} height={40} />
          </a>
        </h1>
        
        {/* Navbar Section */}
        <div className="relative flex justify-center md:justify-self-center">
          <button className="menu-btn md:hidden" onClick={() => setNavOpen(!navOpen)}>
            {
                navOpen ? (
                    <i class="fa-solid fa-xmark"></i>
                   
                ):
                <i className="fa-solid fa-bars"></i>
            }
          </button>
          <Navbar navOpen={navOpen} />
        </div>
        
        {/* Contact Link */}
        <div className="flex justify-end max-md:hidden">
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
        
      </div>    
    </header>
  );
}

export default Header;
