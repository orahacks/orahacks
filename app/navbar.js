import React from 'react';
import './Navbar.css'; // CSS file for Navbar styling

function Navbar() {
  return (
    <nav className="Navbar">
      {/* Add your logo or title here */}
      <div className="logo">ORAHACKS</div>
      <ul className="nav-links">
        {/* Add your nav items here */}
        <li>Developer Resources</li>
        <li>FAQs</li>
        <li>Ideas</li>
      </ul>
    </nav>
  );
}

export default Navbar;