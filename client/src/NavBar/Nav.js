import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: 'white'
  };
  return (
    <nav>
      <img src="/rachels-cake-delights-logo-500px.jpeg" alt="" />
      <ul className="nav-links">
        <Link style={navStyle} to="/calculation">
          <li>Calculation</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
