import React from 'react';
import './Navbar.css'; // CSS file for Navbar styling

function Navbar() {
  return (
    <nav className="Navbar">
      {/* Add your logo or title here */}
      <div className="logo">ORAHACKS</div>
      <ul className="nav-links">
        {/* Add your nav items here */}
        <li><a href="https://linktr.ee/orahacks" target="_blank">Join Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;