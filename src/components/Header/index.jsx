import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
function Header() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return `${isActive ? 'active' : 'menu'}`;
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/cards" className="menu">
              Cards
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
