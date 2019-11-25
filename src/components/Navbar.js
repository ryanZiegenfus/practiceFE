import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
        <Link to="/">Feed</Link>
        <Link to="/signup">Form</Link>
    </div>
  );
}

export default Navbar;