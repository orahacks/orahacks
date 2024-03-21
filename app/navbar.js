import React from 'react';
import './Navbar.css'; // CSS file for Navbar styling
import logo from "../public/logo.svg"
import Image from 'next/image';

function Navbar() {
  return (
    <nav className="Navbar">
      {/* Add your logo or title here */}
      <div className="logo">
      <Image
                                    src={logo}
                                    alt=""
                                />
      </div>
      <ul className="nav-links">
        {/* Add your nav items here */}
        <li><a href="https://www.linkedin.com/company/orahacks/" target="_blank">Join Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;